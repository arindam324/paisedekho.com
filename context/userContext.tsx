import React, { createContext, ReactNode, useContext } from "react";
import { User } from "@prisma/client";

const userContext = createContext<User | null>({} as User);

const userProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <userContext.Provider value={null}>{children}</userContext.Provider>;
};

export default userProvider;

export const useUser = () => useContext(userContext);
