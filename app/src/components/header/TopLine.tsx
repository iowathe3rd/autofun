import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { Link } from "@remix-run/react";
import { theme } from "~/src/lib/mui";

const links = [
  { title: "Über uns", href: "/" },
  { title: "Standorte", href: "/" },
  { title: "Pfandteile", href: "/" },
  { title: "Reklamationsprotokoll", href: "/" },
  { title: "Nutzungsbedingungen", href: "/" },
  { title: "Impressum", href: "/" },
];

const buttons = [
  {
    iconPath: "/assets/human.svg",
  },
  {
    iconPath: "assets/cart.svg",
  },
  {
    iconPath: "assets/menu.svg",
  },
];

const TopLine: React.FC = () => {
  const isUpLg = useMediaQuery<typeof theme>((theme) =>
    theme.breakpoints.up("lg"),
  );
  return (
    <Box
      sx={{
        background: "white",
      }}
    >
      {isUpLg ? (
        <Container>
          <Box
            sx={{
              height: "55px",
              display: "flex",
              alignItems: "center",
              gap: "13px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <img
                src="/assets/PhoneIcon.svg"
                alt="phone"
                width={18}
                height={18}
              />
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: "15px",
                  fontWeight: "700",
                  lineHeight: "20px",
                }}
              >
                +43 676 339 99 93
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "13px",
              }}
            >
              {links.map((value) => {
                return (
                  <Link key={value.title} to={value.href}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        color: "#5E595A",
                        lineHeight: "20px",
                        fontWeight: "400",
                      }}
                    >
                      {value.title}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                marginLeft: "auto",
              }}
            >
              <img
                src="/assets/profile-icon.svg"
                alt="profile"
                width="18px"
                height="18px"
              />

              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#5E595A",
                  lineHeight: "20px",
                  fontWeight: "400",
                }}
              >
                Anmeldung
              </Typography>
            </Box>
          </Box>
        </Container>
      ) : (
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: "10px",
          }}
        >
          <img src="/assets/logo.jpg" alt="logo" height={"42px"} />
          <Box sx={{ display: "flex", gap: "10px" }}>
            {buttons.map((value) => {
              return (
                <button key={value.iconPath}>
                  <img
                    src={value.iconPath}
                    alt={value.iconPath}
                    height={"40px"}
                  />
                </button>
              );
            })}
          </Box>
        </Container>
      )}
    </Box>
  );
};

export default TopLine;
