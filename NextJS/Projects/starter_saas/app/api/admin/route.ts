import { NextRequest, NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function isAdmin(userId: string) {
  const client = clerkClient();
  const user = (await client).users.getUser(userId);
  return (await user).publicMetadata.role === "admin";
}
