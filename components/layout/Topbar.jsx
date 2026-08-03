"use client"; 

import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from "@fortawesome/free-regular-svg-icons";


export default function Topbar() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/settings");
  }
  const handleLoginClick =()=>{
    router.push("/auth/login");
  }

  const handleSingupClick =()=>{
    router.push ("/auth/signup");
  }

  return (
    <nav className="h-18 w-full border-b-2 border-gray-200 flex items-center justify-end ">
      <div className="flex items-center justify-center gap-4 ">
        <button onClick={()=>alert("notification clicked ")}>
          <FontAwesomeIcon icon={faBell} className="w-5 shrink-0" />
        </button>
        <img  onClick={handleClick} src="/images/default_pfp.jpg" alt="user" className="w-8 h-8 rounded-full" />
        <div className="flex">
          <button className="border p-2" onClick={handleLoginClick}> Login </button>
          <button className="border p-2" onClick={handleSingupClick}> Sign Up </button>
        </div>
        <span className="font-medium mr-6">username</span >
      </div>
    </nav>
    );
}