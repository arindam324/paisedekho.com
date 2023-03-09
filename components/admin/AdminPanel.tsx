import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";

import UserTable from "./UserTable";
import classNames from "classnames";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", name: "Dashboard" },
    { id: "cms", name: "CMS" },
    { id: "projects", name: "Projects" },
    { id: "calendar", name: "Calendar" },
  ];

  const getScreenForTab = (tabId: string) => {
    switch (tabId) {
      case "dashboard":
        return (
          <UserTable
            users={[
              {
                id: "jdsfjksd",
                name: "Arindam Roy",
                image: "",
                email: "bac@gmail.com",
                password: "",
                role: "User",
              },
              {
                id: "jdsfjksd",
                name: "Arindam Roy",
                image: "",
                email: "bac@gmail.com",
                password: "",
                role: "User",
              },
              {
                id: "jdsfjksd",
                name: "Arindam Roy",
                image: "",
                email: "bac@gmail.com",
                password: "",
                role: "User",
              },
            ]}
          />
        );
      case "cms":
        return (
          <div>
            <h1>Team Screen</h1>
            <p>This is the team screen.</p>
          </div>
        );
      case "projects":
        return (
          <div>
            <h1>Projects Screen</h1>
            <p>This is the projects screen.</p>
          </div>
        );
      case "calendar":
        return (
          <div>
            <h1>Calendar Screen</h1>
            <p>This is the calendar screen.</p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="">
      <header className="relative  flex bg-gray-800 text-white items-center justify-between h-16">
        <div className="flex items-center px-20 justify-start sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0">
            <img
              className="block h-8 w-auto"
              src="/images/Header_New.svg"
              alt="Workflow"
            />
          </div>
        </div>
        <div className="flex items-center px-20 justify-start sm:items-stretch sm:justify-start">
          <nav className="flex-shrink-0 space-x-6">
            {tabs.map((item) => (
              <a
                onClick={() => setActiveTab(item.id)}
                className={classNames(
                  item.id === activeTab && "bg-gray-900",
                  "px-4 py-2 rounded-md shadow-xl hover:bg-gray-500"
                )}
                href="#"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div className="p-10">{getScreenForTab(activeTab)}</div>
    </div>
  );
};

export default AdminPanel;
