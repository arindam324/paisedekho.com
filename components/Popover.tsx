import React, { ReactNode } from "react";
import { Popover as Pop } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline";

const Popover: React.FC<{ name: string; children: ReactNode }> = ({
  name,
  children,
}) => {
  return (
    <Pop className={"relative"}>
      {({ open }) => (
        <>
          <Pop.Button
            className={`outline-none inline-flex items-center space-x-2 text-sm font-medium`}
          >
            <span className={`${open && "text-blue-900 font-semibold"}`}>
              {name}
            </span>
            {open ? (
              <ChevronDoubleDownIcon className="h-4 text-blue-900" />
            ) : (
              <ChevronUpIcon className="h-4 " />
            )}
          </Pop.Button>
          <Pop.Panel
            className={
              "absolute z-[100] bg-white ring-2 ring-indigo-200 w-[500px] text-sm font-medium p-10 h-[200px] top-16 left-2 rounded-md  shadow-lg"
            }
          >
            {children}
          </Pop.Panel>
        </>
      )}
    </Pop>
  );
};

export default Popover;
