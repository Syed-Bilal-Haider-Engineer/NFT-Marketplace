import React, { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Loading from "../../loading";
import TextInput from "./Inputstyle";
import {
  Typography,
  Dialog,
  DialogContent,
  Slide,
  Box,
  Button,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import { url } from "../URL";
import { useEffect } from "react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const StyledModal = withStyles((theme) => ({
  root: {
    "& .MuiDialog-paper": {
      width: "350px !important",
    },
    "& .MuiDialog-root": {
      zIndex: "1301 !important",
      height: "100% !important",
    },
    "&.MuiDialog-container": {
      overflowY: "hidden !important",
    },
    "& .MuiDialogContent-root": {
      padding: "15px 0px !important",
    },
    "& .MuiDialog-paperScrollPaper": {
      backgroundColor: `lightgray !important`,
      boxShadow: "#0DF17F 0px 0px 5px 1px",
      borderRadius: 0,
    },
    "& .dialoge__content__section": {
      background: "#172225",
    },
  },
}))(Dialog);

function Editeprofile({ open, func, userInfo }) {
  const [loading, setLoading] = useState(false);
  const [userfile, setUserfile] = useState("");
  const [filestate, setBaseURLstate] = useState("");
  const [userstate, setUserstate] = React.useState({
    id: "",
    email: "",
    name: "",
  });
  useEffect(() => {
    setUserstate({
      ...userstate,
      id: userInfo?._id,
      email: userInfo?.email,
      name: userInfo?.name,
    });
  }, [userInfo]);

  const formData = new FormData();
  //input filed change handler;
  const changeHandler = (e) => {
    setUserstate({ ...userstate, [e.target.name]: e.target.value });
  };
  const handleClose = () => {
    setUserstate({
      name: "",
      email: "",
      id: "",
    });
    func(false);
  };

  //Submit form, after filling the user form;
  const profilehandler = async (e) => {
    e.preventDefault();
    try {
      formData.append("file", userfile);
      formData.append("email", userstate.email);
      formData.append("name", userstate.name);
      formData.append("id", userstate.id);
      if (userstate.email !== "" || userstate.name !== "") {
        setLoading(true);
        const { data } = await axios.post(`${url}/userprofile`, formData);
        console.log("data edite profile:", data);
        if (data.status === "ok") {
          toast.success(data.message);
          handleClose();
        } else if (data.status === "error") {
          toast.error(data.message);
        }
      } else {
        toast.error("Please fill form !");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message);
    }
  };
  // image upload from server
  const handleFile = async (event) => {
    let file = event.target.files[0];
    setUserfile(file);
    const urlFILE = URL.createObjectURL(file);
    setBaseURLstate(urlFILE);
  };
  return (
    <>
      <Loading loading={loading} />
      <StyledModal
        open={open}
        keepMounted
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="dialoge__content__section">
          <Box sx={{ float: "right", p: 1, cursor: "pointer" }}>
            <CloseIcon sx={{ color: "#fff" }} onClick={handleClose} />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              align: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: 700,
                  paddingBottom: "10px",
                  color: "#fff",
                }}
              >
                Update user profile
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  padding: "15px 25px",
                  backgroundColor: "formscheme.main",
                }}
              >
                <TextInput
                  fullWidth
                  type="email"
                  value={userstate.email || ""}
                  onChange={changeHandler}
                  placeholder="Email"
                  name="email"
                  autoComplete="off"
                />

                <TextInput
                  fullWidth
                  type="text"
                  value={userstate.name || ""}
                  onChange={changeHandler}
                  placeholder="name"
                  name="name"
                  autoComplete="off"
                />
                <TextInput
                  fullWidth
                  type="file"
                  placeholder="file"
                  name="userfile"
                  autoComplete="off"
                  accept="image/*"
                  onChange={handleFile}
                />

                <Button
                  onClick={profilehandler}
                  type="submit"
                  sx={{
                    background: "#0DF17F",
                    borderRadius: "23px",
                    color: "#000000",
                    fontSize: "14px",
                    fontWeight: "700",
                    width: "100%",
                    mr: 1,
                    mt: 2,
                  }}
                  value="submit"
                >
                  EDIT
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </StyledModal>
    </>
  );
}

export default Editeprofile;
