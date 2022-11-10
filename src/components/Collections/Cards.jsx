import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Cards({
  img,
  icon,
  name,
  AuctionPrice,
  BuyPrice,
  owner,
  currencyLogo,
  favourite,
  price,
}) {
  const theme = useTheme();
  return (
    <Box
      height="100%"
      textAlign="left"
      // border="1px solid #e0e0e0"
      pb={2}
      borderRadius="10px"
      position="relative"
    >
      <img
        src={img}
        style={{ borderRadius: "16px", height: "300px" }}
        alt=""
        width="100%"
      />

      <Typography
        color={theme.primary.text}
        fontSize={{ xs: "16px", md: "18px" }}
        fontWeight="800"
        mt={1}
      >
        {name}
      </Typography>
      <Box display="flex">
        <Box
          diplay="flex"
          flexDirection="column"
          mt={1}
          width={"70px"}
          borderRight="1px solid gray"
        >
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            Auction
          </Typography>
          <Typography sx={{ color: "#ffffff", fontSize: "15px" }}>
            {AuctionPrice}
          </Typography>
        </Box>
        <Box diplay="flex" flexDirection="column" mt={1} ml={3} width={"70px"}>
          <Typography sx={{ color: "gray", fontSize: "12px" }}>
            Buy Now
          </Typography>
          <Typography sx={{ color: "#ffffff", fontSize: "15px" }}>
            {BuyPrice}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        color={theme.primary.text}
        fontWeight="400"
        fontSize="14px"
        mt={1}
      >
        <img src={icon} width="25px" style={{ marginRight: "10px" }} alt="" />
        {owner}
      </Box>
      <Box
        color={theme.primary.subtext}
        fontSize="12px"
        display="flex"
        alignItems="center"
        bgcolor={theme.primary.bgButtonTwo}
        p={1}
        sx={{
          width: "fit-content",
          borderRadius: "50px",
          position: "absolute",
          zIndex: 1,
          right: "8px",
          top: "10px",
        }}
      >
        <FavoriteBorderIcon
          style={{
            fontSize: "16px",
            color: theme.primary.subtext,
            marginRight: "6px",
          }}
        />
        {favourite}
      </Box>
    </Box>
  );
}
