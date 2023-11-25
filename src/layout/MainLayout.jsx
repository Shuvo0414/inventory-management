import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  // hide nav and footer in the login page, using useLocation method
  const location = useLocation();
  const noHeader =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noHeader || <Navbar></Navbar>}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
