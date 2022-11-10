import {
  Button,
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
import tableicon from "../../images/tableicon.png";
import Shape from "../../images/Shape.png";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    // padding: "0px",
    // borderBottom: "none",
    color: "white",
    textAlign: "left",
    height: "30px",
    marginBottom: "none",
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
    Price: "Price",
    USDPrice: "USD Price",
    Difference: "nftinitcom",
    Expiration: "nonkosi.joyi",
    From: "31 Dec 2021",
  },
  {
    Price: "Price",
    USDPrice: "USD Price",
    Difference: "nftinitcom",
    Expiration: "nonkosi.joyi",
    From: "31 Dec 2021",
  },
  {
    Price: "Price",
    USDPrice: "USD Price",
    Difference: "nftinitcom",
    Expiration: "nonkosi.joyi",
    From: "31 Dec 2021",
  },
  {
    Price: "Price",
    USDPrice: "USD Price",
    Difference: "nftinitcom",
    Expiration: "nonkosi.joyi",
    From: "31 Dec 2021",
  },
  {
    Price: "Price",
    USDPrice: "USD Price",
    Difference: "nftinitcom",
    Expiration: "nonkosi.joyi",
    From: "31 Dec 2021",
  },
];

const ActivityTable = () => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(207, 219, 213, 0.15)",
        p: 2,
        borderRadius: "16px",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid rgba(207, 219, 213, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: { md: "space-between", xs: "center" },
          pb: 2,
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "18px",
            color: "white",
            mb: { md: "0px", xs: "20px" },
          }}
        >
          Item activity
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Button
            sx={{
              background: "transparent",
              borderRadius: "23px",
              color: "white",
              fontSize: "14px",
              fontWeight: "700",
              border: "1px solid rgba(207, 219, 213, 0.15)",
            }}
          >
            Listings
          </Button>
          <Button
            sx={{
              background: "#0DF17F",
              borderRadius: "23px",
              color: "#000000",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Sales
          </Button>
          <Button
            sx={{
              background: "transparent",
              borderRadius: "23px",
              color: "white",
              fontSize: "14px",
              fontWeight: "700",
              border: "1px solid rgba(207, 219, 213, 0.15)",
            }}
          >
            Bids
          </Button>
          <Button
            sx={{
              background: "#0DF17F",
              borderRadius: "23px",
              color: "#000000",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            Transfers
          </Button>
        </Box>
      </Box>
      <Box>
        <TableContainer
          sx={{
            overflowX: "scroll",
            background: "none",
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
                <TableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    Event
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    Price
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    From
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    To
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    variant="subtitle2"
                    color="rgba(255, 255, 255, 0.5)"
                  >
                    Date
                  </Typography>
                </TableCell>
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
                          <img src={tableicon} alt="" />
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
                            {USDPrice}
                          </Typography>
                        </Box>
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

export default ActivityTable;
