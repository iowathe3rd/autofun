import { Box, Container, Typography, useTheme } from "@mui/material";
import { Link } from "@remix-run/react";

const links = [
  { title: "Über uns", href: "/" },
  { title: "Standorte", href: "/" },
  { title: "Pfandteile", href: "/" },
  { title: "Reklamationsprotokoll", href: "/" },
  { title: "Nutzungsbedingungen", href: "/" },
  { title: "Impressum", href: "/" },
];

const TopLine: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: "white",
      }}
    >
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
    </Box>
  );
};

export default TopLine;
