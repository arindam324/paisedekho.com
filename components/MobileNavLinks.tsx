import React, { ReactNode, useState } from "react";
import { Collapse, NavLink } from "@mantine/core";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const MobileNavLinks: React.FC<{ name: string; children: ReactNode }> = ({
  name,
  children,
}) => {
  const [opened, setOpen] = useState<boolean>(false);
  return (
    <div onClick={() => setOpen(!opened)}>
      <NavLink
        label={name}
        rightSection={
          opened ? (
            <ChevronUpIcon className="h-6" />
          ) : (
            <ChevronDownIcon className="h-6" />
          )
        }
      />
      <Collapse
        transitionDuration={300}
        transitionTimingFunction="linear"
        in={opened}
      >
        {children}
      </Collapse>
    </div>
  );
};

export default MobileNavLinks;
