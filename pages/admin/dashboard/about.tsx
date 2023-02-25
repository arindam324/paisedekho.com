import { TextInput, Textarea } from "@mantine/core";
import React from "react";
import Header from "../../../components/admin/Header";
import { requireAuthentication } from "../../../utils/requireAuthentication";

const About = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header />

      <main className="px-20 flex items-center justify-center min-h-screen py-10">
        <form className="max-w-lg p-10 w-full min-h-[400px] flex flex-col items-center  shadow-xl rounded-md">
          <TextInput
            placeholder="title"
            radius={"lg"}
            label="about label"
            className="w-full"
          />
          <Textarea py={2} label="About Text" className="w-full" />
          <button className="bg-green-600 text-white mt-4 px-8 py-2 rounded-md">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export const getServerSideProps = requireAuthentication(async (context) => {
  return {
    props: {},
  };
});

export default About;
