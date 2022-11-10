import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  FormControlLabel,
  styled,
  Switch,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#0DF17F",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "transparent",
    border: "1px solid #CFDBD5",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Notifications = () => {
  const theme = useTheme();

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
          Notifications
        </Typography>

        <Box
          p={2}
          sx={{
            borderRadius: "16px",
            background: theme.primary.bgProfile,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box flexGrow="1">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Product updates
              </Typography>
              <Typography
                py={1}
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Receive messages from our platform
              </Typography>
            </Box>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </Box>

          <Divider fullWidth color="#CFDBD5" />

          <Box mt={1} sx={{ display: "flex" }}>
            <Box flexGrow="1">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Reminders
              </Typography>
              <Typography
                py={1}
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Receive booking reminders, pricing notices
              </Typography>
            </Box>
            <IOSSwitch sx={{ m: 1 }} />
          </Box>

          <Divider fullWidth color="#CFDBD5" />

          <Box mt={1} sx={{ display: "flex" }}>
            <Box flexGrow="1">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Promotions and tips
              </Typography>
              <Typography
                py={1}
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Receive coupons, promotions, surveys
              </Typography>
            </Box>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </Box>

          <Divider fullWidth color="#CFDBD5" />
          <Box mt={1} sx={{ display: "flex" }}>
            <Box flexGrow="1">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Product updates
              </Typography>
              <Typography
                py={1}
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Receive messages from our platform
              </Typography>
            </Box>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </Box>

          <Divider fullWidth color="#CFDBD5" />

          <Box mt={1} sx={{ display: "flex" }}>
            <Box flexGrow="1">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Reminders
              </Typography>
              <Typography
                py={1}
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Receive booking reminders, pricing notices
              </Typography>
            </Box>
            <IOSSwitch sx={{ m: 1 }} />
          </Box>

          <Divider fullWidth color="#CFDBD5" />

          <Box mt={1} sx={{ display: "flex" }}>
            <Box flexGrow="1">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5d5d5b",
                }}
              >
                Promotions and tips
              </Typography>
              <Typography
                py={1}
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.primary.text,
                }}
              >
                Receive coupons, promotions, surveys
              </Typography>
            </Box>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </Box>

          <Divider fullWidth color="#CFDBD5" />
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
export default Notifications;
