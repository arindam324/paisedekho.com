import React, {ReactNode} from "react";

const Layout: React.FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div className={"grid items-center justify-items-center grid-cols-1 lg:grid-cols-3 gap-5"}>
            {children}
        </div>
    )
}


export default Layout