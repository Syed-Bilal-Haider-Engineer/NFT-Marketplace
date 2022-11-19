import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Grid,
  styled,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import Loading from "../../loading";
import React, { useState, useEffect } from "react";
import banner from "../../images/banner.png";
import UserProfileCards from "./UserProfileCards";
import UserProfileSidebar from "./UserProfileSidebar";
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
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import sh14 from "../../images/sh14.png";
import sh13 from "../../images/sh13.png";
import sh12 from "../../images/sh12.png";
import axios from "axios";
import { url } from "../URL";
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

function UserProfile({ id }) {
  const [value, setValue] = useState(0);
  const [renderState, setRenderstate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userprofile, setProfilestate] = useState("");
  const matches = useMediaQuery("(max-width:750px)");
  const theme = useTheme();
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
  ];

  /////////////////Fetch login  user details //////////////
  const fetchuser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}/getuser/${id}`);
      console.log("Profile value", data);
      setProfilestate(data?.data);
      setLoading(false);
    } catch (error) {
      console.log("user profile value error", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchuser();
  }, [renderState, id]);
  console.log("userprofile:", userprofile);
  return (
    <>
      <Loading loading={loading} />
      <Box
        position="relative"
        mt={matches ? -2 : -10}
        pb={5}
        width="100%"
        bgcolor={theme.primary.bg}
      >
        <img
          src={sh13}
          alt=""
          style={{
            position: "absolute",
            width: "60%",
            top: "5%",
            left: "0%",
            // zIndex: -1,
          }}
        />
        <img
          src={sh14}
          alt=""
          style={{
            position: "absolute",
            width: "30%",
            top: "65%",
            left: "-5%",
            // zIndex: -1,
          }}
        />
        <img
          src={sh12}
          alt=""
          style={{
            position: "absolute",
            width: "40%",
            top: "85%",
            left: "50%",
            // zIndex: -1,
          }}
        />
        <Box width="100%">
          <img width="100%" src={banner} alt="" />
        </Box>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={2.5} zIndex={1}>
              <UserProfileSidebar
                userInfo={userprofile}
                setRenderstate={setRenderstate}
                state={renderState}
              />
            </Grid>
            <Grid item ml={matches ? 0 : 3} xs={12} sm={8.5} zIndex={1}>
              <Box
                mt={5}
                display="flex"
                alignItems="center"
                //   justifyContent="center"
                pt={3}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  sx={{
                    "& .MuiTabs-indicator": {
                      // display: "none",
                      background: theme.primary.bgButtonTwo,
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
                        {
                          img,
                          icon,
                          name,
                          owner,
                          currencyLogo,
                          favourite,
                          price,
                        },
                        i
                      ) => {
                        return (
                          <Grid key={i} item xs={12} sm={4} md={4}>
                            <UserProfileCards
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
                        {
                          img,
                          icon,
                          name,
                          owner,
                          currencyLogo,
                          favourite,
                          price,
                        },
                        i
                      ) => {
                        return (
                          <Grid key={i} item xs={12} sm={4} md={4}>
                            <UserProfileCards
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
                        {
                          img,
                          icon,
                          name,
                          owner,
                          currencyLogo,
                          favourite,
                          price,
                        },
                        i
                      ) => {
                        return (
                          <Grid key={i} item xs={12} sm={4} md={4}>
                            <UserProfileCards
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
                        {
                          img,
                          icon,
                          name,
                          owner,
                          currencyLogo,
                          favourite,
                          price,
                        },
                        i
                      ) => {
                        return (
                          <Grid key={i} item xs={12} sm={4} md={4}>
                            <UserProfileCards
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
                        {
                          img,
                          icon,
                          name,
                          owner,
                          currencyLogo,
                          favourite,
                          price,
                        },
                        i
                      ) => {
                        return (
                          <Grid key={i} item xs={12} sm={4} md={4}>
                            <UserProfileCards
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
                        {
                          img,
                          icon,
                          name,
                          owner,
                          currencyLogo,
                          favourite,
                          price,
                        },
                        i
                      ) => {
                        return (
                          <Grid key={i} item xs={12} sm={4} md={4}>
                            <UserProfileCards
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
              <Box
                mt={2}
                py={3}
                display="flex"
                justifyContent="center"
                width="100%"
              >
                <Box
                  width="241px"
                  height="46px"
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
    </>
  );
}
export default React.memo(UserProfile);
