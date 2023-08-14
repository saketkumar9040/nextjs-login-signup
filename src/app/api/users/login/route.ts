import connectDB from "@/dbconfig/dbConfig";
import User from "@/modals/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    // console.log(reqBody);

    // IF USER DOESN'T EXISTS =================================================>

    const userExists = await User.findOne({ email });
    if (!userExists) {
      return NextResponse.json(
        {
          message: "Invalid credentials",
        },
        { status: 400 }
      );
    }
    console.log(userExists);
    let comparePassword = await bcryptjs.compare(password, userExists.password);
    console.log(comparePassword);
    if (!comparePassword) {
      return NextResponse.json(
        { message: "please enter the correct password" },
        { status: 400 }
      );
    }

    // CREATE TOKEN FOR USER =============================================>

    const tokenData = {
      id: userExists._id,
      email: userExists.email,
      isAdmin: userExists.isAdmin,
    };

    // CREATE TOKEN USING JWT ======================================================>

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      {
        message: "login successfully",
        success: true,
      },
      { status: 200 }
    );

    // SENDING TOKEN IN USER COOKIES  ===============================================>

    response.cookies.set("token", token, { httpOnly: true });
    return response;

  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
