import { Container } from "@mui/material";

function SectionContainer({ children, sx = {} }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: "100%",
        maxWidth: "1300px",
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4 },
        boxSizing: "border-box",
        ...sx,
      }}
    >
      {children}
    </Container>
  );
}

export default SectionContainer;
