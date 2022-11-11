import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  Grid,
  styled,
  InputBase,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AiOutlineEye } from "react-icons/ai";

import nftLogo from "../../images/Art.png";
import creator from "../../images/creater.png";
import detailicon from "../../images/detailicon.png";
import detaillogo from "../../images/detaillogo.png";
import HistoryTable from "./HistoryTable";
import ActivityTable from "./ActivityTable";
import Chartdetail from "./Chartdetail";
import detailimg from "../../images/detailimg.png";
import NoteableCard from "../LandingPage/NoteableCard";
import SwiperDrops from "../Drops/SwiperDrops";

const TextInput = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "transparent",
    fontSize: "18px",
    padding: "5px",
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
}));

const data = [
  {
    img: detailicon,
    text: "Background: Blue",
  },
  {
    img: detailicon,
    text: "Mouth grade: Fresh",
  },
  {
    img: detailicon,
    text: "2400 x 2278 px (1.72MB)",
  },
  {
    img: detailicon,
    text: "Head: Bowlcut",
  },
  {
    img: detailicon,
    text: "Head: Bowlcut",
  },
  {
    img: detailicon,
    text: "Body: Red",
  },
];

const NftDetail = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width : 800px)");
  return (
    <Box pt={2} bgcolor={theme.primary.bg} height="100%">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={nftLogo} alt="" width="100%" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box pb={6} px={matches ? 2 : 8}>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  // mt={0.5}
                  flexGrow="1"
                  // padding="5px 0"
                >
                  <Typography
                    sx={{
                      color: theme.primary.text,
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    <img
                      src={creator}
                      alt=""
                      style={{
                        marginRight: "15px",
                        verticalAlign: "-13px",
                      }}
                    />
                    Ethereum
                  </Typography>
                </Box>
                <Box
                  mr={2}
                  padding="5px 0"
                  borderRadius="18px"
                  textAlign="center"
                  fontWeight="700"
                  fontSize="14px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color={theme.primary.text}
                  border={theme.primary.btnBorder}
                  width="80px"
                >
                  <FavoriteBorderIcon
                    style={{
                      fontSize: "20px",
                      color: theme.primary.text,
                      marginRight: "6px",
                    }}
                  />
                  19
                </Box>
                <Box
                  sx={{
                    border: theme.primary.btnBorder,
                    borderRadius: "100px",
                    padding: "0 10px",
                    color: theme.primary.text,
                    cursor: "pointer",
                  }}
                >
                  ...
                </Box>
              </Box>

              <Typography
                mt={2}
                sx={{
                  fontSize: { md: "40px", xs: "30px" },
                  fontWeight: "800",
                  // color: theme.primary.text,
                  background:
                    "linear-gradient(180deg, #0DF17F 0%, #00CCFE 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Wicked Cranium #4449
              </Typography>
              <Typography
                mt={2}
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: theme.primary.text,
                }}
              >
                A collection of 10,000 undead NFTs minted on the Ethereum
                blockchain. Each unique Deadfella is randomly generated from a
                combination.
              </Typography>

              <Box mt={2}>
                <Box>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "12px",
                    }}
                  >
                    Owner
                  </Typography>
                  <Typography
                    mt={1}
                    sx={{
                      color: theme.primary.text,
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    <img
                      src={detailimg}
                      alt=""
                      style={{
                        marginRight: "15px",
                        verticalAlign: "-13px",
                      }}
                    />
                    0xe96decb94...b1ef
                  </Typography>
                </Box>
              </Box>

              <Typography
                mt={2}
                sx={{ fontSize: "12px", color: theme.primary.text }}
              >
                Properties
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {data.map(({ img, text }, i) => {
                  return (
                    <Box
                      key={i}
                      mr={0.5}
                      mb={1}
                      padding="5px 10px"
                      borderRadius="18px"
                      textAlign="center"
                      fontWeight="700"
                      fontSize="14px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color={theme.primary.text}
                      border={theme.primary.btnBorder}
                    >
                      <img src={img} alt="" style={{ marginRight: "5px" }} />
                      {text}
                    </Box>
                  );
                })}
              </Box>
              <Box
                mt={2}
                sx={{
                  background: "rgba(235, 240, 240, 0.1)",

                  borderRadius: "16px",
                  p: 2,
                }}
              >
                <Typography
                  sx={{ fontSize: "12px", color: theme.primary.text }}
                >
                  Top bid
                </Typography>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={detaillogo} alt="" />
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: theme.primary.text,
                        ml: 1,
                        fontWeight: "700",
                      }}
                    >
                      3.52 ETH ($9118.1 USD)
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Button
                    sx={{
                      background: "#0DF17F",
                      borderRadius: "23px",
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: "700",
                      width: "100%",
                      mr: 1,
                    }}
                  >
                    Place your bid
                  </Button>
                  <Button
                    sx={{
                      background: "rgba(235, 250, 250, 0.1)",
                      borderRadius: "23px",
                      color: "#000000",
                      fontSize: "14px",
                      fontWeight: "700",
                      width: "100%",
                    }}
                  >
                    Save for later
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* table Grid */}

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <HistoryTable />
          </Grid>
          <Grid item xs={12} md={6}>
            <Chartdetail />
          </Grid>
        </Grid>

        {/* Activity Table */}

        <Box py={5}>
          <ActivityTable />
        </Box>
        <Box py={5}>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "800",
              color: "#ffffff",
            }}
          >
            More from This Collection
          </Typography>
          <SwiperDrops />
        </Box>
      </Container>
    </Box>
  );
};

export default NftDetail;
