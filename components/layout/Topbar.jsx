"use client";

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell} from "@fortawesome/free-regular-svg-icons";
import {faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/context/AuthContext";

export default function Topbar() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const handleDashboardClick = () => {
    router.push("/dashboard");
  }

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
    <nav className="flex h-14 w-full items-center justify-between border-b-2 border-gray-200 px-3 md:justify-end ">

      {/* Mobile Brand */}
      <div onClick={handleDashboardClick} className="ml-10  flex items-center text-xl gap-2 font-bold text-violet-700 md:hidden cursor-pointer">
        <FontAwesomeIcon icon={faPaperPlane} />
        <span>
          Penny Pilot
        </span>
      </div>

      {/* Right Side */}
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
            <span className="font-medium mr-6">Loading...</span>
          ) : !user ? (
            <div className="flex border rounded-2xl px-2 py-1 mr-6">
              <button
                className="hover:bg-violet-100 hover:text-violet-600 hover:underline rounded-lg px-1"
                onClick={handleLoginClick}
              >
                Login
              </button>
              &nbsp; / &nbsp;
              <button
                className="hover:bg-violet-100 hover:text-violet-600 hover:underline rounded-lg px-1"
                onClick={handleSingupClick}
              >
                Sign Up
              </button>
            </div>
          ):null}
        </>
      </div>
    </nav>
  );
}
