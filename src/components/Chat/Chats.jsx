import React, { useState } from "react";
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import popIcon41 from "../../images/popIcon41.png";
import io from "socket.io-client";
import { useTheme } from "@emotion/react";
import Icon from "../../images/Icon.png";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import GifBoxIcon from "@mui/icons-material/GifBox";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Picker from "emoji-picker-react";
const Chat = () => {
  const [showEmojiPicker, setShowEmojiPiker] = useState(false);

  const [initialMsg, setInitialMsg] = useState([]);
  const [msg, setMsg] = useState([]);
  const [thisMsg, setThisMsg] = useState("");
  const [emojiMsg, setEmpjiMsg] = useState("");

  const socket = io("http://localhost:8080");
  const location = useLocation();
  const theme = useTheme();
  let myAddress = "456";
  useEffect(() => {
    socket.emit("create-room", {
      user1: location?.state?.walletAddress,
      user2: myAddress,
    });
    console.log("running", socket);

    console.log("running", socket);
  }, []);

  useEffect(() => {
    socket.on("recieve-message", ({ name, message }) => {
      console.log(name, message, "messaf");
      msg.push({ walletAddress: name, message: message });
      setMsg([...msg]);
    });

    socket.on("recieve-room", ({ room }) => {
      setInitialMsg([...room.messages]);
      setMsg([]);
    });
  }, []);
  const allMsg = [...initialMsg, ...msg];
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      socket.emit("message", {
        name: myAddress,
        message: event.target.value,
        otherUser: location?.state?.walletAddress,
      });
      console.log(socket, "socket");
      setThisMsg("");
    }
  };

  const handlePicEmoji = () => {
    setShowEmojiPiker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiData, event) => {
    console.log(emojiData, "emoj");
    let messages = thisMsg;
    messages += emojiData.emoji;
    setThisMsg(messages);
  };

  return (
    <Box
      sx={{
        border: "1px solid #0DF17F",
        borderRadius: "23px",
        width: { md: "700px", xs: "100%" },
      }}
    >
      <Box
        sx={{
          padding: "0.5rem",
          background: "#155A3E",
          display: "flex",
          justifyContent: "space-between",
          borderTopLeftRadius: "23px",
          alignItem: "center",
          borderTopRightRadius: "23px",
        }}
      >
        <ListItem>
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
                online
              </Typography>
            }
          />
        </ListItem>
        <Box sx={{ textAlign: "center" }} mt={1.3}>
          <Box
            width="120px"
            height="42px"
            bgcolor="#0DF17F"
            borderRadius="50px"
            sx={{ cursor: "pointer" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="black"
            fontWeight="700"
            fontSize="14px"
            style={{ zIndex: 1 }}
          >
            follow
          </Box>
        </Box>
      </Box>

      <div className="chatBody">
        {/* <Box className="chat-msg">
          <Avatar src={popIcon41}></Avatar>
          <Box
            sx={{
              backgroundColor: "#155A3E",
              padding: "0.5rem 1rem",
              marginLeft: "1rem",
              borderRadius: "15px",
              color: "white",
            }}
          >
            Hi , How are you doing
          </Box>
        </Box> */}
        {allMsg.map((msg) => {
          return (
            <Box
              className={
                msg.walletAddress === myAddress
                  ? "chat-msg chat-reciver"
                  : "chat-msg"
              }
            >
              <Box
                sx={{
                  backgroundColor: "transparent",
                  padding: "0.5rem 1rem",
                  border: "1px solid #0DF17F",
                  borderRadius: "15px",
                  color: "white",
                }}
              >
                {msg?.message}
              </Box>

              <Avatar src={popIcon41} sx={{ marginLeft: "1rem" }}></Avatar>
            </Box>
          );
        })}

        {/* <Box className="chat-msg chat-reciver">
          <Box
            sx={{
              backgroundColor: "transparent",
              padding: "0.5rem 1rem",
              border: "1px solid #0DF17F",
              borderRadius: "15px",
              color: "white",
              maxWidth: "230px",
            }}
          >
            I’m doing great, 😁 How about you?
          </Box>

          <Avatar src={popIcon41} sx={{ marginLeft: "1rem" }}></Avatar>
        </Box>
        <Box className="chat-msg">
          <Avatar src={popIcon41}></Avatar>
          <Box
            sx={{
              backgroundColor: "#155A3E",
              padding: "0.5rem 1rem",
              marginLeft: "1rem",
              borderRadius: "15px",
              color: "white",
            }}
          >
            I’m fine.
            <br />
            Actually I really like your NFT collection, they
            <br /> are awesome
          </Box>
        </Box> */}
      </div>

      <Box mb={2} px={6} sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", top: "-470px" }}>
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </Box>
        <TextField
          onKeyPress={handleKeyPress}
          sx={{
            width: { xs: "100%", md: "100%" },

            borderRadius: "10px",
            "& label.Mui-focused": {
              color: theme.primary.text,
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#0DF17F",
              borderRadius: "10px",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#0DF17F",
                borderRadius: "10px",
              },
              "&:hover fieldset": {
                borderColor: "#0DF17F",
                borderRadius: "10px",
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
            },
            input: {
              color: theme.primary.text,
              fontSize: { xs: "12px", md: "14px" },
            },
            background: theme.primary.bg,
          }}
          id="standard-name"
          value={thisMsg}
          onChange={(e) => {
            setThisMsg(e.target.value);
          }}
          type="text"
          placeholder={"Thank you so much that very sweet of you "}
          InputProps={{
            startAdornment: (
              <>
                <Box
                  alignItems="center"
                  sx={{
                    cursor: "pointer",
                    margin: "0.7rem 2rem",
                    display: { md: "flex", xs: "none" },
                  }}
                >
                  <SentimentSatisfiedAltIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: "#0E7C54",
                    }}
                    onClick={handlePicEmoji}
                  />

                  <GifBoxIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: "#0E7C54",
                    }}
                  />
                  <AttachFileIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: "#0E7C54",
                    }}
                  />
                  <Box
                    sx={{
                      height: "30px",
                      borderLeft: "3px solid #0E7C54",
                      marginLeft: "1rem",
                    }}
                  ></Box>
                </Box>
              </>
            ),
          }}
          on
        />
      </Box>
    </Box>
  );
};

export default Chat;
