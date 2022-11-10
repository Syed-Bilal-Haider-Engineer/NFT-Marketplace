import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  Typography,
  Divider,
} from "@mui/material";

import { UpperCardMain, BestSellers } from "./DashboardReuse";
import Chart from "./Chart";

import Flow from "../../../images/Flow.png";
import Ethereum from "../../../images/Ethereum.png";
import xtz from "../../../images/xtz.png";
import Art1 from "../../../images/Art1.png";
import Art2 from "../../../images/Art2.png";
import Art3 from "../../../images/Art4.png";

const DashboardMain = () => {
  const theme = useTheme();

  const upperCard = [
    {
      number: "316.94k",
      text: "Impressions",
      percentage: +10,
    },
    {
      number: "3.829",
      text: "Favorites",
      percentage: +2,
    },
    {
      number: "1.234",
      text: "Purchased",
      percentage: -3,
    },
  ];

  const cardList = [
    {
      img: Art1,
      text1: "Bored Ape Yacht Club",
      text2: "Art",
      text3: "10.0k",
      text4: "+18.60%",
      price: "4916",
      logo: Flow,
    },
    {
      img: Art2,
      text1: "Bored Ape Chemistry Club",
      text2: "Photography",
      text3: "8.3k",
      text4: "+24.5%",
      price: "99.1",
      logo: xtz,
    },
    {
      img: Art3,
      text1: "RTFKT CloneX Mintvial",
      text2: "Photography",
      text3: "14.5k",
      text4: "+13.00%",
      price: "4310",
      logo: Ethereum,
    },
    {
      img: Art2,
      text1: "Bored Ape Chemistry Club",
      text2: "Photography",
      text3: "8.3k",
      text4: "+24.5%",
      price: "99.1",
      logo: xtz,
    },
    {
      img: Art3,
      text1: "RTFKT CloneX Mintvial",
      text2: "Photography",
      text3: "14.5k",
      text4: "+13.00%",
      price: "4310",
      logo: Ethereum,
    },
  ];

  return (
    <>
      <Box bgcolor={theme.primary.bg} height="100%">
        <Container>
          <Typography
            mt={0.2}
            ml={{ xs: 1, md: 0 }}
            mb={3}
            variant="body1"
            sx={{
              fontSize: { md: "42px", xs: "28px" },
              color: theme.primary.text,
              fontWeight: "800",
            }}
          >
            Dashboard
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              overflowX: "scroll",
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                width: "2px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "transparent",
              },
            }}
          >
            {upperCard.map(({ number, text, percentage }, index) => {
              return (
                <UpperCardMain
                  number={number}
                  text={text}
                  percent={percentage}
                  value={index}
                />
              );
            })}
          </Box>

          <Box
            my={5}
            sx={{
              border: `1px solid rgba(207, 219, 213, 0.6)`,
              borderRadius: "12px",
            }}
          >
            <Box
              p={3}
              color={theme.primary.text}
              fontSize={{ xs: "15px", md: "18px" }}
              fontWeight="700"
              borderBottom="1px solid #979797"
            >
              Sales history
            </Box>
            <Divider />
            <Container>
              <Chart />
            </Container>

            <Typography
              variant="body1"
              borderTop="1px solid #979797"
              p={2}
              sx={{
                fontFamily: "Inter",
                fontSize: "12px",
                color: theme.primary.text,
                fontWeight: "500",
              }}
            >
              Bestsellers
            </Typography>
            <Box mt={1} p={2}>
              {cardList.map(
                ({ img, text1, text2, text3, text4, price, logo }, i) => {
                  return (
                    <BestSellers
                      img={img}
                      text1={text1}
                      text2={text2}
                      text3={text3}
                      text4={text4}
                      price={price}
                      logo={logo}
                    />
                  );
                }
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DashboardMain;
