import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import popIcon4 from "../../images/popIcon41.png";
import SwiperDrops from "./SwiperDrops";
import dropsbg from "../../images/dropsbg.png";
import sh5 from "../../images/sh5.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CallMadeIcon from "@mui/icons-material/CallMade";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import sh6 from "../../images/sh6.png";
import zIndex from "@mui/material/styles/zIndex";

const Drops = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width : 800px)");
  return (
    <Box
      pt={2}
      pb={10}
      bgcolor={theme.primary.bg}
      height="100%"
      position="relative"
    >
      <img
        src={sh5}
        alt=""
        style={{
          position: "absolute",
          width: "40%",
          top: "0px",
          right: "0px",
        }}
      />
      <img
        src={sh6}
        alt=""
        style={{
          position: "absolute",
          width: "30%",
          bottom: "0px",
          left: "0px",
        }}
      />
      <Container>
        <Box
          position="relative"
          py={13}
          sx={{
            background: `url(${dropsbg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "cover",
            textAlign: "center",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
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
                background: "#0DF17F",
                color: "#000",
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
                background: "#0DF17F",
                color: "#000",
                cursor: "pointer",
              }}
            >
              <MoreHorizIcon sx={{ fontSize: matches ? "13px" : "18px" }} />
            </Box>
          </Box>

          <Button
            sx={{
              background: "linear-gradient(0deg, #0DF17F, #0DF17F), #0DF17F",
              color: "#000000",
              borderRadius: "18px",
              fontWeight: "700",
            }}
          >
            Live Now
          </Button>
          <Typography
            mt={1}
            sx={{
              fontSize: { xs: "30px", md: "42px" },
              fontWeight: "800",
              color: "#fff",
            }}
          >
            Invisible Friends
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: "800",
              color: "#fff",
            }}
          >
            Ends in: 18h 54m 29s
          </Typography>

          {/* <Button
            sx={{
              background: "#7A52F4",
              color: "#fff",
              borderRadius: "18px",
              fontWeight: "700",
            }}
          >
            View Drop Details
          </Button> */}
          <Box position="absolute" bottom="-30px">
            <img src={popIcon4} style={{ zIndex: 2 }} alt="" width="50px" />
          </Box>
        </Box>
        <Box mt={3} width="100%" textAlign="center">
          <Typography
            sx={{
              color: theme.primary.text,
              fontSize: { md: "28px", xs: "20px" },
              fontWeight: "800",
              textAlign: "center",
            }}
            mt={1}
          >
            Philadelphia Collect
          </Typography>
          <Box mt={1} fontSize="14px" color="#5D5D5B" textAlign="center">
            As one of the most prestigious and recognizable brands in all of
            sports with a passionate fanbase, the Philadelphia 76ers and <br />
            Crypto.com are proud to bring to life exclusive and authentic
            digital collectibles for fans to own, collect and share. The 76ers{" "}
            <br />
            are one of the most storied franchises in the National Basketball
            Association, having won three World Championships, earning <br />{" "}
            nine trips to The Finals and making 49 playoff appearances over 70
            seasons. For the 76ers Legacy NFT Collection, we <br /> partnered
            with globally renowned artist "Black Madre" whose motto is In
            handcraft we trust.
          </Box>
        </Box>

        <SwiperDrops name="Active Drops" />
        <SwiperDrops name="Upcoming Drops" />
        <Box mt={2} py={3} display="flex" justifyContent="center" width="100%">
          <Box
            width="240px"
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
};

export default Drops;
