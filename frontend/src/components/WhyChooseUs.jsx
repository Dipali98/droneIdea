import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

const benefits = [
  {
    title: "Quality Products",
    description:
      "Carefully selected drones and accessories from trusted brands.",
    icon: <VerifiedRoundedIcon />,
  },
  {
    title: "Fast Delivery",
    description:
      "Reliable shipping options to get your products to you quickly.",
    icon: <LocalShippingRoundedIcon />,
  },
  {
    title: "Expert Support",
    description:
      "Get help choosing the right drone for your requirements.",
    icon: <SupportAgentRoundedIcon />,
  },
  {
    title: "Secure Shopping",
    description:
      "A secure and reliable shopping experience from start to finish.",
    icon: <SecurityRoundedIcon />,
  },
];

function WhyChooseUs() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box
          sx={{
            maxWidth: 650,
            mb: 5,
          }}
        >
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
            Why droneIdea
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
            Built around your flying experience
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#6b7280",
              lineHeight: 1.7,
            }}
          >
            From choosing the right drone to getting support after your
            purchase, we focus on making your experience simple and reliable.
          </Typography>
        </Box>

        {/* Benefits */}
        <Grid container spacing={2.5}>
          {benefits.map((benefit) => (
            <Grid
              key={benefit.title}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e5e7eb",
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    backgroundColor: "#eff6ff",
                    color: "#2563eb",
                    mb: 2.5,
                  }}
                >
                  {benefit.icon}
                </Box>

                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: "#111827",
                    mb: 1,
                  }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  component="p"
                  variant="body2"
                  sx={{
                    color: "#6b7280",
                    lineHeight: 1.6,
                  }}
                >
                  {benefit.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;