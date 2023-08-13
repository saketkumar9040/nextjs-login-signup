"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async () => {
    alert("login ...")
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
      >login here
      </button>
      <text className="text-white">new user ?</text>
      <Link href="/login" className="text-white border border-color-white rounded-2xl px-10 mt-5">Login</Link>
    </div>
  );
}
