import React from "react";
import MiddleLine from "../components/header/MiddleLine";
import TopLine from "../components/header/TopLine";

const Layout: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  return (
    <main className="bg-[#F8F8F8]">
      <TopLine />
      <MiddleLine />
      {children}
    </main>
  );
};

export default Layout;
