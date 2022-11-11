import React from "react";
import Chatsidebar from "./Chatsidebar";
import Chat from "./Chats";
import { Box, Container, Grid } from "@mui/material";
const MainChat = () => {
  return (
    <Box sx={{ backgroundColor: "#172225" }} py={5}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Chatsidebar />
          </Grid>
          <Grid item md={9} xs={12}>
            <Chat />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainChat;
