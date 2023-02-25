import React, { useState } from "react";

import { prisma } from "../../../utils/Prisma";

import { requireAuthentication } from "../../../utils/requireAuthentication";
import { Products, User, WhyUs } from "@prisma/client";
import Header from "../../../components/admin/Header";
import { Modal, TextInput } from "@mantine/core";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

type DashboardProps = {
  products: Products[];
  whyUs: WhyUs[];
  users: User[];
};

const DashBoard: React.FC<DashboardProps> = ({ products, whyUs, users }) => {
  const [editProduct, setEditProduct] = useState<boolean>(false);
  const [DeleteProduct, setDeleteProduct] = useState<boolean>(false);

  const [selectedProduct, setSelectedProduct] = useState<Products>();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [redirecText, setRedirectText] = useState<string>("");

  const showEditProdutForm = (item: Products) => {
    setSelectedProduct(item);
    setEditProduct(true);
    if (selectedProduct) {
      setName(selectedProduct?.title);
      setDescription(selectedProduct.description);
      setRedirectText(selectedProduct.redirectText);
    }
  };

  const deleteProduct = async (item: Products) => {
    try {
      await axios.post(`/api/product?id=${item.id}`);
      toast.success("Product Deleted");
    } catch (err) {
      console.log(err);
    }
  };

  const COLORS = [
    "ring-orange-500",
    "ring-blue-500",
    "ring-pink-500",
    "ring-indigo-500",
    "ring-green-500",
  ];

  const router = useRouter();

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header />
      <Toaster />
      <section className="px-20 py-10 space-y-10 ">
        <div className="flex items-center space-x-20">
          <div className="max-w-4xl transition-all duration-50 ease-out  w-full rounded-sm p-10 shadow-lg">
            <h2 className="text-xl font-semibold">Products</h2>
            <div className="mt-5 space-y-1 overflow-y-auto max-h-[300px]">
              {products.map((item) => (
                <div
                  className="border-y transition-all 	 duration-100 ease-out flex items-center  group justify-between flex-wrap py-2"
                  key={item.id}
                >
                  <h2>{item.title}</h2>
                  <div className="w-[60%] h-[100px] text-sm ">
                    <div>
                      <p>{item.description}</p>
                      <p className="text-blue-600 font-semibold">
                        {item.redirectText}
                      </p>
                    </div>
                    <Modal
                      size={"sm"}
                      opened={editProduct}
                      centered
                      onClose={() => setEditProduct(false)}
                    >
                      <TextInput
                        label="Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <TextInput
                        label="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <TextInput
                        label="redirect text"
                        value={redirecText}
                        onChange={(e) => setRedirectText(e.target.value)}
                      />
                      <button className="px-10 py-2 rounded-md bg-black text-white mt-2">
                        Submit
                      </button>
                    </Modal>
                    <div className="mt-2 flex  space-x-4">
                      <button
                        onClick={() => showEditProdutForm(item)}
                        className="bg-green-600 text-white flex px-4 rounded-md py-1 space-x-2 shadow-xl"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                        </svg>
                        <span>Edit</span>
                      </button>
                      <Modal
                        opened={DeleteProduct}
                        onClose={() => setDeleteProduct(false)}
                        centered
                      >
                        <div className="flex itesm-center space-x-4 justify-center">
                          <button
                            onClick={() => setDeleteProduct(false)}
                            className="px-10 py-2 rounded-md border"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => deleteProduct(item)}
                            className="px-10 bg-red-600 text-white py-2 rounded-md"
                          >
                            Delete
                          </button>
                        </div>
                      </Modal>
                      <button
                        onClick={() => setDeleteProduct(true)}
                        className="bg-red-600 text-white flex items-center px-4 rounded-md py-1 space-x-2 shadow-xl"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>

                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <div
              onClick={() => router.push("/admin/dashboard/banner")}
              className="px-20 py-32 text-2xl cursor-pointer font-semibold shadow-indigo-300 shadow-lg rounded-lg"
            >
              <h2 className="ring-2 ring-indigo-600 rounded-full p-5">
                Banner
              </h2>
            </div>
            <div className="px-20 py-32 text-2xl font-semibold shadow-pink-300 shadow-lg rounded-lg">
              Footer
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="max-w-2xl transition-all	 duration-100 ease-out  w-full rounded-sm p-10 shadow-lg">
            <h2 className="text-xl font-semibold">Why US</h2>
            <div className="grid grid-cols-2 gap-10 mt-2">
              {whyUs.map((item, index) => (
                <article
                  key={item.id}
                  className={`shadow-xl group relative flex flex-col rounded-md ${COLORS[index]} ring items-center p-5`}
                >
                  <div className="absolute hidden group-hover:block cursor-pointer bg-green-600 rounded-full p-2 text-white top-0 right-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-center text-sm text-gray-500 leading-5">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="max-w-4xl min-h-[400px] transition-all	 duration-100 ease-out  w-full rounded-sm p-10 shadow-lg">
            <h2 className="font-semibold text-2xl">Users</h2>
            <div className="mt-2 space-y-2 overflow-y-auto min-h-[300px]">
              {users.map((item) => (
                <div
                  className="flex border-y py-2 items-center justify-between"
                  key={item.id}
                >
                  <h2 className="">{item.name}</h2>
                  <div className="flex space-x-4">
                    <p>{item.email}</p>
                    <p
                      className={`px-2 text-white rounded-md ${
                        item.role === "Admin" ? "bg-red-600  " : "bg-green-600"
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = requireAuthentication(async (context) => {
  const products = await prisma.products.findMany();
  const Whyus = await prisma.whyUs.findMany();
  const users = await prisma.user.findMany();

  return {
    props: {
      products: products,
      whyUs: Whyus,
      users: users,
    },
  };
});

export default DashBoard;
