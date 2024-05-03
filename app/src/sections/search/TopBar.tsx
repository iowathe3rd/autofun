import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Switch from "~/src/components/common/Switch";

interface TopBarProps {
  searchItem: string;
}

const TopBar: React.FC<TopBarProps> = (props) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: "21.3px",
          fontWeight: "700",
          lineHeight: "32px",
          textAlign: "left",
          marginBottom: "15px",
        }}
      >
        Suche: {props.searchItem}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: { xs: "10px", xl: "30px" },
        }}
      >
        <FormControl
          sx={{
            width: {
              xs: "100%",
              xl: "30%",
            },
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            size="small"
            onChange={handleChange}
            sx={{
              maxWidth: "270px",
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Lagernd"
        />
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Verkaufpreis</Typography>
          <Switch defaultChecked inputProps={{ "aria-label": "ant design" }} />
          <Typography>Einkaufspreis</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default TopBar;
