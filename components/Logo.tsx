import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="w-[80vw] h-20">
      <div className="relative flex items-center h-full w-full">
        <div className="">
          <Image
            src={"/images/Logo.svg"}
            className="w-[20%] h-full"
            alt=""
            fill
          />
        </div>

        <div>
          <Image
            src={"/images/Paisadekho.svg"}
            className="w-[80%] h-[80%]"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
