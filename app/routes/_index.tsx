import { Box, Button, Container, Typography } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import BreadCrumbs from "~/src/components/common/BreadCrumbs";
import Feedback from "~/src/sections/search/Feedback";
import ProductsSection from "~/src/sections/search/Products";
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
      <ProductsSection />
      <div className="flex justify-center my-8">
        <Button
          color="error"
          variant="contained"
          sx={{
            borderRadius: "3px",
            backgroundColor:
              "linear-gradient(180deg, #E02222 0%, #CA1F1F 100%)",
            border: "1px solid rgba(202, 31, 31, 1)",
            fontSize: "13px",
            fontWeight: 400,
          }}
        >
          Versteckte Ware anzeigen
        </Button>
      </div>
      <Feedback />
    </Container>
  );
}
