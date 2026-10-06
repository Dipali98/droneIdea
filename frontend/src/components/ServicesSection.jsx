import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import MapRoundedIcon from "@mui/icons-material/MapRounded";
import PhotoCameraRoundedIcon from "@mui/icons-material/PhotoCameraRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const services = [
  {
    title: "Drone Survey",
    description:
      "Accurate aerial mapping and surveying solutions for professional projects.",
    icon: <MapRoundedIcon />,
  },
  {
    title: "Aerial Photography",
    description:
      "Capture high-quality aerial photos and videos for creative projects.",
    icon: <PhotoCameraRoundedIcon />,
  },
  {
    title: "Inspection",
    description:
      "Use aerial technology for efficient inspection and monitoring.",
    icon: <SearchRoundedIcon />,
  },
  {
    title: "Custom Solutions",
    description:
      "Explore drone solutions tailored to specific business requirements.",
    icon: <SettingsSuggestRoundedIcon />,
  },
];

function ServicesSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mb: 5,
          }}
        >
          <Box>
            <Typography
              component="p"
              sx={{
                color: "#2563eb",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Solutions
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "2.75rem",
                },
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1.2,
                mb: 1.5,
              }}
            >
              More than just drones
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "#6b7280",
                maxWidth: 600,
                lineHeight: 1.7,
              }}
            >
              Discover professional drone services and solutions for
              different industries and applications.
            </Typography>
          </Box>

          <Button
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            View All Services
          </Button>
        </Box>

        {/* Services */}
        <Grid container spacing={2.5}>
          {services.map((service) => (
            <Grid
              key={service.title}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 3,
                  transition: "all 0.25s ease",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
                    borderColor: "#bfdbfe",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    backgroundColor: "#eff6ff",
                    color: "#2563eb",
                    mb: 3,
                  }}
                >
                  {service.icon}
                </Box>

                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#111827",
                    mb: 1,
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  component="p"
                  variant="body2"
                  sx={{
                    color: "#6b7280",
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ServicesSection;