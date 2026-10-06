import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <DashboardRoundedIcon />,
  },
  {
    name: "Products",
    path: "/admin/products",
    icon: <Inventory2RoundedIcon />,
  },
  {
    name: "Categories",
    path: "/admin/categories",
    icon: <CategoryRoundedIcon />,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: <ShoppingCartRoundedIcon />,
  },
  {
    name: "Videos",
    path: "/admin/videos",
    icon: <VideoLibraryRoundedIcon />,
  },
  {
    name: "Website Content",
    path: "/admin/content",
    icon: <WebRoundedIcon />,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <SettingsRoundedIcon />,
  },
];

function SidebarContent({ onClose }) {
  const location = useLocation();

  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#111827",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          px: 3,
          py: 2.5,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          drone<span style={{ color: "#60a5fa" }}>Idea</span>
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#9ca3af",
          }}
        >
          Admin Panel
        </Typography>
      </Box>

      {/* Menu */}
      <List sx={{ px: 1.5, py: 2 }}>
        {menuItems.map((item) => {
          const active = location.pathname === item.path;

          return (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              onClick={onClose}
              sx={{
                mb: 0.5,
                borderRadius: 2,
                color: active ? "white" : "#9ca3af",
                backgroundColor: active
                  ? "rgba(96,165,250,0.16)"
                  : "transparent",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.07)",
                  color: "white",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 42,
                  color: active ? "#60a5fa" : "#9ca3af",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* Bottom */}
      <Box
        sx={{
          mt: "auto",
          p: 2,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Typography variant="caption" sx={{ color: "#6b7280" }}>
          droneIdea Admin
        </Typography>
      </Box>
    </Box>
  );
}

function AdminSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          top: 12,
          left: 12,
          zIndex: 1400,
          color: "white",
          backgroundColor: "#111827",

          "&:hover": {
            backgroundColor: "#1f2937",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Desktop Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },

          "& .MuiDrawer-paper": {
            width: 250,
            border: "none",
          },
        }}
      >
        <SidebarContent />
      </Drawer>

      {/* Mobile Sidebar */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },

          "& .MuiDrawer-paper": {
            width: 250,
            border: "none",
          },
        }}
      >
        <Box sx={{ position: "relative", height: "100%" }}>
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 2,
              color: "white",
            }}
          >
            <CloseIcon />
          </IconButton>

          <SidebarContent onClose={() => setOpen(false)} />
        </Box>
      </Drawer>
    </>
  );
}

export default AdminSidebar;