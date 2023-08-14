"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const[buttonDisabled,setButtonDisabled] = useState(true);
  // const[loading,setLoading] = useState(false);

  const signUpHandler = async () => {
    try {
      if(!user.name || !user.email || !user.phone || !user.password){
        return alert("please enter all the details");
      }
      const response = await axios.post("/api/users/signup",user);
      console.log(response.data)
      router.push("/login")
    } catch (error:any) {
       console.log(error);
       toast.error(error.message)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <h1 className="text-center text-white text-4xl mb-10">Sign up</h1>
      <hr />
      <label htmlFor="name" className="text-white">Name</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
        placeholder="Enter your Name"
      />
      <label htmlFor="email" className="text-white">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
        placeholder="Enter your Email"
      />
      <label htmlFor="phone" className="text-white">Phone</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="number"
        value={user.phone}
        onChange={(e) => {
          setUser({ ...user, phone: e.target.value });
        }}
        placeholder="Enter your Phone Number"
      />
      <label htmlFor="password" className="text-white">Password</label>
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
          onClick={signUpHandler}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white px-10"
      >sign up here
      </button>
      <text className="text-white">Already have an account ?</text>
      <Link href="/login" className="text-white border border-color-white rounded-2xl px-10 mt-5">Login</Link>
    </div>
  );
}
