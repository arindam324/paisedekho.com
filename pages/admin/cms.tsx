import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";

export type Tabs = {
  id: string;
  name: string;
};
const Tabs = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "contact-us",
    name: "Contact us",
  },
];

const showScreen = (id: string) => {
  switch (id) {
    case "home":
      return <div>Home</div>;
    case "about":
      return <div>About</div>;
    case "contact-us":
      return <div>Contact us</div>;
    default:
      return null;
  }
};

const Cms = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs[0]);
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-64 bg-gray-800 h-screen">
        <div className="flex items-center justify-center h-14 border-b border-gray-700">
          <span className="text-white text-xl font-semibold">CMS</span>
        </div>
        <div className="flex flex-col items-start space-y-2 py-4 px-6">
          {Tabs.map((item) => (
            <p
              onClick={() => setSelectedTab(item)}
              className="text-gray-400 cursor-pointer w-[80%] hover:text-white hover:bg-gray-700 group flex items-center py-2 px-2 text-sm font-medium rounded-md"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex-1 p-10">{showScreen(selectedTab.id)}</div>
    </div>
  );
};

export default Cms;
