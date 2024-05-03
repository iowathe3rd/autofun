import { Box, Stack } from "@mui/material";
import ProductCardTitle from "./ProductCardTitle";
import ProductDeliveryVariants from "./ProductDeliveryVariants";
import ProductTable from "./ProductTable";

interface ProductCardProps {
  product: {
    imageSrc: string;
    manufacturer: string;
    code: number;
    name: string;
  };
}

const tableData = [
  { label: "Einbauposition", value: "im Kraftstoffbehälter" },
  { label: "Betriebsart", value: "elektrisch" },
];

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "white",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
      }}
    >
      <Box
        sx={{
          padding: "15px",
        }}
      >
        <img src={product.imageSrc} alt="product" width={200} />
      </Box>
      <Stack
        sx={{
          borderLeft: "1px solid #EFEFEF",
          flexGrow: "1",
        }}
      >
        <Stack
          sx={{
            padding: "10px",
          }}
        >
          <ProductCardTitle
            code={product.code}
            manufacturer={product.manufacturer}
            name={product.name}
          />
          <ProductTable data={tableData} />
        </Stack>
        <ProductDeliveryVariants
          delivery={[
            {
              date: "Samstag 3/30/2024 (Vormittags ab )",
              price: {
                price1: 149,
                price2: 179,
              },
              quantity: 5,
            },
            {
              date: "Samstag 3/30/2024 (Vormittags ab )",
              price: {
                price1: 149,
                price2: 179,
              },
              quantity: 5,
            },
            {
              date: "Samstag 3/30/2024 (Vormittags ab )",
              price: {
                price1: 149,
                price2: 179,
              },
              quantity: 5,
            },
            {
              date: "Samstag 3/30/2024 (Vormittags ab )",
              price: {
                price1: 149,
                price2: 179,
              },
              quantity: 5,
            },
          ]}
        />
      </Stack>
    </Box>
  );
};

export default ProductCard;
