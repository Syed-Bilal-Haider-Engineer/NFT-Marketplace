import {
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/styles";
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
import Ethereum from "../../images/Ethereum.png";
import CollectionsCard from "./CollectionsCard";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    minWidth: 180,
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    color: "#000000",
    marginLeft: "17px",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "10px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#ffffff",
        marginRight: "10px",
      },
      "&:active": {
        backgroundColor: "gray",
      },
    },
  },
}));

export default function TopCollecions() {
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
  const matches = useMediaQuery("(max-width:700px)");
  const [filterByDays, setfilterByDays] = useState("last 7 days");
  const [anchorEl1, setAnchorEl1] = useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  return (
    <Box pt={10} bgcolor={theme.primary.bg}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
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
              textAlign="center"
              width="100%"
            >
              Top sellings collections
            </Box>

            <Box mb={5} display="flex" alignItems="center">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{
                  fontSize: matches ? "20px" : "28px",
                  fontWeight: 800,
                  letterSpacing: "0.2px",
                  color: "#7A52F4",
                  textDecoration: "none",
                  border: "none",
                  padding: "0px 8px",
                  background: "transparent",
                  position: "relative",
                  zIndex: "1",
                  width: matches ? "100%" : "240px",
                  cursor: "pointer",
                }}
                onClick={handleClick1}
              >
                <Box display="flex" alignItems="center">
                  <Box
                    mt="-3px"
                    fontSize={matches ? "20px" : "28px"}
                    color="#7A52F4"
                    fontWeight={800}
                  >
                    {filterByDays}
                  </Box>
                  <Box ml={1} mb="-12px">
                    <KeyboardArrowDownIcon
                      style={{ fontSize: "30px", fontWeight: "700" }}
                    />
                  </Box>
                </Box>
              </Box>

              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl1}
                open={open1}
                onClose={handleClose1}
              >
                <MenuItem
                  onClick={() => {
                    setfilterByDays("last 7 days");
                    handleClose1();
                  }}
                  disableRipple
                >
                  last 7 days
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setfilterByDays("last 30 days");
                    handleClose1();
                  }}
                  disableRipple
                >
                  last 30 days
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setfilterByDays("last 180 day");
                    handleClose1();
                  }}
                  disableRipple
                >
                  last 180 day
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setfilterByDays("last 360 days");
                    handleClose1();
                  }}
                  disableRipple
                >
                  last 360 days
                </MenuItem>
              </StyledMenu>
            </Box>
          </Box>
          <Grid container spacing={3}>
            {collectionArray.length > 0 ? (
              collectionArray.map(({ img, logo, nftName, price, apr }, i) => (
                <CollectionsCard
                  img={img}
                  logo={logo}
                  nftName={nftName}
                  price={price}
                  apr={apr}
                  index={i}
                />
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
