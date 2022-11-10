import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import { AiOutlineDropbox, AiFillPlusCircle } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsLink } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const AppsPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:800px)");

  return (
    <Box bgcolor={theme.primary.bg} height="100%">
      <Container maxWidth="md">
        <Typography
          mt={0.2}
          ml={{ xs: 1, md: 0 }}
          mb={3}
          variant="body1"
          sx={{
            fontSize: { md: "42px", xs: "28px" },
            color: theme.primary.text,
            fontWeight: "800",
          }}
        >
          Profile Settings
        </Typography>

        <Typography
          my={1}
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: theme.primary.text,
          }}
        >
          Extensions
        </Typography>

        <Box
          p={2}
          sx={{
            borderRadius: "16px",
            background: theme.primary.bgProfile,
          }}
        >
          <Box my={2} sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "transparent",
                px: 1,
                height: "36px",
                borderRadius: "70px",
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(207, 219, 213, 0.15)",
              }}
            >
              <AiOutlineDropbox
                style={{
                  fontSize: "20px",
                  color: "#007EE5",
                }}
              />
            </Box>
            <Box ml={1}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Dropbox
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                @whiteui.store
              </Typography>
            </Box>
          </Box>
          <Divider fullWidth color="#CFDBD5" />

          <Box my={1} sx={{ display: "flex" }}>
            <AiFillPlusCircle
              style={{
                fontSize: "20px",
                color: theme.primary.text,
              }}
            />

            <Typography
              ml={1}
              sx={{
                fontSize: "14px",
                fontWeight: "700",
                color: theme.primary.text,
              }}
            >
              Add More
            </Typography>
          </Box>
        </Box>

        <Typography
          my={2}
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: theme.primary.text,
          }}
        >
          Social profiles
        </Typography>

        <Box
          p={2}
          sx={{
            borderRadius: "16px",
            background: theme.primary.bgProfile,
          }}
        >
          <Box my={2} sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "transparent",
                px: 1,
                height: "36px",
                borderRadius: "70px",
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(207, 219, 213, 0.15)",
              }}
            >
              <FaFacebookF
                style={{
                  fontSize: "20px",
                  color: "#1778F2",
                }}
              />
            </Box>
            <Box ml={1}>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Facebook
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                {matches
                  ? "fb.com/whiteui.store"
                  : "https://www.facebook.com/whiteui.store"}
              </Typography>
            </Box>
          </Box>
          <Divider fullWidth color="#CFDBD5" />

          <Box my={2} sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "transparent",
                px: 1,
                height: "36px",
                borderRadius: "70px",
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(207, 219, 213, 0.15)",
              }}
            >
              <FaTwitter
                style={{
                  fontSize: "20px",
                  color: "#00A2F3",
                }}
              />
            </Box>

            <Box ml={1} flexGrow="1">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Twitter
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Not connected
              </Typography>
            </Box>
            {!matches && (
              <Button
                sx={{
                  color: theme.primary.text,
                  borderRadius: "18px",
                  fontSize: "14px",
                }}
              >
                <BsLink
                  style={{
                    fontSize: "18px",
                    marginRight: "7px",
                    color: "#0DF17F",
                  }}
                />
                Connect
              </Button>
            )}
          </Box>

          <Divider fullWidth color="#CFDBD5" />

          <Box my={2} sx={{ display: "flex" }}>
            <Box
              sx={{
                background: "transparent",
                px: 1,
                height: "36px",
                borderRadius: "70px",
                display: "flex",
                alignItems: "center",
                border: "1px solid rgba(207, 219, 213, 0.15)",
              }}
            >
              <FcGoogle
                style={{
                  fontSize: "20px",
                }}
              />
            </Box>

            <Box ml={1} flexGrow="1">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Google
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Not connected
              </Typography>
            </Box>

            {!matches && (
              <Button
                sx={{
                  color: theme.primary.text,
                  borderRadius: "18px",
                  fontSize: "14px",
                }}
              >
                <BsLink
                  style={{
                    fontSize: "18px",
                    marginRight: "7px",
                    color: "#0DF17F",
                  }}
                />
                Connect
              </Button>
            )}
          </Box>

          <Divider fullWidth color="#CFDBD5" />

          <Box my={2} sx={{ display: "flex" }}>
            <AiFillPlusCircle
              style={{
                fontSize: "20px",
                color: theme.primary.text,
              }}
            />

            <Typography
              ml={1}
              sx={{
                fontSize: "14px",
                fontWeight: "700",
                color: theme.primary.text,
              }}
            >
              Add More
            </Typography>
          </Box>
        </Box>

        <Box
          mt={1.5}
          mb={5}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            sx={{
              background: "#0DF17F",
              borderRadius: "23px",
              color: "#000",
              padding: "10px 20px",
              "&:hover": {
                background: "#0DF17Fa1",
              },
            }}
          >
            Update Settings
          </Button>
          <Button
            sx={{
              width: "165px",
              height: "46px",
              background: theme.primary.bgProfile1,
              borderRadius: "23px",
              color: theme.primary.textPurple,
              padding: "10px 20px",
              "&:hover": {
                background: "#5d5d5ba1",
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default AppsPage;
