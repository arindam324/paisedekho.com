import React from "react";
import Image from "next/image";

import Logo from "../public/images/Header_New.svg";
import Popover from "./Popover";

const Header = () => {
  return (
    <header className="h-20 fixed top-0 w-full">
      <div className="max-w-[1280px] flex items-center justify-between w-full mx-auto">
        <div className="flex items-center space-x-8">
          <Image src={Logo} className="w-60 h-20" alt="logo" />
          <nav className="space-x-10 flex ">
            <Popover name="Products">
              <div className="grid grid-cols-2 gap-10">
                <a
                  className="hover:border-b-2 transition duration-100 ease-out border-indigo-600 "
                  href="/analytics"
                >
                  Home Loan
                </a>
                <a
                  className="hover:border-b-2  transition duration-100 ease-out border-indigo-600 "
                  href="/engagement"
                >
                  Personal Loan
                </a>
                <a
                  className="hover:border-b-2  transition duration-100 ease-out border-indigo-600 "
                  href="/security"
                >
                  Pay Now Buy Later
                </a>
              </div>
            </Popover>
            <Popover name="Tools">
              <div className="grid grid-cols-2 gap-4">
                <a className="hover:border-b-2 border-indigo-600 " href="/">
                  check if you are ellgible for Loan
                </a>
              </div>
            </Popover>
            <a
              className="hover:border-b text-sm font-medium border-indigo-600 "
              href="/"
            >
              Contact us
            </a>
          </nav>
        </div>

        <div className="space-x-5">
          <button className="px-8 bg-[#004AAD] rounded-md text-white py-2 hover:ring-2 hover:bg-white ring-[#004AAD] font-semibold text-sm hover:text-[#004AAD]">
            Sign in
          </button>
          {/* <button className="px-8 bg-[#FF6300] rounded-md text-white py-2 hover:ring-2 hover:bg-white ring-[#FF6300] font-semibold text-sm hover:text-black">
            Sign up
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
