import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

function CustomerHero() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: {
          xs: "calc(100vh - 56px)",
          md: "calc(100vh - 64px)",
        },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #07111f 0%, #0f2742 55%, #123b5d 100%)",
        color: "white",
      }}
    >
      {/* Background decoration */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          width: { xs: 280, md: 500 },
          height: { xs: 280, md: 500 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.22), transparent 70%)",
          top: { xs: -100, md: -180 },
          right: { xs: -100, md: -120 },
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 760,
            position: "relative",
            zIndex: 1,
            py: { xs: 8, md: 12 },
          }}
        >
          <Typography
            component="p"
            sx={{
              color: "#60a5fa",
              fontWeight: 700,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              mb: 2,
            }}
          >
            Next Generation Drone Technology
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.8rem",
                sm: "4rem",
                md: "5.5rem",
              },
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: {
                xs: "-1.5px",
                md: "-3px",
              },
              mb: 3,
            }}
          >
            Explore the
            <Box component="span" sx={{ color: "#60a5fa" }}>
              {" "}
              Future
            </Box>{" "}
            from Above.
          </Typography>

          <Typography
            component="p"
            sx={{
              maxWidth: 620,
              color: "#cbd5e1",
              fontSize: {
                xs: "1rem",
                md: "1.15rem",
              },
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            Discover high-performance drones, accessories and intelligent
            aerial solutions designed for creators, professionals and
            businesses.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                backgroundColor: "#2563eb",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "#1d4ed8",
                },
              }}
            >
              Shop Drones
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<PlayArrowRoundedIcon />}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                color: "white",
                borderColor: "rgba(255,255,255,0.35)",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.06)",
                },
              }}
            >
              Explore Technology
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default CustomerHero;