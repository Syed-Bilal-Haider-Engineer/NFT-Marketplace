import { Box, Container, Typography, Grid, Tab, styled } from "@mui/material";
import { useTheme } from "@emotion/react";
import Tabs from "@mui/material/Tabs";

import Art1 from "../../images/Art1.png";
import Art2 from "../../images/Art2.png";
import Art3 from "../../images/Art3.png";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import tranding4 from "../../images/tranding4.png";
import img from "../../images/img.png";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import xtz from "../../images/xtz.png";
import Flow from "../../images/Flow.png";
import Ethereum from "../../images/Ethereum.png";
import MarketPlaceCard from "./MarketPlaceCard";
import { Link } from "react-router-dom";
import { useState } from "react";

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

function MarketPlace() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardData = [
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
  ];

  const theme = useTheme();

  return (
    <Box py={5} bgcolor={theme.primary.bg}>
      <Container>
        <Typography
          sx={{
            color: theme.primary.text,
            fontSize: { md: "28px", xs: "20px" },
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Explore NFTs
        </Typography>

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
          <Box my={4}>
            <Grid container spacing={2}>
              {cardData.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Link
                        to="/collections"
                        style={{ textDecoration: "none" }}
                      >
                        <MarketPlaceCard
                          img={img}
                          icon={icon}
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
          <Box my={4}>
            <Grid container spacing={2}>
              {cardData.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Link
                        to="/collections"
                        style={{ textDecoration: "none" }}
                      >
                        <MarketPlaceCard
                          img={img}
                          icon={icon}
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
        <TabPanel value={value} index={2}>
          <Box my={4}>
            <Grid container spacing={2}>
              {cardData.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Link
                        to="/collections"
                        style={{ textDecoration: "none" }}
                      >
                        <MarketPlaceCard
                          img={img}
                          icon={icon}
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
        <TabPanel value={value} index={3}>
          <Box my={4}>
            <Grid container spacing={2}>
              {cardData.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Link
                        to="/collections"
                        style={{ textDecoration: "none" }}
                      >
                        <MarketPlaceCard
                          img={img}
                          icon={icon}
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
        <TabPanel value={value} index={4}>
          <Box my={4}>
            <Grid container spacing={2}>
              {cardData.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Link
                        to="/collections"
                        style={{ textDecoration: "none" }}
                      >
                        <MarketPlaceCard
                          img={img}
                          icon={icon}
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
        <TabPanel value={value} index={5}>
          <Box my={4}>
            <Grid container spacing={2}>
              {cardData.map(
                (
                  { img, icon, name, owner, currencyLogo, favourite, price },
                  i
                ) => {
                  return (
                    <Grid item xs={12} sm={4} md={3}>
                      <Link
                        to="/collections"
                        style={{ textDecoration: "none" }}
                      >
                        <MarketPlaceCard
                          img={img}
                          icon={icon}
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
export default MarketPlace;
