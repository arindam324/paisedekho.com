import React from "react";

const WhyUs = () => {
  return (
    <section className="lg:mt-10 flex flex-col lg:flex-row space-x-4  ">
      <div className="lg:w-1/3 py-5">
        <h2 className="lg:text-3xl text-xl  leading-normal  text-blue-900">
          Compare,Choose and Apply for personal credit products on Paisedekho
        </h2>
        <button className="px-10 py-2 bg-blue-800 text-white rounded-md mt-4">
          Read More
        </button>
      </div>
      <div className="lg:w-2/3 grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-[#004AAD] text-2xl font-bold">
            Personalized Offer
          </h2>
          <p className="text-sm text-gray-500 leading-5">
            We value customer first, so we offer the tailor made, specially
            curated and personalised financial product exclusive for you that
            meets your goal.
          </p>
        </div>
        <div>
          <h2 className="text-[#004AAD] text-2xl font-bold">
            Fast Disbursement
          </h2>
          <p className="text-sm text-gray-500 leading-5">
            We understand your precious time and value it by offering you the
            fastest disbursal or delivery of service guaranteed irrespective of
            the product you choose.
          </p>
        </div>
        <div>
          <h2 className="text-[#004AAD] text-2xl font-bold">Wide Options</h2>
          <p className="text-sm text-gray-500 leading-5">
            Not just 1 or 2, you get multiple choices of our products as we have
            partnered with multiple banks, NBFC’s.
          </p>
        </div>
        <div>
          <h2 className="text-[#004AAD] text-2xl font-bold">
            Lowest Interest Rate
          </h2>
          <p className="text-sm text-gray-500 leading-5">
            The best and lowest rate of interest that we offer to you for your
            needs starting from just 1.5 % per month
          </p>
        </div>
        <div>
          <h2 className="text-[#004AAD] text-2xl font-bold">Bank Transfer</h2>
          <p className="text-sm text-gray-500 leading-5">
            Getting the loan amount directly into your bank account within a
            minute as soon as the disbursement is made, is only possible with
            Paisa Dekho
          </p>
        </div>
        <div>
          <h2 className="text-[#004AAD] text-2xl font-bold">Safe & Secure</h2>
          <p className="text-sm text-gray-500 leading-5">
            Safety and Security of your data is always taken care of, you need
            not to worry about it as we adhere to our own data regulatory
            policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
