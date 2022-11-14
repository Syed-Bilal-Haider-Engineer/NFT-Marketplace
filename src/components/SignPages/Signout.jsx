import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Signout() {
  const token = localStorage.getItem("nft_aly_Token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      localStorage.removeItem("nft_aly_Token");
      window.location = "/";
    } else {
      window.location = "/";
    }
  }, []);
  return true;
}

export default Signout;
