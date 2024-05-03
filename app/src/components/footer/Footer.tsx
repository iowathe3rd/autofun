import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    Grid,
    InputAdornment,
    OutlinedInput,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import FooterList, { FooterListProps } from "./FooterList";

const mockFooterListProps: FooterListProps[] = [
  {
    title: "Example Footer List",
    items: [
      {
        title: "Item 1",
        href: "https://example.com/item1",
      },
      {
        title: "Item 2",
        href: "https://example.com/item2",
      },
      {
        title: "Item 3",
        href: "https://example.com/item3",
      },
    ],
  },
  {
    title: "Example Footer List",
    items: [
      {
        title: "Item 1",
        href: "https://example.com/item1",
      },
      {
        title: "Item 2",
        href: "https://example.com/item2",
      },
      {
        title: "Item 3",
        href: "https://example.com/item3",
      },
    ],
  },
  {
    title: "Example Footer List",
    items: [
      {
        title: "Item 1",
        href: "https://example.com/item1",
      },
      {
        title: "Item 2",
        href: "https://example.com/item2",
      },
      {
        title: "Item 3",
        href: "https://example.com/item3",
      },
    ],
  },
  {
    title: "Example Footer List",
  },
  {
    title: "Example Footer List",
    items: [
      {
        title: "Item 1",
        href: "https://example.com/item1",
      },
    ],
  },
];

const companyInfo = {
  name: "Autofun GmbH",
  street: "Simmeringerhauptstr. 285",
  city: "Wien",
  zipCode: "1110",
  phoneNumber: {
    title: "Telefon",
    number: "+436763399993",
  },
  emailAddress: {
    title: "Email",
    address: "info@autofun.at",
  },
};

export default function Footee() {
  return (
    <Box
      sx={{
        backgroundImage: `url(/assets/footer-bg.jpg)`,
        backgroundPosition: "center",
        backgroudRepeat: "no-repeat",
        backgroundSize: "conver",
        minHeight: "400px",
        padding: "30px 12px 30px 12px",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={4}>
            <Grid
              sx={{
                maxWidth: "1210px",
                marginX: "auto",
                float: "left",
              }}
              container
              gridTemplateRows={"auto"}
              gridTemplateColumns={"auto"}
            >
              {mockFooterListProps.slice(0, 3).map((value, index) => {
                return (
                  <Grid item key={index}>
                    <FooterList items={value.items} title={value.title} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Stack>
              {mockFooterListProps.slice(3, 5).map((value, index) => {
                return (
                  <FooterList
                    items={value.items}
                    title={value.title}
                    key={index}
                  />
                );
              })}
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeigth: "700",
                  textTransform: "uppercase",
                  fontSize: "10pt",
                }}
              >
                AutoFUN
              </Typography>
              <Box
                sx={{
                  color: "#9f9f9f",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {Object.entries(companyInfo)
                  .slice(0, 4)
                  .map(([key, value]) => (
                    <Typography
                      key={key}
                      component="span"
                      className={`flex-${key}`}
                    >
                      {value}
                    </Typography>
                  ))}
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "11pt",
                      fontWeight: "500",
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                  >
                    {companyInfo.phoneNumber.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "10pt",
                      fontWeight: "500",
                      marginBottom: "10px",
                      color: "#9f9f9f",
                      textTransform: "uppercase",
                    }}
                  >
                    {companyInfo.phoneNumber.number}
                  </Typography>
                </Stack>

                <Stack>
                  <Typography
                    sx={{
                      fontSize: "11pt",
                      fontWeight: "500",
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                  >
                    {companyInfo.emailAddress.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "10pt",
                      fontWeight: "500",
                      marginBottom: "10px",
                      color: "#9f9f9f",
                      textTransform: "uppercase",
                    }}
                  >
                    {companyInfo.emailAddress.address}
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            color: "white",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Typography>Bleiben Sie immer auf dem Laufenden</Typography>
          <FormControl sx={{ m: 1, }} variant="filled">
            <OutlinedInput
              id="outlined-adornment-password"
              sx={{
                height: "fit",
                padding: 0,
                "& .MuiOutlinedInput-input": {
                  padding: "5px",
                },
                color: "white",
                backgroundColor: "black"
              }}
              placeholder="Email"
              endAdornment={
                <InputAdornment position="end">
                  <Button color="primary" variant="contained" size="small">VERSENDEN</Button>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>

        <Box sx={{
          display: 'flex',
          width: '100%',
          flexDirection: {
            xs: "column",
            md: 'row'
          },
          justifyContent: {
            xs: "flex-start",
            md: 'space-between'
          },
          marginTop: '20px'
        }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography component="span"
              sx={{
                fontSize: '9pt',
                color: "#9f9f9f"
              }}>
              Copyright © 2009 - 2024
            </Typography>
          </Box>

          <Box
              sx={{
                display: 'flex',
                gap: '9pt'
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: '9pt',
                  color: "#9f9f9f"
                }}
              >
                Политика конфиденциальности
              </Typography>
              <Typography component="span"
                sx={{
                  fontSize: '9pt',
                  color: "#9f9f9f"
                }}>
                Условия использования
              </Typography>
            </Box>
        </Box>
      </Container>
    </Box>
  );
}
