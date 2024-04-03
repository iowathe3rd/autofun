// import { useMediaQuery } from "@mui/material";
import React from "react";
import MiddleLine from "../components/header/MiddleLine";
import TopLine from "../components/header/TopLine";
// import { theme } from "../lib/mui";

const Layout: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  // const isUpXl = useMediaQuery<typeof theme>((theme) =>
  //   theme.breakpoints.up("xl"),
  // );
  return (
    <main className="bg-[#F8F8F8]">
      <TopLine />
      <MiddleLine />
      {children}
    </main>
  );
};

export default Layout;
