import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#07111f",
        color: "white",
        pt: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.5px",
                mb: 2,
              }}
            >
              drone
              <Box component="span" sx={{ color: "#60a5fa" }}>
                Idea
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#94a3b8",
                lineHeight: 1.7,
                maxWidth: 360,
              }}
            >
              Explore drones, accessories and intelligent aerial solutions
              designed for creators, professionals and businesses.
            </Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <IconButton
                aria-label="Instagram"
                sx={{
                  color: "#94a3b8",
                  "&:hover": {
                    color: "#60a5fa",
                    backgroundColor: "rgba(96,165,250,0.1)",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                aria-label="Facebook"
                sx={{
                  color: "#94a3b8",
                  "&:hover": {
                    color: "#60a5fa",
                    backgroundColor: "rgba(96,165,250,0.1)",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                aria-label="LinkedIn"
                sx={{
                  color: "#94a3b8",
                  "&:hover": {
                    color: "#60a5fa",
                    backgroundColor: "rgba(96,165,250,0.1)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                aria-label="YouTube"
                sx={{
                  color: "#94a3b8",
                  "&:hover": {
                    color: "#60a5fa",
                    backgroundColor: "rgba(96,165,250,0.1)",
                  },
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Quick Links
            </Typography>

            <Stack spacing={1.3}>
              <Link href="/" underline="none" sx={{ color: "#94a3b8" }}>
                Home
              </Link>

              <Link
                href="/products"
                underline="none"
                sx={{ color: "#94a3b8" }}
              >
                Products
              </Link>

              <Link href="/services" underline="none" sx={{ color: "#94a3b8" }}>
                Services
              </Link>

              <Link href="/about" underline="none" sx={{ color: "#94a3b8" }}>
                About Us
              </Link>
            </Stack>
          </Grid>

          {/* Support */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Support
            </Typography>

            <Stack spacing={1.3}>
              <Link
                href="/contact"
                underline="none"
                sx={{ color: "#94a3b8" }}
              >
                Contact Us
              </Link>

              <Link
                href="/shipping"
                underline="none"
                sx={{ color: "#94a3b8" }}
              >
                Shipping
              </Link>

              <Link
                href="/returns"
                underline="none"
                sx={{ color: "#94a3b8" }}
              >
                Returns
              </Link>

              <Link
                href="/privacy"
                underline="none"
                sx={{ color: "#94a3b8" }}
              >
                Privacy Policy
              </Link>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Get in Touch
            </Typography>

            <Stack spacing={1.5}>
              <Typography sx={{ color: "#94a3b8" }}>
                Pune, Maharashtra, India
              </Typography>

              <Typography sx={{ color: "#94a3b8" }}>
                support@droneidea.com
              </Typography>

              <Typography sx={{ color: "#94a3b8" }}>
                +91 98765 43210
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            mt: 6,
            borderColor: "rgba(255,255,255,0.1)",
          }}
        />

        <Box
          sx={{
            py: 2.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: "#64748b" }}>
            © {new Date().getFullYear()} droneIdea. All rights reserved.
          </Typography>

          <Typography variant="body2" sx={{ color: "#64748b" }}>
            Built for the future of aerial technology.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;