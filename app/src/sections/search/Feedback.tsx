import { Box, OutlinedInput, Typography, useTheme } from "@mui/material";

const Feedback: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        padding: {
          xl: "41px 1px 41px 1px",
        },
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: theme.palette.primary.main,
          fontSize: "21px",
          fontWeigth: "600",
        }}
      >
        Haben Sie das gewünschte Produkt nicht gefunden?
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          fontWeigth: "400",
        }}
      >
        Haben sie Fragen? Sie können uns gerne kontaktieren.
      </Typography>
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div className="w-full flex justify-start gap-4">
          <Typography
            sx={{
              width: "20%",
              fontWeight: 400,
              fontSize: "13px",
            }}
          >
            Name
          </Typography>
          <OutlinedInput
            type="text"
            sx={{
              width: "80%",
              height: "40px",
            }}
          />
        </div>
        <div className="w-full flex justify-start gap-4">
          <Typography
            sx={{
              width: "20%",
              fontWeight: 400,
              fontSize: "13px",
            }}
          >
            Telefon
          </Typography>
          <OutlinedInput
            type="text"
            sx={{
              width: "80%",
              height: "40px",
            }}
          />
        </div>
        <div className="w-full flex justify-start gap-4">
          <Typography
            sx={{
              width: "20%",
              fontWeight: 400,
              fontSize: "13px",
            }}
          >
            Email
          </Typography>
          <OutlinedInput
            type="text"
            sx={{
              width: "80%",
              height: "40px",
            }}
          />
        </div>
        <div className="w-full flex justify-start gap-4">
          <Typography
            sx={{
              width: "20%",
              fontWeight: 400,
              fontSize: "13px",
            }}
          >
            Ihre Nachricht
          </Typography>
          <OutlinedInput
            type="text"
            sx={{
              width: "80%",
              height: "40px",
            }}
          />
        </div>
        <div className="w-full flex justify-start gap-4">
          <Typography
            sx={{
              width: "20%",
              fontWeight: 400,
              fontSize: "13px",
            }}
          >
            Name
          </Typography>
          <OutlinedInput
            type="text"
            sx={{
              width: "80%",
              height: "40px",
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Feedback;
