import {useRouter} from "next/router";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {signIn, useSession} from "next-auth/react";

import {Burger, NavLink} from "@mantine/core";
import MobileNav from "../components/MobileMenu";
import MobileNavLinks from "../components/MobileNavLinks";
import DropDownLink from "../components/DropDownLink";
import {useForm} from "react-hook-form";
import UserForm from "@components/user/UserForm";
import Modal from '@components/common/Modal'

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);


    const router = useRouter();
    const {data: session} = useSession();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    return (
        <header className="h-16 border-b uppercase shadow-md shadow-indigo-200 px-2 fixed z-100 bg-white top-0 w-full">
            <Modal isOpen={show} size={"max-w-[1280px]"} onClose={() => setShow(false)}>
                <UserForm/>
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

                    <nav className="space-x-5 items-center  hidden xl:flex">
                        <DropDownLink title={"products"}/>
                        <DropDownLink title={"Tools"}/>
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
                            <Image src="/images/cibil.png" alt="" width={40} height={40}/>
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

                            <NavLink onClick={() => router.push("/about")} label="About us"/>
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
                            <Image src="/images/userimg.jpeg" alt="" width={30} height={30}/>
                        </div>
                    ) : (
                        <button
                            onClick={() => setShow(true)}
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
