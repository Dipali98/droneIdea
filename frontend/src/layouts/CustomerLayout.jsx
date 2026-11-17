import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx";
import Footer from "../components/Footer/Footer.jsx";

function CustomeLayout() {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default CustomeLayout;
