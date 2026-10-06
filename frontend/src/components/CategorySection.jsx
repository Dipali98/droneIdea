import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import FlightTakeoffRoundedIcon from "@mui/icons-material/FlightTakeoffRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import BatteryChargingFullRoundedIcon from "@mui/icons-material/BatteryChargingFullRounded";

const categories = [
  {
    title: "Camera Drones",
    description: "Capture high-quality aerial photos and videos.",
    icon: <CameraAltRoundedIcon />,
  },
  {
    title: "FPV Drones",
    description: "Experience fast and immersive drone flying.",
    icon: <FlightTakeoffRoundedIcon />,
  },
  {
    title: "Professional Drones",
    description: "Reliable drones for professional applications.",
    icon: <EngineeringRoundedIcon />,
  },
  {
    title: "Accessories",
    description: "Batteries, propellers and essential accessories.",
    icon: <BatteryChargingFullRoundedIcon />,
  },
];

function CategorySection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ mb: 5 }}>
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
            Explore
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
            Find the right drone
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#6b7280",
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            Explore our range of drones and accessories for creators,
            professionals and businesses.
          </Typography>
        </Box>

        {/* Categories */}
        <Grid container spacing={2.5}>
          {categories.map((category) => (
            <Grid
              key={category.title}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid #e5e7eb",
                  borderRadius: 3,
                  transition: "all 0.25s ease",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    borderColor: "#93c5fd",
                    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      backgroundColor: "#eff6ff",
                      color: "#2563eb",
                      mb: 3,
                    }}
                  >
                    {category.icon}
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#111827",
                      mb: 1,
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Typography
                    component="p"
                    variant="body2"
                    sx={{
                      color: "#6b7280",
                      lineHeight: 1.6,
                    }}
                  >
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CategorySection;