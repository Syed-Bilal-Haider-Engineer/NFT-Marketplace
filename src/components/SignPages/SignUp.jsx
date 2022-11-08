import React, { useState } from "react";
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { useNavigate } from "react-router-dom";
import Logo from "../../images/Logo.png";

function SignUp() {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [search4, setSearch4] = useState("");
  //   const [accountId, setAccountId] = useState();
  //   const navigate = useNavigate();
  return (
    <Box py="50px" bgcolor={theme.primary.bg}>
      <Container maxWidth="sm">
        <Box textAlign="center">
          <img src={Logo} alt="logo" />
        </Box>

        <Typography
          mt={2}
          sx={{
            color: theme.primary.text,
            fontSize: { md: "42px", xs: "28px" },
            fontWeight: "800",
            textAlign: "center",
          }}
        >
          Sign Up
        </Typography>

        <Typography
          mb={3}
          sx={{
            color: "#5D5D5B",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Take the next step and sign up to your account
        </Typography>

        <Box>
          <Typography
            fontSize="12px"
            color={theme.primary.text}
            fontWeight="500"
            mb={0.5}
          >
            Full name
          </Typography>
          <TextField
            sx={{
              width: "100%",
              borderRadius: "24px",
              // marginTop: "10px",

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
              },
              input: {
                "&::placeholder": {
                  textOverflow: "ellipsis !important",
                  color: "rgba(255, 255, 255, 0.4)",
                },
              },
              input: {
                color: theme.primary.text,
                fontSize: "14px",
              },
              background: theme.primary.bg,
            }}
            // id="standard-name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={"Catherine Shaw"}
            InputProps={{
              endAdornment: (
                <GroupAddOutlinedIcon
                  sx={{
                    color: theme.primary.text,
                    marginRight: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              ),
            }}
          />
        </Box>

        <Box mt={1}>
          <Typography
            fontSize="12px"
            color={theme.primary.text}
            fontWeight="500"
            mb={0.5}
          >
            Email
          </Typography>
          <TextField
            sx={{
              width: "100%",
              borderRadius: "24px",
              // marginTop: "10px",

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
              },
              input: {
                "&::placeholder": {
                  textOverflow: "ellipsis !important",
                  color: "rgba(255, 255, 255, 0.4)",
                },
              },
              input: {
                color: theme.primary.text,
                fontSize: "14px",
              },
              background: theme.primary.bg,
            }}
            // id="standard-name"
            value={search1}
            onChange={(e) => setSearch1(e.target.value)}
            placeholder={"abc@gmail.com"}
            InputProps={{
              endAdornment: (
                <MailOutlineIcon
                  sx={{
                    color: theme.primary.text,
                    marginRight: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              ),
            }}
          />
        </Box>

        <Box mt={1}>
          <Typography
            fontSize="12px"
            color={theme.primary.text}
            fontWeight="500"
            mb={0.5}
          >
            Username
          </Typography>
          <TextField
            sx={{
              width: "100%",
              borderRadius: "24px",
              // marginTop: "10px",

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
              },
              input: {
                "&::placeholder": {
                  textOverflow: "ellipsis !important",
                  color: "rgba(255, 255, 255, 0.4)",
                },
              },
              input: {
                color: theme.primary.text,
                fontSize: "14px",
              },
              background: theme.primary.bg,
            }}
            // id="standard-name"
            value={search2}
            onChange={(e) => setSearch2(e.target.value)}
            placeholder={"Create your username"}
            InputProps={{
              endAdornment: (
                <AccountCircleOutlinedIcon
                  sx={{
                    color: theme.primary.text,
                    marginRight: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              ),
            }}
          />
        </Box>

        <Box mt={1}>
          <Typography
            fontSize="12px"
            color={theme.primary.text}
            fontWeight="500"
            mb={0.5}
          >
            Password
          </Typography>
          <TextField
            sx={{
              width: "100%",
              borderRadius: "24px",
              // marginTop: "10px",

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
              },
              input: {
                "&::placeholder": {
                  textOverflow: "ellipsis !important",
                  color: "rgba(255, 255, 255, 0.4)",
                },
              },
              input: {
                color: theme.primary.text,
                fontSize: "14px",
              },
              background: theme.primary.bg,
            }}
            // id="standard-name"
            value={search3}
            onChange={(e) => setSearch3(e.target.value)}
            type="password"
            placeholder={"Password"}
            InputProps={{
              endAdornment: (
                <VisibilityOffIcon
                  sx={{
                    color: theme.primary.text,
                    marginRight: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              ),
            }}
          />
        </Box>
        <Box mt={1}>
          <Typography
            fontSize="12px"
            color={theme.primary.text}
            fontWeight="500"
            mb={0.5}
          >
            Confirm Password
          </Typography>
          <TextField
            sx={{
              width: "100%",
              borderRadius: "24px",
              // marginTop: "10px",

              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(207, 219, 213, 0.6)",
                  borderRadius: "24px",
                },
              },
              input: {
                "&::placeholder": {
                  textOverflow: "ellipsis !important",
                  color: "rgba(255, 255, 255, 0.4)",
                },
              },
              input: {
                color: theme.primary.text,
                fontSize: "14px",
              },
              background: theme.primary.bg,
            }}
            // id="standard-name"
            value={search4}
            onChange={(e) => setSearch4(e.target.value)}
            type="password"
            placeholder={"Confirm password"}
            InputProps={{
              endAdornment: (
                <LockOutlinedIcon
                  sx={{
                    color: theme.primary.text,
                    marginRight: "10px",
                    width: "20px",
                    height: "20px",
                  }}
                />
              ),
            }}
          />
        </Box>

        <Button
          disableRipple
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            color: "#fff",
            background: theme.primary.btnBothDark,
            width: "100%",
            borderRadius: "24px",
            paddingY: "10px",
            marginTop: "50px",
            textTransform: "capitalize",
            "&:hover": {
              background: theme.primary.btnBothDark,
            },
          }}
        >
          Submit and Continue
        </Button>
      </Container>
    </Box>
  );
}

export default SignUp;
