import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ff9933",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.up("xl")]: {
            maxWidth: "1258px",
          },
        }),
      },
    },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: ({ theme }) => ({
    //       "& label.Mui-focused": {
    //         color: theme.palette.primary.main,
    //       },
    //       "&.MuiInput-underline:after": {
    //         borderBottomColor: "#B2BAC2",
    //       },
    //       "&.MuiOutlinedInput-root": {
    //         borderRadius: "40px",
    //         "& fieldset": {
    //           borderColor: "#606060",
    //         },
    //         "&:hover fieldset": {
    //           borderColor: theme.palette.primary.main,
    //         },
    //         "&.Mui-focused fieldset, &:hover fieldset, &.Mui-focused:hover fieldset":
    //           {
    //             border: `1px solid ${theme.palette.primary.main}`,
    //           },
    //       },
    //     }),
    //   },
    // },
  },
});
