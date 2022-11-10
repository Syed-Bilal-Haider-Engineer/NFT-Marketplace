import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
import { TiArrowMaximise } from "react-icons/ti";
import { AiOutlineCopy, AiOutlineWallet } from "react-icons/ai";

import Art1 from "../../../images/Art1.png";
import Flow from "../../../images/Flow.png";

export const UpperCardMain = ({ number, text, percent, value }) => {
  const theme = useTheme();
  return (
    <Box
      ml={value !== 0 && 1.5}
      mb={1}
      p={2}
      sx={{
        bgcolor: "transparent",
        color: theme.primary.text,
        border: "1px solid rgba(207, 219, 213, 0.6)",
        borderRadius: "12px",
        width: "350px",
        minWidth: "250px",
        height: "80px",
        display: "flex",
        "&:hover": {
          border: "1px solid #0DF17F",
        },
      }}
    >
      <Box
        sx={{
          background: theme.primary.bgGray,
          px: 1,
          height: "36px",
          borderRadius: "70px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {value === 0 && (
          <TiArrowMaximise
            style={{
              fontSize: "20px",
            }}
          />
        )}
        {value === 1 && (
          <AiOutlineCopy
            style={{
              fontSize: "20px",
            }}
          />
        )}
        {value === 2 && (
          <AiOutlineWallet
            style={{
              fontSize: "20px",
            }}
          />
        )}
      </Box>
      <Box ml={1} flexGrow="1">
        <Typography variant="body1">{number}</Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#5d5d5b",
              fontSize: "14px",
            }}
          >
            {text}
          </Typography>
          <Typography variant="subtitle2">
            {percent}%
            {+percent > 0 ? (
              <BsArrowUpRight
                style={{
                  color: "#0DF17F",
                  verticalAlign: "-3px",
                  marginLeft: "5px",
                }}
              />
            ) : (
              <BsArrowDownLeft
                style={{
                  color: "#0DF17F",
                  verticalAlign: "-3px",
                  marginLeft: "5px",
                }}
              />
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const BestSellers = ({
  text1,
  text2,
  text3,
  text4,
  price,
  logo,
  img,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width : 800px)");

  return (
    <Box
      my={2}
      pb={1}
      sx={{
        bgcolor: "transparent",
        color: theme.primary.text,
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(207, 219, 213, 0.6)",
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <img
          src={img}
          alt=""
          style={{
            width: matches ? "40px" : "50px",
            height: matches ? "40px" : "50px",
            borderRadius: matches ? "6px" : "10px",
          }}
        />
        <Box ml={2}>
          <Typography
            variant="body1"
            sx={{ fontSize: { md: "16px", xs: "13px" } }}
          >
            {text1}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#5d5d5b",
              fontSize: { md: "14px", xs: "12px" },
            }}
          >
            {text2}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: matches ? "40%" : "100%",
        }}
      >
        {!matches && (
          <Box>
            <Typography sx={{ fontSize: "14px" }}>{text3}</Typography>
            <Typography
              sx={{
                color: "#5d5d5b",
                fontSize: "14px",
              }}
            >
              Owners
            </Typography>
          </Box>
        )}

        {!matches && (
          <Box>
            <Typography
              sx={{
                color: "#03DB80",
                fontSize: "14px",
              }}
            >
              {text4}
            </Typography>
            <Typography
              sx={{
                color: "#5d5d5b",
                fontSize: "14px",
              }}
            >
              {price}
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
          }}
        >
          <img
            src={logo}
            alt=""
            style={{
              width: "20px",
              height: "20px",
              marginTop: "10px",
              marginRight: "5px",
            }}
          />
          <Box>
            <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
              10.0k
            </Typography>
            <Typography
              sx={{
                color: "#5d5d5b",
                fontSize: "14px",
              }}
            >
              Price
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
