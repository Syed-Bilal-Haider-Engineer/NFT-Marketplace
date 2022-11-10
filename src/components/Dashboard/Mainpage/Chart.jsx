import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  Legend,
} from "recharts";
import { useTheme } from "@emotion/react";

const data = [
  {
    month: "Jan",
    View: 14,
    Sales: 12,
  },
  {
    month: "Feb",
    View: 12,
    Sales: 13,
  },
  {
    month: "Mar",
    View: 11,
    Sales: 10,
  },
  {
    month: "Apr",
    View: 10,
    Sales: 9,
  },
  {
    month: "May",
    View: 9,
    Sales: 8,
  },
  {
    month: "Jun",
    View: 8.5,
    Sales: 20,
  },
  {
    month: "Jul",
    View: 24,
    Sales: 10,
  },
  {
    month: "Aug",
    View: 12,
    Sales: 13,
  },
  {
    month: "Sep",
    View: 11,
    Sales: 11,
  },
];

export default function Chart() {
  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 10, left: -45, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorSale" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFBD00" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#FFBD00" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0DF17F" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#0DF17F" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis tick={false} axisLine={false} />
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <Tooltip
          contentStyle={{
            backgroundColor: theme.primary.bg,
            color: theme.primary.sideBarNonActive,
            fontSize: "14px",
            borderRadius: "8px",
            height: "100px",
            width: "140px",
          }}
          itemStyle={{ color: theme.primary.text, fontWeight: "600" }}
        />
        <Legend
          verticalAlign="top"
          align="left"
          iconType="circle"
          iconSize={12}
          height="60px"
          formatter={(value, entry, index) => (
            <span style={{ color: theme.primary.text, fontSize: "14px" }}>
              {value}
            </span>
          )}
          wrapperStyle={{ left: 3 }}
        />

        <Area
          type="monotone"
          dataKey="View"
          stroke="#0DF17F"
          fillOpacity={0.5}
          fill="url(#colorView)"
        />
        <Area
          type="monotone"
          dataKey="Sales"
          stroke="#FFBD00"
          fillOpacity={0.4}
          fill="url(#colorSale)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
