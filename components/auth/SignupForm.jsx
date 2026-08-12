"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPiggyBank } from "react-icons/fa6";
import { CiUser, CiLock, CiAt } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function SignupForm() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      fullname,
      email,
      username,
      password,
      confirmpassword,
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
        <h2 className="text-2xl font-bold"> Create your account</h2>
        <p className="text-gray-500 text-sm">
          Start your financial journey with Penny pilot
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
        {/* fullname */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullname" className="text-sm font-bold text-gray-700">
            Full Name
          </label>
          <div className="relative">
            <CiUser
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />
            <input
              id="fullname"
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-100 rounded-lg border border-gray-300 px-4 py-3 pl-10 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>
        </div>

        {/* email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold text-gray-700">
            Email
          </label>
          <div className="relative">
            <SlEnvolope
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-100 rounded-lg border border-gray-300 px-4 py-3 pl-10 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>
        </div>

        {/* username */}
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm font-bold text-gray-700">
            Username
          </label>
          <div className="relative">
            <CiAt
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Choose a username"
              required
              className="w-100 rounded-lg border border-gray-300 px-4 py-3 pl-10 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>
        </div>

        {/* password */}
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
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              className="w-100 rounded-lg border border-gray-300 px-4 py-3 pl-10 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
        </div>

        {/* confirm password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="confirmpassword"
            className="text-sm font-bold text-gray-700"
          >
            Confirm Password
          </label>
          <div className="relative">
            <CiLock
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"
            />
            <input
              id="confirmpassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
              className="w-100 rounded-lg border border-gray-300 px-4 py-3 pl-10 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
            </button>
          </div>
          {confirmpassword && (
            <p className={password === confirmpassword
              ? "text-sm text-green-600"
              : "text-sm text-red-600"
            }>
              {password === confirmpassword
              ? "Password matches"
              : "Password does not match"
              }
            </p>
          )}
        </div>

        <button
          type="submit"
          className="relative flex items-center justify-center p-4 mt-4 rounded-lg bg-violet-600 py-3 font-medium text-white transition hover:bg-violet-700"
        >
          Sign Up
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
        <p className="text-gray-600 text-sm py-4">
          Don't have an account?
          <Link href="/auth/login" className="text-violet-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
