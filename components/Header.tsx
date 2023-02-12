import React, { useState } from "react";
import Image from "next/image";

import { Burger, NavLink } from "@mantine/core";
import Logo from "../components/Logo";
import Popover from "./Popover";
import MobileNav from "../components/MobileMenu";
import MobileNavLinks from "../components/MobileNavLinks";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <header className="h-16 border-b shadow-md shadow-indigo-200 px-2 fixed z-20 bg-white top-0 w-full">
      <div className="max-w-[1280px] flex items-center justify-between w-full mx-auto">
        <div className="flex items-center w-[70%] h-16 space-x-8">
          <Link className="relative w-full lg:w-[350px] h-16" href={"/"}>
            <div className="w-full lg:w-[300px]">
              <Image
                src={"/images/Header_New.svg"}
                priority={true}
                fill
                className=""
                alt="logo"
              />
              {/* <Logo /> */}
            </div>
          </Link>

          <nav className="space-x-10  hidden lg:flex">
            <Popover name="Products">
              <div className="grid grid-cols-2 gap-10">
                <a
                  className="hover:border-b-2  transition duration-100 ease-out border-indigo-600 "
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
            <Link
              className="hover:border-b whitespace-nowrap text-sm font-medium border-indigo-600 "
              href="/about"
            >
              About us
            </Link>
            <a
              className="hover:border-b text-sm font-medium whitespace-nowrap border-indigo-600 "
              href="/"
            >
              Partner with us
            </a>
            <a
              className="hover:border-b text-sm font-medium border-indigo-600 whitespace-nowrap "
              href="/"
            >
              Contact us
            </a>
            <div className="flex items-center space-x-4">
              <a
                className=" text-sm font-medium link_hover whitespace-nowrap"
                href="/"
              >
                Credit Report
              </a>
              <Image src="/images/cibil.png" alt="" width={40} height={40} />
            </div>
          </nav>
        </div>

        <div className="space-x-5 flex items-center">
          <Burger
            opened={open}
            size="lg"
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          />
          <MobileNav open={open} setOpen={setOpen}>
            <div className="px-4 flex flex-col space-y-4">
              <MobileNavLinks name="products">
                <div className="space-y-4 py-4  mx-auto w-full">
                  <div className="whitespace-nowrap  text-sm">
                    <Link href="/">Loans</Link>
                  </div>
                  <div className="whitespace-nowrap text-sm">
                    <Link href="/">Credit Cards</Link>
                  </div>
                  <div className="whitespace-nowrap text-sm">
                    <Link href="/">Insurance</Link>
                  </div>
                  <div className="whitespace-nowrap text-sm">
                    <Link href="/">Investment & Booking</Link>
                  </div>
                </div>
              </MobileNavLinks>
              <MobileNavLinks name="Tools">
                <div className="space-y-4 py-4  mx-auto w-full">
                  <div className="whitespace-nowrap  text-sm">
                    <Link href="/">Personal Loan Emi Calculator</Link>
                  </div>
                  <div className="whitespace-nowrap text-sm">
                    <Link href="/">Car Loan Emi Calculator</Link>
                  </div>
                  <div className="whitespace-nowrap text-sm">
                    <Link href="/">Income Tax Calculator</Link>
                  </div>
                  <div className="whitespace-nowrap text-sm">
                    <Link href="/">Home Loan EMI Calculator</Link>
                  </div>
                  <div className="whitespace-nowrap text-sm">
                    <Link href="/">FAQ</Link>
                  </div>
                </div>
              </MobileNavLinks>

              <NavLink onClick={() => router.push("/about")} label="About us" />
              <NavLink label="Partner With us" />
              <NavLink label="Contact us" />
            </div>
          </MobileNav>
          <button className="w-full px-4 text-xs whitespace-nowrap	 bg-[#004AAD] rounded-md flex-nowrap text-white py-2  hover:ring-2 hover:bg-white ring-[#004AAD] font-semibold  hover:text-[#004AAD]">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
