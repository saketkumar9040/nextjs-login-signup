import connectDB from "@/dbconfig/dbConfig";
import User from "@/modals/userModal"
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

connectDB();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {name,email,phone,password}= reqBody;
        console.log(reqBody);
        //  IF USER ALREADY EXISTS =========================================>

       const userExists = await User.findOne({email});
       if(userExists){
        return NextResponse.json({message:"user already exists"},{status:400})
       }

       // HASH PASSWORD ========================================================>

       const salt = await bcryptjs.genSalt(10)
       let hashPassword = await bcryptjs.hash(password,salt);

       // SAVING USER TO DATABASE ==============================================>

      const newUser =  await new User({
        name,
        email,
        phone,
        hashPassword
       }).save()

       const savedUser = await newUser.save();
       console.log(savedUser);

       return NextResponse.json({
            message:"user created successfully",
            success:true,
            savedUser
    },
    {status:201}
    )

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}