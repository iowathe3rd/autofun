import { Stack } from "@mui/material";
import product1Img from "~/src/assets/product1.png";
import ProductCard from "~/src/components/product/ProductCard";

const products = [
  {
    imageSrc: product1Img,
    manufacturer: "BOSCH",
    code: 986580129,
    name: "Kraftstoffpumpe",
  },
  {
    imageSrc: product1Img,
    manufacturer: "BOSCH",
    code: 986580129,
    name: "Kraftstoffpumpe",
  },
  {
    imageSrc: product1Img,
    manufacturer: "BOSCH",
    code: 986580129,
    name: "Kraftstoffpumpe",
  },
  {
    imageSrc: product1Img,
    manufacturer: "BOSCH",
    code: 986580129,
    name: "Kraftstoffpumpe",
  },
];

const ProductsSection: React.FC = () => {
  return (
    <Stack spacing={"10px"}>
      {products.map((value) => {
        return <ProductCard key={value.code} product={value} />;
      })}
    </Stack>
  );
};

export default ProductsSection;
