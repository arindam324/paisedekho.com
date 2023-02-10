import { NavLink } from "@mantine/core";
import React from "react";

import { Cog8ToothIcon, HomeIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className="max-w-[300px] bg-gray-50 flex flex-col items-center py-4 w-full h-screen fixed ">
      <h2 className="text-2xl font-semibold">PaiseDekho</h2>
      <nav className="mt-12 space-y-4 w-[80%]">
        <NavLink
          label="Home"
          icon={<HomeIcon className="h-6" />}
          variant="filled"
          className="rounded-md"
          color={"indigo"}
          active
        />
        <NavLink
          label="Settings"
          icon={<Cog8ToothIcon className="h-6" />}
          variant="filled"
          className="rounded-md"
          color={"indigo"}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
