import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import SwiperDrops from "./SwiperDrops";

import dropsbg from "../../images/dropsbg.png";

const Drops = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width : 800px)");
  return (
    <Box pt={2} bgcolor={theme.primary.bg} height="100%">
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
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #7A52F4",
              color: "#7A52F4",
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
            my={1}
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              fontWeight: "800",
              color: "#fff",
            }}
          >
            Ends in: 18h 54m 29s
          </Typography>

          <Button
            sx={{
              background: "#7A52F4",
              color: "#fff",
              borderRadius: "18px",
              fontWeight: "700",
            }}
          >
            View Drop Details
          </Button>
        </Box>

        <SwiperDrops name="Active Drops" />
        <SwiperDrops name="Upcoming Drops" />
      </Container>
    </Box>
  );
};

export default Drops;
