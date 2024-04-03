import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import { Form } from "@remix-run/react";

const SearchField: React.FC<OutlinedInputProps> = (props) => {
  return (
    <Form method="GET" action="/">
      <OutlinedInput
        sx={{
          width: "100%",
          height: "42px",
          padding: 0,
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
