import { Box, Container, styled, Typography, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";

import PopularNftCard from "./PopularNftCard";

import popular1 from "../../images/popular1.png";
import popular2 from "../../images/popular2.png";
import popular3 from "../../images/popular3.png";
import popular4 from "../../images/popular4.png";
import popIcon1 from "../../images/popIcon1.png";
import popIcon2 from "../../images/popIcon2.png";
import popIcon3 from "../../images/popIcon3.png";
import popIcon4 from "../../images/popIcon4.png";
import Art1 from "../../images/Art1.png";
import Art2 from "../../images/Art2.png";
import Art3 from "../../images/Art3.png";
import sh12 from "../../images/sh12.png";
import tranding4 from "../../images/tranding4.png";
import img from "../../images/img.png";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";

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

function PopularNft() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cardData1 = [
    {
      img: `${Art3}`,
      icon: `${img3}`,
      name: "Week Ahead",
      owner: "Ya Chin-Ho",
      description: "0.45 Flow",
      favourite: "32",
    },
    {
      img: `${Art2}`,
      icon: `${img2}`,
      name: "Lorr’s Ad Issues",
      owner: "Sijmen Immens",
      description: "7 XTZ",
      favourite: "19",
    },
    {
      img: `${Art1}`,
      icon: `${img1}`,
      name: "Capturing Memories",
      owner: "Chioke Okonkwo",
      description: "17.89 Flow",
      favourite: "18",
    },
    {
      img: `${tranding4}`,
      icon: `${img}`,
      name: "Venture Capitalist",
      owner: "Wim Willems",
      description: "3 Flow",
      favourite: "12",
    },
  ];

  const cardData2 = [
    {
      img: `${popular4}`,
      icon: `${popIcon4}`,
      name: "Election Season",
      owner: "Sofietje Boksem",
      description: "0.45 Flow",
      favourite: "32",
    },
    {
      img: `${popular2}`,
      icon: `${popIcon2}`,
      name: "Lorr’s Ad Issues",
      owner: "Dameon Peterson",
      description: "7 XTZ",
      favourite: "19",
    },
    {
      img: `${popular3}`,
      icon: `${popIcon3}`,
      name: "Science Jobs",
      owner: "Ezequiel Dengra",
      description: "17.89 Flow",
      favourite: "18",
    },
    {
      img: `${popular1}`,
      icon: `${popIcon1}`,
      name: "Venture Capitalist",
      owner: "Merrile Burgett",
      description: "3 Flow",
      favourite: "12",
    },
  ];
  const theme = useTheme();

  return (
    <Box position="relative" py={10} bgcolor={theme.primary.bg}>
      <img
        src={sh12}
        alt=""
        style={{
          position: "absolute",
          width: "70%",
          bottom: "-25%",
          right: "17%",
          // zIndex: -1,
        }}
      />
      <Container>
        <Typography
          sx={{
            color: theme.primary.text,
            fontSize: { md: "28px", xs: "20px" },
            fontWeight: "800",
            textAlign: "left",
          }}
        >
          Browse popular NFTs
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="center" pt={3}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
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
              {cardData2.map(
                ({ img, icon, name, owner, description, favourite }, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={4} md={3}>
                      <PopularNftCard
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        description={description}
                        favourite={favourite}
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
                ({ img, icon, name, owner, description, favourite }, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={4} md={3}>
                      <PopularNftCard
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        description={description}
                        favourite={favourite}
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
              {cardData2.map(
                ({ img, icon, name, owner, description, favourite }, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={4} md={3}>
                      <PopularNftCard
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        description={description}
                        favourite={favourite}
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
                ({ img, icon, name, owner, description, favourite }, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={4} md={3}>
                      <PopularNftCard
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        description={description}
                        favourite={favourite}
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
              {cardData2.map(
                ({ img, icon, name, owner, description, favourite }, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={4} md={3}>
                      <PopularNftCard
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        description={description}
                        favourite={favourite}
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
                ({ img, icon, name, owner, description, favourite }, i) => {
                  return (
                    <Grid key={i} item xs={12} sm={4} md={3}>
                      <PopularNftCard
                        img={img}
                        icon={icon}
                        name={name}
                        owner={owner}
                        description={description}
                        favourite={favourite}
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
      </Container>
    </Box>
  );
}
export default PopularNft;
