import React, { ReactNode, useState } from "react";
import {
  RectangleStackIcon,
  ShieldCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Layout from "../../components/Layout";
import { useSession } from "next-auth/react";

type Tabs = {
  id: number;
  name: string;
  icon: ReactNode;
};

const DashBoard = () => {
  const TABS: Tabs[] = [
    {
      id: 0,
      name: "My Account",
      icon: <UserCircleIcon className="h-4" />,
    },
    {
      id: 1,
      name: "Products",
      icon: <RectangleStackIcon className="h-4" />,
    },
    {
      id: 2,
      name: "Support",
      icon: <ShieldCheckIcon className="h-4" />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState<Tabs>(TABS[0]);
  const { data } = useSession();
  return (
    <div className="w-full min-h-screen">
      <Layout>
        <div className="my-12 flex w-full space-x-12">
          <aside className=" hidden lg:block max-w-[300px] w-full bg-white shadow-xl transition-all	 rounded-lg px-10 py-8 ">
            <nav className="space-y-4  text-sm ">
              {TABS.map((item) => (
                <a
                  className={`flex items-center space-x-2 px-4 py-2 ${
                    selectedTab?.id === item.id &&
                    "bg-gray-200 rounded-md transition-all	 font-semibold text-indigo-500"
                  }`}
                  onClick={() => setSelectedTab(item)}
                  href="#"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </aside>
          <div className="flex-1">
            {selectedTab.id === 0 && (
              <h2 className="text-2xl mt-2 text-gray-900">
                Welcome !
                <span className="font-semibold">{data?.user?.name}</span>
              </h2>
            )}
            {selectedTab.id === 1 && (
              <h2 className="text-2xl mt-2 text-gray-900">
                All the products subscribed by the user will display over here
              </h2>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DashBoard;
