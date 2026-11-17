import { Box, Container, Typography, Button, Stack, Link } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import "./Footer.css";

const footerColumns = [
  {
    title: "Drone Services",
    links: [
      "Drone Diagnostics",
      "Hardware Repair",
      "Camera & Gimbal Repair",
      "Battery Service",
    ],
  },
  {
    title: "Customer Support",
    links: ["Contact Us", "FAQs", "Shipping & Returns", "Track Order"],
  },
  {
    title: "About droneIdea",
    links: ["Our Story", "Why Choose Us", "Repair Process", "Blog"],
  },
];

function Footer() {
  const instagramUrl = "https://www.instagram.com/";

  return (
    <Box component="footer" className="footer">
      {/* TOP SECTION */}
      <Container maxWidth={false} className="common-container">
        <Box className="footer-top">
          {/* BRAND */}
          <Box className="footer-brand">
            <Typography className="footer-logo">
              drone
              <Box component="span">Idea</Box>
            </Typography>

            <Typography className="footer-tagline">
              Explore. Capture. Repair. Fly.
            </Typography>

            <Typography className="footer-description">
              Your destination for drone products, accessories and dependable
              repair services.
            </Typography>
          </Box>

          {/* INSTAGRAM PROMOTION */}
          <Box className="footer-instagram-card">
            <Stack direction="row" spacing={2} alignItems="center">
              <Box className="footer-instagram-icon">
                <InstagramIcon />
              </Box>

              <Box>
                <Typography className="footer-instagram-title">
                  Follow us on Instagram
                </Typography>

                <Typography className="footer-instagram-description">
                  Drone tips, new arrivals and repair updates.
                </Typography>
              </Box>
            </Stack>

            <Button
              component="a"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              className="footer-instagram-button"
            >
              Follow droneIdea
            </Button>
          </Box>
        </Box>
      </Container>

      {/* MIDDLE SECTION */}
      <Box className="footer-middle">
        <Container maxWidth={false} className="footer-container">
          <Box className="footer-grid">
            {/* FOOTER LINK COLUMNS */}
            {footerColumns.map((column) => (
              <Box key={column.title}>
                <Typography className="footer-heading">
                  {column.title}
                </Typography>

                <Stack spacing={1.8}>
                  {column.links.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      underline="none"
                      className="footer-link"
                    >
                      {item}
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}

            {/* CONTACT */}
            <Box>
              <Typography className="footer-heading">Contact</Typography>

              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Typography className="footer-contact-text">
                    hello@droneidea.com
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneOutlinedIcon className="footer-contact-icon" />

                  <Typography className="footer-contact-text">
                    +91 90000 00000
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <LocationOnOutlinedIcon className="footer-contact-icon" />

                  <Typography className="footer-contact-text">
                    Pune, India
                  </Typography>
                </Stack>
              </Stack>

              {/* SOCIAL LINKS */}
              <Stack direction="row" spacing={1.5} className="footer-social">
                <Box
                  component="a"
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit droneIdea on Instagram"
                  className="footer-social-icon"
                >
                  <InstagramIcon />
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* BOTTOM SECTION */}
      <Container maxWidth={false} className="footer-container">
        <Box className="footer-bottom">
          <Typography className="footer-copyright">
            © 2026 droneIdea. All rights reserved.
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            useFlexGap
            className="footer-legal-links"
          >
            <Link
              href="/privacy-policy"
              underline="none"
              className="footer-link"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" underline="none" className="footer-link">
              Terms & Conditions
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
