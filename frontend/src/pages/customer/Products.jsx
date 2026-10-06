import { Container, Typography, Box } from "@mui/material";

function Products() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Products
        </Typography>

        <Typography variant="body1">
          Browse our drone products.
        </Typography>
      </Box>
    </Container>
  );
}

export default Products;