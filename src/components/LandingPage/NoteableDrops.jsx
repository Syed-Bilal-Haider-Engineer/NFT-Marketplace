import { useTheme } from "@emotion/react";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import nft1 from "../../images/Art1.png";
import nft2 from "../../images/Art2.png";
import nft3 from "../../images/Art3.png";
import nft4 from "../../images/Art4.png";
import Author1 from "../../images/Author1.png";
import Author2 from "../../images/Author2.png";
import Author3 from "../../images/Author3.png";
import Author4 from "../../images/Author4.png";
import xtz from "../../images/xtz.png";
import Flow from "../../images/Flow.png";
import eth11 from "../../images/eth11.png";
import sh11 from "../../images/sh11.png";
import LiveCards from "./LiveCards";
import { Link } from "react-router-dom";

export default function NoteableDrops() {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:700px)");

  function createData(img, nftName, bidPrice, likes, status, avatar, logo) {
    return { img, nftName, bidPrice, likes, status, avatar, logo };
  }
  const trendingArray = [
    createData(
      `${nft1}`,
      "Election Season",
      "0.42 XTZ",
      "24",
      "Live Now",
      `${Author1}`,
      `${Flow}`
    ),
    createData(
      `${nft2}`,
      "Week Ahead",
      "0.42 ETH",
      "19",
      "03 Aug 2022",
      `${Author2}`,
      `${eth11}`
    ),
    createData(
      `${nft3}`,
      "Science Jobs",
      "0.42 Flow",
      "32",
      "Live Now",
      `${Author3}`,
      `${Flow}`
    ),
    createData(
      `${nft4}`,
      "Behind One of Big Hacks",
      "0.42 XTZ",
      "43",
      "03 Aug 2022",
      `${Author4}`,
      `${xtz}`
    ),
  ];

  return (
    <Box position="relative" pt={5} bgcolor={theme.primary.bg}>
      <img
        src={sh11}
        alt=""
        style={{
          position: "absolute",
          width: "40%",
          bottom: "20%",
          right: "0px",
          // zIndex: -1,
        }}
      />
      <Container>
        <Box
          mb={5}
          fontSize={matches ? "22px" : "28px"}
          zIndex="1"
          fontWeight="800"
          style={{
            color: theme.primary.text,
          }}
          textAlign="left"
          width="100%"
        >
          Selected notable drops
        </Box>
        <Grid container spacing={2}>
          {trendingArray.length > 0
            ? trendingArray.map(
                (
                  { img, nftName, bidPrice, likes, status, avatar, logo },
                  i
                ) => (
                  //   <Link to="/detail" style={{ textDecoration: "none" }}>
                  <Grid key={i} item xs={12} sm={4} md={3}>
                    <LiveCards
                      img={img}
                      nftName={nftName}
                      bidPrice={bidPrice}
                      likes={likes}
                      status={status}
                      avatar={avatar}
                      logo={logo}
                    />
                  </Grid>
                  //   </Link>
                )
              )
            : null}
        </Grid>
      </Container>
    </Box>
  );
}
