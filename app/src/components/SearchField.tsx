import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
  useTheme,
} from "@mui/material";
import { Form } from "@remix-run/react";

const SearchField: React.FC<OutlinedInputProps> = (props) => {
  const theme = useTheme();
  return (
    <Form method="GET" action="/">
      <OutlinedInput
        sx={{
          width: "100%",
          height: "42px",
          padding: 0,

          "& label.Mui-focused": {
            color: theme.palette.primary.main,
          },
          "&.MuiInput-underline:after": {
            borderBottomColor: "#B2BAC2",
          },
          "&.MuiOutlinedInput-root": {
            borderRadius: "40px",
            "& fieldset": {
              borderColor: "#606060",
            },
            "&:hover fieldset": {
              borderColor: theme.palette.primary.main,
            },
            "&.Mui-focused fieldset, &:hover fieldset, &.Mui-focused:hover fieldset":
              {
                border: `1px solid ${theme.palette.primary.main}`,
              },
          },
        }}
        {...props}
        placeholder="„Geben Sie den gesuchten Text ein“"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              type="submit"
              edge="start"
              sx={{
                height: "42px",
                width: "42px",
              }}
            >
              <img
                src="/assets/search-icon.png"
                alt="search"
                width={"48px"}
                height={"48px"}
              />
            </IconButton>
          </InputAdornment>
        }
      />
    </Form>
  );
};

export default SearchField;
