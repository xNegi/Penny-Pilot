"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faHouse,
  faCreditCard,
  faChartPie,
  faBullseye,
  faWallet,
  faList,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  }
  
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: faHouse },
    { name: "Transactions", href: "/transactions", icon: faPaperPlane },
    { name: "Accounts", href: "/accounts", icon: faCreditCard },
    { name: "Reports", href: "/reports", icon: faChartPie },
    { name: "Goals", href: "/goals", icon: faBullseye },
    { name: "Budgets", href: "/budgets", icon: faWallet },
    { name: "Categories", href: "/categories", icon: faList },
    { name: "Settings", href: "/settings", icon: faGear },
  ];

  return (
    <>
      {/* Hamburger - Mobile Only */}
      <button
        onClick={() => setIsOpen(true)}
        className="mobile-menu-button"
        aria-label="Open navigation"
      >
        <FaBars />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl
                transform transition-transform duration-300 md:hidden
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <h2  onClick={handleClick} className="text-xl font-bold text-violet-700 hover:cursor-pointer whitespace-nowrap">Penny Pilot <FontAwesomeIcon icon={faPaperPlane} /></h2>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-xl"
            aria-label="Close navigation"
          >
            <FaXmark />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3"
            >
              <div className={`flex w-full h-8 items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                pathname === item.href
                  ? "bg-violet-200 text-violet-600"
                  : "text-gray-500 hover:bg-violet-200 hover:text-violet-600"
              }`}>
                <FontAwesomeIcon icon={item.icon} />
                {item.name}
              </div>  
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
