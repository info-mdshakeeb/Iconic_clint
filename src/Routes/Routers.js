
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeLayout from "../Layout/HomeLayout";
import Infinite from "../Layout/Infinite";
import Address from "../Pages/Address/Address";
import ProductsAD from "../Pages/Advertisement/ProductsAD";
import ShopAD from "../Pages/Advertisement/ShopAD.js";
import Category from "../Pages/Catagory/Catagory";
import ProductDetail from "../Pages/Details/ProductDetail";
import ShopDetails from "../Pages/Details/ShopDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AddToCart from "../Pages/Order/AddToCart";
import PaymentHistory from "../Pages/Order/PaymentHistory";
import AddProducts from "../Pages/Products/AddProducts";
import MyProducts from "../Pages/Products/MyProducts";
import Products from "../Pages/Products/Products";
import Profile from "../Pages/Profile/Profile";
import SellerShop from "../Pages/Seller/SellerShop";
import Shops from "../Pages/Shpos/Shops";
import PendingShop from "../Pages/Shpos/pendingShop";
import Byers from "../Pages/byers/Byers";
import AdminRoute from "./AdminRoute";
import PrivateRouters from "./PrivateRouters";
import SellerRoutes from "./SellerRoutes";

export const router = createBrowserRouter([{
    path: '/',
    element: <HomeLayout />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/products/:id', element: <ProductDetail /> },
        { path: '/shops/:id', element: <ShopDetails /> },
        { path: '/shops/category/:id', element: <Category /> },
        { path: '/add-address', element: <Address /> },
        { path: '/dashboard/orders', element: <PrivateRouters><AddToCart /></PrivateRouters> },
        { path: '/dashboard/profile', element: <PrivateRouters> <Profile /> </PrivateRouters> },
        { path: '/dashboard/orders/payment-history', element: <PrivateRouters> <PaymentHistory /> </PrivateRouters> },
    ]
},
{
    path: "/all",
    element: <Infinite />,
    children: [
        { path: '/all/shops', element: <Shops /> },
        { path: '/all/products', element: <Products /> },
    ]

},
{
    path: '/dashboard',
    element: <PrivateRouters> <SellerRoutes><DashboardLayout /></SellerRoutes> </PrivateRouters>,
    children: [
        { path: '/dashboard/sellerShop', element: <SellerShop /> },
        { path: '/dashboard/products', element: <AddProducts /> },
        { path: '/dashboard/MyProducts', element: <MyProducts /> },
        { path: '/dashboard/see_byers', element: < Byers /> },
        { path: '/dashboard/seller/profile', element: <Profile /> },
        { path: '/dashboard/seller/orders', element: <AddToCart /> },

    ]
},
{
    path: '/dashboard/admin',
    element: <AdminRoute><DashboardLayout /></AdminRoute>,
    children: [
        { path: '/dashboard/admin/pendingShop', element: <PendingShop /> },
        { path: '/dashboard/admin/pendingShop', element: <PendingShop /> },
        { path: '/dashboard/admin/advertisement/shops', element: <ShopAD /> },
        { path: '/dashboard/admin/advertisement/products', element: <ProductsAD /> },
    ]
},

{ path: '/login', element: <Login /> },
{ path: '/resister', element: <SignUp /> },
{ path: '*', element: <ErrorPage /> },
])
