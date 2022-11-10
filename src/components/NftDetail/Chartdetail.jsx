import { Box, Container, Grid, styled, Typography } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

// import openseaIcon from "../../assets/openseaIcon.png";
// import openseaPic from "../../assets/openseaPic.png";

const chartData = [
  {
    date: "Jan 23",
    amount: 470,
  },
  {
    date: "Jan 24",
    amount: 590,
  },
  {
    date: "Jan 25",
    amount: 540,
  },
  {
    date: "Jan 26",
    amount: 560,
  },
  {
    date: "Jan 27",
    amount: 530,
  },
  {
    date: "Jan 28",
    amount: 510,
  },
  {
    date: "Jan 29",
    amount: 800,
  },
  {
    date: "Jan 30",
    amount: 790,
  },
  {
    date: "Jan 31",
    amount: 670,
  },
  {
    date: "Feb 1",
    amount: 580,
  },
  {
    date: "Feb 2",
    amount: 450,
  },
];

const chartData1 = [
  {
    date: "Jan 23",
    amount: 200,
  },
  {
    date: "Jan 24",
    amount: 230,
  },
  {
    date: "Jan 25",
    amount: 400,
  },
  {
    date: "Jan 26",
    amount: 300,
  },
  {
    date: "Jan 27",
    amount: 590,
  },
  {
    date: "Jan 28",
    amount: 400,
  },
  {
    date: "Jan 29",
    amount: 900,
  },
  {
    date: "Jan 30",
    amount: 790,
  },
  {
    date: "Jan 31",
    amount: 670,
  },
  {
    date: "Feb 1",
    amount: 500,
  },
  {
    date: "Feb 2",
    amount: 450,
  },
];
const chartData2 = [
  {
    date: "Jan 23",
    amount: 400,
  },
  {
    date: "Jan 24",
    amount: 590,
  },
  {
    date: "Jan 25",
    amount: 200,
  },
  {
    date: "Jan 26",
    amount: 560,
  },
  {
    date: "Jan 27",
    amount: 250,
  },
  {
    date: "Jan 28",
    amount: 510,
  },
  {
    date: "Jan 29",
    amount: 900,
  },
  {
    date: "Jan 30",
    amount: 790,
  },
  {
    date: "Jan 31",
    amount: 1000,
  },
  {
    date: "Feb 1",
    amount: 580,
  },
  {
    date: "Feb 2",
    amount: 200,
  },
];

// ---------------Tab data--------------
const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "500",
    borderRadius: "7px",
    fontSize: "12px",
    color: "#fff",
    "&.Mui-selected": {
      color: "#AEAEAE",
      background: "#23363b",
    },
  })
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value != index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value == index && (
        <Box mt={3}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function Chartdetail() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    console.log(newValue, "newValue");
  };

  return (
    <Box
      sx={{
        border: "1px solid rgba(207, 219, 213, 0.15)",
        p: 1,
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "space-between", xs: "center" },
          flexDirection: { md: "row", xs: "column" },

          borderBottom: "1px solid rgba(207, 219, 213, 0.15)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "18px",
            color: "white",

            py: 2,
            mb: { md: "0px", xs: "20px" },
          }}
        >
          Price history
        </Typography>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              // marginBottom: "50px",
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <AntTab label="All time" />
            <AntTab label="Last 6 months" />
            <AntTab label="Month" />
          </Tabs>
        </Box>
      </Box>
      <Box>
        <Box height="100%" mt={9}>
          <Box sx={{ width: "100%", height: "250px" }}>
            <ResponsiveContainer>
              <AreaChart
                data={
                  value == 0 ? chartData : value == 1 ? chartData1 : chartData2
                }
                margin={{
                  top: 10,
                  right: 10,
                  left: -50,
                  bottom: 0,
                }}
                style={{
                  backgroundColor: "transparent",
                  position: "relative",
                }}
              >
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                  dataKey="amount"
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#01FC7E"
                  fill="#00e5ba"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Chartdetail;
