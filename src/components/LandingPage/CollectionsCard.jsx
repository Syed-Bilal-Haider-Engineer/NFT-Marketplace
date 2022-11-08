import { useTheme } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function CollectionsCard({
  img,
  logo,
  nftName,
  price,
  apr,
  index,
}) {
  const theme = useTheme();
  return (
    <Box display="flex" alignItems="center">
      <Box mr={2} color={theme.primary.text} fontWeight="700" fontSize="15px">
        {index + 1}
      </Box>
      <Link
        to="/marketplace"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img style={{ borderRadius: "10px" }} src={img} alt="" />
        <Box ml={2} display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Box color={theme.primary.text} fontWeight="700" fontSize="16px">
              {nftName}
            </Box>
          </Box>
          <Box mt={1} display="flex" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              color={theme.primary.text}
              fontWeight="400"
              fontSize="14px"
            >
              <img
                style={{ marginRight: "5px" }}
                width="17px"
                src={logo}
                alt=""
              />{" "}
              {price}
            </Box>
            {/* <Box ml={2} color="#03DB80" fontWeight="500" fontSize="15px">
                {apr}
              </Box> */}
          </Box>
        </Box>
      </Link>
    </Box>
  );
}
