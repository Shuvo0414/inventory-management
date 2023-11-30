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
import SalesCollection from "../pages/Dashboard/SalesCollection/SalesCollection";
import CheckOut from "../pages/Dashboard/CheckOut/CheckOut";
import AdminRoute from "./AdminRoute";
import ManageShop from "../pages/Dashboard/ManageShop/ManageShop";
import SaleSummary from "../pages/Dashboard/SaleSummary/SaleSummary";
import SalesSummary from "../pages/SalesSummary/SalesSummary";

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
      // admin route

      {
        path: "manage-shop",
        element: (
          <AdminRoute>
            <ManageShop></ManageShop>
          </AdminRoute>
        ),
      },
      {
        path: "sale-summary",
        element: (
          <AdminRoute>
            <SaleSummary></SaleSummary>
          </AdminRoute>
        ),
      },

      // manager route
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
        path: "sales-collection",
        element: (
          <ManegerRoute forbiddenElement={<Forbidden></Forbidden>}>
            <SalesCollection></SalesCollection>
          </ManegerRoute>
        ),
      },
      {
        path: "check-out",
        element: (
          <ManegerRoute forbiddenElement={<Forbidden></Forbidden>}>
            <CheckOut></CheckOut>
          </ManegerRoute>
        ),
      },
      {
        path: "product-management/add-a-product",
        element: (
          <ManegerRoute forbiddenElement={<Forbidden></Forbidden>}>
            <AddAProduct></AddAProduct>
          </ManegerRoute>
        ),
      },
      {
        path: "updateProduct/:id",
        element: (
          <ManegerRoute forbiddenElement={<Forbidden></Forbidden>}>
            <UpdateProduct></UpdateProduct>
          </ManegerRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-12-server-side-brown.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "sales-summary",
        element: (
          <ManegerRoute forbiddenElement={<Forbidden></Forbidden>}>
            <SalesSummary></SalesSummary>
          </ManegerRoute>
        ),
      },
    ],
  },
]);

export default Routes;
