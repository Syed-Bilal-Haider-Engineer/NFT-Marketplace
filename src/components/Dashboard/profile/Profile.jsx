import { Box, Container, Typography, Button, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";

const ProfileInfo = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.primary.bg} height="100%">
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

      <Typography my={1}
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color: theme.primary.text,
        }}
      >
        Account information
      </Typography>

      <Box
        p={2}
        sx={{
          borderRadius: "16px",
          background: theme.primary.bgProfile,
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#5d5d5b",
          }}
        >
          Full Name
        </Typography>
        <Typography
          py={1}
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            color: theme.primary.text,
          }}
        >
          Sebastian Bennett
        </Typography>
        <Divider fullWidth color="#CFDBD5" />

        <Typography
          mt={1}
          sx={{
            fontSize: "12px",
            color: "#5d5d5b",
          }}
        >
          Gender
        </Typography>
        <Typography
          py={1}
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            color: theme.primary.text,
          }}
        >
          Female
        </Typography>
        <Divider fullWidth color="#CFDBD5" />

        <Typography
          mt={1}
          sx={{
            fontSize: "12px",
            color: "#5d5d5b",
          }}
        >
          Date of Birth
        </Typography>
        <Typography
          py={1}
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            color: theme.primary.text,
          }}
        >
          January 24,1983
        </Typography>
      </Box>

      <Typography my={1}
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          color: theme.primary.text,
        }}
      >
        Contact Details
      </Typography>

      <Box
        p={2}
        sx={{
          borderRadius: "16px",
          background: theme.primary.bgProfile,
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            color: "#5d5d5b",
          }}
        >
          Email address
        </Typography>
        <Typography
          py={1}
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            color: theme.primary.text,
          }}
        >
          seb.bennett@gmail.com
        </Typography>
        <Divider fullWidth color="#CFDBD5" />

        <Typography
          mt={1}
          sx={{
            fontSize: "12px",
            color: "#5d5d5b",
          }}
        >
          Phone number
        </Typography>
        <Typography
          py={1}
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            color: theme.primary.text,
          }}
        >
          +995 590 558 124
        </Typography>
        <Divider fullWidth color="#CFDBD5" />

        <Typography
          mt={1}
          sx={{
            fontSize: "12px",
            color: "#5d5d5b",
          }}
        >
          Address
        </Typography>
        <Typography
          py={1}
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            color: theme.primary.text,
          }}
        >
          83222 Dicki View, South Pasqualeview, RI 79216-3100
        </Typography>
      </Box>

      <Box mt={1.5} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          sx={{
            background: "#7A52F4",
            borderRadius: "23px",
            color: "#fff",
            padding: "10px 20px",
            "&:hover": {
              background: "#7A52F4a1",
            },
          }}
        >
          Update Settings
        </Button>
        <Button
          sx={{
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
    </Box>
  );
};

export default ProfileInfo;
