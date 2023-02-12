import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Lottie from "react-lottie-player";

import Cookies from "js-cookie";

import Layout from "@components/Layout";
import Card from "@components/Card";
import Banner from "@components/Banner";
import Whyus from "@components/WhyUS";

import { Cards } from "../data/cards";
import Animations1 from "../public/animations/anim1.json";
import Animations2 from "../public/animations/anim2.json";

const Home: NextPage = () => {
  const [ishovered, setHovered] = useState<number | null>(null);

  const handdleMouseEnter = (index: number) => {
    setHovered(index);
  };

  return (
    <div className="flex w-full min-h-screen flex-col">
      <Head>
        <title>PaiseDekho - paise matlab paisedekho.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Banner />
        <div className="lg:bg-gray-200 lg:h-[300px]  flex flex-col w-full  md:flex-row items-center md:justify-center lg:justify-between lg:gap-10 -z-20  rounded-lg">
          <div className="lg:w-1/3 w-full flex items-start relative">
            <Lottie
              play
              loop
              animationData={Animations1}
              className="w-[150px] lg:h-[350px] md:w-[180px] md:h-[250px] lg:w-[200px] h-[200px]"
            />
          </div>
          <div className="lg:w-2/3  ml-4">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold leading-8 lg:leading-10 text-[#004AAD]">
              Your Credit Score & report <br />
              <span className="line-through px-2">Worth 1200 </span>{" "}
              <span className="text-[#FF6300]">absolutely free</span>{" "}
            </h2>

            <p className="text-sm md:text-lg md:leading-7 text-zinc-600 font-semibold pt-2 leading-4 lg:leading-6">
              Your Credit Score is more than a number . It's the key to help you
              unlock the best loans & credit card offers avaliable
            </p>
            <button
              onClick={() => alert("hello")}
              className="bg-[#004AAD] text-white  relative z-50 px-10 py-2 rounded-md cursor-pointer  mt-4"
            >
              Get Free Credit Report
            </button>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-lg text-[#004AAD] font-semibold">
            Credit Products
          </p>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 lg:gap-10">
            {Cards.map((item, index) => (
              <Card
                onMouseEnter={() => handdleMouseEnter(index)}
                onMouseLeave={() => setHovered(null)}
                key={item.id}
                className=""
                name={item.name}
                animation={item.animationData}
                description={item.description}
                tag={item.tag}
              />
            ))}
          </div>

          <div>
            <Lottie
              play
              animationData={Animations2}
              className="w-full lg:h-[300px]"
            />
          </div>
        </div>

        <Whyus />
      </Layout>
    </div>
  );
};

export default Home;
