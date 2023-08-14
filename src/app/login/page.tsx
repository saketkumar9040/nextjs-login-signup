"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast/headless";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async () => {
     try {
      if (!user.email || !user.password) {
        return alert("please enter all the details");
      }
      const request = axios.post("/api/users/login", user);
      console.log(request);
      router.push("/profile");
      toast.success("login successfully")
     } catch (error:any) {
       console.log(error.message);
       toast.error(error.message)
     }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <h1 className="text-center text-2xl text-white my-10">Login</h1>

      <label htmlFor="email" className="text-white">
        Email
      </label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="Enter your Email"
      />
      <label htmlFor="password" className="text-white">
        Password
      </label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        value={user.password}
        onChange={(e) => {
          setUser({ ...user, password: e.target.value });
        }}
        placeholder="Enter your Password"
      />
      <button
        onClick={loginHandler}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white px-10"
      >
        login here
      </button>
      <text className="text-white">new user ?</text>
      <Link
        href="/signup"
        className="text-white border border-color-white rounded-2xl px-10 mt-5"
      >
        sign up
      </Link>
    </div>
  );
}
