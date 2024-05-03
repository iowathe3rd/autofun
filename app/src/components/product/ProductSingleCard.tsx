import { Box, Stack } from "@mui/material";

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
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
      >
        <Stack>
          <img src={props.images[0]} alt={props.title} width={700} />
          <Box
            sx={{
              display: "flex",
            }}
          ></Box>
        </Stack>
        <Box></Box>
      </Box>
    </Stack>
  );
};
export default ProductSingleCard;
