import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import lady from "../../images/lady.png";
import ladybg from "../../images/ladybg.png";
import play from "../../images/play.png";
import fb from "../../images/fb.png";
import twitter from "../../images/twitter.png";
import In from "../../images/In.png";
import insta from "../../images/insta.png";
import youtube from "../../images/youtube.png";
import sh1 from "../../images/sh1.png";
import sh10 from "../../images/sh10.png";
import { Link } from "react-router-dom";

export default function Eleven({ setOpen }) {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <Box
      position="relative"
      id="home"
      sx={{
        background: theme.primary.bg,
      }}
    >
      <img
        src={sh10}
        alt=""
        style={{
          position: "absolute",
          width: "40%",
          bottom: "-60%",
          left: "0px",
          // zIndex: -1,
        }}
      />
      {/* <img
        src={sh2}
        alt=""
        style={{
          position: "absolute",
          width: "60%",
          bottom: "0px",
          right: "0px",
        }}
      /> */}
      <Container maxWidth="xl">
        <Box
          sx={{
            px: 1,
          }}
          pt={5}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  marginTop: matches ? "30px" : "110px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { md: "42px", xs: "24px" },
                    textAlign: "center",
                    paddingLeft: { md: "0px", xs: "13px" },
                    margin: { xs: "auto", md: 0 },
                    fontFamily: "inter",
                    width: "fit-content",
                    background:
                      "linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  Discover, collect, and sell extraordinary NFTs{" "}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    py: "20px",
                    fontSize: { md: "16px", xs: "12px" },
                    lineHeight: { md: "1.3", xs: "1.2" },
                    textAlign: "center",
                    color: "#FFFFFF",
                    // textAlign: { md: "left", xs: "center" },
                  }}
                  fontFamily="inter"
                >
                  Our marketplace is the world's first and largest NFT market
                  for
                  <br /> independent creators worldwide
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: matches ? "10px" : "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box display="flex">
                  <img
                    src={play}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                    alt=""
                  />
                  <Typography
                    sx={{
                      color: "#0DF17F",
                      fontSize: { md: "18px", xs: "14px" },
                    }}
                  >
                    Learn More about NFTALY
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  marginTop: matches ? "20px" : "70px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "5px",
                    border: "1px transparent",
                    backgroundImage:
                      " linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                    boxShadow: "3px 8px 17px rgba(0, 0, 0, 0.15)",
                    padding: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      padding: "14px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={fb}
                      width="12px"
                      style={{ marginRight: "22px" }}
                      alt=""
                    />
                    <img
                      src={twitter}
                      width="22px"
                      style={{ marginRight: "22px" }}
                      alt=""
                    />
                    <img
                      src={In}
                      width="18px"
                      style={{ marginRight: "22px" }}
                      alt=""
                    />
                    <img
                      src={insta}
                      width="18px"
                      style={{ marginRight: "22px" }}
                      alt=""
                    />
                    <img src={youtube} width="20px" alt="" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                pb={5}
                sx={{
                  marginTop: { md: "60px", xs: "50px" },
                  position: "relative",
                }}
              >
                <img src={ladybg} width="100%" alt="grid" />
                <img
                  src={lady}
                  alt="grid"
                  className="lady_moving"
                  style={{
                    width: matches ? "50%" : "43%",
                    position: "absolute",
                    top: "5%",
                    left: matches ? "30%" : "35%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
