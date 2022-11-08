import { Box, Container, Grid } from "@mui/material";
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

function Dashboard() {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.primary.bg}>
      <Container>
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
