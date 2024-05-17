import { Box, Stack, Typography } from "@mui/material";
import Switch from "../common/Switch";
import ProductDeliveryVariants from "./ProductDeliveryVariants";

interface ProductSingleCardProps {
  title: string;
  images: string[];
  tableData: {
    label: string;
    value: string;
  }[];
  delivery: {
    quantity: number;
    date: string;
    price: {
      price1: number;
      price2: number;
    };
  }[];
}

const ProductSingleCard: React.FC<ProductSingleCardProps> = (props) => {
  return (
    <Stack
      sx={{
        width: "100%",
      }}
    >
      <Stack></Stack>
      <Stack
        sx={{
          width: {
            xs: "100%",
            lg: "30%",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "27px",
            lineHeight: "32px",
          }}
        >
          {props.title}
        </Typography>
        <Stack
          sx={{
            width: "100%",
          }}
        >
          {props.tableData.map((value, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  height: "34px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(220, 218, 222, 1)",
                    borderStyle: "dotted",
                    borderWidth: "1px",
                    borderColor: "rgba(220, 218, 222, 1)",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <Typography sx={{ fontWeight: 400, fontSize: "15px" }}>
                    {value.label}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "rgba(220, 218, 222, 1)",
                    borderStyle: "dotted",
                    borderWidth: "1px",
                    borderColor: "rgba(220, 218, 222, 1)",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>
                    {value.label}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Verkaufpreis</Typography>
            <Switch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography>Einkaufspreis</Typography>
          </Stack>
        </Box>
        <ProductDeliveryVariants delivery={props.delivery} />
      </Stack>
    </Stack>
  );
};
export default ProductSingleCard;
