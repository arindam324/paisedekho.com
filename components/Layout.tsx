import React, { ReactNode } from "react";

import Header from "./Header";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <main className="">
      <Header />
      <div className="max-w-[1280px] py-24 w-full mx-auto">{children}</div>
    </main>
  );
};

export default Layout;
