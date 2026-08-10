"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPiggyBank } from "react-icons/fa6";
import { CiUser, CiLock } from "react-icons/ci";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-gray-100/30 border border-gray-300 rounded-2xl shadow-sm p-4">
      <div className="mt-4 flex items-center justify-center gap-4">
        <div>
          <FaPiggyBank size={50} className="text-violet-700" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Penny Pilot</h1>
          <p className="text-gray-500 text-sm">Track. Save. Grow.</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pl-6 ">
        <h2 className="text-2xl font-bold"> Welcome Back!</h2>
        <p className="text-gray-500 text-sm">
          Login to continue managing your finances
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold text-gray-700">
            Email 
          </label>
          <div className="relative">
            <CiUser
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email "
              required
              className="w-100 rounded-lg border border-gray-300 px-4 py-3 pl-10 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-bold text-gray-700">
            Password
          </label>
          <div className="relative">
            <CiLock
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" Enter your password"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-10 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
          />
          </div>
        </div>

        <button
          type="submit"
          className="relative flex items-center justify-center p-4 mt-4 rounded-lg bg-violet-600 py-3 font-medium text-white transition hover:bg-violet-700"
        >
          Login
          <FaArrowRight size={15} className="absolute right-3" />
        </button>
      </form>

      <p className="text-gray-600 text-sm ">or continue with</p>

      <div className="flex gap-2">
        <button className="flex items-center justify-center gap-2 w-full rounded-lg border border-gray-300 p-2 outline-none transition focus:ring-2 focus:border-violet-500 focus:ring-violet-200">
          <FaGoogle size={20} />
          <span> Google</span>
        </button>

        <button className="flex items-center justify-center gap-2 w-full rounded-lg border border-gray-300 p-2 outline-none transition focus:ring-2 focus:border-violet-500  focus:ring-violet-200">
          <TiVendorMicrosoft size={20} />
          <span> Microsoft</span>
        </button>
      </div>

      <div>
        <p className="text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-violet-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
