import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";

import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

function StatCard({
  title,
  value,
  change,
  icon,
  iconColor,
}) {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{ color: "#6b7280", mb: 1 }}
            >
              {title}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#111827",
              }}
            >
              {value}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: iconColor,
              color: "white",
            }}
          >
            {icon}
          </Box>
        </Box>

        <Chip
          label={change}
          size="small"
          sx={{
            mt: 2,
            backgroundColor: "#ecfdf5",
            color: "#059669",
            fontWeight: 600,
          }}
        />
      </CardContent>
    </Card>
  );
}

function Dashboard() {
  return (
    <Box>
      {/* Page Heading */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#111827",
            mb: 0.5,
          }}
        >
          Good morning, Admin 👋
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#6b7280" }}
        >
          Here's what's happening with your droneIdea store today.
        </Typography>
      </Box>

      {/* Statistics */}
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Total Orders"
            value="1,248"
            change="+12.5%"
            icon={<ShoppingCartRoundedIcon />}
            iconColor="#2563eb"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Total Sales"
            value="₹8.42L"
            change="+18.2%"
            icon={<CurrencyRupeeRoundedIcon />}
            iconColor="#7c3aed"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Products"
            value="86"
            change="+4 new"
            icon={<Inventory2RoundedIcon />}
            iconColor="#0891b2"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <StatCard
            title="Customers"
            value="3,842"
            change="+8.4%"
            icon={<PeopleAltRoundedIcon />}
            iconColor="#059669"
          />
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={2.5} sx={{ mt: 0 }}>
        {/* Sales Overview */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700 }}
              >
                Sales Overview
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#6b7280",
                  mb: 4,
                }}
              >
                Monthly revenue performance
              </Typography>

              {/* Simple chart placeholder */}
              <Box
                sx={{
                  height: 220,
                  display: "flex",
                  alignItems: "flex-end",
                  gap: { xs: 1, sm: 2 },
                  px: 1,
                }}
              >
                {[45, 65, 40, 75, 55, 85, 70, 95, 68, 88, 78, 100].map(
                  (height, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        height: `${height}%`,
                        maxWidth: 45,
                        borderRadius: "6px 6px 0 0",
                        background:
                          "linear-gradient(180deg, #3b82f6, #93c5fd)",
                        transition: "height 0.3s ease",
                        "&:hover": {
                          opacity: 0.75,
                        },
                      }}
                    />
                  )
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Low Stock */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 3,
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700 }}
              >
                Low Stock
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#6b7280",
                  mb: 3,
                }}
              >
                Products that need attention
              </Typography>

              <Stack spacing={2.5}>
                <StockItem
                  name="DJI Mini 4 Pro"
                  stock={12}
                  total={50}
                />

                <StockItem
                  name="Drone Battery Pack"
                  stock={8}
                  total={40}
                />

                <StockItem
                  name="FPV Propeller Set"
                  stock={5}
                  total={30}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

function StockItem({ name, stock, total }) {
  const percentage = (stock / total) * 100;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 0.8,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>

        <Typography variant="caption" sx={{ color: "#6b7280" }}>
          {stock} left
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: 7,
          borderRadius: 5,
          backgroundColor: "#e5e7eb",
          "& .MuiLinearProgress-bar": {
            borderRadius: 5,
          },
        }}
      />
    </Box>
  );
}

export default Dashboard;