import {useRouter} from "next/router";
import React, {useState} from "react";

import {Products, User, WhyUs} from "@prisma/client";

import {requireAuthentication} from "../../../utils/requireAuthentication";
import Header from "../../../components/admin/Header";
import UserTable from "@components/admin/dashboard/UserTable";

type DashboardProps = {
    products: Products[];
    whyUs: WhyUs[];
    users: User[];
};

const DashBoard: React.FC<DashboardProps> = ({products, whyUs, users}) => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Header/>
            <div id="overlay" className="w-full  relative h-[30vh] bg-[#1e2124]">
                <div className="px-20 py-10 text-white">
                    <h2 className="text-3xl leading-normal ">
                        Welcome back , <span className="font-semibold">Arindam Roy</span>
                    </h2>
                    <p className="text-sm text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                        provident?
                    </p>
                </div>
                <div className="grid grid-cols-4 px-20 absolute w-full -bottom-10 gap-6">
                    <div className="bg-white rounded-lg min-h-[200px]  shadow-lg"></div>
                    <div className="bg-white rounded-lg  shadow-lg"></div>
                    <div className="bg-white rounded-lg  shadow-lg"></div>
                    <div className="bg-white rounded-lg  shadow-lg"></div>
                </div>
            </div>
            <div className={"mt-16"}>
                <UserTable/>
            </div>

        </div>
    );
};

export const getServerSideProps = requireAuthentication(async (context) => {
    // const products = await prisma.products.findMany();
    // const Whyus = await prisma.whyUs.findMany();
    // const users = await prisma.user.findMany();
    // return {
    //   props: {
    //     products: products,
    //     whyUs: Whyus,
    //     users: users,
    //   },
    // };

    return {
        props: {},
    };
});

export default DashBoard;
