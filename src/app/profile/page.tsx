"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
   const router = useRouter();
   const[user,setUser]=useState("");
  //  console.log(user)

  const logoutHandler = async() => {
    let request =await axios.get("api/users/logout");
    router.push("/login");
    toast.success("logout successfully😊");
  };

  useEffect(()=>{
     const res = async() =>{
        let getUser:any =await axios("/api/users/me");
        setUser(getUser.data.data._id);
     } ;
     res();
  },[])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <h1 className="text-center text-white text-4xl mb-10">User Profile</h1>
      <h2 className="text-center text-white text-2xl mb-10 bg-orange-400 px-10 rounded-2xl">{user ? <Link href={`profile/${user}`}>{user}</Link>: ""}</h2>
      <button
        className="text-white text-2xl px-10 border-2 border-white rounded-xl"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}
