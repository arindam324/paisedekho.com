import React, {useState} from "react";

import {ArrowLongRightIcon} from "@heroicons/react/24/outline";
import Lottie from "react-lottie-player";

import useLottieAnimation from "../hooks/useLottieAnimation";
import {router} from "next/client";
import {useRouter} from "next/router";

type CardPorps = {
    name: string;
    description: string;
    tag: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    className: string;
    animation: string;
    slug: string,
};

const Card: React.FC<CardPorps> = ({
                                       name,
                                       description,
                                       tag,
                                       slug,
                                       onMouseEnter,
                                       onMouseLeave,
                                       className,
                                       animation,
                                   }) => {
    const animationData = useLottieAnimation(animation);
    const router = useRouter()
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={() => router.push(`product/${slug}`)}
            className={`shadow-lg shadow-blue-200 cursor-pointer ${className}  
       space-y-4 lg:p-5 p-3 rounded-md group `}
        >
            <div className="flex flex-col-reverse   lg:max-w-[1280px] w-full lg:flex-row items-center justify-between ">
                <h2 className="lg:text-lg text-xs text-center mt-2 lg:mt-0 font-semibold">
                    {name}
                </h2>
                {animationData && (
                    <Lottie
                        play
                        loop
                        animationData={animationData}
                        className=" h-10 w-10 lg:w-24 lg:h-24"
                    />
                )}
            </div>
            <p className="text-sm hidden  lg:block">{description}</p>

            <div className="my-auto hidden lg:flex items-center space-x-2">
                <p className="text-sm text-[#004AAD] cursor-pointer hover:underline">
                    {tag}
                </p>
                <ArrowLongRightIcon className="h-5 text-[#004AAD]"/>
            </div>
        </div>
    );
};

export default Card;
