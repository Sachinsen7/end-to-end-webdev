import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // capture payment

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const susbscriptionEnds = new Date();
    susbscriptionEnds.setMonth(susbscriptionEnds.getMonth() + 1);

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        isSubscribed: true,
        susbscriptionEnds: susbscriptionEnds,
      },
    });

    return NextResponse.json({
      message: "Subscription successfully",
      susbscriptionEnds: updatedUser.susbscriptionEnds,
    });
  } catch (error) {
    console.error("Error updating users:", error);
    return NextResponse.json(
      {
        error: "Error updating users",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        isSubscribed: true,
        susbscriptionEnds: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const now = new Date();

    if (user.susbscriptionEnds && user.susbscriptionEnds < now) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          isSubscribed: false,
          susbscriptionEnds: null,
        },
      });

      return NextResponse.json({
        isSubscribed: false,
        susbscriptionEnds: null,
      });
    }

    return NextResponse.json({
      isSubscribed: user.isSubscribed,
      susbscriptionEnds: user.susbscriptionEnds,
    });
  } catch (error) {
    console.error("Error updating users:", error);
    return NextResponse.json(
      {
        error: "Error updating users",
      },
      { status: 500 }
    );
  }
}
