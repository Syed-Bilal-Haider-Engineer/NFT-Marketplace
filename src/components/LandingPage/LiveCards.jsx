import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function LiveCard({
  img,
  nftName,
  status,
  bidPrice,
  likes,
  avatar,
  logo,
}) {
  const matches = useMediaQuery("(max-width:750px)");
  const theme = useTheme();
  return (
    <Box
      border="1px solid #2C3739"
      height="100%"
      p={2}
      display="flex"
      flexDirection="column"
      borderRadius="10px"
    >
      <Box
        mb={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          px={2}
          py={0.5}
          color={
            status == "Live Now" ? theme.primary.subtext : theme.primary.text
          }
          borderRadius="50px"
          width="150px"
          bgcolor={
            status == "Live Now"
              ? theme.primary.bgButtonTwo
              : theme.primary.bgButton
          }
          textAlign="center"
        >
          {status}
        </Box>

        <Box
          fontWeight="700"
          fontSize="14px"
          display="flex"
          alignItems="center"
          color={theme.primary.text}
        >
          <FavoriteBorderIcon
            style={{
              fontSize: "20px",
              color: theme.primary.bgButtonTwo,
              marginRight: "6px",
            }}
          />{" "}
          {likes}
        </Box>
      </Box>
      <img width="100%" style={{ borderRadius: "10px" }} src={img} alt="" />
      <Box mt={2} color={theme.primary.text} fontWeight="800" fontSize="18px">
        {nftName}
      </Box>
      <Box
        mb={2}
        mt={0.7}
        color={theme.primary.text}
        fontWeight="700"
        fontSize="14px"
        display="flex"
        alignItems="center"
      >
        <img wirth="20px" src={logo} alt="" />{" "}
        <span
          style={{
            color: "#5D5D5B",
            fontSize: "14px",
            fontWeight: "400",
            marginLeft: "6px",
            marginRight: "6px",
          }}
        >
          from
        </span>
        {bidPrice}
      </Box>
      <img width="70px" src={avatar} alt="" />
    </Box>
  );
}
