import { Badge, BadgeProps, Box, Typography, styled } from "@mui/material";
import React from "react";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    height: "25px",
    width: "25px",
    right: "75%",
    top: 10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const TopCartWidget: React.FC<{ number: number }> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Box>
        <StyledBadge badgeContent={props.number} color="primary">
          <img src="/assets/cart-icon.png" alt="cart" />
        </StyledBadge>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#231f20",
            fontWeight: "700",
            fontSize: "12pt",
            display: "inline-block",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          0.00€
        </Typography>
        <Typography
          sx={{
            fontSize: "8pt",
            display: "block",
            marginTop: "-2px",
            textAlign: "left",
          }}
        >
          exkl. Mwst
        </Typography>
      </Box>
    </Box>
  );
};

export default TopCartWidget;
