import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import { BiCategory } from "react-icons/bi";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineDateRange } from "react-icons/md";
import sh3 from "../../images/sh3.png";
import sh4 from "../../images/sh4.png";
import StatTable from "./StatTable";

const Stats = () => {
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
        src={sh3}
        alt=""
        style={{
          position: "absolute",
          width: "40%",
          top: "0px",
          right: "0px",
        }}
      />
      <img
        src={sh4}
        alt=""
        style={{
          position: "absolute",
          width: "60%",
          bottom: "-20%",
          right: "20%",
        }}
      />
      <Container>
        <Typography
          sx={{
            color: theme.primary.text,
            fontSize: { xs: "30px", md: "42px" },
            fontWeight: "800",
          }}
        >
          Top selling NFTs
        </Typography>

        <Box mt={1} sx={{ display: "flex", justifyContent: "space-between" }}>
          {!matches && (
            <Box>
              <Button
                sx={{
                  background: "transparent",
                  color: theme.primary.text,
                  borderRadius: "18px",

                  p: 0.2,
                  "&:hover": {
                    background: "transparent",
                  },
                  border: "1px transparent",
                  backgroundImage:
                    "linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              >
                <Typography
                  display="flex"
                  alignItems="center"
                  sx={{ px: 2, py: 0.5, fontSize: "12px" }}
                >
                  <SiHiveBlockchain
                    style={{ fontSize: "14px", marginRight: "10px" }}
                  />
                  Blockchain
                </Typography>
              </Button>
              <Button
                sx={{
                  background: "transparent",
                  color: theme.primary.text,
                  border: theme.primary.btnBorder,
                  borderRadius: "18px",
                  marginLeft: "15px",
                  p: 0.2,
                  "&:hover": {
                    background: "transparent",
                  },
                  border: "1px transparent",
                  backgroundImage:
                    "linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              >
                <Typography
                  display="flex"
                  alignItems="center"
                  sx={{ px: 2, py: 0.5, fontSize: "12px" }}
                >
                  <BiCategory
                    style={{ fontSize: "16px", marginRight: "10px" }}
                  />
                  Category
                </Typography>
              </Button>
            </Box>
          )}

          <Button
            sx={{
              background: "transparent",
              color: theme.primary.text,
              border: theme.primary.btnBorder,
              borderRadius: "18px",
              fontSize: "12px",
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            <MdOutlineDateRange
              style={{ fontSize: "16px", marginRight: "10px" }}
            />
            Last 7 days
          </Button>
        </Box>
        <StatTable />
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

export default Stats;
