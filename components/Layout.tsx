import React, { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <main className="w-full relative min-h-screen">
      <Header />
      <div className="lg:max-w-[1280px] px-5 md:px-8 flex flex-col items-center py-24 w-full mx-auto">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
