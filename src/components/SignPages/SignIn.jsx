import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
// import Logo from "../../../assets/logo.svg";
// import { loginRoute } from "../../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Button, Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import loginImg from "../../images/Login-img.png";
import sh4 from "../../images/sh4.png";
import sh8 from "../../images/sh8.png";
// import Eth from "./assets/Eth.png";
// import Tz from "./assets/Tz.png";
// import Flow from "./assets/Flow.png";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";

export default function Login() {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  //
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // if (validateForm()) {
    //   const { username, password } = values;
    //   const { data } = await axios.post(loginRoute, {
    //     username,
    //     password,
    //   });
    //   if (data.status === false) {
    //     toast.error(data.msg, toastOptions);
    //   }
    //   if (data.status === true) {
    //     localStorage.setItem(
    //       process.env.REACT_APP_LOCALHOST_KEY,
    //       JSON.stringify(data.user)
    //     );
    //     navigate("/chat");
    //   }
    // }
  };

  return (
    <>
      <Box position="relative" bgcolor="#172225">
        <img
          src={sh4}
          alt=""
          style={{
            position: "absolute",
            width: "50%",
            bottom: "0px",
            left: "0px",
          }}
        />
        <img
          src={sh8}
          alt=""
          style={{
            position: "absolute",
            width: "30%",
            top: "0px",
            right: "0px",
          }}
        />
        <Container maxWidth="lg">
          <Grid container py={5}>
            <Grid item xs={12} md={6}>
              <Box>
                <Box
                  color="#ffffff"
                  width="80%"
                  fonteight={800}
                  fontSize="35px"
                >
                  A highly-curated platform for creating, collecting unique NFTs
                </Box>
                <img src={loginImg} alt="" />
                <Stack
                  my={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  bgcolor="#121F21"
                  py={1}
                  px={1.5}
                  borderRadius="30px"
                >
                  <Box color="gray">You don’t have an account?</Box>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <Button
                      sx={{
                        color: "#ffffff",
                        background:
                          "linear-gradient(96.71deg, #01fc7e 0%, #00ccfe 157.45%)",
                        borderRadius: "23px",
                        padding: "8px 25px",
                        "&:hover": {
                          background:
                            "linear-gradient(96.71deg, #01fc7e 0%, #00ccfe 157.45%)",
                          color: "#fff !important",
                        },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                color="#ffffff"
                textAlign="center"
                fontWeight="800"
                fontSize="42px"
              >
                Login
              </Box>
              <Box
                my={1}
                textAlign="center"
                fontWeight={400}
                fontSize="14px"
                width="70%"
                mx="auto"
                color="lightgray"
              >
                Choose one of available wallet providers or create a new wallet.
                What is a wallet?
              </Box>
              <FormContainer>
                <form action="" onSubmit={(event) => handleSubmit(event)}>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => handleChange(e)}
                    min="3"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                  <button type="submit">Log In</button>
                </form>
              </FormContainer>
              {/* Tabs */}
              {/* <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "#5A5A5A" }}>
                    <TabList
                      onChange={handleTabChange}
                      aria-label="lab API tabs example"
                      sx={{
                        "& .MuiTabs-indicator": {
                          backgroundColor: "#0DF17F",
                        },
                        "& .Mui-selected": {
                          color: "#fff !important",
                        },
                      }}
                    >
                      <Tab
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 1,
                          color: "#fff",
                        }}
                        icon={<img src={Eth} />}
                        label="Ethereum"
                        value="1"
                      />
                      <Tab
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 1,
                          color: "#fff",
                        }}
                        icon={<img src={Tz} />}
                        label="Tezos"
                        value="2"
                      />
                      <Tab
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 1,
                          color: "#fff",
                        }}
                        icon={<img src={Flow} />}
                        label="Flow"
                        value="3"
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="1">Item One</TabPanel>
                  <TabPanel value="2">Item Two</TabPanel>
                  <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
              </Box> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
        </form>
      </FormContainer> */}
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  // height: 100vh;
  // width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #172326;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    // background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem;
  }
  input {
    background-color: transparent;
    padding: 0.7rem;
    border: 0.1rem solid #fff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1.3rem;
    &:focus {
      border: 0.1rem solid #fff;
      outline: none;
    }
  }
  button {
    background: linear-gradient(96.71deg, #01fc7e 0%, #00ccfe 157.45%);
    color: #000;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background: linear-gradient(96.71deg, #01fc7e 0%, #00ccfe 157.45%);
      color: #fff !important;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
