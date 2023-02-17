import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-full  flex flex-col  py-4 px-4 lg:px-10 bg-[#0e0e21] text-white">
            <div className="relative h-16 md:w-48 w-[100px]  lg:h-24 lg:w-48">
                <Image src={"/images/Header_New.svg"} alt={""} fill/>
            </div>
            <div className={"grid lg:grid-cols-4 grid-cols-2 gap-10 place-items-center w-[80%] mx-auto"}>
                <div className={"text-sm space-y-2"}>
                    <h2 className={"text-xl"}>Community</h2>
                    <p>Article</p>
                    <p>Blogs</p>
                    <p>About us</p>
                    <p>Credit Score</p>
                </div>
                <div className={"text-sm space-y-2"}>

                    <p>Credit Report</p>
                    <p>Bad Credit Score</p>
                    <p>Good Credit Score</p>
                    <p>Credit Score Advisory</p>
                </div>
                <div className={"text-sm space-y-2"}>

                    <p>Income Tax Calculator</p>
                    <p>Personal Loan Emi Calculator</p>
                    <p>Credit Card customer Care</p>
                    <p>Personal Loan Customer Care</p>
                </div>
                <div className={"text-sm space-y-2"}>

                    <p>Loans</p>
                    <p>Credit Card</p>
                    <p>Home Loan</p>
                    <p>Personal Loan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
