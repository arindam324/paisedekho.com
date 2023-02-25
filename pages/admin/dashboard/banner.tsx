import React from "react";
import Header from "../../../components/admin/Header";
import { requireAuthentication } from "../../../utils/requireAuthentication";

const Banner = () => {
  return (
    <div className="w-full  min-h-screen">
      <Header />
      <main></main>
    </div>
  );
};

export const getServerSideProps = requireAuthentication(async (context) => {
  return {
    props: {},
  };
});

export default Banner;
