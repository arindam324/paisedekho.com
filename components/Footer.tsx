import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0  h-16 lg:h-24 px-4 lg:px-10 bg-[#0e0e21] text-white">
      <div className="relative h-16 md:w-48 w-[100px]  lg:h-24 lg:w-48">
        <Image src={"/images/Header_New.svg"} alt={""} fill />
      </div>
    </footer>
  );
};

export default Footer;
