import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  Rating,
  CardMedia,
  CardContent,
} from "@mui/material";

function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("All Drones");

  const filters = ["All Drones", "Camera Drones", "Mini Drones", "Accessories"];

  const products = [
    {
      id: 1,
      name: "DJI Mini Drone",
      price: 45999,
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600",
      rating: 4.5,
      category: "Mini Drones",
    },
    {
      id: 2,
      name: "Camera Drone",
      price: 65999,
      image:
        "https://images.unsplash.com/photo-1506947411487-a56738267384?w=600",
      rating: 5,
      category: "Camera Drones",
    },
    {
      id: 3,
      name: "Drone Accessories",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600",
      rating: 4,
      category: "Accessories",
    },
  ];

  // Filter products
  const filteredProducts =
    activeFilter === "All Drones"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <Container sx={{ py: 6 }}>
      {/* Section Heading */}
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, color: "#071B33", mb: 2 }}
        >
          Featured Products
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#64748b",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Explore our collection of drones and accessories designed for your
          next adventure.
        </Typography>
      </Box>

      {/* Product Filter Tabs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1.5,
          mt: 4,
        }}
      >
        {filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            variant={activeFilter === filter ? "contained" : "outlined"}
            sx={{
              borderRadius: "25px",
              px: 3,
              textTransform: "none",
              fontWeight: 600,
              borderColor: "#0879C9",
              color: activeFilter === filter ? "#fff" : "#0879C9",
              backgroundColor:
                activeFilter === filter ? "#0879C9" : "transparent",
              "&:hover": {
                backgroundColor:
                  activeFilter === filter ? "#0665A8" : "#E8F4FF",
              },
            }}
          >
            {filter}
          </Button>
        ))}
      </Box>

      {/* Product Cards */}
      <Box
        sx={{
          mt: 5,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(7, 27, 51, 0.10)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 10px 30px rgba(7, 27, 51, 0.16)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="220"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: "cover" }}
            />

            <CardContent>
              <Typography variant="h6" fontWeight={700}>
                {product.name}
              </Typography>

              <Rating value={product.rating} precision={0.5} readOnly />

              <Typography
                sx={{
                  color: "#0879C9",
                  fontWeight: 700,
                  mt: 1,
                }}
              >
                ₹{product.price.toLocaleString("en-IN")}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default FeaturedProducts;
