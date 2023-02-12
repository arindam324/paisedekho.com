import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <div className="flex w-full min-h-screen  flex-col">
      <Layout>
        <h2 className="lg:text-3xl text-xl mt-12 font-semibold text-[#004AAD]">
          We make personal finance easy, convenient & transparent
        </h2>
        <p className="text-gray-400 lg:text-lg   lg:w-[70%] mt-4 leading-8">
          Using data and technology innovations, we help you choose the
          most-suited financial products. Our algorithm-based technology
          platform provides you with access to multiple personal credit offers,
          ease of comparison of multiple offers available and unbiased advice.
          From application to disbursal, Paisabazaar will accompany you at each
          step, till the disbursal of loan or issuance of credit card.
        </p>
        <div className="grid gric-cols-1 lg:grid-cols-3 lg:gap-20 gap-5 mt-8">
          <div className="shadow-lg hover:-translate-y-8 lg:h-[350px] duration-100 ease-out cursor-pointer transition shadow-gray-300 rounded-lg  p-10">
            <h2 className="text-[#004AAD]  text-lg font-bold leading-relaxed">
              India's larger consumer credit marketplace
            </h2>
            <p className="text-zinc-500 mt-6">
              Paisedekho was was India’s largest digital consumer credit
              marketplace with a 51.4% market share, based on disbursals in
              2020, as per Frost & Sullivan.
            </p>
          </div>
          <div className="shadow-lg hover:-translate-y-8 duration-100 ease-out cursor-pointer transition shadow-gray-300 rounded-lg  p-10">
            <h2 className="text-[#004AAD] text-lg font-bold leading-relaxed">
              21 Million+ Happy Customers
            </h2>
            <p className="text-zinc-500 mt-6">
              More than 21 million unique Consumers have accessed their credit
              score from Paisabazaar as of March 31, 2021.
            </p>
          </div>
          <div className="shadow-lg hover:-translate-y-8 duration-100 ease-out cursor-pointer transition shadow-gray-300 rounded-lg  p-10">
            <h2 className="text-[#004AAD] text-lg font-bold leading-relaxed">
              50+ Partnerships
            </h2>
            <p className="text-zinc-500 mt-6">
              Paisabazaar works with large banks, NBFCs and fintech lenders who
              offer a wide choice of products on our platform
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
