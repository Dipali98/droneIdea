import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: "1px solid #e5e7eb",
        borderRadius: 3,
        overflow: "hidden",
        transition: "all 0.25s ease",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        loading="lazy"
        sx={{
          height: 220,
          objectFit: "cover",
          backgroundColor: "#f8fafc",
        }}
      />

      <CardContent sx={{ p: 2.5 }}>
        <Typography
          component="h3"
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            mb: 1,
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#6b7280",
            mb: 2,
          }}
        >
          {product.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              color: "#111827",
            }}
          >
            ₹{product.price.toLocaleString("en-IN")}
          </Typography>

          <Button
            variant="contained"
            size="small"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            View Product
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ProductCard;