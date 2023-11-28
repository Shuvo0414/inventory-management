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
import Payment from "../pages/Dashboard/Payment/Payment";
import UpdateProduct from "../components/Dashboard/UpdateProduct/UpdateProduct";
import NotFound from "../pages/404error/NotFound";
import ManegerRoute from "./ManegerRoute";
import Forbidden from "../pages/Forbidden/Forbidden";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
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

  // dashboard route

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "product-management",
        element: (
          <ManegerRoute forbiddenElement={<Forbidden></Forbidden>}>
            <ProductManagement></ProductManagement>
          </ManegerRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <ManegerRoute forbiddenElement={<Forbidden></Forbidden>}>
            <Payment></Payment>
          </ManegerRoute>
        ),
      },
      {
        path: "product-management/add-a-product",
        element: (
          <ManegerRoute>
            <AddAProduct></AddAProduct>
          </ManegerRoute>
        ),
      },
      {
        path: "updateProduct/:id",
        element: (
          <ManegerRoute>
            <UpdateProduct></UpdateProduct>
          </ManegerRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/products/${params.id}`),
      },
    ],
  },
]);

export default Routes;
