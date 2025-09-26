import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const webhookSecret = process.env.WEBHOOK_SECRET;

  if (!webhookSecret) {
    throw new Error("Missing webhook secret");
  }

  const headerPayload = await headers();

  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers");
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(webhookSecret);
  let event: WebhookEvent;

  try {
    event = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (error: any) {
    console.error("Error", error.message);
    return new Response("Error", { status: 400 });
  }

  const { id } = event.data;
  const eventType = event.type;

  // logs

  if (eventType === "user.created") {
    try {
      const { email_addresses, primary_email_address_id } = event.data;
      const primaryEmail = email_addresses.find(
        (email) => email.id === primary_email_address_id
      );

      if (!primaryEmail) {
        return new Response("Missing primary email address", { status: 400 });
      }

      // create a user in neon

      const newUser = await prisma.user.create({
        data: {
          id: event.data.id,
          email: primaryEmail.email_address,
          isSubscribed: false,
        },
      });

      console.log("New user created:", newUser);
    } catch (error: any) {
      console.error("Error", error.message);
      return new Response("Error creating user", { status: 400 });
    }
  }

  return new Response("Webhook received successfully", { status: 200 });
}
