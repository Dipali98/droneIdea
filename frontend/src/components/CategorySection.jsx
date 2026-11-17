import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import cameraDrone from "../assets/images/category-camera.jpg";
import fpvDrone from "../assets/images/category-fpv.jpg";
import professionalDrone from "../assets/images/category-professional.jpg";
import droneAccessories from "../assets/images/category-accessories.jpg";

const categories = [
  {
    number: "01",
    eyebrow: "AERIAL PHOTOGRAPHY",
    title: "Camera Drones",
    description: "Capture a new perspective.",
    image: cameraDrone,
    alt: "Camera drone flying above a mountain landscape",
  },
  {
    number: "02",
    eyebrow: "IMMERSIVE FLIGHT",
    title: "FPV Drones",
    description: "Feel every moment.",
    image: fpvDrone,
    alt: "FPV drone flying through a scenic canyon",
  },
  {
    number: "03",
    eyebrow: "BUILT FOR THE MISSION",
    title: "Professional Drones",
    description: "Precision for every mission.",
    image: professionalDrone,
    alt: "Professional drone over an agricultural field",
  },
  {
    number: "04",
    eyebrow: "FLIGHT ESSENTIALS",
    title: "Accessories",
    description: "Everything for your next flight.",
    image: droneAccessories,
    alt: "Drone controller, batteries, and replacement propellers",
  },
];

function CategorySection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        py: { xs: 7, md: 11 },
        backgroundColor: "#F2F8FD",
        backgroundImage: `
          radial-gradient(
            ellipse at 88% 12%,
            rgba(53, 167, 255, 0.20) 0%,
            transparent 38%
          ),
          radial-gradient(
            ellipse at 5% 75%,
            rgba(8, 121, 201, 0.10) 0%,
            transparent 35%
          ),
          linear-gradient(
            135deg,
            #FFFFFF 0%,
            #F4F9FE 48%,
            #E8F4FC 100%
          )
        `,
      }}
    >
      {/* Decorative background rings across the whole section */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          zIndex: -1,
          width: { xs: 300, md: 520 },
          height: { xs: 300, md: 520 },
          top: { xs: -100, md: -200 },
          right: { xs: -150, md: -170 },
          border: "1px solid rgba(8, 121, 201, 0.10)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          zIndex: -1,
          width: { xs: 220, md: 360 },
          height: { xs: 220, md: 360 },
          top: { xs: -60, md: -120 },
          right: { xs: -110, md: -90 },
          border: "1px solid rgba(8, 121, 201, 0.09)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1300px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
          boxSizing: "border-box",
        }}
      >
        {/* Section heading and description */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.2fr 0.8fr",
            },
            gap: { xs: 2, md: 6 },
            alignItems: "end",
            mb: { xs: 4, md: 6 },
          }}
        >
          <Box>
            <Typography
              component="p"
              sx={{
                color: "#0879C9",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                mb: 1.5,
              }}
            >
              EXPLORE THE COLLECTION
            </Typography>

            <Typography
              component="h2"
              sx={{
                color: "#071B33",
                fontSize: {
                  xs: "2.6rem",
                  sm: "3.5rem",
                  md: "4.4rem",
                },
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: "-0.055em",
              }}
            >
              Find your way
              <br />
              to fly.
            </Typography>
          </Box>

          <Typography
            component="p"
            sx={{
              color: "#52677D",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.9,
              maxWidth: 440,
              pb: { md: 0.5 },
            }}
          >
            From cinematic aerial photography to immersive FPV flight and
            essential accessories, discover technology designed around the way
            you create.
          </Typography>
        </Box>

        {/* Image-led category cards */}
        <Grid container spacing={{ xs: 2, md: 2.5 }}>
          {categories.map((category) => (
            <Grid key={category.number} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Box
                component="a"
                href="/products"
                aria-label={`Explore ${category.title}`}
                sx={{
                  position: "relative",
                  display: "block",
                  height: { xs: 350, sm: 390, md: 450 },
                  overflow: "hidden",
                  borderRadius: "10px",
                  bgcolor: "#071B33",
                  textDecoration: "none",
                  isolation: "isolate",
                  boxShadow: "0 8px 25px rgba(7,27,51,0.08)",
                  transition: "transform 350ms ease, box-shadow 350ms ease",

                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 18px 38px rgba(7,27,51,0.17)",
                  },

                  "&:hover .category-image": {
                    transform: "scale(1.06)",
                  },

                  "&:hover .category-arrow": {
                    backgroundColor: "#0879C9",
                    color: "#FFFFFF",
                    transform: "translateX(3px)",
                  },

                  "&:focus-visible": {
                    outline: "3px solid #35A7FF",
                    outlineOffset: 4,
                  },

                  "@media (prefers-reduced-motion: reduce)": {
                    transition: "none",
                    "&:hover": {
                      transform: "none",
                    },
                    "&:hover .category-image": {
                      transform: "none",
                    },
                  },
                }}
              >
                {/* Category image */}
                <Box
                  component="img"
                  className="category-image"
                  src={category.image}
                  alt={category.alt}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 650ms ease",
                    zIndex: -2,
                  }}
                />

                {/* Gradient overlay for card text */}
                <Box
                  aria-hidden="true"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    zIndex: -1,
                    background:
                      "linear-gradient(180deg, rgba(7,27,51,0.02) 25%, rgba(7,27,51,0.25) 48%, rgba(7,27,51,0.96) 100%)",
                  }}
                />

                {/* Card number */}
                <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                    }}
                  >
                    {category.number}
                  </Typography>
                </Box>

                {/* Card content */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: { xs: 2.5, md: 3 },
                    color: "#FFFFFF",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#69C2FF",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.13em",
                      mb: 1.2,
                    }}
                  >
                    {category.eyebrow}
                  </Typography>

                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: "1.4rem", md: "1.45rem" },
                      fontWeight: 700,
                      lineHeight: 1.25,
                      letterSpacing: "-0.03em",
                      mb: 1,
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.82)",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {category.description}
                  </Typography>

                  <Box
                    className="category-arrow"
                    sx={{
                      mt: 2.2,
                      width: 38,
                      height: 38,
                      border: "1px solid rgba(255,255,255,0.5)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      transition:
                        "background-color 250ms ease, transform 250ms ease",
                    }}
                  >
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CategorySection;
