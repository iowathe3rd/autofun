import { Box } from "@mui/material";
import amountIcon from "~/src/assets/amount.svg";

const TotalAmountBadge: React.FC<{ amount: number }> = ({ amount }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(254, 240, 202, 1)",
        borderRadius: "3px",
        border: "1px solid rgba(219, 190, 113, 1)",
        minWidth: "90px",
        height: "26px",
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <img src={amountIcon} width={11} height={11} alt="ammount" />
      &gt;
      {amount}
    </Box>
  );
};

export default TotalAmountBadge;
