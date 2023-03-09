import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Cog6ToothIcon,
  BellIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

type Tab = {
  id: string;
  name: string;
};

const Tabs: Tab[] = [
  {
    id: "dashboard",
    name: "Dashboard",
  },
  {
    id: "cms",
    name: "CMS",
  },
  {
    id: "order",
    name: "Order",
  },
  {
    id: "customer",
    name: "Customer",
  },
  {
    id: "checkout",
    name: "Checkout",
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tabs[0]);
  return (
    <header className="w-full border-b border-[#484c4f] text-sm bg-[#1e2124] text-[#484c4f] px-20 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-10">
        <Image src="/images/Header_New.svg" alt="" width={120} height={120} />
        <nav className="flex space-x-8 ">
          {Tabs.map((item) => (
            <Link
              href={`/admin/${item.id}`}
              className={`${activeTab.id === item.id ? "text-white" : ""}`}
            >
              <p>{item.name}</p>
            </Link>
          ))}
        </nav>
      </div>
      <div className="h-6 flex space-x-8">
        <Cog6ToothIcon className="cursor-pointer" />
        <EnvelopeIcon className="cursor-pointer" />
        <BellIcon className="cursor-pointer" />
        <div></div>
      </div>
    </header>
  );
};

export default Header;
