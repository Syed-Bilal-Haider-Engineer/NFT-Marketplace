import {
  Box,
  Container,
  styled,
  Typography,
  Grid,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Cards from "./Cards";
import eth11 from "../../images/eth11.png";
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
import Checkbox from "@mui/material/Checkbox";
import Bars from "../../images/Bars.png";
import sh12 from "../../images/sh12.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CallMadeIcon from "@mui/icons-material/CallMade";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function valuetext(value) {
  return `${value}°C`;
}
const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "700",
    fontSize: "14px",
    color: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRadius: "30px",
    marginRight: "10px",
    "&.Mui-selected": {
      color: theme.primary.subtext,
      background: "#0DF17F",
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
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardData1 = [
    {
      img: `${card3}`,
      icon: `${img1}`,
      name: "Capturing Memories",
      owner: "Ham Chuwon",
      AuctionPrice: "$1.00",
      BuyPrice: "$10.00",
      currencyLogo: `${xtz}`,
      favourite: "18",
      price: "2.98 XTZ",
    },
    {
      img: `${card4}`,
      icon: `${img}`,
      name: "Venture Capitalist",
      owner: "Ham Chuwon",
      AuctionPrice: "$1.00",
      BuyPrice: "$10.00",
      currencyLogo: `${Ethereum}`,
      favourite: "12",
      price: "0.45 Ethereum",
    },

    {
      img: `${Art2}`,
      icon: `${img2}`,
      name: "Lorr’s Ad Issues",
      owner: "Ham Chuwon",
      AuctionPrice: "$1.00",
      BuyPrice: "$10.00",
      currencyLogo: `${xtz}`,
      favourite: "19",
      price: "21.65 XTZ",
    },

    {
      img: `${Art1}`,
      icon: `${img1}`,
      name: "Capturing Memories",
      AuctionPrice: "$1.00",
      BuyPrice: "$10.00",
      owner: "Ham Chuwon",
      currencyLogo: `${xtz}`,
      favourite: "18",
      price: "0.75 XTZ",
    },
    {
      img: `${Art3}`,
      icon: `${img3}`,
      name: "Week Ahead",
      owner: "Ham Chuwon",
      AuctionPrice: "$1.00",
      BuyPrice: "$10.00",
      currencyLogo: `${Flow}`,
      favourite: "32",
      price: "17.45 Flow",
    },
    {
      img: `${card1}`,
      icon: `${img3}`,
      name: "Week Ahead",
      owner: "Ham Chuwon",
      AuctionPrice: "$1.00",
      BuyPrice: "$10.00",
      currencyLogo: `${Flow}`,
      favourite: "32",
      price: "0.45 Flow",
    },
  ];

  const theme = useTheme();
  const matches = useMediaQuery("(max-width:800px)");
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue1) => {
    setValue1(newValue1);
  };
  return (
    <Box pt={4} bgcolor={theme.primary.bg} position="relative">
      <img
        src={sh12}
        alt=""
        style={{
          position: "absolute",
          width: "70%",
          bottom: matches ? "-3%" : "-25%",
          left: "-16%",
          // zIndex: -1,
        }}
      />
      <img
        src={sh12}
        alt=""
        style={{
          position: "absolute",
          width: "90%",
          bottom: matches ? "10%" : "40%",
          left: "10%",
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg">
        <Box position="relative">
          <Box
            position="absolute"
            right={matches ? "10px" : "20px"}
            top={matches ? "3px" : "10px"}
            display="flex"
          >
            <Box
              mr={matches ? 0.5 : 1}
              width={matches ? "74px" : "174px"}
              height={matches ? "24px" : "46px"}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="26px"
              fontSize={matches ? "7px" : "14px"}
              fontWeight={matches ? "700" : "700"}
              sx={{
                background: "#0DF17F",
                color: "#000",
                cursor: "pointer",
              }}
            >
              <FavoriteBorderIcon
                style={{
                  color: "#000",
                  marginRight: matches ? "2px" : "10px",
                  fontSize: matches ? "8px" : "",
                }}
              />
              Add to Wishlist
            </Box>
            <Box
              mr={matches ? 0.5 : 1}
              width={matches ? "22px" : "44px"}
              height={matches ? "22px" : "44px"}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="50%"
              sx={{
                background: "#000",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <CallMadeIcon sx={{ fontSize: matches ? "13px" : "18px" }} />
            </Box>
            <Box
              width={matches ? "22px" : "44px"}
              height={matches ? "22px" : "44px"}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="50%"
              sx={{
                background: "#000",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <MoreHorizIcon sx={{ fontSize: matches ? "13px" : "18px" }} />
            </Box>
          </Box>
          <img
            width="100%"
            src={bgCol}
            style={{ borderRadius: "20px" }}
            alt=""
          />
          <Box mt={-6} textAlign="center" width="100%">
            <img src={ImgCol} alt="" />
          </Box>
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
          8SIAN Main Collection
        </Typography>
        {/* <Button
          onClick={() => navigate("/chat", { state: { walletAddress: "456" } })}
        >
          Send Message
        </Button> */}
        <Typography
          sx={{
            color: theme.primary.text,
            fontSize: { md: "14px", xs: "12px" },
            fontWeight: "600",
            textAlign: "center",
          }}
          mt={2}
        >
          created by <span style={{ color: "#0DF17F" }}>@asian</span>
        </Typography>
        <Container maxWidth="md">
          <Grid
            zIndex={2}
            mt={2}
            container
            spacing={2}
            justifyContent="center"
            // border="2px solid #0DF17F"
            borderRadius="16px"
            sx={{
              border: "1px transparent",
              backgroundImage:
                " linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
              boxShadow: "3px 8px 17px rgba(0, 0, 0, 0.15)",
              padding: "2px",
            }}
          >
            <Grid item xs={6} md={3} borderRight="1px solid gray">
              <Link to="/explore" style={{ textDecoration: "none" }}>
                <Box
                  py={2}
                  px={matches ? 2 : 4}
                  sx={{
                    // border: theme.primary.btnBorder,
                    textAlign: "center",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    mt={1}
                    sx={{
                      fontSize: "20px",
                      color: theme.primary.text,
                      fontWeight: "800",
                    }}
                  >
                    8.9k
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      fontSize: "12px",
                      color: "#5d5d5b",
                    }}
                  >
                    Items
                  </Typography>
                </Box>
              </Link>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
              borderRight={matches ? "" : "1px solid gray"}
            >
              <Link to="/explore" style={{ textDecoration: "none" }}>
                <Box
                  py={2}
                  px={matches ? 2 : 4}
                  sx={{
                    // border: theme.primary.btnBorder,
                    textAlign: "center",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    mt={1}
                    sx={{
                      fontSize: "18px",
                      color: theme.primary.text,
                      fontWeight: "800",
                    }}
                  >
                    12.8k
                  </Typography>
                  <Typography
                    pb={1}
                    sx={{
                      fontSize: "12px",
                      color: "#5d5d5b",
                    }}
                  >
                    owners
                  </Typography>
                </Box>
              </Link>
            </Grid>
            {/* {!matches && ( */}
            <Grid item xs={6} md={3} borderRight="1px solid gray">
              <Link to="/explore" style={{ textDecoration: "none" }}>
                <Box
                  py={2}
                  px={7}
                  sx={{
                    // border: theme.primary.btnBorder,
                    textAlign: "center",
                    borderRadius: "12px",
                  }}
                >
                  <Box display="flex" justifyContent="center">
                    <img src={eth11} width="30px" height="30px" alt="" />
                    <Typography
                      mt={1}
                      ml={1}
                      sx={{
                        fontSize: "18px",
                        color: theme.primary.text,
                        fontWeight: "800",
                      }}
                    >
                      0.209k
                    </Typography>
                  </Box>
                  <Typography
                    pb={1}
                    sx={{
                      fontSize: "12px",
                      color: "#5d5d5b",
                    }}
                  >
                    Floor Price
                  </Typography>
                </Box>
              </Link>
            </Grid>
            {/* // )} */}
            {/* {!matches && ( */}
            <Grid item xs={6} md={3}>
              <Link to="/explore" style={{ textDecoration: "none" }}>
                <Box
                  py={2}
                  px={7}
                  sx={{
                    // border: theme.primary.btnBorder,
                    textAlign: "center",
                    borderRadius: "12px",
                  }}
                >
                  <Box display="flex" justifyContent="center">
                    <img src={eth11} width="30px" height="30px" alt="" />
                    <Typography
                      mt={1}
                      ml={1}
                      sx={{
                        fontSize: "18px",
                        color: theme.primary.text,
                        fontWeight: "800",
                      }}
                    >
                      4.8k
                    </Typography>
                  </Box>
                  <Typography
                    pb={1}
                    sx={{
                      fontSize: "12px",
                      color: "#5d5d5b",
                    }}
                  >
                    <Typography
                      pb={1}
                      sx={{
                        fontSize: "12px",
                        color: "#5d5d5b",
                      }}
                    >
                      volume
                    </Typography>
                  </Typography>
                </Box>
              </Link>
            </Grid>
            {/* // )} */}
          </Grid>
        </Container>
        <Box mt={3} fontSize="14px" color="#5D5D5B" textAlign="center">
          8,888 NFTs of beautiful, Asian women painstakingly-crafted where even{" "}
          <br />
          the most intricate details are steeped in historical significance.
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box mt={8.2} display="flex" justifyContent="space-between">
              <Typography mt={1} color="#fff" fontSize="20px" fontWeight={900}>
                Filters
              </Typography>
              <Box
                // mt={8.5}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100px"
                height="50px"
                sx={{
                  fontWeight: "700",
                  fontSize: "14px",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  borderRadius: "30px",
                }}
              >
                {" "}
                Reset
              </Box>
            </Box>
            <Box mt={5.2}>
              <Accordion
                sx={{
                  background: "transparent",
                  border: "2px solid gray",
                  color: "#fff",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "#fff",
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Status</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box display="flex">
                    <Box
                      mr={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="100px"
                      height="50px"
                      sx={{
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "#ffffff",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "30px",
                      }}
                    >
                      {" "}
                      Buy now
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="120px"
                      height="50px"
                      sx={{
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "#ffffff",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "30px",
                      }}
                    >
                      {" "}
                      On Auction
                    </Box>
                  </Box>
                  <Box display="flex" mt={1}>
                    <Box
                      mr={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="120px"
                      height="50px"
                      sx={{
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "#ffffff",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "30px",
                      }}
                    >
                      {" "}
                      Accept Offer
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      width="100px"
                      height="50px"
                      sx={{
                        fontWeight: "700",
                        fontSize: "14px",
                        color: "#ffffff",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderRadius: "30px",
                      }}
                    >
                      {" "}
                      New
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                sx={{
                  background: "transparent",
                  border: "2px solid gray",
                  color: "#fff",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "#fff",
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Chains</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      fontSize="12px"
                      fontWeight="700"
                      display="flex"
                      alignItems="center"
                    >
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "gray",
                          "&.Mui-checked": {
                            color: "#0DF17F",
                          },
                        }}
                      />
                      Ehtereum
                    </Box>
                    <Typography
                      sx={{
                        height: "18px",
                        width: "34px",
                        fontSize: "12px",
                        border: "1px solid gray",
                        borderRadius: "16px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      289
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      fontSize="12px"
                      fontWeight="700"
                      display="flex"
                      alignItems="center"
                    >
                      <Checkbox
                        sx={{
                          color: "gray",
                          "&.Mui-checked": {
                            color: "#0DF17F",
                          },
                        }}
                      />
                      FLow
                    </Box>
                    <Typography
                      sx={{
                        height: "18px",
                        width: "34px",
                        fontSize: "12px",
                        border: "1px solid gray",
                        borderRadius: "16px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      84
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      fontSize="12px"
                      fontWeight="700"
                      display="flex"
                      alignItems="center"
                    >
                      <Checkbox
                        sx={{
                          color: "gray",
                          "&.Mui-checked": {
                            color: "#0DF17F",
                          },
                        }}
                      />
                      Tezos
                    </Box>
                    <Typography
                      sx={{
                        height: "18px",
                        width: "34px",
                        fontSize: "12px",
                        border: "1px solid gray",
                        borderRadius: "16px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      95
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                sx={{
                  background: "transparent",
                  border: "2px solid gray",
                  color: "#fff",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "#fff",
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Price</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <img src={Bars} width={matches ? "100%" : "233px"} alt="" />
                  <Box sx={{ width: matches ? "100%" : "233px" }}>
                    <Slider
                      sx={{ color: "#0DF17F" }}
                      getAriaLabel={() => "Temperature range"}
                      value={value1}
                      onChange={handleChange1}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>$15.700</Typography>
                    <Typography>$38.700</Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                sx={{
                  background: "transparent",
                  border: "2px solid gray",
                  color: "#fff",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "#fff",
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Primary Colors</Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </Box>
            <Box mt={2}>
              <Accordion
                sx={{
                  background: "transparent",
                  border: "2px solid gray",
                  color: "#fff",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "#fff",
                      }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Backgrounds</Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            {/* <Box display="flex" justifyContent="space-between"> */}
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
                variant="scrollable"
                scrollButtons={false}
                sx={{
                  "& .MuiTabs-indicator": {
                    display: "none",
                    // background: theme.primary.text,
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
            {/* <Box
                mt={8.5}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100px"
                height="50px"
                sx={{
                  fontWeight: "700",
                  fontSize: "14px",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  borderRadius: "30px",
                }}
              >
                {" "}
                Sort by
              </Box>
            </Box> */}
            <TabPanel value={value} index={0}>
              <Box my={5}>
                <Grid container spacing={2}>
                  {cardData1.map(
                    (
                      {
                        img,
                        icon,
                        name,
                        AuctionPrice,
                        BuyPrice,
                        owner,
                        currencyLogo,
                        favourite,
                        price,
                      },
                      i
                    ) => {
                      return (
                        <Grid key={i} item xs={12} sm={4} md={4}>
                          <Link
                            to="/explore"
                            style={{ textDecoration: "none" }}
                          >
                            <Cards
                              img={img}
                              icon={icon}
                              AuctionPrice={AuctionPrice}
                              BuyPrice={BuyPrice}
                              name={name}
                              owner={owner}
                              currencyLogo={currencyLogo}
                              favourite={favourite}
                              price={price}
                            />
                          </Link>
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
                      {
                        img,
                        icon,
                        name,
                        owner,
                        AuctionPrice,
                        BuyPrice,
                        currencyLogo,
                        favourite,
                        price,
                      },
                      i
                    ) => {
                      return (
                        <Grid key={i} item xs={12} sm={4} md={4}>
                          <Link
                            to="/explore"
                            style={{ textDecoration: "none" }}
                          >
                            <Cards
                              img={img}
                              icon={icon}
                              name={name}
                              AuctionPrice={AuctionPrice}
                              BuyPrice={BuyPrice}
                              owner={owner}
                              currencyLogo={currencyLogo}
                              favourite={favourite}
                              price={price}
                            />
                          </Link>
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
                      {
                        img,
                        icon,
                        name,
                        AuctionPrice,
                        BuyPrice,
                        owner,
                        currencyLogo,
                        favourite,
                        price,
                      },
                      i
                    ) => {
                      return (
                        <Grid key={i} item xs={12} sm={4} md={4}>
                          <Link
                            to="/explore"
                            style={{ textDecoration: "none" }}
                          >
                            <Cards
                              img={img}
                              icon={icon}
                              name={name}
                              AuctionPrice={AuctionPrice}
                              BuyPrice={BuyPrice}
                              owner={owner}
                              currencyLogo={currencyLogo}
                              favourite={favourite}
                              price={price}
                            />
                          </Link>
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
                      {
                        img,
                        icon,
                        name,
                        AuctionPrice,
                        BuyPrice,
                        owner,
                        currencyLogo,
                        favourite,
                        price,
                      },
                      i
                    ) => {
                      return (
                        <Grid key={i} item xs={12} sm={4} md={4}>
                          <Link
                            to="/explore"
                            style={{ textDecoration: "none" }}
                          >
                            <Cards
                              img={img}
                              icon={icon}
                              name={name}
                              owner={owner}
                              AuctionPrice={AuctionPrice}
                              BuyPrice={BuyPrice}
                              currencyLogo={currencyLogo}
                              favourite={favourite}
                              price={price}
                            />
                          </Link>
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
                      {
                        img,
                        icon,
                        name,
                        AuctionPrice,
                        BuyPrice,
                        owner,
                        currencyLogo,
                        favourite,
                        price,
                      },
                      i
                    ) => {
                      return (
                        <Grid key={i} item xs={12} sm={4} md={4}>
                          <Link
                            to="/explore"
                            style={{ textDecoration: "none" }}
                          >
                            <Cards
                              img={img}
                              icon={icon}
                              name={name}
                              owner={owner}
                              AuctionPrice={AuctionPrice}
                              BuyPrice={BuyPrice}
                              currencyLogo={currencyLogo}
                              favourite={favourite}
                              price={price}
                            />
                          </Link>
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
                      {
                        img,
                        icon,
                        name,
                        AuctionPrice,
                        BuyPrice,
                        owner,
                        currencyLogo,
                        favourite,
                        price,
                      },
                      i
                    ) => {
                      return (
                        <Grid key={i} item xs={12} sm={4} md={4}>
                          <Link
                            to="/explore"
                            style={{ textDecoration: "none" }}
                          >
                            <Cards
                              img={img}
                              icon={icon}
                              name={name}
                              owner={owner}
                              AuctionPrice={AuctionPrice}
                              BuyPrice={BuyPrice}
                              currencyLogo={currencyLogo}
                              favourite={favourite}
                              price={price}
                            />
                          </Link>
                        </Grid>
                      );
                    }
                  )}
                </Grid>
              </Box>
            </TabPanel>
            <Box
              mt={2}
              py={3}
              display="flex"
              justifyContent="center"
              width="100%"
            >
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default Collections;
