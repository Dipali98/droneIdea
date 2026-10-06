import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="static">
      {/* Main Navbar */}
      <Toolbar
        sx={{
          minHeight: { xs: 50, sm: 70 },
        }}
      >
        {/* Logo */}
        <Typography
          component={Link}
          to="/"
          variant="h6"
          onClick={handleMenuClose}
          sx={{
            color: "white",
            textDecoration: "none",
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: { xs: "1.3rem", sm: "1.5rem" },
          }}
        >
          droneIdea
        </Typography>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: 1,
          }}
        >
          <Button component={Link} to="/" sx={{ color: "white" }}>
            HOME
          </Button>

          <Button component={Link} to="/products" sx={{ color: "white" }}>
            PRODUCTS
          </Button>

          <Button component={Link} to="/login" sx={{ color: "white" }}>
            LOGIN
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={handleMenuToggle}
          sx={{
            display: { xs: "flex", sm: "none" },
            color: "white",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-label="menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Mobile Full Width Menu */}
      <Collapse
        in={menuOpen}
        timeout={350}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "white",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
            py: 1,
          }}
        >
          <Button
            fullWidth
            component={Link}
            to="/"
            onClick={handleMenuClose}
            sx={{
              justifyContent: "flex-start",
              px: 3,
              py: 1.5,
              color: "#222",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            HOME
          </Button>

          <Button
            fullWidth
            component={Link}
            to="/products"
            onClick={handleMenuClose}
            sx={{
              justifyContent: "flex-start",
              px: 3,
              py: 1.5,
              color: "#222",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            PRODUCTS
          </Button>

          <Button
            fullWidth
            component={Link}
            to="/login"
            onClick={handleMenuClose}
            sx={{
              justifyContent: "flex-start",
              px: 3,
              py: 1.5,
              color: "#222",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            LOGIN
          </Button>
        </Box>
      </Collapse>
    </AppBar>
  );
}

export default Navbar;