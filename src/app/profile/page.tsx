"use client";

import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
   const router = useRouter();

  const logoutHandler = async() => {
    let request =await axios.get("api/users/logout");
    router.push("/login");
    toast.success("logout successfully😊");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <h1 className="text-center text-white text-4xl mb-10">User Profile</h1>
      <button
        className="text-white text-2xl px-10 border-2 border-white rounded-xl"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}
