import React, { useState } from "react";

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

function Sidebar() {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs[0]);

  return (
    <div className="flex flex-col w-64 bg-gray-800 h-screen">
      <div className="flex items-center justify-center h-14 border-b border-gray-700">
        <span className="text-white text-xl font-semibold">CMS</span>
      </div>
      <div className="flex flex-col items-start space-y-2 py-4 px-6">
        {Tabs.map((item) => (
          <a
            onClick={() => setSelectedTab(item)}
            href={item.id}
            className="text-gray-400 w-[80%] hover:text-white hover:bg-gray-700 group flex items-center py-2 px-2 text-sm font-medium rounded-md"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
