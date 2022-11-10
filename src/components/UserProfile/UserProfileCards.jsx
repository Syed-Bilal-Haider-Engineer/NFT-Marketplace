import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function UserProfileCards({
  img,
  icon,
  name,
  owner,
  currencyLogo,
  favourite,
  price,
}) {
  const theme = useTheme();
  return (
    <Box
      height="100%"
      textAlign="center"
      border="1px solid #e0e0e0"
      pb={2}
      borderRadius="10px"
      position="relative"
    >
      <img src={img} alt="" width="100%" />

      <img
        src={icon}
        alt=""
        width="48px"
        height="48px"
        style={{ position: "relative", top: "-6%" }}
      />

      <Typography
        color={theme.primary.text}
        fontSize={{ xs: "16px", md: "18px" }}
        fontWeight="800"
        mt={-2}
      >
        {name}
      </Typography>
      <Typography
        mt={0.5}
        color="#5D5D5B"
        fontSize={{ xs: "13px", md: "14px" }}
        fontWeight="400"
      >
        by {owner}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        color={theme.primary.text}
        fontWeight="400"
        fontSize="14px"
        justifyContent="center"
        mt={1}
      >
        <img
          style={{ marginRight: "5px" }}
          width="17px"
          src={currencyLogo}
          alt=""
        />{" "}
        {price}
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
