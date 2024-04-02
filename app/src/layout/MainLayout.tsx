import React from "react";

const Layout: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default Layout;
