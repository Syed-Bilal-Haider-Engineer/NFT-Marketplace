import React, { useContext } from "react";
import { Container, styled, Menu, MenuItem, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { AppContext } from "../utils";
import { useTheme } from "@emotion/react";
import logo from "../images/Logo.png";
import popIcon4 from "../images/popIcon41.png";
import wallet from "../images/wallet.png";
import Hidden from "@mui/material/Hidden";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const StyledMenu = styled((props) => (
  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    minWidth: 140,
    color: "#000000",
    background: "#0DF17F",

    "& .MuiMenu-list": {
      padding: "4px 0",
    },
  },
}));

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#172225 !important",
    justifyContent: "center",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export default function Header() {
  //close menu tag on click
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ///////////////////////////

  const { account, connect, disconnect } = useContext(AppContext);
  const classes = useStyles();
  const loc = useLocation();
  const [state, setState] = React.useState({
    left: false,
  });
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
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={-20} display="flex" justifyContent="center">
        <img width="60px" src="/logo.png" alt="" />
      </Box>
      <List>
        {[
          "Marketplace",
          "Stats",
          "Drops",
          "Activity",
          "Dashboard",
          "Signin",
          "Signup",
        ].map((text, index) => (
          <ListItem
            button
            style={{
              justifyContent: "center",
            }}
            key={text}
          >
            <Link to={text.toLowerCase()} style={{ textDecoration: "none" }}>
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                  fontFamily: "Righteous",
                  fontWeight: "600",
                }}
                primary={text}
              />
            </Link>
          </ListItem>
        ))}
      </List>
      <Box mb={1} display="flex" justifyContent="center">
        {account ? (
          <Box
            width="90%"
            height="42px"
            bgcolor={theme.primary.btnBothDark}
            borderRadius="50px"
            sx={{ cursor: "pointer" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#000"
            fontWeight="700"
            fontSize="14px"
            onClick={() => disconnect()}
            style={{ zIndex: 1 }}
          >
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </Box>
        ) : (
          <Box
            zIndex={1}
            style={{
              cursor: "pointer",
            }}
            bgcolor={theme.primary.btnBothDark}
            width="90%"
            height="42px"
            borderRadius="50px"
            fontWeight="700"
            fontSize="14px"
            color="#000"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => connect()}
          >
            Connect
          </Box>
        )}
      </Box>
    </div>
  );
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <Box
      position="relative"
      zIndex={1}
      style={{
        background: theme.primary.bg,
        zIndex: 100,
      }}
      height="80px"
      width="100%"
      display="flex"
      alignItems="center"
    >
      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#C49A08",
              fontSize: "20px",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                width="25px"
                src={logo}
                alt=""
                style={{ marginRight: "10px" }}
              />{" "}
              NFTALY
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent={matches ? "end" : "space-between"}
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Hidden mdDown>
                <Link to="/marketplace" style={{ textDecoration: "none" }}>
                  <Box
                    mr={6}
                    p={0.15}
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: theme.primary.text,
                      borderRadius: "5px",
                      border: "1px transparent",
                      backgroundImage:
                        loc.pathname === "/marketplace"
                          ? "linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)"
                          : null,
                      backgroundOrigin: "border-box",
                      backgroundClip: "content-box, border-box",
                    }}
                  >
                    <Typography
                      style={{
                        padding: "7px 10px",
                        fontSize: "15px",
                        fontWeight: "700",
                      }}
                    >
                      Explore
                    </Typography>
                  </Box>
                </Link>
                <Link to="/stats" style={{ textDecoration: "none" }}>
                  <Box
                    mr={6}
                    p={0.15}
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: theme.primary.text,
                      borderRadius: "5px",
                      border: "1px transparent",
                      backgroundImage:
                        loc.pathname === "/stats"
                          ? "linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)"
                          : null,
                      backgroundOrigin: "border-box",
                      backgroundClip: "content-box, border-box",
                    }}
                  >
                    <Typography
                      style={{
                        padding: "7px 10px",
                        fontSize: "15px",
                        fontWeight: "700",
                      }}
                    >
                      Stats
                    </Typography>
                  </Box>
                </Link>
                <Link to="/drops" style={{ textDecoration: "none" }}>
                  <Box
                    mr={6}
                    p={0.15}
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: theme.primary.text,
                      borderRadius: "5px",
                      border: "1px transparent",
                      backgroundImage:
                        loc.pathname === "/drops"
                          ? "linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)"
                          : null,
                      backgroundOrigin: "border-box",
                      backgroundClip: "content-box, border-box",
                    }}
                  >
                    <Typography
                      style={{
                        padding: "7px 10px",
                        fontSize: "15px",
                        fontWeight: "700",
                      }}
                    >
                      Drops
                    </Typography>
                  </Box>
                </Link>
                {/* <Link to="/activity" style={{ textDecoration: "none" }}> */}
                <Box
                  mr={6}
                  p={0.15}
                  sx={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: theme.primary.text,
                    borderRadius: "5px",
                    // border: "1px transparent",
                    // backgroundImage:
                    //   loc.pathname === "/drops"
                    //     ? "linear-gradient(#172225, #172225  ),linear-gradient(92.1deg, #0DF17F 0.3%, #00CDFF 74.1%)"
                    //     : null,
                    // backgroundOrigin: "border-box",
                    // backgroundClip: "content-box, border-box",
                  }}
                >
                  <Typography
                    style={{
                      padding: "7px 10px",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Activity
                  </Typography>
                </Box>
                {/* </Link> */}
                <Box pr={2} zIndex="1">
                  <Button
                    disableRipple
                    sx={{
                      background: theme.primary.btnBothDark,
                      borderRadius: "50px",
                      paddingX: "15px",
                      marginLeft: "10px",
                      paddingY: "8px",
                      color: "#000000",
                      textTransform: "capitalize",
                      fontSize: "15px",
                      "&:hover": {
                        background: theme.primary.btnBothDark,
                      },
                      fontWeight: "700",
                    }}
                    onClick={handleClick}
                    endIcon={<ArrowDropDownOutlinedIcon />}
                  >
                    Create
                  </Button>
                  <StyledMenu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <Link
                      to="/dashboard"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      <MenuItem
                        style={{ fontWeight: "700" }}
                        onClick={handleClose}
                        disableRipple
                      >
                        Dashboard
                      </MenuItem>
                    </Link>
                    <Link
                      to="/signin"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      <MenuItem
                        style={{ fontWeight: "700" }}
                        value={2}
                        onClick={handleClose}
                        disableRipple
                      >
                        Sign In
                      </MenuItem>
                    </Link>
                    <Link
                      to="/signup"
                      style={{
                        textDecoration: "none",
                        color: "#000000",
                      }}
                    >
                      <MenuItem
                        style={{ fontWeight: "700" }}
                        value={3}
                        onClick={handleClose}
                        disableRipple
                      >
                        Sign Up
                      </MenuItem>
                    </Link>
                    {/* <Link
                      to="/user-profile"
                      style={{ textDecoration: "none", color: "#000000" }}
                    > */}
                    {/* <MenuItem
                      style={{ fontWeight: "700" }}
                      value={4}
                      onClick={handleClose}
                      disableRipple
                    >
                      User Profile
                    </MenuItem> */}
                    {/* </Link> */}
                  </StyledMenu>
                </Box>
                {account ? (
                  <Box
                    width="42px"
                    height="42px"
                    bgcolor={theme.primary.btnBothDark}
                    borderRadius="50px"
                    sx={{ cursor: "pointer" }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    color="#ffffff"
                    fontWeight="700"
                    fontSize="14px"
                    onClick={() => disconnect()}
                    style={{ zIndex: 1 }}
                    mr={3}
                  >
                    <img src={wallet} alt="" />
                  </Box>
                ) : (
                  <Box
                    mr={3}
                    zIndex={1}
                    style={{
                      cursor: "pointer",
                    }}
                    border="1px solid #d1d1d1"
                    width="42px"
                    height="42px"
                    borderRadius="50px"
                    fontWeight="700"
                    fontSize="14px"
                    color="#ffffff"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    onClick={() => connect()}
                  >
                    <img src={wallet} alt="" />
                  </Box>
                )}
                <Link
                  to="/user-profile"
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  <Box
                    width="30px"
                    height="30px"
                    borderRadius="50px"
                    sx={{ cursor: "pointer" }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    color="#ffffff"
                    fontWeight="700"
                    fontSize="14px"
                    onClick={() => disconnect()}
                    style={{ zIndex: 1 }}
                  >
                    <img src={popIcon4} alt="" />
                  </Box>
                </Link>
              </Hidden>
            </Box>

            <Hidden mdUp>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    style={{ zIndex: 1 }}
                  >
                    <MenuIcon
                      style={{
                        fontSize: "38px",
                        cursor: "pointer",
                        color: theme.primary.text,
                      }}
                    ></MenuIcon>
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
        </Box>
      </Container>
    </Box>
  );
}
