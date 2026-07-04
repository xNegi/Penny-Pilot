"use client"; 
import react from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell} from "@fortawesome/free-regular-svg-icons";


export default function Topbar() {
  return (
    <nav className="h-18 w-full border-b-2 border-gray-200 bg-white flex items-center justify-end ">
      <div className="flex items-center justify-center gap-4 ">
        <button onClick={()=>alert("notification clicked ")}>
          <FontAwesomeIcon icon={faBell} className="w-5 shrink-0" />
        </button>
        <img src="/images/default_pfp.jpg" alt="user" className="w-8 h-8 rounded-full" />
        <span className="font-medium mr-6">username</span>
      </div>
    </nav>
    );
}