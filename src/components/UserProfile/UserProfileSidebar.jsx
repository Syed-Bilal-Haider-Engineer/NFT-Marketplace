import { Box, Container, useMediaQuery } from "@mui/material";
import profileImg from "../../images/profileImg.png";
import facebook from "../../images/fb.png";
import twitter from "../../images/tw.png";
import arrow from "../../images/arrow.png";
import { useTheme } from "@emotion/react";
import GroupIcon from "@mui/icons-material/Group";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import eth11 from "../../images/eth11.png";
import Editeprofile from "./ProfileEdite";
import React, { useState } from "react";
import { url } from "../URL";
function UserProfileSidebar({ userInfo, setRenderstate, state }) {
  const [open, setOpenstate] = useState(false);
  const matches = useMediaQuery("(max-width:750px)");
  const theme = useTheme();
  //////////Edite Profile handler/////////
  const editeHandler = () => {
    setOpenstate(true);
  };
  console.log("user side bar:", userInfo);
  const openHanldle = (value) => {
    setRenderstate(!state);
    setOpenstate(value);
  };
  return (
    <Box
      mt={matches ? -4 : -10}
      bgcolor={theme.primary.section}
      borderRadius="12px"
      boxShadow={theme.primary.boxShadow}
      zIndex={1}
    >
      <Editeprofile open={open} func={openHanldle} userInfo={userInfo} />
      <Box py={4}>
        <Container>
          <Box display="flex" flexDirection="column">
            <Box textAlign="center" borderRadius="50%">
              {userInfo?.img ? (
                <img
                  width="100px"
                  height="100px"
                  src={`${url}/upload/${userInfo?.img}`}
                  alt=""
                />
              ) : (
                <img width="100px" src={profileImg} alt="" />
              )}
            </Box>
            <Box
              textAlign="center"
              fontWeight="800"
              fontSize={matches ? "18px" : "24px"}
              color={theme.primary.text}
              mt={2}
            >
              {userInfo ? userInfo?.name : "user name"}
            </Box>
            <Box
              textAlign="center"
              fontWeight="700"
              fontSize="14px"
              color={theme.primary.text}
              mt={1}
            >
              <img
                src={eth11}
                width="20px"
                style={{ marginRight: "10px" }}
                alt=""
              />
              {userInfo
                ? userInfo.walletaddress.slice(0, 22)
                : "user wallet address"}
            </Box>
            <Box
              mt={1}
              display={"flex"}
              justifyContent="centr"
              alignItems="center"
            >
              <Box
                width="122px"
                height="46px"
                display={"flex"}
                justifyContent="center"
                alignItems="center"
                sx={{
                  color: "#fff",
                  cursor: "pointer",
                  border: "1px transparent",
                  borderRadius: "23px",
                  backgroundImage:
                    " linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                  boxShadow: "3px 8px 17px rgba(0, 0, 0, 0.15)",
                  padding: "2px",
                }}
                onClick={() => {
                  editeHandler();
                }}
              >
                Edite
              </Box>
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
                  color={theme.primary.bgButtonTwo}
                >
                  96
                </Box>
                <Box
                  fontWeight="500"
                  fontSize="12px"
                  color={theme.primary.bgGray}
                >
                  followers
                </Box>
              </Box>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Box
                  fontWeight="800"
                  fontSize="18px"
                  color={theme.primary.bgButtonTwo}
                >
                  64
                </Box>
                <Box
                  fontWeight="500"
                  fontSize="12px"
                  color={theme.primary.bgGray}
                >
                  items
                </Box>
              </Box>
              <Box display="flex" alignItems="center" flexDirection="column">
                <Box
                  fontWeight="800"
                  fontSize="18px"
                  color={theme.primary.bgButtonTwo}
                >
                  26
                </Box>
                <Box
                  fontWeight="500"
                  fontSize="12px"
                  color={theme.primary.bgGray}
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
                    color: theme.primary.text,
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
                    color: theme.primary.text,
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
