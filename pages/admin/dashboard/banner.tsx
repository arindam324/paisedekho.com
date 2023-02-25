import React, { useState } from "react";
import Header from "../../../components/admin/Header";
import { PlusIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { requireAuthentication } from "../../../utils/requireAuthentication";
import { FileInput, Modal } from "@mantine/core";
import Cloudinary from "cloudinary";

const Banner = () => {
  const [show, setShow] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  const BannerUpload = () => {
    // if (file) {
    //   Cloudinary.v2.uploader.unsigned_upload(
    //     URL.createObjectURL(file),
    //     "xrcxywi3",
    //     {}
    //   );
    // }
  };

  return (
    <div className="w-full  min-h-screen">
      <Header />
      <main className="max-w-[1620px] py-4 w-full mx-auto">
        <Modal centered opened={show} onClose={() => setShow(false)}>
          <FileInput
            label="banner image"
            placeholder="banner image"
            value={file}
            onChange={(e) => setFile(e)}
            icon={<PhotoIcon className="h-6" />}
          />
          <button
            onClick={BannerUpload}
            className="w-full bg-black text-white py-2 mt-2 rounded-md"
          >
            Upload
          </button>
        </Modal>
        <div className="flex items-center space-x-12">
          <h2 className="text-2xl font-semibold">Banners</h2>
          <div
            onClick={() => setShow(true)}
            className="w-10 h-10 border rounded-full grid border-black cursor-pointer place-items-center"
          >
            <PlusIcon className="h-6" />
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = requireAuthentication(async (context) => {
  return {
    props: {},
  };
});

export default Banner;
