import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

function AdminHeader() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "#111827",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 64, sm: 70 },
          justifyContent: "flex-end",
        }}
      >
        <IconButton>
          <NotificationsNoneRoundedIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            ml: 2,
          }}
        >
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600 }}
            >
              Admin
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: "#6b7280" }}
            >
              Administrator
            </Typography>
          </Box>

          <Avatar
            sx={{
              width: 38,
              height: 38,
              backgroundColor: "#2563eb",
            }}
          >
            A
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AdminHeader;