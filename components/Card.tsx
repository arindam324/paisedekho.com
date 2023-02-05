import React, { useState } from "react";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Lottie from "react-lottie-player";

import Animation3 from "../public/animations/personalLoan.json";

type CardPorps = {
  name: string;
  description: string;
  tag: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className: string;
  animation: object;
};

const Card: React.FC<CardPorps> = ({
  name,
  description,
  tag,
  onMouseEnter,
  onMouseLeave,
  className,
  animation,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`shadow-lg ${className} h-[180px] 
      relative space-y-4 p-5 rounded-md group `}
    >
      <div className="flex absolute right-0 -top-12 items-center justify-center hidden group-hover:block">
        <Lottie play loop animationData={animation} className="w-24 h-24" />
      </div>
      <h2 className="text-lg  font-semibold">{name}</h2>
      <p className="text-sm">{description}</p>

      <div className="my-auto flex items-center space-x-2">
        <p className="text-sm text-[#004AAD] cursor-pointer hover:underline">
          {tag}
        </p>
        <ArrowLongRightIcon className="h-5 text-[#004AAD]" />
      </div>
    </div>
  );
};

export default Card;
