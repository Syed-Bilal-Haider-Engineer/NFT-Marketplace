import {
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import styled from "@emotion/styled";
import Shape from "../../images/Shape.png";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    // padding: "0px",
    // borderBottom: "none",
    color: "white",
    textAlign: "left",
    height: "30px",
    marginBottom: "none",
    borderBottom: "1px solid rgba(207, 219, 213, 0.15)",
  },
  [`&.${tableCellClasses.head}`]: {
    borderBottom: "none",
  },
}));

const borderstyle = {
  minWidth: "max-content",
};

const data = [
  {
    Price: "2.52 ETH",
    USDPrice: "$6402.84",
    Difference: "29% below",
    Expiration: "7 min",
    From: "nftinitcom",
  },
  {
    Price: "2.52 ETH",
    USDPrice: "$6402.84",
    Difference: "29% below",
    Expiration: "7 min",
    From: "nftinitcom",
  },
  {
    Price: "2.52 ETH",
    USDPrice: "$6402.84",
    Difference: "29% below",
    Expiration: "7 min",
    From: "nftinitcom",
  },
  {
    Price: "2.52 ETH",
    USDPrice: "$6402.84",
    Difference: "29% below",
    Expiration: "7 min",
    From: "nftinitcom",
  },
  {
    Price: "2.52 ETH",
    USDPrice: "$6402.84",
    Difference: "29% below",
    Expiration: "7 min",
    From: "nftinitcom",
  },
];

const HistoryTable = () => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(207, 219, 213, 0.15)",
        p: 1,
        borderRadius: "16px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "18px",
          color: "white",
          borderBottom: "1px solid rgba(207, 219, 213, 0.15)",
          py: 2,
        }}
      >
        Offers
      </Typography>
      <Box sx={{}}>
        <TableContainer
          sx={{
            background: "none",

            overflowX: "scroll",
            // maxHeight: 500,
            "::-webkit-scrollbar": {
              width: "0px",
              height: "0px",
            },
          }}
          component={Paper}
        >
          <Table
            sx={{
              minWidth: 650,
              // borderCollapse: "separate",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow
                sx={{
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              >
                <StyledTableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    Price
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    USD Price
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    Difference
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    Expiration
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    From
                  </Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(
                ({ id, Price, USDPrice, Difference, Expiration, From }) => (
                  <TableRow
                    key={id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <StyledTableCell>
                      <Typography variant="subtitle2" style={borderstyle}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img src={Shape} alt="" />
                          <Typography
                            sx={{
                              fontSize: "12px",

                              ml: 1,
                              fontWeight: "400",
                            }}
                          >
                            {Price}
                          </Typography>
                        </Box>
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row" align="center">
                      <Typography variant="subtitle2" style={borderstyle}>
                        {USDPrice}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="subtitle2" style={borderstyle}>
                        {Difference}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="subtitle2" style={borderstyle}>
                        {Expiration}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Typography variant="subtitle2" style={borderstyle}>
                        {From}
                      </Typography>
                    </StyledTableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default HistoryTable;
