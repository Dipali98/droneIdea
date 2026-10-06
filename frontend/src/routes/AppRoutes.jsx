import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/customer/Home";
import Products from "../pages/customer/Products";
import Dashboard from "../pages/admin/Dashboard";
import CustomeLayout from "../layouts/CustomerLayout";
import AdminLayout from "../layouts/AdminLayout";

// function Home() {
//   return <h1>Welcome to droneIdea</h1>;
// }

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Custome layout routes */}
        <Route element={<CustomeLayout/>} >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>}/>
        </Route>

        {/* Admin layout routes */}
        <Route path ="/admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;