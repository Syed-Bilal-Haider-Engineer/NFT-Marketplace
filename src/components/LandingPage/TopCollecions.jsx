import {
  Box,
  Container,
  Grid,
  Tab,
  useMediaQuery,
  styled,
} from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
// import { styled } from "@mui/styles";
import ArtS1 from "../../images/ArtS1.png";
import ArtS2 from "../../images/ArtS2.png";
import ArtS3 from "../../images/ArtS3.png";
import ArtS4 from "../../images/ArtS4.png";
import ArtS5 from "../../images/ArtS5.png";
import ArtS6 from "../../images/ArtS6.png";
import ArtS7 from "../../images/ArtS7.png";
import ArtS8 from "../../images/ArtS8.png";
import ArtS9 from "../../images/ArtS9.png";
import xtz from "../../images/xtz.png";
import Flow from "../../images/Flow.png";
import Ethereum from "../../images/eth11.png";
import CollectionsCard from "./CollectionsCard";
import { useTheme } from "@emotion/react";

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

export default function TopCollecions() {
  const matches = useMediaQuery("(max-width:700px)");
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function createData(img, logo, nftName, price, apr) {
    return { img, logo, nftName, price, apr };
  }
  const collectionArray = [
    createData(
      `${ArtS1}`,
      `${xtz}`,
      "Bored Ape Yacht Club",
      "10,450.00",
      "+10.17%"
    ),
    createData(
      `${ArtS2}`,
      `${Flow}`,
      "Chromie Squiggle by Snowfro",
      "19,300.00",
      "+17.47%"
    ),
    createData(
      `${ArtS3}`,
      `${Flow}`,
      "Worldwide Webb Land ",
      "13,200.00",
      "+16.87%"
    ),
    createData(
      `${ArtS4}`,
      `${Ethereum}`,
      "Bored Ape Chemistry Club",
      "21,900.00",
      "+8.65%"
    ),
    createData(
      `${ArtS5}`,
      `${xtz}`,
      "Bored Ape Kennel Club",
      "12,700.00",
      "+11.72%"
    ),
    createData(
      `${ArtS6}`,
      `${Ethereum}`,
      "Brick-and-Mortar Travails",
      "19,300.00",
      "+13.65%"
    ),
    createData(
      `${ArtS7}`,
      `${Flow}`,
      "RTFKT CloneX Mintvial",
      "10,450.00",
      "+16.87%"
    ),
    createData(
      `${ArtS8}`,
      `${Flow}`,
      "Psychedelics Anonymous",
      "21,900.00",
      "+10.17%"
    ),
    createData(
      `${ArtS9}`,
      `${xtz}`,
      "Free Way to Back Up",
      "12,700.00",
      "+17.47%"
    ),
  ];
  const theme = useTheme();

  return (
    <Box pt={10} bgcolor={theme.primary.bg}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection={matches ? "column" : "row"}
          >
            <Box
              mb={matches ? 1 : 5}
              fontSize={matches ? "22px" : "28px"}
              zIndex="1"
              fontWeight="800"
              style={{
                color: theme.primary.text,
              }}
              textAlign="left"
              width="100%"
            >
              Top collections
            </Box>

            <Box mb={5} display="flex" alignItems="center">
              <Box sx={{ width: "100%", zIndex: 1 }}>
                {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
                <Tabs
                  value={value}
                  onChange={handleChange}
                  sx={{
                    "& .MuiTabs-indicator": {
                      background: "transparent",
                    },
                  }}
                >
                  <AntTab label="1 day" />
                  <AntTab label="7 days" />
                  <AntTab label="30 days" />
                </Tabs>
              </Box>
            </Box>
          </Box>
          <Grid container spacing={5}>
            {collectionArray.length > 0 ? (
              collectionArray.map(({ img, logo, nftName, price, apr }, i) => (
                <Grid key={i} item mt={-5} xs={12} sm={6} md={4}>
                  <TabPanel value={value} index={0}>
                    <CollectionsCard
                      img={img}
                      logo={logo}
                      nftName={nftName}
                      price={price}
                      apr={apr}
                      index={i}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <CollectionsCard
                      img={img}
                      logo={logo}
                      nftName={nftName}
                      price={price}
                      apr={apr}
                      index={i}
                    />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <CollectionsCard
                      img={img}
                      logo={logo}
                      nftName={nftName}
                      price={price}
                      apr={apr}
                      index={i}
                    />
                  </TabPanel>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: "gray",
                    border: "black",
                    color: "white",
                    p: 2,
                    borderRadius: "5px",
                    width: "100%",
                    textAlign: "center",
                    mx: "auto",
                  }}
                  component="h4"
                >
                  Not Found
                </Box>
              </Grid>
            )}
          </Grid>
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
        </Box>
      </Container>
    </Box>
  );
}
