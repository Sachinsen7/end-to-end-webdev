import { getDataFromToken } from "@/helpers/get-data-from-token";
import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/model/user.model";
import { connectDB } from "@/dbConfig/db";

connectDB();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await UserModel.findOne({ _id: userId }).select("-password");
    return NextResponse.json(
      {
        message: "User found",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
