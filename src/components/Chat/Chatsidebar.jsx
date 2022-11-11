import React from "react";
import {
  Avatar,
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import Icon from "../../images/Icon.png";

import popIcon41 from "../../images/popIcon41.png";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
const Chatsidebar = () => {
  const matches1 = useMediaQuery("(max-width:1279px)");
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: "#135146",

        height: "100vh",
        padding: "1rem",
      }}
    >
      <FormControl variant="standard">
        <TextField
          sx={{
            width: { xs: "100%", md: "100%" },

            borderRadius: "15px",
            "& label.Mui-focused": {
              color: theme.primary.text,
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#0DF17F",
              borderRadius: "15px",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#0DF17F",
                borderRadius: "15px",
              },
              "&:hover fieldset": {
                borderColor: "#0DF17F",
                borderRadius: "15px",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#0DF17F",
              },
            },
            input: {
              "&::placeholder": {
                textOverflow: "ellipsis !important",
                color: theme.primary.text,
              },
              color: theme.primary.text,
              fontSize: { xs: "12px", md: "14px" },
            },

            background: "transparent",
          }}
          id="standard-name"
          // value={amount}
          // onChange={(e) => setamount(e.target.value)}
          placeholder={"search name"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon
                    sx={{
                      color: "white",
                      fontSize: "2rem",
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      <Box mt={3}>
        <Divider style={{ backgroundColor: "#0DF17F" }} />
      </Box>
      <Box
        mt={3}
        sx={{
          display: "flex",
          alignItems: "center",

          color: "#0DF17F",
        }}
      >
        <AddIcon />
        <Typography marginLeft="0.5rem"> Add new Chat</Typography>
      </Box>

      <Box sx={{ color: "white" }} mt={2}>
        {[1, 2, 3].map(() => {
          return (
            <ListItem
              sx={{
                cursor: "pointer",
                "&:hover": {
                  background: "#2D393B",
                  borderRadius: "0.5rem",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar src={popIcon41}></Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "white" }}
                primary={
                  <Typography type="body2" style={{ color: "#FFFFFF" }}>
                    Rosiie
                  </Typography>
                }
                secondary={
                  <Typography
                    type="body2"
                    style={{
                      color: "#EBF0F0",
                      fontSize: "0.7rem",
                      opacity: "0.6",
                    }}
                  >
                    Nftaly is best platform
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default Chatsidebar;
