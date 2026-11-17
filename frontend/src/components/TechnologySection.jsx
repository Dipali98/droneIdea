import { Box, Button, Container, Typography } from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import BatteryChargingFullRoundedIcon from "@mui/icons-material/BatteryChargingFullRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import GpsFixedRoundedIcon from "@mui/icons-material/GpsFixedRounded";
import MotorPropeller from "../assets/images/Motor-Propeller-Repair.jpg";
import CameraGibal from "../assets/images/Camera-Gimbal-Repair.jpg";
import BatteryCharging from "../assets/images/Battery_Check_up.jpg";
import CrashFrame from "../assets/images/Crash-Frame-Repair.jpg";
import SensorCalibration from "../assets/images/GPS-Sensor-Calibration.jpg";
import InternalElectronics from "../assets/images/Internal-Electronics-Repair.jpg";

const repairs = [
  {
    title: "Camera & Gimbal Repair",
    icon: <CameraAltRoundedIcon />,
    desc: "Fix blurry footage, gimbal errors and camera issues.",
    image: CameraGibal,
  },
  {
    title: "Motor & Propeller Repair",
    icon: <TuneRoundedIcon />,
    desc: "Repair damaged motors, propellers and vibration issues.",
    image: MotorPropeller,
  },
  {
    title: "Battery & Charging",
    icon: <BatteryChargingFullRoundedIcon />,
    desc: "Diagnose battery health and charging problems.",
    image: BatteryCharging,
  },
  {
    title: "Crash & Frame Repair",
    icon: <BuildRoundedIcon />,
    desc: "Restore damaged drone frames after a crash.",
    image: CrashFrame,
  },
  {
    title: "GPS & Sensor Calibration",
    icon: <GpsFixedRoundedIcon />,
    desc: "Troubleshoot GPS, sensors and flight stability.",
    image: SensorCalibration,
  },
  {
    title: "Internal Electronics Repair",
    icon: <SettingsRoundedIcon />,
    desc: "Inspect circuit boards, wiring and internal components.",
    image: InternalElectronics,
  },
];

export default function TechnologySection() {
  return (
    <Box
      component="section"
      id="repair-services"
      sx={{
        position: "relative",
        py: { xs: 6, md: 8 },
        bgcolor: "#F3F8FC",
        overflow: "hidden",

        "@keyframes repairFadeUp": {
          from: {
            opacity: 0,
            transform: "translateY(22px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },

        "@keyframes floatDecoration": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        "@media (prefers-reduced-motion: reduce)": {
          "& *": {
            animation: "none !important",
            transition: "none !important",
          },
        },
      }}
    >
      {/* Decorative background circles */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 45,
          right: "-75px",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "1px solid rgba(23,105,170,0.14)",
          pointerEvents: "none",
          animation: "floatDecoration 7s ease-in-out infinite",
        }}
      />

      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 95,
          right: "-25px",
          width: 120,
          height: 120,
          borderRadius: "50%",
          bgcolor: "rgba(23,105,170,0.05)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", md: "flex-end" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            mb: 4,
            animation: "repairFadeUp 650ms ease both",
          }}
        >
          <Box sx={{ maxWidth: 650 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#E6F3FC",
                color: "#155B91",
                borderRadius: "30px",
                px: 1.5,
                py: 0.8,
                mb: 2,
              }}
            >
              <BuildRoundedIcon sx={{ fontSize: 15 }} />

              <Typography
                sx={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 1.3,
                }}
              >
                DRONE REPAIR & CARE
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                color: "#102A43",
                fontSize: { xs: 30, sm: 38, md: 44 },
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-1.4px",
              }}
            >
              Let's get you{" "}
              <Box component="span" sx={{ color: "#1769AA" }}>
                flying again.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 1.2,
                color: "#5E7182",
                fontSize: { xs: 13, sm: 14 },
                lineHeight: 1.8,
                maxWidth: 530,
              }}
            >
              From camera faults to crash damage, our repair services help get
              your drone back in the air.
            </Typography>
          </Box>

          <Button
            href="/contact"
            variant="outlined"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              borderColor: "#C8D9E8",
              color: "#102A43",
              borderRadius: "50px",
              px: 2.5,
              py: 1.2,
              fontWeight: 700,
              textTransform: "none",
              whiteSpace: "nowrap",
              transition: "all 250ms ease",

              "&:hover": {
                borderColor: "#1769AA",
                bgcolor: "#E6F3FC",
                color: "#155B91",
                transform: "translateY(-2px)",
              },
            }}
          >
            Book a Repair
          </Button>
        </Box>

        {/* Repair cards: 3 columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
            },
            gap: { xs: 1.5, sm: 2.5 },
          }}
        >
          {repairs.map((repair, index) => (
            <Box
              key={repair.title}
              sx={{
                minWidth: 0,
                bgcolor: "#FFFFFF",
                border: "1px solid #DCE8F1",
                borderRadius: { xs: 2.5, md: 3 },
                overflow: "hidden",

                animation: "repairFadeUp 600ms ease both",
                animationDelay: `${index * 100}ms`,

                transition:
                  "transform 280ms ease, box-shadow 280ms ease, border-color 280ms ease",

                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "#8FC4E8",
                  boxShadow: "0 15px 32px rgba(16,42,67,0.12)",

                  "& .repair-image": {
                    transform: "scale(1.07)",
                  },

                  "& .repair-icon": {
                    bgcolor: "#1769AA",
                    color: "#FFFFFF",
                    transform: "rotate(-6deg)",
                  },

                  "& .repair-link": {
                    color: "#0F568D",
                    gap: 1,
                  },
                },
              }}
            >
              {/* Card image */}
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 105, sm: 140, md: 160 },
                  overflow: "hidden",
                  bgcolor: "#E0EAF2",
                }}
              >
                <Box
                  component="img"
                  className="repair-image"
                  src={repair.image}
                  alt={repair.title}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    transition: "transform 600ms ease",
                  }}
                />

                {/* Image overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(20,20,18,0.20) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Repair number */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "rgba(255,255,255,0.95)",
                    color: "#163A59",
                    borderRadius: "20px",
                    px: 1,
                    py: 0.5,
                    fontSize: 10,
                    fontWeight: 800,
                  }}
                >
                  0{index + 1}
                </Box>

                {/* Floating icon */}
                <Box
                  className="repair-icon"
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    width: { xs: 31, sm: 38 },
                    height: { xs: 31, sm: 38 },
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "#E6F3FC",
                    color: "#1769AA",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
                    transition: "all 250ms ease",
                    "& svg": {
                      fontSize: { xs: 18, sm: 21 },
                    },
                  }}
                >
                  {repair.icon}
                </Box>
              </Box>

              {/* Card details */}
              <Box sx={{ p: { xs: 1.5, sm: 2, md: 2.3 } }}>
                <Typography
                  component="h3"
                  sx={{
                    color: "#102A43",
                    fontSize: { xs: 12.5, sm: 15, md: 16 },
                    fontWeight: 750,
                    lineHeight: 1.45,
                    mb: 0.8,
                  }}
                >
                  {repair.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#5E7182",
                    fontSize: { xs: 10.5, sm: 12 },
                    lineHeight: 1.75,
                    minHeight: { xs: 43, sm: 42 },
                  }}
                >
                  {repair.desc}
                </Typography>

                <Box
                  className="repair-link"
                  sx={{
                    mt: 1.6,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    color: "#1769AA",
                    fontSize: { xs: 10.5, sm: 12 },
                    fontWeight: 750,
                    transition: "all 220ms ease",
                  }}
                >
                  Explore repair
                  <ArrowForwardRoundedIcon sx={{ fontSize: 15 }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Compact bottom CTA */}
        <Box
          sx={{
            mt: 3,
            px: { xs: 2, sm: 3 },
            py: { xs: 2, sm: 2.5 },
            borderRadius: 3,
            bgcolor: "#102A43",
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            animation: "repairFadeUp 700ms ease both",
            animationDelay: "250ms",
            transition: "background-color 250ms ease",

            "&:hover": {
              bgcolor: "#173B5E",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 16 },
                fontWeight: 750,
                mb: 0.5,
              }}
            >
              Can't find your drone issue?
            </Typography>

            <Typography
              sx={{
                color: "#C6D8E8",
                fontSize: 12,
                lineHeight: 1.7,
              }}
            >
              Tell us the problem. We'll help you find the right repair.
            </Typography>
          </Box>

          <Button
            href="/contact"
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              bgcolor: "#1769AA",
              color: "#FFFFFF",
              borderRadius: "50px",
              px: 2.5,
              py: 1.1,
              fontSize: 12,
              fontWeight: 750,
              textTransform: "none",
              whiteSpace: "nowrap",
              boxShadow: "none",

              "&:hover": {
                bgcolor: "#2587CA",
                boxShadow: "0 5px 18px rgba(23,105,170,0.28)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Get Expert Help
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
