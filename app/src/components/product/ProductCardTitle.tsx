import { Box, Stack, Typography } from "@mui/material";

interface ProductCardTitleProps {
  manufacturer: string;
  code: number;
  name: string;
}

const ProductCardTitle: React.FC<ProductCardTitleProps> = ({
  code,
  manufacturer,
  name,
}) => {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          gap: "4px",
        }}
      >
        <Typography
          sx={{
            color: "#E02222",
            fontWeight: "700",
            fontSize: "13px",
          }}
        >
          {manufacturer}
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "13px",
          }}
        >
          {code}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "18px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontWeight: "300",
          fontSize: "12px",
        }}
      >
        Gefunden über OE kód TecDoc® Nummer 0 986 580 129
      </Typography>
    </Stack>
  );
};

export default ProductCardTitle;
