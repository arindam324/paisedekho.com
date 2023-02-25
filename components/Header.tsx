import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

import { Burger, NavLink, Modal } from "@mantine/core";
import Logo from "../components/Logo";
import Popover from "./Popover";
import MobileNav from "../components/MobileMenu";
import MobileNavLinks from "../components/MobileNavLinks";

import { UserIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [show, setshow] = useState<boolean>(false);
  const router = useRouter();

  const { data: session } = useSession();

  return (
    <header className="h-16 border-b shadow-md shadow-indigo-200 px-2 fixed z-100 bg-white top-0 w-full">
      <Modal
        centered
        size={"55%"}
        radius="md"
        opened={show}
        padding="lg"
        onClose={() => setshow(false)}
      >
        <div className="flex flex-col w-full items-center">
          <h2 className="text-2xl  font-semibold">Login to your account</h2>
          <button
            onClick={() => signIn("google")}
            className="flex hover:bg-black hover:text-white items-center space-x-2 mt-4 border px-12 rounded-md cursor-pointer py-2  "
          >
            <Image
              src="/images/google.svg"
              width={40}
              height={40}
              alt=""
              className=""
            />
            <span>Continue with google</span>
          </button>
          <div className="flex w-[40%] items-center">
            <div className="w-full h-[1px] bg-gray-600" />
            <span className="text-sm m-2 cursor-pointer text-gray-600 whitespace-nowrap">
              or continue with Email and password
            </span>
            <div className="w-full h-[1px] bg-gray-600" />
          </div>
          <form className="mt-4 flex flex-col space-y-4">
            <input
              className="border px-12 py-2 rounded-md"
              placeholder="abc@gmail.com"
            />
            <input
              type={"submit"}
              value="login with Email"
              className="bg-black text-white py-2 rounded-md"
            />
          </form>
          <div className="mt-4 text-sm  text-center">
            <p>By logging in, you agree to the following</p>
            <p className="text-blue-700 font-semibold">
              Credit Report Terms of Use and Terms of Use
            </p>
          </div>
        </div>
      </Modal>
      <div className="max-w-[1280px] flex items-center justify-between w-full mx-auto">
        <div className="flex items-center w-[70%] h-16 space-x-8">
          <Burger
            opened={open}
            size="md"
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          />
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
            <Link
              className="hover:border-b text-sm font-medium whitespace-nowrap border-indigo-600 "
              href="/partner-with-us"
            >
              Partner with us
            </Link>
            <a
              className="hover:border-b text-sm font-medium border-indigo-600 whitespace-nowrap "
              href="/contact-us"
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
              <NavLink
                onClick={() => router.push("/partner-with-us")}
                label="Partner With us"
              />
              <NavLink
                onClick={() => router.push("/contact-us")}
                label="Contact us"
              />
            </div>
          </MobileNav>
          {session ? (
            <div
              onClick={() => router.push("/user/dashboard")}
              className="h-10 w-10 border grid place-items-center border-black cursor-pointer rounded-full"
            >
              <UserIcon className="h-6  " />
            </div>
          ) : (
            <button
              onClick={() => setshow(true)}
              className="w-full px-4 text-xs whitespace-nowrap bg-[#004AAD] rounded-md flex-nowrap text-white py-2  hover:ring-2 hover:bg-white ring-[#004AAD] font-semibold  hover:text-[#004AAD]"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
