"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useAuth } from "@/context/AuthContext";

export default function Topbar() {
  const router = useRouter();
  const { user, loading } = useAuth();
  
  const handleSettingsClick = () => {
    router.push("/settings");
  };
  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  const handleSingupClick = () => {
    router.push("/auth/signup");
  };

  return (
    <nav className="h-18 w-full border-b-2 border-gray-200 flex items-center justify-end ">
      <div className="flex items-center justify-center gap-4 ">
        <button onClick={() => alert("no notifications yet")}>
          <FontAwesomeIcon icon={faBell} className="w-5 shrink-0" />
        </button>
        <img
          onClick={handleSettingsClick}
          src="/images/default_pfp.jpg"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
          <>
          {loading ? (
  <span className="font-medium mr-6">
    Loading...
  </span>
) : user ? (
  <span className="font-medium mr-6">
    {user.fullName}
  </span>
) : (
  <div className="flex border rounded-2xl px-2 py-1 mr-6">
    <button
      className="hover:bg-violet-200 hover:text-violet-600 hover:underline rounded-lg"
      onClick={handleLoginClick}
    >
      Login
    </button>

    &nbsp; / &nbsp;

    <button
      className="hover:bg-violet-200 hover:text-violet-600 hover:underline rounded-lg"
      onClick={handleSingupClick}
    >
      Sign Up
    </button>
  </div>
)}
          </>
      </div>
    </nav>
  );
}
