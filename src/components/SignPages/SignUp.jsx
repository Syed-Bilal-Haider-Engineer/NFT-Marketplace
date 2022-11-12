import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
// import Logo from "../../../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { registerRoute } from "../../../utils/APIRoutes";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import loginImg from "../../images/Login-img.png";
import sh4 from "../../images/sh4.png";
import sh8 from "../../images/sh8.png";
import { AppContext } from "../../utils";
import { url } from "../URL";
export default function Register() {
  const { account } = useContext(AppContext);
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    walletaddress: "",
    confirmPassword: "",
  });
  console.log("account:", account);
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, name, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (name.length < 3) {
      toast.error("name should be greater than 3 characters.", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      try {
        if (account) {
          const uservalues = {
            ...values,
            walletaddress: account?.toLowerCase(),
          };
          const { data } = await axios.post(`${url}/createuser`, uservalues);
          console.log("value:", data);
          if (data?.status == "ok") {
            toast.success(data?.message);
            setValues({
              name: "",
              email: "",
              password: "",
              walletaddress: account,
              confirmPassword: "",
            });
            setTimeout(() => {
              navigate("/");
            }, 2500);
          }
          data?.error == false && toast.error(data?.message);
        } else {
          toast.error("please connect with Wallet");
        }
      } catch (error) {
        console.log("signup error", error);
      }
    }
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
                    to="/signin"
                    style={{ textDecoration: "none", color: "#ffffff" }}
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
                      Login
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
                Sign Up
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
                    placeholder="name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={(e) => handleChange(e)}
                  />
                  <button type="submit">Create User</button>
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
              </Box>  */}
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
       
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
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
    padding: 3rem 5rem;
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
      color: #fff;
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
