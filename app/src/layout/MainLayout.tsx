// import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import background from "~/src/assets/background.jpg";
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
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <TopLine />
      <MiddleLine />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
