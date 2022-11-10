import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@mui/styles";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import clsx from "clsx";
import { Paper } from "@mui/material";
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

import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "#172225 !important",
    justifyContent: "center",
  },
});

export default function SideBar() {
  const theme = useTheme();
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  let activeStyle = {
    textDecoration: "none",
    color: theme.primary.bgButtonTwo,
  };

  let activeClassName = {
    textDecoration: "none",
    color: "#5D5D5B",
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      style={{
        zIndex: 1,
        // paddingBottom: "50px",
      }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        fontSize="14px"
        fontWeight="300"
        textAlign="center"
        color="rgba(255, 255, 255, 0.5)"
      >
        Manage listings
      </Box>
      <List>
        <ListItem>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <Box
              mt={1.5}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="#fff"
            >
              <TimelapseIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "#fff",
                }}
              />
              Dashboard
            </Box>
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/listing" style={{ textDecoration: "none" }}>
            <Box
              mt={1.5}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="rgba(255, 255, 255, 0.5)"
            >
              <BrokenImageOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              />
              Your Listings
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/favorites" style={{ textDecoration: "none" }}>
            <Box
              mt={1.5}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="rgba(255, 255, 255, 0.5)"
            >
              <BookmarksOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              />
              Favourites
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Box
            mt={1.5}
            fontWeight="700"
            fontSize="14px"
            display="flex"
            alignItems="center"
            color="rgba(255, 255, 255, 0.5)"
          >
            <GroupOutlinedIcon
              sx={{
                marginRight: "15px",
                fontSize: "22px",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            />
            Following
          </Box>
        </ListItem>
        <ListItem>
          <Link to="/payouts" style={{ textDecoration: "none" }}>
            <Box
              mt={1.5}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="rgba(255, 255, 255, 0.5)"
            >
              <CreditCardOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              />
              Payouts
            </Box>
          </Link>
        </ListItem>
      </List>
      <Box
        my={2}
        fontSize="14px"
        fontWeight="300"
        textAlign="center"
        color="rgba(255, 255, 255, 0.5)"
      >
        Profile settings
      </Box>
      <List>
        <ListItem>
          <Link to="/profileinfo" style={{ textDecoration: "none" }}>
            <Box
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="rgba(255, 255, 255, 0.5)"
            >
              <AccountCircleOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              />
              Account Details
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/security" style={{ textDecoration: "none" }}>
            <Box
              mt={1.5}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="rgba(255, 255, 255, 0.5)"
            >
              <DevicesOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              />
              Security
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/apps" style={{ textDecoration: "none" }}>
            <Box
              mt={1.5}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="rgba(255, 255, 255, 0.5)"
            >
              <DashboardCustomizeOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              />
              Apps
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/notifications" style={{ textDecoration: "none" }}>
            <Box
              mt={1.5}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="rgba(255, 255, 255, 0.5)"
            >
              <NotificationsOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              />
              Notifications
            </Box>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/helpcenter" style={{ textDecoration: "none" }}>
            <Box
              mt={1.5}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="rgba(255, 255, 255, 0.5)"
            >
              <HeadsetMicOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              />
              Help Center
            </Box>
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box bgcolor={theme.primary.bg} height="100%" textAlign={"center"}>
      <Hidden mdDown>
        <Box
          pt={2}
          fontSize="14px"
          display="flex"
          alignItems="center"
          fontWeight="300"
          color={theme.primary.sideBarNonActive}
        >
          Manage listings
        </Box>
        <List>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <Box
                mt={1.5}
                ml={-2.1}
                fontWeight="700"
                fontSize="14px"
                display="flex"
                alignItems="center"
              >
                <TimelapseIcon
                  sx={{
                    marginRight: "15px",
                    fontSize: "22px",
                    fontWeight: "400",
                  }}
                />
                Dashboard
              </Box>
            </ListItem>
          </NavLink>

          <NavLink
            to="/listing"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <Box
                mt={1.5}
                ml={-2.1}
                fontWeight="700"
                fontSize="14px"
                display="flex"
                alignItems="center"
              >
                <BrokenImageOutlinedIcon
                  sx={{
                    marginRight: "15px",
                    fontSize: "22px",
                    fontWeight: "400",
                  }}
                />
                Your Listings
              </Box>
            </ListItem>
          </NavLink>

          <NavLink
            to="/favorites"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <Box
                mt={1.5}
                ml={-2.1}
                fontWeight="700"
                fontSize="14px"
                display="flex"
                alignItems="center"
              >
                <BookmarksOutlinedIcon
                  sx={{
                    marginRight: "15px",
                    fontSize: "22px",
                    fontWeight: "400",
                  }}
                />
                Favourites
              </Box>
            </ListItem>
          </NavLink>
          {/* <ListItem>
            <Box
              mt={1.5}
              ml={-2.1}
              fontWeight="700"
              fontSize="14px"
              display="flex"
              alignItems="center"
            >
              <GroupOutlinedIcon
                sx={{
                  marginRight: "15px",
                  fontSize: "22px",
                  fontWeight: "400",
                }}
              />
              Following
            </Box>
          </ListItem> */}
          <NavLink
            to="/payouts"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <Box
                mt={1.5}
                ml={-2.1}
                fontWeight="700"
                fontSize="14px"
                display="flex"
                alignItems="center"
              >
                <CreditCardOutlinedIcon
                  sx={{
                    marginRight: "15px",
                    fontSize: "22px",
                    fontWeight: "400",
                  }}
                />
                Payouts
              </Box>
            </ListItem>
          </NavLink>
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
          <NavLink
            to="/profileinfo"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <Box
                ml={-2.1}
                fontWeight="700"
                fontSize="14px"
                display="flex"
                alignItems="center"
              >
                <AccountCircleOutlinedIcon
                  sx={{
                    marginRight: "15px",
                    fontSize: "22px",
                    fontWeight: "400",
                  }}
                />
                Account Details
              </Box>
            </ListItem>
          </NavLink>
          <NavLink
            to="/security"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <Box
                mt={1.5}
                ml={-2.1}
                fontWeight="700"
                fontSize="14px"
                display="flex"
                alignItems="center"
              >
                <DevicesOutlinedIcon
                  sx={{
                    marginRight: "15px",
                    fontSize: "22px",
                    fontWeight: "400",
                  }}
                />
                Security
              </Box>
            </ListItem>
          </NavLink>
          <NavLink
            to="/apps"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <Box
                mt={1.5}
                ml={-2.1}
                fontWeight="700"
                fontSize="14px"
                display="flex"
                alignItems="center"
              >
                <DashboardCustomizeOutlinedIcon
                  sx={{
                    marginRight: "15px",
                    fontSize: "22px",
                    fontWeight: "400",
                  }}
                />
                Apps
              </Box>
            </ListItem>
          </NavLink>
          <NavLink
            to="/notifications"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <Box
                mt={1.5}
                ml={-2.1}
                fontWeight="700"
                fontSize="14px"
                display="flex"
                alignItems="center"
              >
                <NotificationsOutlinedIcon
                  sx={{
                    marginRight: "15px",
                    fontSize: "22px",
                    fontWeight: "400",
                  }}
                />
                Notifications
              </Box>
            </ListItem>
          </NavLink>
          <NavLink
            to="/helpcenter"
            style={({ isActive }) => (isActive ? activeStyle : activeClassName)}
          >
            <ListItem>
              <Box
                mt={1.5}
                ml={-2.1}
                fontWeight="700"
                fontSize="14px"
                display="flex"
                alignItems="center"
              >
                <HeadsetMicOutlinedIcon
                  sx={{
                    marginRight: "15px",
                    fontSize: "22px",
                    fontWeight: "400",
                  }}
                />
                Help Center
              </Box>
            </ListItem>
          </NavLink>
        </List>
      </Hidden>

      <Hidden mdUp>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)} style={{ zIndex: 1 }}>
              <MenuOpenIcon
                style={{
                  fontSize: "34px",
                  cursor: "pointer",
                  color: theme.primary.text,
                }}
              ></MenuOpenIcon>
            </Button>
            <Paper>
              <SwipeableDrawer
                classes={{ paper: classes.paper }}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </Paper>
          </React.Fragment>
        ))}
      </Hidden>
    </Box>
  );
}
