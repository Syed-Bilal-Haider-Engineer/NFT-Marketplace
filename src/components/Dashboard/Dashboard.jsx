import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Routes, Route } from "react-router-dom";

import DashboardMain from "./Mainpage/DashboardMain";
import Listing from "./Listing/Listing";
import ProfileInfo from "./profile/Profile";
import Security from "./security/Security";
import AppsPage from "./appsPage/AppsPage";
import Notifications from "./notification/Notifications";
import TableDetail from "./TableDetail";
import HelpCenter from "./HelpCenter/HelpCenter";
import SideBar from "./SideBar";
import Favorites from "./Fovorites/Favorites";
import Payouts from "./Payouts/Payouts";

import Dsh1 from "../../images/Dsh1.png";
import Dsh2 from "../../images/Dsh2.png";
import Dsh3 from "../../images/Dsh3.png";
import Dsh4 from "../../images/Dsh4.png";

function Dashboard() {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Box position="relative" bgcolor={theme.primary.bg}>
      <img
        src={matches ? "" : Dsh1}
        style={{
          position: "absolute",
          left: "0%",
          top: "0%",
        }}
        alt=""
      />
      <img
        src={matches ? "" : Dsh2}
        style={{
          position: "absolute",
          right: "0%",
          bottom: "0%",
        }}
        alt=""
      />
      <img
        src={matches ? "" : Dsh3}
        style={{
          position: "absolute",
          right: "0%",
          top: "0%",
        }}
        alt=""
      />
      <img
        src={matches ? "" : Dsh4}
        style={{
          position: "absolute",
          left: "0%",
          bottom: "0%",
        }}
        alt=""
      />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={1} md={2.5}>
            <SideBar />
          </Grid>
          <Grid item xs={11} md={9.5}>
            <Routes>
              <Route path="/dashboard" element={<DashboardMain />} />
              <Route path="/listing" element={<Listing />} />
              <Route path="/listing/details" element={<TableDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/favorites/details" element={<TableDetail />} />
              <Route path="/payouts" element={<Payouts />} />
              <Route path="/payouts/details" element={<TableDetail />} />
              <Route path="/profileinfo" element={<ProfileInfo />} />
              <Route path="/security" element={<Security />} />
              <Route path="/apps" element={<AppsPage />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/helpcenter" element={<HelpCenter />} />
            </Routes>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard;
