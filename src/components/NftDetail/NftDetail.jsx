import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  Grid,
  styled,
  InputBase,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AiOutlineEye } from "react-icons/ai";

import nftLogo from "../../images/nftDetail.png";
import creator from "../../images/creater.png";

const TextInput = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    position: "relative",
    backgroundColor: "transparent",
    fontSize: "18px",
    padding: "5px",
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
}));

const NftDetail = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width : 800px)");
  return (
    <Box pt={2} bgcolor={theme.primary.bg} height="100%">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={nftLogo} alt="" width="100%" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box py={6} px={matches ? 2 : 8}>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  mr={2}
                  padding="5px 0"
                  borderRadius="18px"
                  textAlign="center"
                  fontWeight="700"
                  fontSize="14px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color={theme.primary.text}
                  border={theme.primary.btnBorder}
                  width="80px"
                >
                  <FavoriteBorderIcon
                    style={{
                      fontSize: "20px",
                      color: theme.primary.text,
                      marginRight: "6px",
                    }}
                  />
                  19
                </Box>
                <Box
                  mt={0.5}
                  flexGrow="1"
                  padding="5px 0"
                  borderRadius="18px"
                  fontWeight="700"
                  fontSize="14px"
                  color={theme.primary.text}
                >
                  <AiOutlineEye
                    style={{
                      fontSize: "20px",
                      color: theme.primary.text,
                      marginRight: "6px",
                      verticalAlign: "-4px",
                    }}
                  />
                  124.6k
                </Box>

                <Box
                  sx={{
                    border: theme.primary.btnBorder,
                    borderRadius: "100px",
                    padding: "0 10px",
                    color: theme.primary.text,
                    cursor: "pointer",
                  }}
                >
                  ...
                </Box>
              </Box>

              <Typography
                mt={2}
                sx={{
                  fontSize: { md: "42px", xs: "30px" },
                  fontWeight: "800",
                  color: theme.primary.text,
                }}
              >
                5th Anniversary Mystery Box #245
              </Typography>
              <Typography
                mt={2}
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: theme.primary.text,
                }}
              >
                A collection of 10,000 undead NFTs minted on the Ethereum
                blockchain. Each unique Deadfella is randomly generated from a
                combination of over 400 individually
              </Typography>

              <Box
                mt={2}
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "12px",
                    }}
                  >
                    Creator
                  </Typography>
                  <Typography
                    mt={1}
                    sx={{
                      color: theme.primary.text,
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    <img
                      src={creator}
                      alt=""
                      style={{
                        marginRight: "15px",
                        verticalAlign: "-13px",
                      }}
                    />
                    0x330cd8fec...8b7c
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "12px",
                    }}
                  >
                    BlockChain
                  </Typography>
                  <Typography
                    mt={1}
                    sx={{
                      color: theme.primary.text,
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    <img
                      src={creator}
                      alt=""
                      style={{
                        marginRight: "15px",
                        verticalAlign: "-13px",
                      }}
                    />
                    Ethereum
                  </Typography>
                </Box>
              </Box>

              <Box
                mt={2}
                p={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderRadius: "16px",
                  bgcolor: theme.primary.bgProfile,
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "12px" }}
                  >
                    Current bid
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.primary.text,
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    $325.50
                  </Typography>
                </Box>
                <Typography
                  sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "20px" }}
                >
                  /
                </Typography>
                <Box>
                  <Typography
                    sx={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "12px" }}
                  >
                    Auction ends in
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.primary.text,
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    15:32:10
                  </Typography>
                </Box>
              </Box>

              <Typography
                mt={2}
                sx={{ fontSize: "12px", color: theme.primary.text }}
              >
                Enter Your Bid
              </Typography>

              <Box
                mt={1}
                sx={{
                  backgroundColor: "trasnparent",
                  borderRadius: "24px",
                  width: matches ? "100" : "90%",
                  border: !matches && theme.primary.btnBorder,
                  display: "flex",
                  flexDirection: matches ? "column" : "row",
                  justifyContent: "space-between",
                  height: "50px",
                }}
              >
                <TextInput
                  type="number"
                  placeholder="Minium bid $335.50"
                  sx={{
                    border: matches && theme.primary.btnBorder,
                    borderRadius: "18px",
                    color : theme.primary.text
                  }}
                />

                <Button
                  sx={{
                    marginTop: matches && "10px",
                    background: "#7A52F4",
                    borderRadius: "23px",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "700",
                    "&:hover":{
                      background: "#7A52F4a1",
                    }
                  }}
                >
                  Submit your bid
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NftDetail;
