import { getDataFromToken } from "@/helpers/getdatafromtoken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/modals/userModal";
import connectDB from "@/dbconfig/dbConfig";

connectDB();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const userData = await User.findById(userId);
    return NextResponse.json({
        message:"user found",
        data:userData
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 }
    );
    console.log(error.message);
  }
}
