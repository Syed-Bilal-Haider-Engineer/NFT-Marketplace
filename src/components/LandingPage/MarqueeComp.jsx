import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, useMediaQuery } from "@mui/material";
import binance from "../../images/binance.png";
import polygon from "../../images/polygon.png";
import eth from "../../images/Ethereum.png";
import Marquee from "react-fast-marquee";
export default function MarqueeComp() {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box
        sx={{
          background: theme.primary.bgHeader,
        }}
      >
        {/* <Container maxWidth="xl"> */}
        <Marquee
          style={{
            boxShadow: "0px 0px 50px 13px rgba(0, 0, 0, 0.25)",
          }}
          speed={50}
          pauseOnClick={true}
          pauseOnHover={true}
          gradient={false}
        >
          <Box
            p={2}
            sx={{}}
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            width="100%"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                marginRight: matches ? "25px" : "0px",
                width: "194px",
                height: "46px",
                background: "#03DB80",
                color: "#000",
                borderRadius: "23px",
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "Inter",
              }}
            >
              Select All
            </Box>

            <img
              src={binance}
              style={{ marginRight: matches ? "25px" : "0px" }}
              alt=""
            />

            <img
              src={polygon}
              style={{ marginRight: matches ? "25px" : "0px" }}
              alt=""
            />

            <img
              src={eth}
              style={{ marginRight: matches ? "25px" : "0px" }}
              alt=""
            />
          </Box>
        </Marquee>
        {/* </Container> */}
      </Box>
    </>
  );
}
