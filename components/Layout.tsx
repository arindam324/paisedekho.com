import React, { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <main className="w-full flex flex-col  min-h-screen">
      <Header />
      <div className="lg:max-w-[1280px] flex-1 px-5 py-8 md:px-8 flex flex-col items-center  w-full mx-auto">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
