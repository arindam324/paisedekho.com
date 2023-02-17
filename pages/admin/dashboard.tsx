import React, { useState } from "react";
import { Collapse, TextInput, Transition } from "@mantine/core";

import Sidebar from "../../components/admin/Sidebar";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { requireAuthentication } from "../../utils/requireAuthentication";

const DashBoard = () => {
  const [showProducts, setShowProducts] = useState<boolean>(false);
  return (
    <div className="w-full flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10 ml-72">
        <div className="py-8 max-w-2xl w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Products</h2>
            <PlusSmallIcon
              onClick={() => setShowProducts(!showProducts)}
              className="h-6"
            />
          </div>
          <Collapse in={showProducts}>/</Collapse>
        </div>
        <div className="max-w-2xl w-full bg-white mt-4 p-5 shadow-xl">
          <TextInput placeholder="" label="" withAsterisk />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = requireAuthentication(async (context) => {
  // await Promise.resolve("");
  return {
    props: {},
  };
});

export default DashBoard;
