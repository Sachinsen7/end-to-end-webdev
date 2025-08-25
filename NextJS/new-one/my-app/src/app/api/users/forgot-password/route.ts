import { connectDB } from "@/dbConfig/db";
import { NextResponse, NextRequest } from "next/server";
import UserModel from "@/model/user.model";
import { sendEmail } from "@/helpers/mailer";

connectDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { email } = reqBody;
    const user = await UserModel.findOne(email);

    if (!user) {
      return NextResponse.json({ error: "invalid user" }, { status: 400 });
    }

    await sendEmail({ email, emailType: "RESET", userId: user._id });

    return NextResponse.json(
      { message: "email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
