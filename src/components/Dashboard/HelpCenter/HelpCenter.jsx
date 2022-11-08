import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

function HelpCenter() {
  const cards = [
    {
      title: "Getting started",
      point1: "What is an NFT?",
      point2: "What are Proof of Work blockchains?",
      point3: "What is a wallet? Why do I need one?",
      point4: "How much does it cost to create an NFT?",
    },
    {
      title: "Using NFT Marketplace",
      point1: "Which blockchains does marketplace support?",
      point2: "Why should I use Ethereum?",
      point3: "Why should I use Flow on this marketplace?",
      point4: "Why should I use Tezos on this marketplace?",
    },
    {
      title: "Safety, Security, and Policies",
      point1: "Is connecting my wallet secure?",
      point2: "I bought an NFT, but I think I was scammed?",
      point3: "My verification request was rejected. Can I reapply?",
      point4: "What are your community rules and guidelines?",
    },
    {
      title: "Troubleshooting",
      point1: "I should have received NFT. How do I claim it?",
      point2: "I think I minted duplicate NFTs",
      point3: "Marketplace isn’t working properly. Now what?",
      point4: "I think my NFT disappeared. Why?",
    },
  ];
  const theme = useTheme();

  return (
    <Box bgcolor={theme.primary.bg} height="100%">
      <Container>
        <Typography
          mt={0.2}
          ml={{ xs: 1, md: 0 }}
          variant="body1"
          sx={{
            fontSize: { md: "42px", xs: "28px" },
            color: theme.primary.text,
            fontWeight: "800",
          }}
        >
          How it works
        </Typography>

        <Box mt={4}>
          <Grid container spacing={3}>
            {cards.map(({ title, point1, point2, point3, point4 }, i) => {
              return (
                <Grid item xs={12} md={6}>
                  <Box
                    bgcolor={theme.primary.bgProfile}
                    borderRadius="16px"
                    p={3}
                  >
                    <Typography
                      color={theme.primary.text}
                      fontSize={{ xs: "16px", md: "18px" }}
                      fontWeight="800"
                    >
                      {title}
                    </Typography>
                    <Typography color="#7A52F4" fontSize="14px" mt={1.5}>
                      {point1}
                    </Typography>
                    <Typography color="#7A52F4" fontSize="14px" mt={1.5}>
                      {point2}
                    </Typography>
                    <Typography color="#7A52F4" fontSize="14px" mt={1.5}>
                      {point3}
                    </Typography>
                    <Typography color="#7A52F4" fontSize="14px" mt={1.5}>
                      {point4}
                    </Typography>
                    <Typography
                      color={theme.primary.text}
                      fontSize="14px"
                      fontWeight="700"
                      mt={1.5}
                    >
                      See more articles
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Typography
          mt={2}
          ml={{ xs: 1, md: 0 }}
          variant="body1"
          sx={{
            fontSize: { md: "28px", xs: "20px" },
            color: theme.primary.text,
            fontWeight: "800",
          }}
        >
          Popular help articles
        </Typography>

        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Box border="1px solid #E4E6E8" borderRadius="15px" p={3}>
                {/* <Typography
                  sx={{ background: "#EBF0F0", height: "4px" }}
                ></Typography> */}
                <Typography
                  color={theme.primary.text}
                  fontSize={{ xs: "14px", md: "16px" }}
                  fontWeight="700"
                >
                  I can’t see the artwork on NFT’s marketplace listing, what’s
                  wrong?
                </Typography>
                <Typography
                  color={theme.primary.sideBarNonActive}
                  fontSize="14px"
                  mt={1.5}
                >
                  NFTs are decentralized and stored on the blockchain forever —
                  so you might be to see
                </Typography>

                <Typography
                  color={theme.primary.text}
                  fontSize="14px"
                  fontWeight="700"
                  mt={1.5}
                >
                  Read more
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box border="1px solid #E4E6E8" borderRadius="15px" p={3}>
                <Typography
                  color={theme.primary.text}
                  fontSize={{ xs: "14px", md: "16px" }}
                  fontWeight="700"
                >
                  How do I change or cancel my experience reservation?
                </Typography>
                <Typography
                  color={theme.primary.sideBarNonActive}
                  fontSize="14px"
                  mt={1.5}
                >
                  Is our site or your profile not loading? Are you having issues
                  you try to create, buy, or sell NFTs
                </Typography>

                <Typography
                  color={theme.primary.text}
                  fontSize="14px"
                  fontWeight="700"
                  mt={1.5}
                >
                  Read more
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HelpCenter;
