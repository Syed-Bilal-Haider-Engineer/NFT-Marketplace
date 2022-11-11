import { useTheme } from "@emotion/react";
import { Box, Grid, Container, useMediaQuery, Typography } from "@mui/material";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import resource1 from "../../images/resource1.png";
import resource2 from "../../images/resource2.png";
const ResourcesPart = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box bgcolor={theme.primary.bg} p={4} pb={10}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: theme.primary.text,
            fontSize: { md: "28px", xs: "20px" },
            fontWeight: "800",
            textAlign: "left",
          }}
        >
          Resources for getting started
        </Typography>
        <Box
          mt={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              width: "0px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "transparent",
            },
          }}
        >
          {[1, 2, 3].map((num, i) => {
            return (
              <Box
                key={i}
                mr={matches ? 2 : 0}
                sx={{
                  background:
                    "linear-gradient(180deg, #0DF17F 0%, rgba(0, 204, 254, 0) 100%)",
                  borderRadius: "16px",
                  p: 2,
                  width: "300px",
                }}
              >
                <img src={resource1} alt="" style={{ width: "270px" }} />
                <Typography
                  mt={1}
                  sx={{
                    fontWeight: "700",
                    color: theme.primary.text,
                    fontSize: "16px",
                  }}
                >
                  I think I minted duplicate NFTs
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: "14px",
                  }}
                >
                  What’s better than an NFT? 2 NFTs! But you don't always want
                  to mint 2 NFTs of the same artwork.
                </Typography>

                <Typography
                  mt={1}
                  sx={{
                    fontWeight: "700",
                    color: theme.primary.text,
                    fontSize: "14px",
                  }}
                >
                  <MdOutlineArrowForwardIos style={{ verticalAlign: "-2px" }} />
                  See more details
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ResourcesPart;
