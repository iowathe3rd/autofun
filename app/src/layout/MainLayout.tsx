// import { useMediaQuery } from "@mui/material";
import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
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
    <React.Fragment>
      <TopLine />
      <MiddleLine />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
