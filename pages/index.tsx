import type { NextPage } from "next";
import Head from "next/head";

import Layout from "@components/Layout";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>PaiseDekho - paise matlab paisedekho.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="bg-gray-200 flex items-center gap-10 w-[1280px] relative -z-20 h-[350px] rounded-lg">
          <div className="w-1/3"></div>
          <div className="w-2/3">
            <h2 className="text-3xl font-semibold leading-10 text-[#004AAD]">
              Your Credit Score & report <br />
              <span className="line-through px-2">Worth 1200 </span>{" "}
              <span className="text-[#FF6300]">absolutely free</span>{" "}
            </h2>

            <p className="text-sm text-zinc-600 font-semibold pt-2 leading-6">
              Your Credit Score is more than a number . It's the key to help you
              unlock <br /> the best loans & credit card offers avaliable
            </p>
            <button
              onClick={() => alert("hello")}
              className="bg-[#004AAD] text-white  relative z-50 px-10 py-2 rounded-md cursor-pointer  mt-4"
            >
              Get Free Credit Report
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
