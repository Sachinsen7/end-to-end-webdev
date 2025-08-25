import { connectDB } from "@/dbConfig/db";
import { NextResponse, NextRequest } from "next/server";
import UserModel from "@/model/user.model";
import bcrypt from "bcryptjs";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token, newPassword } = reqBody;

    console.log(reqBody);

    const user = await UserModel.findOne({
      forgotPasswordToken: token,
      forgotPasswordExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    // hash Password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // update password

    user.password = hashedPassword;
    user.forgotPasswordExpiry = undefined;
    user.forgotPasswordToken = undefined;

    return NextResponse.json({
      message: "Password reset successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
