import {
  Grid,
  Button,
  TextField,
  useMediaQuery,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

import facebook from "../images/fb.png";
import slack from "../images/slack.png";
import twitter from "../images/tw.png";
import pinterest from "../images/pin.png";
import linkedin from "../images/In.png";
import { useTheme } from "@emotion/react";
import Icon from "../images/Icon.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
const Marketplace = [
  "Explore",
  "Help center",
  "Become a Partner",
  "About Us",
  "Platform Status",
];
const Links = [
  "Profile",
  "Favorites",
  "Watchlist",
  "My Collections",
  "Rankings",
  "Activity",
];
const picAddress = [facebook, slack, twitter, pinterest, linkedin];

export default () => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1060px)");
  return (
    <Box
      pt={10}
      bgcolor={theme.primary.bgFooter}
      sx={{
        height: "100%",
      }}
      position="relative"
      zIndex={1}
    >
      <Container maxWidth="lg">
        <Box pt={8} pb={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={matches ? 5 : 6}>
              <Box fontSize="16px" fontWeight="700" color={theme.primary.text}>
                Subscribe to updates
              </Box>

              <Box mt={2}>
                <TextField
                  sx={{
                    width: { xs: "100%", md: "85%" },

                    borderRadius: "25px",
                    "& label.Mui-focused": {
                      color: theme.primary.text,
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#0DF17F",
                      borderRadius: "25px",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#0DF17F",
                        borderRadius: "25px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#0DF17F",
                        borderRadius: "25px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#0DF17F",
                      },
                    },
                    input: {
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: theme.primary.text,
                      },
                    },
                    input: {
                      color: theme.primary.text,
                      fontSize: { xs: "12px", md: "14px" },
                    },
                    background: theme.primary.bg,
                  }}
                  id="standard-name"
                  // value={amount}
                  // onChange={(e) => setamount(e.target.value)}
                  placeholder={"Enter Your e-mail"}
                  InputProps={{
                    endAdornment: (
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{ cursor: "pointer" }}
                      >
                        <img src={Icon} width="20px" alt="" />
                      </Box>
                    ),
                  }}
                />
              </Box>
              <Box
                fontSize="16px"
                fontWeight="700"
                display={matches ? "flex" : "none"}
                color={theme.primary.text}
                mt={5}
              >
                Follow us
              </Box>

              <Box
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: matches ? "" : "center",
                  alignItems: "center",
                }}
              >
                {picAddress.map((item, i) => {
                  return (
                    <img
                      key={i}
                      src={item}
                      alt=""
                      style={{
                        marginRight: "30px",
                        width: "14px",
                        height: "14px",
                      }}
                    />
                  );
                })}
              </Box>
            </Grid>

            <Grid item xs={6} md={matches ? 2 : 3}>
              <Box color={theme.primary.text} fontSize="16px" fontWeight="700">
                Marketplace
              </Box>

              <Box mt={2}>
                {Marketplace.map((item, i) => {
                  return (
                    <Box
                      key={i}
                      mb={2}
                      sx={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: theme.primary.bgGray,
                      }}
                    >
                      {item}
                    </Box>
                  );
                })}
              </Box>
            </Grid>

            <Grid item xs={6} md={matches ? 2 : 3}>
              <Box color={theme.primary.text} fontSize="16px" fontWeight="700">
                Community
              </Box>

              <Box mt={2}>
                {Links.map((item, i) => {
                  return (
                    <Box
                      key={i}
                      mb={2}
                      sx={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: theme.primary.bgGray,
                      }}
                    >
                      {item}
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={matches ? 3 : 12}>
              <Box
                fontSize="16px"
                fontWeight="700"
                display={matches ? "flex" : "none"}
                color={theme.primary.text}
              >
                Region
              </Box>
              <Box
                fontSize="14px"
                fontWeight="400"
                display={matches ? "flex" : "none"}
                color={theme.primary.bgGray}
                mt={1}
              >
                The world’s first marketplace for collectibles and non-fungible
                tokens NFTs where anything is possible and all are welcome
              </Box>
              <Button
                endIcon={<ArrowDropDownIcon />}
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "168px",
                  heigth: "46px",
                  border: "1px solid gray",
                  borderRadius: "23px",
                  color: "#fff",
                }}
              >
                {" "}
                Currency-USD
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Divider sx={{ backgroundColor: "#2b2e31" }} />
      <Box p={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems="center"
          fontSize={{ xs: "11px", md: "13px" }}
          color="#fff"
        >
          <Box display="flex">
            <Typography
              sx={{ marginRight: "20px", fontSize: matches ? "" : "10px" }}
            >
              Privacy policy
            </Typography>
            <Typography
              sx={{ marginRight: "20px", fontSize: matches ? "" : "10px" }}
            >
              Lincense
            </Typography>
            <Typography
              sx={{ marginRight: "20px", fontSize: matches ? "" : "10px" }}
            >
              API
            </Typography>
            <Typography
              sx={{
                marginRight: "20px",
                color: "gray",
                fontSize: matches ? "" : "10px",
              }}
            >
              @ 2021 all rights reserved
            </Typography>
          </Box>
          <Box display="flex">
            <Box display="flex" alignItems="center">
              English <PublicIcon sx={{ marginLeft: "10px" }} />
            </Box>
            <Box
              p={0.5}
              marginLeft="10px"
              border="1px solid gray "
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SettingsIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
