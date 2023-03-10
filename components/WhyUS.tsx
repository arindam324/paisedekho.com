import React from "react";
import Lottie from "react-lottie-player";

import useLottieAnimation from "../hooks/useLottieAnimation";

const WhyUs = () => {
  const DATA = [
    {
      id: 0,
      title: "Personalized Offer",
      animation:
        "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306685/animations/PersonalizerOffer_lbcnfn.json",
      description:
        "We value customer first, so we offer the tailor made, specially curated and personalised financial product exclusive for you that meets your goal.",
    },
    {
      id: 1,
      title: " Fast Disbursement",
      animation:
        "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306684/animations/FastDisbursement_yzx5dg.json",
      description:
        " We understand your precious time and value it by offering you the fastest disbursal or delivery of service guaranteed irrespective of the product you choose.",
    },
    {
      id: 2,
      title: "Wide Options",
      animation:
        "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306686/animations/wide-choice_udlrzs.json",
      description:
        "   Not just 1 or 2, you get multiple choices of our products as we have partnered with multiple banks, NBFC’s.",
    },
    {
      id: 3,
      title: "Bank Transfer",
      animation:
        "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306683/animations/BankTransfer_ourgs1.json",
      description:
        "  Getting the loan amount directly into your bank account within a minute as soon as the disbursement is made, is only possible with Paisa Dekho",
    },
    {
      id: 4,
      title: "Safe & Secure",
      animation:
        "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306685/animations/safe_secure_ady83i.json",
      description:
        " Safety and Security of your data is always taken care of, you need not to worry about it as we adhere to our own data regulatory policy.",
    },
    {
      id: 5,
      title: "Lowest Interest Rate",
      animation:
        "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306685/animations/LowerInterest_ahtwi4.json",
      description:
        "The best and lowest rate of interest that we offer to you for your needs starting from just 1.5 % per month",
    },
  ];

  return (
    <section className="lg:mt-10 flex items-center lg:pb-24  flex-col lg:flex-row space-x-4  ">
      <div className="lg:w-1/3 py-10">
        <h2 className="md:text-3xl text-xl leading-normal md:leading-10 text-blue-900">
          Compare,Choose and Apply for personal credit products on Paisedekho
        </h2>
        <button className="px-10 py-2 bg-blue-800 text-white rounded-md mt-4">
          Read More
        </button>
      </div>
      <div className="lg:w-2/3 md:-w-[500px]  place-items-center md:mx-auto grid grid-cols-2 gap-10">
        {DATA.map((item) => (
          <Card
            key={item.id}
            animation={item.animation}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

const Card: React.FC<{
  title: string;
  description: string;
  animation: string;
}> = ({ title, description, animation }) => {
  const animationData = useLottieAnimation(animation);
  return (
    <div className="flex flex-col justify-between lg:h-auto h-[300px]  items-center">
      {animationData && (
        <Lottie
          play
          loop
          animationData={animationData}
          className="w-[100px] h-[100px]"
        />
      )}

      <h2 className="text-[#004AAD] text-xl  font-bold">{title}</h2>
      <p className="text-xs text-gray-500 lg:text-sm leading-5">
        {description}
      </p>
    </div>
  );
};

export default WhyUs;
