import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import GpsFixedRoundedIcon from "@mui/icons-material/GpsFixedRounded";

const features = [
  {
    title: "Smart Flight",
    description: "Stable and intelligent flight control.",
    icon: <FlightRoundedIcon />,
  },
  {
    title: "4K Imaging",
    description: "Capture detailed aerial photos and videos.",
    icon: <CameraAltRoundedIcon />,
  },
  {
    title: "Precision Control",
    description: "Accurate navigation and positioning.",
    icon: <GpsFixedRoundedIcon />,
  },
];

function TechnologySection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: "#07111f",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          {/* Content */}
          <Box>
            <Typography
              component="p"
              sx={{
                color: "#60a5fa",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Drone Technology
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Technology that takes you further.
            </Typography>

            <Typography
              component="p"
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.7,
                maxWidth: 560,
                mb: 4,
              }}
            >
              Discover modern drone technology built for smoother flights,
              sharper images and better control.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                backgroundColor: "#2563eb",
                borderRadius: 2,
                px: 3,
                py: 1.3,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#1d4ed8",
                },
              }}
            >
              Explore Drones
            </Button>
          </Box>

          {/* Feature Cards */}
          <Stack spacing={2}>
            {features.map((feature) => (
              <Box
                key={feature.title}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2.5,
                  p: 2.5,
                  borderRadius: 3,
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    backgroundColor: "rgba(96,165,250,0.15)",
                    color: "#60a5fa",
                  }}
                >
                  {feature.icon}
                </Box>

                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    component="p"
                    variant="body2"
                    sx={{
                      color: "#94a3b8",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default TechnologySection;