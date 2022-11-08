import { Box, Container, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import profileImg from "../../images/profileImg.png";
import facebook from "../../images/fb.png";
import twitter from "../../images/tw.png";
import arrow from "../../images/arrow.png";
import { AppContext } from "../../utils";
import { useTheme } from "@emotion/react";
import GroupIcon from "@mui/icons-material/Group";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function UserProfileSidebar() {
  const matches = useMediaQuery("(max-width:750px)");
  const theme = useTheme();
  const { account } = useContext(AppContext);
  return (
    <Box
      mt={matches ? -4 : -10}
      bgcolor={theme.primary.section}
      borderRadius="12px"
      boxShadow={theme.primary.boxShadow}
    >
      <Box py={4}>
        <Container>
          <Box display="flex" flexDirection="column">
            <Box textAlign="center">
              <img width="100px" src={profileImg} alt="" />
            </Box>
            <Box
              textAlign="center"
              fontWeight="800"
              fontSize={matches ? "18px" : "24px"}
              color={theme.primary.text}
              mt={2}
            >
              Francisco Maia
            </Box>
            <Box
              textAlign="center"
              fontWeight="700"
              fontSize="14px"
              color={theme.primary.text}
              mt={1}
            >
              0x59485…82590
            </Box>
            <Box
              textAlign="center"
              fontWeight="400"
              fontSize="14px"
              color="#5D5D5B"
              mt={3}
            >
              8,888 NFTs of beautiful, Asian women painstakingly-crafted where
              even the most intricate
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={1}
            >
              <img style={{ marginRight: "10px" }} src={facebook} alt="" />
              <img src={twitter} alt="" />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt={3}
              borderTop="1px solid rgba(207, 219, 213, 0.6)"
              pt={2}
            >
              <Box display="flex" alignItems="center" flexDirection="column">
                <Box
                  fontWeight="800"
                  fontSize="18px"
                  color={theme.primary.text}
                >
                  96
                </Box>
                <Box
                  fontWeight="500"
                  fontSize="12px"
                  color={theme.primary.text}
                >
                  followers
                </Box>
              </Box>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Box
                  fontWeight="800"
                  fontSize="18px"
                  color={theme.primary.text}
                >
                  64
                </Box>
                <Box
                  fontWeight="500"
                  fontSize="12px"
                  color={theme.primary.text}
                >
                  items
                </Box>
              </Box>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Box
                  fontWeight="800"
                  fontSize="18px"
                  color={theme.primary.text}
                >
                  26
                </Box>
                <Box
                  fontWeight="500"
                  fontSize="12px"
                  color={theme.primary.text}
                >
                  following
                </Box>
              </Box>
            </Box>
            <Box
              mt={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                width="100px"
                height="33px"
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
                <GroupIcon
                  style={{
                    color: theme.primary.subtext,
                    fontSize: "15px",
                    marginRight: "10px",
                  }}
                />{" "}
                Follow
              </Box>
              <Box
                pt={0.6}
                px={0.7}
                border="1px solid rgba(207, 219, 213, 0.6)"
                borderRadius="50px"
                ml={2}
              >
                {" "}
                <ArrowRightAltIcon
                  style={{
                    color: theme.primary.subtext,
                    fontSize: "20px",
                  }}
                />
              </Box>
              <Box
                pt={0.6}
                px={0.7}
                border="1px solid rgba(207, 219, 213, 0.6)"
                borderRadius="50px"
                ml={2}
              >
                {" "}
                <MoreHorizIcon
                  style={{
                    color: theme.primary.subtext,
                    fontSize: "20px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default UserProfileSidebar;
