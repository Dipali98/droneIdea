import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Badge,
  Divider,
  Typography,
} from "@mui/material";

import {
  MenuRounded,
  CloseRounded,
  SearchRounded,
  FavoriteBorderRounded,
  PersonOutlineRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/drone-idea-logo-desk.png";

import "./NavBar.css";

const colors = {
  oceanBlue: "#0879C9",
  brightBlue: "#35A7FF",
  darkNavy: "#071B33",
  black: "#000",
  white: "#FFFFFF",
  border: "#E5EAF0",
  lightBlue: "#EFF8FF",
};

const navLinks = [
  { label: "Home", path: "/", end: true },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeDrawer = () => setMobileOpen(false);

  return (
    <>
      <AppBar position="sticky" elevation={0} className="navbar">
        <Container
          maxWidth={false}
          className="navbar-container common-container"
        >
          <Toolbar disableGutters className="navbar-toolbar">
            {/* Left: Logo */}
            <Box
              component={Link}
              to="/"
              aria-label="DroneIdea home"
              onClick={closeDrawer}
              className="navbar-logo"
            >
              <Box
                component="img"
                src={logo}
                alt="DroneIdea"
                className="navbar-logo-image"
              />
            </Box>

            {/* Center: Navigation menu */}
            <Box
              component="nav"
              aria-label="Main navigation"
              className="navbar-links"
            >
              {navLinks.map((item) => (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  end={item.end}
                  className="nav-link"
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Right: Action icons */}
            <Box className="navbar-actions">
              <IconButton
                component={Link}
                to="/products"
                aria-label="Search products"
                className="header-icon search-icon"
              >
                <SearchRounded />
              </IconButton>

              <IconButton
                component={Link}
                to="/wishlist"
                aria-label="Wishlist"
                className="header-icon wishlist-icon"
              >
                <FavoriteBorderRounded />
              </IconButton>

              <IconButton
                component={Link}
                to="/login"
                aria-label="Account"
                className="header-icon account-icon"
              >
                <PersonOutlineRounded />
              </IconButton>

              <Button
                component={Link}
                to="/cart"
                startIcon={
                  <Badge badgeContent={0} showZero={false} color="error">
                    <ShoppingCartOutlined />
                  </Badge>
                }
                className="navbar-cart-button"
              >
                Cart
              </Button>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="mobile-menu-button"
            >
              <MenuRounded />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile navigation drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeDrawer}
        PaperProps={{
          className: "mobile-drawer-paper",
        }}
      >
        <Box className="drawer-content">
          <Box className="drawer-header">
            <Box
              component={Link}
              to="/"
              onClick={closeDrawer}
              className="drawer-logo"
            >
              <Box
                component="img"
                src={logo}
                alt="DroneIdea"
                className="drawer-logo-image"
              />
            </Box>

            <IconButton onClick={closeDrawer} aria-label="Close menu">
              <CloseRounded />
            </IconButton>
          </Box>

          <Divider className="drawer-divider" />

          <List className="drawer-nav-list">
            {navLinks.map((item) => (
              <ListItem
                key={item.path}
                disablePadding
                className="drawer-list-item"
              >
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  end={item.end}
                  onClick={closeDrawer}
                  className="drawer-nav-link"
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider className="drawer-action-divider" />

          <Box className="drawer-actions">
            <Button
              component={Link}
              to="/products"
              onClick={closeDrawer}
              startIcon={<SearchRounded />}
              fullWidth
              className="drawer-action-button"
            >
              Search products
            </Button>

            <Button
              component={Link}
              to="/wishlist"
              onClick={closeDrawer}
              startIcon={<FavoriteBorderRounded />}
              fullWidth
              className="drawer-action-button"
            >
              Wishlist
            </Button>

            <Button
              component={Link}
              to="/login"
              onClick={closeDrawer}
              startIcon={<PersonOutlineRounded />}
              fullWidth
              className="drawer-action-button"
            >
              My Account
            </Button>

            <Button
              component={Link}
              to="/cart"
              onClick={closeDrawer}
              startIcon={<ShoppingCartOutlined />}
              fullWidth
              className="drawer-cart-button"
            >
              View Cart
            </Button>
          </Box>

          <Box className="drawer-footer">
            <Typography className="drawer-footer-title">DroneIdea</Typography>

            <Typography variant="body2" className="drawer-footer-text">
              Explore drones, accessories, and professional drone repair
              services.
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
