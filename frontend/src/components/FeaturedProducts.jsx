import { Box, Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Aero X1",
    description: "Compact drone for aerial photography.",
    price: 45999,
    image: "https://placehold.co/600x450?text=Aero+X1",
  },
  {
    id: 2,
    name: "Sky Pro 4K",
    description: "4K camera drone for creators.",
    price: 72999,
    image: "https://placehold.co/600x450?text=Sky+Pro+4K",
  },
  {
    id: 3,
    name: "Falcon FPV",
    description: "High-speed FPV drone for immersive flight.",
    price: 54999,
    image: "https://placehold.co/600x450?text=Falcon+FPV",
  },
  {
    id: 4,
    name: "Aero Industrial",
    description: "Professional drone for business applications.",
    price: 124999,
    image: "https://placehold.co/600x450?text=Aero+Industrial",
  },
];

function FeaturedProducts() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        backgroundColor: "#f8fafc",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            mb: 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 2,
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
              Featured
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
              }}
            >
              Popular drones
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={2.5}>
          {products.map((product) => (
            <Grid
              key={product.id}
              size={{ xs: 12, sm: 6, md: 3 }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default FeaturedProducts;