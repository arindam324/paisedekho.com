import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="shadow-lg w-full  mb-4 p-5 rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="lg:text-4xl text-2xl text-blue-800 font-semibold">
          Check your CIBIL SCORE NOW
        </h2>
        <Image
          src={"/images/credit-score.webp"}
          alt=""
          width={120}
          height={120}
        />
      </div>
      <p className="text-blue-900 font-medium">
        Get Best offers on Loans , Credit Cards{" "}
      </p>
    </div>
  );
};

export default Banner;
