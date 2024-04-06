import { Box, ButtonBase, InputBase, Stack, Typography } from "@mui/material";
import basketimg from "~/src/assets/basket.png";
import TotalAmountBadge from "./TotalAmountBadge";

interface ProductDeliveryVariantsProps {
  delivery: {
    quantity: number;
    date: string;
    price: {
      price1: number;
      price2: number;
    };
  }[];
}

const AddToBasket: React.FC = () => {
  return (
    <Box
      sx={{
        height: "45px",
        display: "flex",
      }}
    >
      <InputBase
        type="number"
        sx={{
          borderRadius: "5px 0px 0px 5px",
          backgroundColor: "rgba(249, 249, 249, 1)",
          border: "1px solid rgba(205, 205, 205, 1)",
          padding: "12px",
          maxWidth: "100px",
          minWidth: "100px",
        }}
      />
      <Stack
        sx={{
          fontWeight: "900",
        }}
      >
        <ButtonBase
          sx={{
            height: "50%",
            backgroundColor: "rgba(238, 238, 238, 1)",
            border: "1px solid rgba(205, 205, 205, 1)",
            width: "25px",
            aspectRatio: "1/1",
          }}
        >
          +
        </ButtonBase>
        <ButtonBase
          sx={{
            height: "50%",
            backgroundColor: "rgba(238, 238, 238, 1)",
            border: "1px solid rgba(205, 205, 205, 1)",
            width: "25px",
            aspectRatio: "1/1",
          }}
        >
          -
        </ButtonBase>
      </Stack>
      <ButtonBase
        sx={{
          height: "100%",
          width: "50px",
          borderRadius: "0px 5px 5px 0px",
          backgroundColor: "rgba(78, 173, 51, 1)",
        }}
      >
        <img src={basketimg} alt="basket" height={"contain"} />
      </ButtonBase>
    </Box>
  );
};

const ProductDeliveryVariant: React.FC<{
  quantity: number;
  date: string;
  price: {
    price1: number;
    price2: number;
  };
}> = (props) => {
  return (
    <Box
      sx={{
        borderTop: "1px solid rgba(229, 229, 229, 1)",
        padding: "10px",
        height: "64px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <TotalAmountBadge amount={props.quantity} />
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "14px",
          }}
        >
          {props.date}
        </Typography>
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          gap: "20px",
          textAligt: "center",
        }}
      >
        <Stack>
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            {props.price.price1} € exkl. Mwst
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            {props.price.price2} € exkl. Mwst
          </Typography>
        </Stack>
        <AddToBasket />
      </Box>
    </Box>
  );
};

const ProductDeliveryVariants: React.FC<ProductDeliveryVariantsProps> = ({
  delivery,
}) => {
  return (
    <Stack>
      {delivery.map((value) => {
        return (
          <ProductDeliveryVariant
            date={value.date}
            price={value.price}
            quantity={value.quantity}
            key={value.date}
          />
        );
      })}
    </Stack>
  );
};

export default ProductDeliveryVariants;
