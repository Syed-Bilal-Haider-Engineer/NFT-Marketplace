import { useTheme } from "@emotion/react";
import { Box, Container, Grid, useMediaQuery, TextField } from "@mui/material";
import React, { useState } from "react";
import bg from "../../images/bg.png";
import images from "../../images/Images.png";
import SearchIcon from "@mui/icons-material/Search";

export default function MainLandingPage() {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:700px)");
  const [search, setSearch] = useState("");

  return (
    <Box
      mt={-10}
      style={{
        backgroundImage: `url(${bg})`,
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      height="100vh"
      bgcolor={theme.primary.bg}
      position="relative"
    >
      <Box
        mt={-10}
        style={{
          backgroundImage: `url(${images})`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        height="300px"
        position="absolute"
        top="50%"
      ></Box>
      <Container maxWidth="xl">
        <Grid height="100vh" container justifyContent="center">
          <Grid item xs={12}>
            <Box
              fontSize={matches ? "42px" : "58px"}
              zIndex="1"
              fontWeight="800"
              style={{
                color: theme.primary.text,
              }}
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              height="100%"
              width="100%"
            >
              Discover, collect, and sell <br /> extraordinary NFTs
              <Box fontSize="16px" fontWeight="400" color={theme.primary.text}>
                Our marketplace is the world's first and largest NFT market{" "}
                <br /> for independent creators worldwide
              </Box>
              <Box width="100%" mt={5}>
                <TextField
                  sx={{
                    width: matches ? "100%" : "50%",
                    height: "70px",
                    borderRadius: "50px",
                    pt: "8px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                        borderRadius: "50px",
                        height: "70px",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                        borderRadius: "50px",
                        height: "70px",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                        borderRadius: "50px",
                        height: "70px",
                      },
                    },
                    input: {
                      "&::placeholder": {
                        textOverflow: "ellipsis !important",
                        color: "#AEAEAE",
                        fontSize: { xs: "16px", md: "16px" },
                        fontWeight: "700",
                      },
                    },
                    input: {
                      color: "#000000",
                      fontSize: { xs: "16px", md: "16px" },
                      fontWeight: "700",
                    },
                    background: theme.primary.bgGray,
                  }}
                  // id="standard-name"
                  value={search}
                  size="large"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={"Collection items or users"}
                  InputProps={{
                    endAdornment: (
                      <SearchIcon
                        sx={{
                          color: "#ffffff",
                          width: "40px",
                          height: "40px",
                          background: theme.primary.btnBothDark,
                          padding: "8px",
                          borderRadius: "50px",
                        }}
                      />
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
