import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateStore from "../pages/CreateStore/CreateStore";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import ProductManagement from "../pages/Dashboard/ProductManagement/ProductManagement";
import AddAProduct from "../components/Dashboard/AddAProduct/AddAProduct";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Register></Register>,
      },
      {
        path: "/createStore",
        element: (
          <PrivateRoute>
            <CreateStore></CreateStore>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "product-management",
        element: <ProductManagement></ProductManagement>,
      },
      {
        path: "product-management/add-a-product",
        element: <AddAProduct></AddAProduct>,
      },
    ],
  },
]);

export default Routes;
