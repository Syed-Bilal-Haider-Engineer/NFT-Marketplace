import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

import listingImage from "../../../images/listing.png";

function Favorites() {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.primary.bg} height="100%">
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
          Favorites
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
            Favorite items not found
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
          <Link to="/favorites/details" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                background: "#7A52F4",
                borderRadius: "23px",
                color: "#fff",
                padding: "10px 20px",
                "&:hover": {
                  background: "#7A52F4a1",
                },
              }}
            >
              Explore NFTs
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Favorites;
