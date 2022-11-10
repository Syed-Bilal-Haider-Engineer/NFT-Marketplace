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
import sh6 from "../../images/sh6.png";

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
        </Box>
        <Box mt={-3} width="100%" textAlign="center">
          <img src={popIcon4} alt="" width="50px" />
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
      </Container>
    </Box>
  );
};

export default Drops;
