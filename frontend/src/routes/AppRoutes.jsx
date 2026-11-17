import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/customer/Home";
import Products from "../pages/customer/Products";
import Dashboard from "../pages/admin/Dashboard";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register.jsx";

import CustomeLayout from "../layouts/CustomerLayout";
import AdminLayout from "../layouts/AdminLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Customer Routes */}
        <Route element={<CustomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
