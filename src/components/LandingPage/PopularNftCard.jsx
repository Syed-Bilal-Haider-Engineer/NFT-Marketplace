import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function PopularNftCard({
  img,
  icon,
  name,
  owner,
  description,
  favourite,
}) {
  const theme = useTheme();
  return (
    <Box
      height="100%"
      textAlign="center"
      border="1px solid #2C3739"
      pb={1}
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
        color="rgba(255, 255, 255, 0.5)"
        fontSize={{ xs: "13px", md: "14px" }}
      >
        by {owner}
      </Typography>
      <Typography
        color={theme.primary.text}
        fontSize={{ xs: "13px", md: "14px" }}
        px={{ xs: 1, md: 3 }}
        mb={1}
        mt={2}
      >
        {description}
      </Typography>
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
