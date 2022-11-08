import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Logo from "../../images/Logo.png";
import Google from "../../images/Google.png";
import fb from "../../images/fb.png";
import tw from "../../images/tw.png";

function SignIn() {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");

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
          Sign in
        </Typography>

        <Typography
          mb={3}
          sx={{
            color: "#5D5D5B",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          Take the next step and sign in to your account
        </Typography>

        <Box>
          <Typography
            fontSize="12px"
            color={theme.primary.text}
            fontWeight="500"
            mb={0.5}
          >
            Enter your email
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
            Field title
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

        <Box
          py={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography color="#5D5D5B" fontSize="12px">
            Remember me
          </Typography>
          <Typography
            color={theme.primary.text}
            fontSize="12px"
            fontWeight="700"
          >
            Reset Password
          </Typography>
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
            textTransform: "capitalize",
            "&:hover": {
              background: theme.primary.btnBothDark,
            },
          }}
        >
          Sign in
        </Button>

        <Box
          py={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            borderBottom="1px solid rgba(207, 219, 213, 0.6)"
            width="100%"
          ></Typography>

          <Typography color={theme.primary.text} fontSize="12px" px={3}>
            or
          </Typography>
          <Typography
            borderBottom="1px solid rgba(207, 219, 213, 0.6)"
            width="100%"
            color={theme.primary.text}
            fontSize="12px"
          ></Typography>
        </Box>

        <Box
          py={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid rgba(207, 219, 213, 0.6)"
          borderRadius="24px"
        >
          <img src={Google} alt="" />
          <Typography color="#5D5D5B" fontSize="14px" pl={1} fontWeight="700">
            Sign in with Google
          </Typography>
        </Box>
        <Box
          mt={1}
          py={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid rgba(207, 219, 213, 0.6)"
          borderRadius="24px"
        >
          <img src={fb} alt="" />
          <Typography color="#5D5D5B" fontSize="14px" pl={1} fontWeight="700">
            Sign in with Facebook
          </Typography>
        </Box>
        <Box
          mt={1}
          py={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px solid rgba(207, 219, 213, 0.6)"
          borderRadius="24px"
        >
          <img src={tw} alt="" />
          <Typography color="#5D5D5B" fontSize="14px" pl={1} fontWeight="700">
            Sign in with Twitter
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default SignIn;
