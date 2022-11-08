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
    category: "Art",
    blockchain: "Flow",
    bid: "0.45 Flow",
    view: "4,915",
    auction: "Running",
  },
  {
    icon: `${Art2}`,
    name: "Lorr’s Ad Issues",
    category: "Collectibles",
    blockchain: "Tezos",
    bid: "5.13 Xtz",
    view: "4,510",
    auction: "",
  },
  {
    icon: `${Art3}`,
    name: "Science Jobs",
    category: "Photography",
    blockchain: "Ethereum",
    bid: "3.59 Eth",
    view: "3,309",
    auction: "",
  },
  {
    icon: `${Art4}`,
    name: "Capturing Memories",
    category: "Collectibles",
    blockchain: "Flow",
    bid: "0.45 Flow",
    view: "4,510",
    auction: "Running",
  },
  {
    icon: `${Art1}`,
    name: "Tracking on the Go",
    category: "Art",
    blockchain: "Tezos",
    bid: "3.40 Xtz",
    view: "3,915",
    auction: "",
  },
  {
    icon: `${Art1}`,
    name: "Election Season",
    category: "Art",
    blockchain: "Flow",
    bid: "0.45 Flow",
    view: "4,915",
    auction: "Running",
  },
  {
    icon: `${Art2}`,
    name: "Lorr’s Ad Issues",
    category: "Collectibles",
    blockchain: "Tezos",
    bid: "5.13 Xtz",
    view: "4,510",
    auction: "",
  },
  {
    icon: `${Art3}`,
    name: "Science Jobs",
    category: "Photography",
    blockchain: "Ethereum",
    bid: "3.59 Eth",
    view: "3,309",
    auction: "",
  },
  {
    icon: `${Art4}`,
    name: "Capturing Memories",
    category: "Collectibles",
    blockchain: "Flow",
    bid: "0.45 Flow",
    view: "4,510",
    auction: "Running",
  },
  {
    icon: `${Art1}`,
    name: "Tracking on the Go",
    category: "Art",
    blockchain: "Tezos",
    bid: "3.40 Xtz",
    view: "3,915",
    auction: "",
  },
  {
    icon: `${Art1}`,
    name: "Election Season",
    category: "Art",
    blockchain: "Flow",
    bid: "0.45 Flow",
    view: "4,915",
    auction: "Running",
  },
  {
    icon: `${Art2}`,
    name: "Lorr’s Ad Issues",
    category: "Collectibles",
    blockchain: "Tezos",
    bid: "5.13 Xtz",
    view: "4,510",
    auction: "",
  },
  {
    icon: `${Art3}`,
    name: "Science Jobs",
    category: "Photography",
    blockchain: "Ethereum",
    bid: "3.59 Eth",
    view: "3,309",
    auction: "",
  },
  {
    icon: `${Art4}`,
    name: "Capturing Memories",
    category: "Collectibles",
    blockchain: "Flow",
    bid: "0.45 Flow",
    view: "4,510",
    auction: "Running",
  },
  {
    icon: `${Art1}`,
    name: "Tracking on the Go",
    category: "Art",
    blockchain: "Tezos",
    bid: "3.40 Xtz",
    view: "3,915",
    auction: "",
  },
  {
    icon: `${Art1}`,
    name: "Election Season",
    category: "Art",
    blockchain: "Flow",
    bid: "0.45 Flow",
    view: "4,915",
    auction: "Running",
  },
  {
    icon: `${Art2}`,
    name: "Lorr’s Ad Issues",
    category: "Collectibles",
    blockchain: "Tezos",
    bid: "5.13 Xtz",
    view: "4,510",
    auction: "",
  },
  {
    icon: `${Art3}`,
    name: "Science Jobs",
    category: "Photography",
    blockchain: "Ethereum",
    bid: "3.59 Eth",
    view: "3,309",
    auction: "",
  },
  {
    icon: `${Art4}`,
    name: "Capturing Memories",
    category: "Collectibles",
    blockchain: "Flow",
    bid: "0.45 Flow",
    view: "4,510",
    auction: "Running",
  },
  {
    icon: `${Art1}`,
    name: "Tracking on the Go",
    category: "Art",
    blockchain: "Tezos",
    bid: "3.40 Xtz",
    view: "3,915",
    auction: "",
  },
];

function ListingDetail() {
  const theme = useTheme();
  const [postsPerPage, setPostsPerPage] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };

  const pageCount = Math.ceil(rankData.length / postsPerPage);

  return (
    <>
      <Container>
        <Box bgcolor={theme.primary.bg} height="100%">
          <Typography
            mt={0.2}
            ml={{ xs: 1, md: 0 }}
            mb={4}
            variant="body1"
            sx={{
              fontSize: { md: "42px", xs: "28px" },
              color: theme.primary.text,
              fontWeight: "800",
            }}
          >
            Your listings
          </Typography>
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
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color={theme.primary.text}
                      fontWeight="700"
                      fontSize="14px"
                    >
                      Category
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color={theme.primary.text}
                      fontWeight="700"
                      fontSize="14px"
                    >
                      Blockchain
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color={theme.primary.text}
                      fontWeight="700"
                      fontSize="14px"
                    >
                      Bid
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color={theme.primary.text}
                      fontWeight="700"
                      fontSize="14px"
                    >
                      Views
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color={theme.primary.text}
                      fontWeight="700"
                      fontSize="14px"
                    >
                      Auction
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rankData
                  .slice(
                    currentPage * postsPerPage - postsPerPage,
                    currentPage * postsPerPage
                  )
                  .map(
                    ({
                      icon,
                      name,
                      category,
                      blockchain,
                      bid,
                      view,
                      auction,
                    }) => (
                      <TableRow>
                        <StyledTableCell>
                          <Box display="flex" alignItems="center">
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
                          <Typography
                            color={theme.primary.text}
                            fontSize="14px"
                          >
                            {category}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography
                            color={theme.primary.text}
                            fontSize="14px"
                          >
                            {blockchain}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography
                            color={theme.primary.text}
                            fontSize="14px"
                          >
                            {bid}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography
                            color={theme.primary.text}
                            fontSize="14px"
                          >
                            {view}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography
                            color={theme.primary.text}
                            fontSize="14px"
                          >
                            {auction}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography
                            color={theme.primary.text}
                            fontWeight="700"
                            fontSize="14px"
                          >
                            ...
                          </Typography>
                        </StyledTableCell>
                      </TableRow>
                    )
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box my="40px">
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
        </Box>
      </Container>
    </>
  );
}
export default ListingDetail;
