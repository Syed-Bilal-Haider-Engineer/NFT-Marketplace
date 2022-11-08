import { useTheme } from "@emotion/react";
import { Box, Grid, Container, useMediaQuery, Typography } from "@mui/material";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import resource1 from "../../images/resource1.png";
import resource2 from "../../images/resource2.png";
const ResourcesPart = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.primary.bgResource} p={4}>
      <Typography
        sx={{
          color: theme.primary.text,
          fontSize: { md: "28px", xs: "20px" },
          fontWeight: "800",
          textAlign: "center",
        }}
      >
        Resources for getting started
      </Typography>
      <Box
        mt={2}
        sx={{
          display: "flex",
          overflowX: "scroll",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            width: "0px"
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent"
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent"
          }
        }}
      >
        {[1, 2, 3, 4].map((num, i) => {
          return (
            <Box
              key={i}
              ml={1.5}
              sx={{
                background: theme.primary.bg,
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
                I should have received NFTs
              </Typography>
              <Typography
                sx={{
                  color: "#5d5d5b",
                  fontSize: "14px",
                }}
              >
                Unfortunately, it can happen by accident If you’re confident you
                qualify for but didn’t receive
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
    </Box>
  );
};

export default ResourcesPart;
