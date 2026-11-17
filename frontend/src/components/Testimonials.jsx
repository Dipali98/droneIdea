import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Rating,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";

import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const colors = {
  oceanBlue: "#0879C9",
  brightBlue: "#35A7FF",
  darkNavy: "#071B33",
  white: "#FFFFFF",
};

const testimonials = [
  {
    role: "Drone Owner",
    review:
      "Excellent repair service! My drone had a technical issue, and the team handled it professionally. It is flying perfectly again.",
  },
  {
    role: "Aerial Photographer",
    review:
      "Great support and attention to detail. The camera and gimbal issue was handled carefully, and the overall experience was smooth.",
  },
  {
    role: "Drone Hobbyist",
    review:
      "Helpful team, clear communication, and reliable service. A great place to get drone accessories and repair support.",
  },
  {
    role: "Professional Pilot",
    review:
      "The service process was straightforward, and I received clear updates about the repair. Very convenient experience.",
  },
  {
    role: "Drone Enthusiast",
    review:
      "A useful destination for drone owners. The repair support and product selection make things much easier.",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCount = {
    xs: 1,
    md: 3,
  };

  const getVisibleCount = () => (window.innerWidth < 900 ? 1 : 3);

  const [cardsToShow, setCardsToShow] = useState(getVisibleCount);

  // Update visible cards when the screen size changes.
  useState(() => {
    const handleResize = () => setCardsToShow(getVisibleCount());

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const nextSlide = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  return (
    <Box
      component="section"
      aria-label="Customer testimonials"
      sx={{
        position: "relative",
        py: { xs: 7, md: 10 },
        overflow: "hidden",
        backgroundColor: "#F4F9FD",
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,0.93),
            rgba(239,248,255,0.96)
          ),
          url("https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=2000&q=85")
        `,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
      }}
    >
      {/* Decorative background accents */}
      <Box
        sx={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(53,167,255,0.09)",
          top: -100,
          right: -70,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section heading */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            sx={{
              color: colors.oceanBlue,
              fontSize: "0.78rem",
              fontWeight: 800,
              letterSpacing: 2,
              mb: 1.2,
            }}
          >
            CUSTOMER STORIES
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: colors.darkNavy,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              fontWeight: 800,
              letterSpacing: "-0.8px",
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Trusted by Drone Enthusiasts
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: { xs: "0.9rem", md: "1rem" },
              maxWidth: 520,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Real experiences. Reliable repairs. Better flights.
          </Typography>
        </Box>

        {/* Slider */}
        <Box sx={{ position: "relative", px: { xs: 0, md: 1 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3, minmax(0, 1fr))",
              },
              gap: 2.5,
              alignItems: "stretch",
            }}
          >
            {testimonials
              .slice(activeIndex, activeIndex + cardsToShow)
              .map((item, index) => (
                <Card
                  key={item.role}
                  elevation={0}
                  sx={{
                    minWidth: 0,
                    borderRadius: 3,
                    backgroundColor: "rgba(255,255,255,0.96)",
                    border: "1px solid rgba(8,121,201,0.12)",
                    boxShadow: "0 12px 35px rgba(7,27,51,0.06)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    animation: "testimonialEnter 0.45s ease both",
                    "@keyframes testimonialEnter": {
                      from: {
                        opacity: 0,
                        transform: "translateY(12px)",
                      },
                      to: {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 18px 40px rgba(8,121,201,0.12)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      "&:last-child": { pb: 3 },
                    }}
                  >
                    <FormatQuoteRoundedIcon
                      sx={{
                        fontSize: 36,
                        color: colors.oceanBlue,
                        mb: 1,
                      }}
                    />

                    <Rating
                      value={5}
                      readOnly
                      size="small"
                      aria-label="5 out of 5 stars"
                      sx={{ mb: 2, color: "#F5A623" }}
                    />

                    <Typography
                      sx={{
                        color: "#475569",
                        fontSize: "0.92rem",
                        lineHeight: 1.85,
                        minHeight: { md: 105 },
                        mb: 2.5,
                      }}
                    >
                      “{item.review}”
                    </Typography>

                    <Box
                      sx={{
                        height: "1px",
                        backgroundColor: "#E5EEF6",
                        mb: 2,
                      }}
                    />

                    <Typography
                      sx={{
                        color: colors.darkNavy,
                        fontWeight: 800,
                        fontSize: "0.92rem",
                      }}
                    >
                      {item.role}
                    </Typography>

                    <Typography
                      sx={{
                        color: colors.oceanBlue,
                        fontSize: "0.76rem",
                        mt: 0.5,
                      }}
                    >
                      Verified customer feedback
                    </Typography>
                  </CardContent>
                </Card>
              ))}
          </Box>

          {/* Slider controls */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mt: 4,
            }}
          >
            <IconButton
              onClick={prevSlide}
              aria-label="Previous testimonials"
              sx={{
                width: 42,
                height: 42,
                color: colors.oceanBlue,
                border: "1px solid #CFE5F6",
                backgroundColor: colors.white,
                "&:hover": {
                  color: colors.white,
                  backgroundColor: colors.oceanBlue,
                },
              }}
            >
              <ArrowBackIosNewRoundedIcon sx={{ fontSize: 16 }} />
            </IconButton>

            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <Box
                  key={index}
                  component="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  sx={{
                    width: activeIndex === index ? 24 : 8,
                    height: 8,
                    border: 0,
                    borderRadius: 10,
                    padding: 0,
                    cursor: "pointer",
                    backgroundColor:
                      activeIndex === index ? colors.oceanBlue : "#C7D8E6",
                    transition: "all 0.25s ease",
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={nextSlide}
              aria-label="Next testimonials"
              sx={{
                width: 42,
                height: 42,
                color: colors.white,
                background: `linear-gradient(135deg, ${colors.oceanBlue}, ${colors.brightBlue})`,
                boxShadow: "0 5px 14px rgba(8,121,201,0.2)",
                "&:hover": {
                  backgroundColor: colors.darkNavy,
                  background: colors.darkNavy,
                },
              }}
            >
              <ArrowForwardIosRoundedIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonials;
