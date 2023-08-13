"use client";

import Link from "next/link";
import React,{useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";



export default function LoginPage(){

   return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-center text-black text-2xl">Login</h1>
    </div>
   )
}