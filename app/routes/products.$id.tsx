// import ProductSingleCard from "~/src/components/product/ProductSingleCard";

import { Container } from "@mui/material";
import ProductSingleCard from "~/src/components/product/ProductSingleCard";

const mockProductSingleCard = {
  title: "Example Product",
  images: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ],
  tableData: [
    { label: "Label 1", value: "Value 1" },
    { label: "Label 2", value: "Value 2" },
    { label: "Label 3", value: "Value 3" },
  ],
  delivery: [
    {
      quantity: 1,
      date: "2024-05-10",
      price: {
        price1: 10,
        price2: 8,
      },
    },
    {
      quantity: 5,
      date: "2024-05-15",
      price: {
        price1: 45,
        price2: 40,
      },
    },
    {
      quantity: 10,
      date: "2024-05-20",
      price: {
        price1: 80,
        price2: 70,
      },
    },
  ],
};

const ProductRoute = () => {
  return (
    <Container>
      <ProductSingleCard {...mockProductSingleCard} />
    </Container>
  );
};
export default ProductRoute;
