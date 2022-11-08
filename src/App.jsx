import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider as ProviderMui } from "@emotion/react";
import { createTheme, Grid } from "@mui/material";
import Web3 from "web3";
import NetworkChange from "./networkSwitch";
import Homepage from "./components/LandingPage/Homepage";
import { Route, Routes } from "react-router-dom";
import NoteableDrops from "./components/LandingPage/NoteableDrops";

import Dashboard from "./components/Dashboard/Dashboard";
import TopCollecions from "./components/LandingPage/TopCollecions";
import ResourcesPart from "./components/LandingPage/ResourcesPart";
import Footer from "./components/Footer";
import TrandingNft from "./components/LandingPage/TrandingNft";
import PopularNft from "./components/LandingPage/PopularNft";
import Stats from "./components/Stats/Stats";
import Drops from "./components/Drops/Drops";
import NftDetail from "./components/NftDetail/NftDetail";
import SignIn from "./components/SignPages/SignIn";
import SignUp from "./components/SignPages/SignUp";
import MarketPlace from "./components/MarketPlace/MarketPlace";
import Collections from "./components/Collections/Collections";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  const [switchNetwork, setswitchNetwork] = useState(false);

  // const LightTheme = createTheme({
  //   primary: {
  //     bgHeader: "transparent",
  //     bg: "#ffffff",
  //     bgGray: "#ffffff",
  //     bgButton: "#EBF0F0",
  //     bgButtonTwo: "#E4DCFD",
  //     btnBothDark: "#6242C3",
  //     sideBarNonActive: "#5D5D5B",
  //     text: "#000000",
  //     subtext: "#6242C3",
  //     heading: "#202532",
  //     textPurple: "#7a52f4",
  //     section: "#fff",
  //     sectionBorder: "1px solid #e7e8ea",
  //     bgProfile: "rgba(235, 240, 240, 0.5)",
  //     bgProfile1:
  //       "linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #7A52F4",
  //     bgResource: "#f1f5f5",
  //     btnBorder: "1px solid rgba(207, 219, 213, 0.6)",
  //     bgFooter: "#ffffff",
  //     boxShadow: "0px 0px 3px 1px #dadada",
  //   },
  // });

  const DarkTheme = createTheme({
    primary: {
      bgHeader: "#000000",
      bg: "#172225",
      bgGray: "#979797",
      bgButton: "#191B1F",
      bgButtonTwo: "#6242C3",
      btnBothDark: "#6242C3",
      sideBarNonActive: "rgba(255, 255, 255, 0.5)",
      text: "#ffffff",
      subtext: "#ffffff",
      heading: "#fafafa",
      textPurple: "#fff",
      section: "#1a1e21",
      sectionBorder: "1px solid #262626",
      bgProfile: "rgba(235, 240, 240, 0.1)",
      bgProfile1: "rgba(235, 240, 240, 0.1)",
      bgResource: "#171818",
      btnBorder: "1px solid rgba(207, 219, 213, 0.15)",
      bgFooter: "#181818",
      boxShadow: "0px 0px 0px 1px #181818",
    },
  });

  const web3 = new Web3(
    Web3.givenProvider
      ? Web3.givenProvider
      : "https://bsc-dataseed.binance.org/"
  );
  useEffect(() => {
    let chain = async () => {
      const chainid = await web3.eth.getChainId();
      if (chainid !== 56) {
        setswitchNetwork(true);
      }
    };
    chain();
  }, []);

  return (
    <>
      <NetworkChange open={switchNetwork} setOpen={setswitchNetwork} />
      <ProviderMui theme={DarkTheme}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <MainLandingPage /> */}
                <Homepage />
                <NoteableDrops />
                <TopCollecions />
                <TrandingNft />
                <ResourcesPart />
                <PopularNft />
              </>
            }
          />
          <Route path="/stats" element={<Stats />} />
          <Route path="/drops" element={<Drops />} />
          <Route path="/explore" element={<NftDetail />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/*" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </ProviderMui>
    </>
  );
}

export default App;
