import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

import droneHeroVideo from "../../assets/videos/Drone-hero-video.mp4";
import "./CustomerHero.css";

function CustomerHero() {
  return (
    <Box component="section" className="customer-hero">
      {/* Background Video */}
      <Box className="customer-hero__video-wrapper">
        <video className="customer-hero__video" autoPlay muted loop playsInline>
          <source src={droneHeroVideo} type="video/mp4" />
        </video>
      </Box>

      {/* Dark Overlay */}
      <Box className="customer-hero__overlay" />

      {/* Hero Content */}
      <Container maxWidth="xl" className="customer-hero__container">
        <Box className="customer-hero__content">
          <Typography className="customer-hero__eyebrow">
            EXPLORE BEYOND LIMITS
          </Typography>

          <Typography component="h1" className="customer-hero__title">
            Discover the Sky.
            <br />
            Experience the Future.
          </Typography>

          <Typography className="customer-hero__description">
            Explore high-performance drones, innovative technology, and
            professional repair solutions designed to take your flying
            experience to the next level.
          </Typography>

          <Box className="customer-hero__actions">
            <Button
              component={Link}
              to="/products"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              className="customer-hero__primary-btn"
            >
              Explore Products
            </Button>

            <Button
              component={Link}
              to="/services"
              variant="outlined"
              className="customer-hero__secondary-btn"
            >
              Explore Repair Services
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default CustomerHero;
