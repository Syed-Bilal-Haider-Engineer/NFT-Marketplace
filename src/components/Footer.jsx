import { Grid, Button, TextField, useMediaQuery, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

import facebook from "../images/fb.png";
import slack from "../images/slack.png";
import twitter from "../images/tw.png";
import pinterest from "../images/pin.png";
import linkedin from "../images/ln.png";
import { useTheme } from "@emotion/react";

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
const rightsSection = [
  "© BlockRunner, Inc. All rights reserved.",
  "Community guidelines",
  "Terms",
  "Privacy policy",
];

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
    >
      <Container>
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
                      borderBottomColor: "#222528",
                      borderRadius: "25px",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#222528",
                        borderRadius: "25px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#222528",
                        borderRadius: "25px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#222528",
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
                  placeholder={"Your email"}
                  InputProps={{
                    endAdornment: (
                      <Button
                        sx={{
                          color: "#000",
                          backgroundColor: "#fff",
                          textTransform: "unset",
                          height: "40px",
                          borderRadius: "25px",
                          fontSize: { xs: "11px", md: "13px" },
                          "&:hover": {
                            backgroundColor: "#fff",
                          },
                        }}
                      >
                        I'm in
                      </Button>
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
                }}
              >
                {picAddress.map((item, i) => {
                  return (
                    <img
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
                      mb={2}
                      sx={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: theme.primary.text,
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
                      mb={2}
                      sx={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: theme.primary.text,
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
                color={theme.primary.text}
                mt={1}
              >
                The world’s first marketplace for collectibles and non-fungible
                tokens NFTs where anything is possible and all are welcome
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ backgroundColor: "#2b2e31" }} />
        <Box py={3}>
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            alignItems="center"
            fontSize={{ xs: "11px", md: "13px" }}
            color="#6d6f71"
          >
            {rightsSection.map((text, i) => {
              return (
                <Box pr={4} pt={1}>
                  {text}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
