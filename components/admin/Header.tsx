import React from "react";
import Link from "next/link";
import { BellIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-gray-800 h-16 shadow-xl px-20 text-white w-full  flex items-center justify-between">
      <div className="flex items-center space-x-24">
        <h2 className="text-2xl font-semibold">PaisaDekho</h2>
        <nav className="space-x-12 text-sm">
          <Link href="/admin/dashboard">
            <span>Home</span>
          </Link>
          <Link href={"/admin/dashboard/about"}>
            <span>About</span>
          </Link>
          <Link href="/admin/dashboard/contact">
            <span>Contact us</span>
          </Link>
        </nav>
      </div>
      <div>
        <BellIcon className="h-6" />
        <div></div>
      </div>
    </header>
  );
};

export default Header;
