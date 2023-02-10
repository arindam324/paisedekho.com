import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import withAuth from "../withAuth";

const DashBoard = () => {
  return (
    <div className="w-full min-h-screen">
      <Sidebar />
      <div className="flex-1"></div>
    </div>
  );
};

export default withAuth(DashBoard);
