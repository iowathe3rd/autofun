import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import SearchField from "~/src/components/SearchField";
import TopCartWidget from "~/src/components/header/TopCartWidget";
import { theme } from "~/src/lib/mui";

const tabs = ["Teilnummer"];

const MiddleLine = () => {
  const [activeTab] = useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setActivetab(newValue);
  // };
  return (
    <Container
      sx={{
        height: "112px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src="/assets/logo.jpg" alt="autofun" height={"112px"} />
      <Box
        sx={{
          flexGrow: "1",
          maxWidth: "50%",
        }}
      >
        <SearchField />
        <Box
          sx={{
            marginTop: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {tabs.map((value, index) => (
              <Typography
                key={value}
                fontSize="10px"
                fontWeight={"300"}
                sx={{
                  borderBottom:
                    index === activeTab
                      ? `2px solid ${theme.palette.primary.main}`
                      : "",
                  fontWeight: index === activeTab ? "800" : "",
                  paddingX: "10px",
                }}
              >
                {value}
              </Typography>
            ))}
          </Box>
          <Typography fontSize="10px" fontWeight={"300"}>
            Suchverlauf
          </Typography>
        </Box>
      </Box>
      <TopCartWidget number={4} />
    </Container>
  );
};

export default MiddleLine;
