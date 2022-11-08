import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import { BiCategory } from "react-icons/bi";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineDateRange } from "react-icons/md";

import StatTable from "./StatTable";

const Stats = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width : 800px)");
  return (
    <Box pt={2} bgcolor={theme.primary.bg} height="100%">
      <Container>
        <Typography
          sx={{
            color: theme.primary.text,
            fontSize: { xs: "30px", md: "42px" },
            fontWeight: "800",
          }}
        >
          Top selling NFTs
        </Typography>

        <Box mt={1} sx={{ display: "flex", justifyContent: "space-between" }}>
          {!matches && (
            <Box>
              <Button
                sx={{
                  background: "transparent",
                  color: theme.primary.text,
                  border: theme.primary.btnBorder,
                  borderRadius: "18px",
                  fontSize: "12px",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
              >
                <SiHiveBlockchain
                  style={{ fontSize: "16px", marginRight: "10px" }}
                />
                Blockchain
              </Button>
              <Button
                sx={{
                  background: "transparent",
                  color: theme.primary.text,
                  border: theme.primary.btnBorder,
                  borderRadius: "18px",
                  fontSize: "12px",
                  marginLeft: "15px",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
              >
                <BiCategory style={{ fontSize: "16px", marginRight: "10px" }} />
                Category
              </Button>
            </Box>
          )}

          <Button
            sx={{
              background: "transparent",
              color: theme.primary.text,
              border: theme.primary.btnBorder,
              borderRadius: "18px",
              fontSize: "12px",
              "&:hover": {
                background: "transparent",
              },
            }}
          >
            <MdOutlineDateRange
              style={{ fontSize: "16px", marginRight: "10px" }}
            />
            Last 7 days
          </Button>
        </Box>
        <StatTable />
      </Container>
    </Box>
  );
};

export default Stats;
