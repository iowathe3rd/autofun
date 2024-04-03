import { Box, Container, Typography } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import BreadCrumbs from "~/src/components/common/BreadCrumbs";
import TopBar from "~/src/sections/search/TopBar";

export const meta: MetaFunction = () => {
  return [
    { title: "Autofun" },
    { name: "description", content: "Welcome to AutoFun!" },
  ];
};

export default function Index() {
  const breadcrumbs = [
    {
      title: "gefundene Teile",
      href: "/",
    },
  ];
  return (
    <Container
      sx={{
        paddingY: "45px",
      }}
    >
      <BreadCrumbs items={breadcrumbs} />
      <Box
        sx={{
          marginTop: "20px",
        }}
      >
        <TopBar searchItem="2345872" />
      </Box>
    </Container>
  );
}
