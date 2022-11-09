import React from "react";
import { Dialog, DialogContent, Box, Slide } from "@mui/material";
import { withStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledModal = withStyles(() => ({
  root: {
    "& .MuiDialog-root": {
      zIndex: "1301 !important",
    },
    "&.MuiDialog-container": {
      overflowY: "hidden !important",
    },
    "& .MuiDialog-paperScrollPaper": {
      backgroundColor: "#ffffff !important",
      height: "auto",
      boxShadow: "#B6CAE8 0px 0px 5px 1px",
    },
    "& .dialoge__content__section": {
      background: "#172225 !important",

      // borderRadius: 5,
    },
    "& .MuiDialogContent-root": {
      paddingTop: "28px",
      paddingBottom: "28px",
    },
  },
}))(Dialog);

function NetworkChange({ open, setOpen }) {
  const theme = useTheme();
  const handleClose = () => {
    setOpen(false);
  };
  const networkHandler = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        // params: [{ chainId: "0x38" }], //BSC Mainnet
        params: [{ chainId: "0x61" }], //BSC Testnet
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="modal__main__container">
        <StyledModal
          open={open}
          keepMounted
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent className="dialoge__content__section">
            <Box
              borderRadius="100px"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <CloseIcon
                sx={{
                  fontSize: "5rem",
                  border: "2px solid #fc466b",
                  borderRadius: "50%",
                  padding: "3%",
                  color: "red",
                }}
              />

              <Box mt={1} component="h3" color="#fff">
                You are on wrong network please switch your network.
              </Box>
              <Box
                mt={2}
                py={3}
                display="flex"
                justifyContent="center"
                width="100%"
              >
                <Box
                  width="170px"
                  height="42px"
                  bgcolor="#0DF17F"
                  borderRadius="50px"
                  sx={{ cursor: "pointer" }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  color="#000"
                  fontWeight="700"
                  fontSize="14px"
                  style={{ zIndex: 1 }}
                  onClick={() => networkHandler()}
                >
                  Switch
                </Box>
              </Box>
            </Box>
          </DialogContent>
        </StyledModal>
      </div>
    </div>
  );
}

export default NetworkChange;
