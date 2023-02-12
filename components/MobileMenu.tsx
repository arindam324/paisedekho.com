import React, { ReactNode } from "react";
import { Drawer } from "@mantine/core";

const MobileMenu: React.FC<{
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
}> = ({ open, setOpen, children }) => {
  return (
    <Drawer
      className="lg:hidden"
      size={"sm"}
      opened={open}
      onClose={() => setOpen(false)}
    >
      {children}
    </Drawer>
  );
};

export default MobileMenu;
