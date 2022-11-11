import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import Art1 from "../../images/Art1.png";
import Art2 from "../../images/Art2.png";
import Art3 from "../../images/Art3.png";
import Art4 from "../../images/Art4.png";

import xtz from "../../images/xtz.png";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    paddingTop: "6px",
    paddingBottom: "6px",
  },
}));

const rankData = [
  {
    icon: `${Art1}`,
    name: "Election Season",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art2}`,
    name: "Lorr’s Ad Issues",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art3}`,
    name: "Science Jobs",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art4}`,
    name: "Capturing Memories",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art1}`,
    name: "Tracking on the Go",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art1}`,
    name: "Election Season",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art2}`,
    name: "Lorr’s Ad Issues",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art3}`,
    name: "Science Jobs",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art4}`,
    name: "Capturing Memories",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art1}`,
    name: "Tracking on the Go",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art1}`,
    name: "Election Season",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art2}`,
    name: "Lorr’s Ad Issues",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art3}`,
    name: "Science Jobs",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art4}`,
    name: "Capturing Memories",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art1}`,
    name: "Tracking on the Go",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art1}`,
    name: "Election Season",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art2}`,
    name: "Lorr’s Ad Issues",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art3}`,
    name: "Science Jobs",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art4}`,
    name: "Capturing Memories",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
  {
    icon: `${Art1}`,
    name: "Tracking on the Go",
    category: "5344.13",
    blockchain: "-100%",
    bid: "+18.60%",
    view: "4915",
    auction: "6.3k",
    items: "10.0k",
  },
];

function StatTable() {
  const theme = useTheme();
  const [postsPerPage, setPostsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };

  const pageCount = Math.ceil(rankData.length / postsPerPage);

  return (
    <>
      <Box mt={2} bgcolor={theme.primary.bg} height="100%">
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            background: "none",
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow
                sx={{
                  background: "transparent",
                }}
              >
                <TableCell style={{ textAlign: "left" }}>
                  <Typography
                    color={theme.primary.text}
                    fontWeight="700"
                    fontSize="14px"
                  >
                    Collections
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={theme.primary.text}
                    fontWeight="700"
                    fontSize="14px"
                  >
                    Volume
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={theme.primary.text}
                    fontWeight="700"
                    fontSize="14px"
                  >
                    24h %
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={theme.primary.text}
                    fontWeight="700"
                    fontSize="14px"
                  >
                    7h %
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={theme.primary.text}
                    fontWeight="700"
                    fontSize="14px"
                  >
                    Floor Price
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={theme.primary.text}
                    fontWeight="700"
                    fontSize="14px"
                  >
                    Owners
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={theme.primary.text}
                    fontWeight="700"
                    fontSize="14px"
                  >
                    Items
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rankData
                .slice(
                  currentPage * postsPerPage - postsPerPage,
                  currentPage * postsPerPage
                )
                .map(
                  (
                    {
                      icon,
                      name,
                      category,
                      blockchain,
                      bid,
                      view,
                      auction,
                      items,
                    },
                    i
                  ) => (
                    <TableRow key={i}>
                      <StyledTableCell>
                        <Box display="flex" alignItems="center">
                          <Typography mr={1} color={theme.primary.text}>
                            {i + 1}
                          </Typography>
                          <img src={icon} alt="" width="82px" height="82px" />
                          <Typography
                            ml={2}
                            color={theme.primary.text}
                            fontWeight="700"
                            fontSize="14px"
                          >
                            {name}
                          </Typography>
                        </Box>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography color={theme.primary.text} fontSize="14px">
                          <img
                            src={xtz}
                            alt=""
                            style={{ width: "14px", marginRight: "5px" }}
                          />
                          {category}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography color="red" fontSize="14px">
                          {blockchain}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography color="green" fontSize="14px">
                          {bid}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography color={theme.primary.text} fontSize="14px">
                          <img
                            src={xtz}
                            alt=""
                            style={{ width: "14px", marginRight: "5px" }}
                          />
                          {view}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography color={theme.primary.text} fontSize="14px">
                          {auction}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography
                          color={theme.primary.text}
                          fontWeight="700"
                          fontSize="14px"
                        >
                          {items}
                        </Typography>
                      </StyledTableCell>
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* <Box my="40px">
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handleChangepage}
            sx={{ color: "red" }}
          />
        </Stack>
      </Box> */}
    </>
  );
}
export default StatTable;
