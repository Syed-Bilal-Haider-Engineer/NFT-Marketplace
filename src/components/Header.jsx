import React, { useContext } from "react";
import {
  Container,
  styled,
  InputBase,
  FormControl,
  Select,
  Menu,
  MenuItem,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import { AppContext } from "../utils";
import { useTheme } from "@emotion/react";
import logo from "../images/Logo.png";
// import logoSmall from "../images/logo-small.svg";
import moon from "../images/moon.svg";
import sun from "../images/sun.svg";
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
import { Link } from "react-router-dom";
import Brightness3Icon from "@mui/icons-material/Brightness3";
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
    color: "white",
    background: "#6242c3",

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
    background: "#5D5D5B !important",
    justifyContent: "center",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

// const ExpireInput = styled(InputBase)(() => ({
//   "& .MuiInputBase-input": {
//     borderRadius: "24px",
//     color: "#fff",
//     backgroundColor: "#7A52F4",
//     fontWeight: "400",
//     textAlign: "center",
//     padding: "10px",
//   },
// }));
// const MenuProps = {
//   PaperProps: {
//     style: {
//       backgroundColor: "#7A52F4",
//       color: "white",
//     },
//   },
// };

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
        {["Explore", "Stats", "Drops"].map((text, index) => (
          <ListItem
            button
            style={{
              justifyContent: "center",
            }}
            key={text}
          >
            <Link
              to={text.toLowerCase()}
              smooth
              style={{ textDecoration: "none" }}
            >
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
            color="#ffffff"
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
            color="#ffffff"
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pl={matches ? 0 : 5}
          pr={matches ? 0 : 5}
        >
          <Box
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#C49A08",
              fontSize: "20px",
            }}
          >
            <Link to="/">
              <img width={matches ? "50px" : "50px"} src={logo} alt="" />
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
                <Link
                  to="/marketplace"
                  smooth
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    mr={6}
                    fontSize="16px"
                    fontWeight="700"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: theme.primary.text,
                    }}
                  >
                    Explore
                  </Box>
                </Link>
                <Link to="/stats" smooth style={{ textDecoration: "none" }}>
                  <Box
                    mr={6}
                    fontSize="16px"
                    zIndex="1"
                    fontWeight="700"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: theme.primary.text,
                    }}
                  >
                    Stats
                  </Box>
                </Link>
                <Link to="/drops" smooth style={{ textDecoration: "none" }}>
                  <Box
                    mr={6}
                    fontSize="16px"
                    zIndex="1"
                    fontWeight="700"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: theme.primary.text,
                    }}
                  >
                    Drops
                  </Box>
                </Link>
                {account ? (
                  <Box
                    width="100px"
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
                    width="100px"
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
                    Connect
                  </Box>
                )}
              </Hidden>

              {/* <Link to="/dashboard" style={{ textDecoration: "none" }}> */}
              {matches ? (
                <Box
                  zIndex={1}
                  style={{
                    cursor: "pointer",
                    paddingLeft: "1rem",
                  }}
                  mt={0.5}
                >
                  <AccountCircleRoundedIcon
                    sx={{
                      color: theme.primary.text,
                      fontSize: "45px",
                      // "&:hover": {
                      //   color: "#000000",
                      // },
                    }}
                  />
                </Box>
              ) : (
                <Box pr={2} zIndex="1">
                  <Button
                    disableRipple
                    sx={{
                      background: theme.primary.btnBothDark,
                      borderRadius: "50px",
                      paddingX: "15px",
                      marginLeft: "10px",
                      paddingY: "8px",
                      color: "#fff",
                      textTransform: "capitalize",
                      fontSize: "15px",
                      "&:hover": {
                        background: theme.primary.btnBothDark,
                      },
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
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <MenuItem onClick={handleClose} disableRipple>
                        Dashboard
                      </MenuItem>
                    </Link>
                    <Link
                      to="/signin"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <MenuItem value={2} onClick={handleClose} disableRipple>
                        Sign In
                      </MenuItem>
                    </Link>
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <MenuItem value={3} onClick={handleClose} disableRipple>
                        Sign Up
                      </MenuItem>
                    </Link>
                    <Link
                      to="/user-profile"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <MenuItem value={4} onClick={handleClose} disableRipple>
                        User Profile
                      </MenuItem>
                    </Link>
                  </StyledMenu>
                </Box>
              )}
              {/* </Link> */}
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
