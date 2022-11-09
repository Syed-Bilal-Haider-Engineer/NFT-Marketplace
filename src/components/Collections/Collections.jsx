import {
  Box,
  Container,
  styled,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Cards from "./Cards";

import bgCol from "../../images/bgCol.png";
import ImgCol from "../../images/ImgCol.png";
import Art1 from "../../images/Art1.png";
import Art2 from "../../images/Art2.png";
import Art3 from "../../images/Art3.png";
import tranding4 from "../../images/tranding4.png";
import img from "../../images/ArtS7.png";
import img1 from "../../images/ArtS7.png";
import img2 from "../../images/ArtS7.png";
import img3 from "../../images/ArtS7.png";
import xtz from "../../images/xtz.png";
import Flow from "../../images/Flow.png";
import Ethereum from "../../images/Ethereum.png";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import twitter from "../../images/tw.png";

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "700",
    fontSize: "14px",
    color: "#5D5D5B",
    "&.Mui-selected": {
      color: theme.primary.text,
    },
  })
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value != index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value == index && (
        <Box mt={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function Collections() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardData1 = [
    {
      img: `${card3}`,
      icon: `${img1}`,
      name: "Capturing Memories",
      owner: "Chioke Okonkwo",
      currencyLogo: `${xtz}`,
      favourite: "18",
      price: "2.98 XTZ",
    },
    {
      img: `${card4}`,
      icon: `${img}`,
      name: "Venture Capitalist",
      owner: "Wim Willems",
      currencyLogo: `${Ethereum}`,
      favourite: "12",
      price: "0.45 Ethereum",
    },

    {
      img: `${Art2}`,
      icon: `${img2}`,
      name: "Lorr’s Ad Issues",
      owner: "Sijmen Immens",
      currencyLogo: `${xtz}`,
      favourite: "19",
      price: "21.65 XTZ",
    },
    {
      img: `${tranding4}`,
      icon: `${img}`,
      name: "Venture Capitalist",
      owner: "Wim Willems",
      currencyLogo: `${Ethereum}`,
      favourite: "12",
      price: "2.45 Ethereum",
    },
    {
      img: `${Art1}`,
      icon: `${img1}`,
      name: "Capturing Memories",
      owner: "Chioke Okonkwo",
      currencyLogo: `${xtz}`,
      favourite: "18",
      price: "0.75 XTZ",
    },
    {
      img: `${Art3}`,
      icon: `${img3}`,
      name: "Week Ahead",
      owner: "Ya Chin-Ho",
      currencyLogo: `${Flow}`,
      favourite: "32",
      price: "17.45 Flow",
    },
    {
      img: `${card1}`,
      icon: `${img3}`,
      name: "Week Ahead",
      owner: "Ya Chin-Ho",
      currencyLogo: `${Flow}`,
      favourite: "32",
      price: "0.45 Flow",
    },
    {
      img: `${card2}`,
      icon: `${img2}`,
      name: "Lorr’s Ad Issues",
      owner: "Sijmen Immens",
      currencyLogo: `${xtz}`,
      favourite: "19",
      price: "4.45 XTZ",
    },
  ];

  const theme = useTheme();
  const matches = useMediaQuery("(max-width:800px)");

  return (
    <Box mt={-10} bgcolor={theme.primary.bg}>
      <Container>
        <Box mt={2}>
          <img
            width="100%"
            src={bgCol}
            style={{ borderRadius: "20px" }}
            alt=""
          />
        </Box>
        <Box mt={-6} textAlign="center" width="100%">
          <img src={ImgCol} alt="" />
        </Box>
        <Typography
          sx={{
            color: theme.primary.text,
            fontSize: { md: "28px", xs: "20px" },
            fontWeight: "800",
            textAlign: "center",
          }}
          mt={2}
        >
          Famous Minions
        </Typography>
        <Box mt={1} fontSize="14px" color="#5D5D5B" textAlign="center">
          8,888 NFTs of beautiful, Asian women painstakingly-crafted where even{" "}
          <br />
          the most intricate details are steeped in historical significance.
        </Box>
        <Box mt={3} width="100%" display="flex" justifyContent="center">
          <Box
            px={1}
            py={0.5}
            fontSize="14px"
            border="1px solid #5D5D5B"
            borderRadius="50px"
            textAlign="center"
            color={theme.primary.text}
            width="250px"
          >
            <img src={twitter} alt="" style={{ marginRight: "10px" }} />{" "}
            @FamousMinions
          </Box>
        </Box>

        <Grid mt={2} container spacing={2} justifyContent="center">
          <Grid item xs={6} md={3}>
            <Link to="/explore" style={{ textDecoration: "none" }}>
              <Box
                py={2}
                px={matches ? 2 : 7}
                sx={{
                  border: theme.primary.btnBorder,
                  textAlign: "center",
                  borderRadius: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#5d5d5b",
                  }}
                >
                  Floor Price
                </Typography>
                <Typography
                  mt={1}
                  sx={{
                    fontSize: "18px",
                    color: theme.primary.text,
                    fontWeight: "800",
                  }}
                >
                  29.45 USD
                </Typography>
                <Typography
                  mt={1}
                  sx={{
                    fontSize: "12px",
                    color: "#7A52F4",
                    fontWeight: "700",
                  }}
                >
                  +5.18%
                </Typography>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Link to="/explore" style={{ textDecoration: "none" }}>
              <Box
                py={2}
                px={matches ? 2 : 7}
                sx={{
                  border: theme.primary.btnBorder,
                  textAlign: "center",
                  borderRadius: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#5d5d5b",
                  }}
                >
                  Floor Price
                </Typography>
                <Typography
                  mt={1}
                  sx={{
                    fontSize: "18px",
                    color: theme.primary.text,
                    fontWeight: "800",
                  }}
                >
                  29.45 USD
                </Typography>
                <Typography
                  mt={1}
                  sx={{
                    fontSize: "12px",
                    color: "#7A52F4",
                    fontWeight: "700",
                  }}
                >
                  +5.18%
                </Typography>
              </Box>
            </Link>
          </Grid>
          {!matches && (
            <Grid item xs={6} md={3}>
              <Link to="/explore" style={{ textDecoration: "none" }}>
                <Box
                  py={2}
                  px={7}
                  sx={{
                    border: theme.primary.btnBorder,
                    textAlign: "center",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#5d5d5b",
                    }}
                  >
                    Floor Price
                  </Typography>
                  <Typography
                    mt={1}
                    sx={{
                      fontSize: "18px",
                      color: theme.primary.text,
                      fontWeight: "800",
                    }}
                  >
                    29.45 USD
                  </Typography>
                  <Typography
                    mt={1}
                    sx={{
                      fontSize: "12px",
                      color: "#7A52F4",
                      fontWeight: "700",
                    }}
                  >
                    +5.18%
                  </Typography>
                </Box>
              </Link>
            </Grid>
          )}
          {!matches && (
            <Grid item xs={6} md={3}>
              <Link to="/explore" style={{ textDecoration: "none" }}>
                <Box
                  py={2}
                  px={7}
                  sx={{
                    border: theme.primary.btnBorder,
                    textAlign: "center",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#5d5d5b",
                    }}
                  >
                    Floor Price
                  </Typography>
                  <Typography
                    mt={1}
                    sx={{
                      fontSize: "18px",
                      color: theme.primary.text,
                      fontWeight: "800",
                    }}
                  >
                    29.45 USD
                  </Typography>
                  <Typography
                    mt={1}
                    sx={{
                      fontSize: "12px",
                      color: "#7A52F4",
                      fontWeight: "700",
                    }}
                  >
                    +5.18%
                  </Typography>
                </Box>
              </Link>
            </Grid>
          )}
        </Grid>

        <Box
          mt={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          pt={3}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .MuiTabs-indicator": {
                // display: "none",
                background: theme.primary.text,
              },
            }}
          >
            <AntTab label="All" />
            <AntTab label="Trending" />
            <AntTab label="Collectibles" />
            <AntTab label="Domain Names" />
            <AntTab label="Music" />
            <AntTab label="Photography" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Box my={5}>
            <Grid container spacing={2}>
              {cardData1.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Cards
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        currencyLogo={currencyLogo}
                        favourite={favourite}
                        price={price}
                      />
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box my={5}>
            <Grid container spacing={2}>
              {cardData1.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Cards
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        currencyLogo={currencyLogo}
                        favourite={favourite}
                        price={price}
                      />
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Box my={5}>
            <Grid container spacing={2}>
              {cardData1.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Cards
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        currencyLogo={currencyLogo}
                        favourite={favourite}
                        price={price}
                      />
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Box my={5}>
            <Grid container spacing={2}>
              {cardData1.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Cards
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        currencyLogo={currencyLogo}
                        favourite={favourite}
                        price={price}
                      />
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Box my={5}>
            <Grid container spacing={2}>
              {cardData1.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Cards
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        currencyLogo={currencyLogo}
                        favourite={favourite}
                        price={price}
                      />
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={5}>
          <Box my={5}>
            <Grid container spacing={2}>
              {cardData1.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Cards
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        currencyLogo={currencyLogo}
                        favourite={favourite}
                        price={price}
                      />
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Box>
        </TabPanel>

        <Box mt={2} py={3} display="flex" justifyContent="center" width="100%">
          <Box
            width="170px"
            height="42px"
            bgcolor={theme.primary.bgButtonTwo}
            borderRadius="50px"
            sx={{ cursor: "pointer" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color={theme.primary.subtext}
            fontWeight="700"
            fontSize="14px"
            style={{ zIndex: 1 }}
          >
            Load More
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Collections;
