import React from "react";
import Image from "next/image";

import Logo from "../public/images/Header_New.svg";
import Popover from "./Popover";

const Header = () => {
  return (
    <header className="h-20 fixed bg-white top-0 w-full">
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
                  Loans
                </a>
                <a
                  className="hover:border-b-2  transition duration-100 ease-out border-indigo-600 "
                  href="/engagement"
                >
                  Credit cards
                </a>
                <a
                  className="hover:border-b-2  transition duration-100 ease-out border-indigo-600 "
                  href="/security"
                >
                  Insurance
                </a>
                <a
                  className="hover:border-b-2  transition duration-100 ease-out border-indigo-600 "
                  href="/security"
                >
                  Investment & Banking
                </a>
              </div>
            </Popover>
            <Popover name="Tools">
              <div className="grid grid-cols-2 gap-4">
                <a className="hover:border-b-2 border-indigo-600 " href="/">
                  Personal Loan EMI Calculator
                </a>
                <a className="hover:border-b-2 border-indigo-600 " href="/">
                  Car Loan EMI Calculator
                </a>
                <a className="hover:border-b-2 border-indigo-600 " href="/">
                  Income Tax Calculator
                </a>
                <a className="hover:border-b-2 border-indigo-600 " href="/">
                  Home Loan EMI Calculator
                </a>
                <a className="hover:border-b-2 border-indigo-600 " href="/">
                  FAQ
                </a>
              </div>
            </Popover>
            <a
              className="hover:border-b text-sm font-medium border-indigo-600 "
              href="/"
            >
              About us
            </a>
            <a
              className="hover:border-b text-sm font-medium border-indigo-600 "
              href="/"
            >
              Partner with us
            </a>
            <a
              className="hover:border-b text-sm font-medium border-indigo-600 "
              href="/"
            >
              Contact us
            </a>
            <a className=" text-sm font-medium link_hover " href="/">
              Credit Report
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
