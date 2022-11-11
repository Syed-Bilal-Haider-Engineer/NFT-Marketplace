import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

import listingImage from "../../../images/listing.png";

function Payouts() {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.primary.bg} height="100%" mb={20}>
      <Container>
        <Typography
          mt={0.2}
          ml={{ xs: 1, md: 0 }}
          mb={3}
          variant="body1"
          sx={{
            fontSize: { md: "42px", xs: "28px" },
            color: theme.primary.text,
            fontWeight: "800",
          }}
        >
          Your payouts
        </Typography>

        <Box
          mt={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img src={listingImage} alt="" />
          <Typography
            sx={{
              fontSize: { md: "28px", xs: "20px" },
              color: theme.primary.text,
              fontWeight: "800",
            }}
          >
            No processed payouts
          </Typography>
          <Typography
            my={1}
            sx={{
              color: "#5d5d5b",
              fontSize: "14px",
              width: "40%",
            }}
          >
            Try to assign more tasks to your employees or create a new project
            from scratch
          </Typography>
          <Link to="/payouts/details" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                background: "#0DF17F",
                borderRadius: "23px",
                color: "#000",
                padding: "10px 20px",
                "&:hover": {
                  background: "#0DF17Fa1",
                },
              }}
            >
              Post your first NFT
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Payouts;
