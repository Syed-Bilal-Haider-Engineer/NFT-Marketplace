import { useState } from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  Box,
  Toolbar,
  useMediaQuery,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
// import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
// import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";

const drawerWidth = 280;
function SideBar(props) {
  const theme = useTheme();
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  //   const matches = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Box
          mt={4}
          fontSize="14px"
          display="flex"
          alignItems="center"
          fontWeight="300"
          color={theme.primary.sideBarNonActive}
        >
          Manage listings
        </Box>
        <List>
          <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.text}
            >
              <TimelapseIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.text,
                }}
              />
              Dashboard
            </Box>
          </ListItem>

          <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.sideBarNonActive}
            >
              <BrokenImageOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.sideBarNonActive,
                }}
              />
              Your Listings
            </Box>
          </ListItem>
          <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.sideBarNonActive}
            >
              <BookmarksOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.sideBarNonActive,
                }}
              />
              Favourites
            </Box>
          </ListItem>
          <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.sideBarNonActive}
            >
              <GroupOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.sideBarNonActive,
                }}
              />
              Following
            </Box>
          </ListItem>
          <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.sideBarNonActive}
            >
              <CreditCardOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.sideBarNonActive,
                }}
              />
              Payouts
            </Box>
          </ListItem>
        </List>
        <Box
          my={2}
          fontSize="14px"
          fontWeight="300"
          display="flex"
          alignItems="center"
          color={theme.primary.sideBarNonActive}
        >
          Profile settings
        </Box>
        <List>
          <ListItem>
            <Box
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.sideBarNonActive}
            >
              <AccountCircleOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.sideBarNonActive,
                }}
              />
              Account Details
            </Box>
          </ListItem>
          <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.sideBarNonActive}
            >
              <DevicesOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.sideBarNonActive,
                }}
              />
              Security
            </Box>
          </ListItem>
          <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.sideBarNonActive}
            >
              <DashboardCustomizeOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.sideBarNonActive,
                }}
              />
              Apps
            </Box>
          </ListItem>
          <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.sideBarNonActive}
            >
              <NotificationsOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.sideBarNonActive,
                }}
              />
              Notifications
            </Box>
          </ListItem>
          <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color={theme.primary.sideBarNonActive}
            >
              <HeadsetMicOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.primary.sideBarNonActive,
                }}
              />
              Help Center
            </Box>
          </ListItem>
        </List>
      </Container>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          // paddingY: "1px",
          background: "#fff",
          borderBottom: "1px solid #d1d1d1",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: matches ? "space-between" : "flex-end",
          }}
        >
          {matches ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon style={{ fontSize: "40px", color: "#3b3f6d" }} />
            </IconButton>
          ) : null}

          <Box
            color="#50E9E9"
            display="flex"
            alignItems={"center"}
            textAlign="right"
          >
            <ShoppingCartIcon sx={{ marginX: "15px" }} />
            <AccountBalanceWalletIcon sx={{ marginX: "15px" }} />
            <AccountCircleIcon sx={{ marginX: "15px" }} />
          </Box>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#fff",
              boxShadow: "0px 10px 5px #ffffff",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "80px",
              background: theme.primary.bg,
              boxShadow: "0px 10px 5px #ffffff",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
