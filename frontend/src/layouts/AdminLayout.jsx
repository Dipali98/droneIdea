import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import AdminSidebar from "../components/AdminSidebar";

function AdminLayout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: { xs: 0, md: "240px" },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default AdminLayout;