import { createBrowserRouter } from "react-router-dom";
import DashboardNav from "../Layout/DashboardNav";
import HomeNav from "../Layout/HomeNav";
import Address from "../Pages/Address/Address";
import Catagory from "../Pages/Catagory/Catagory";
import ProductDetail from "../Pages/Details/ProductDetail";
import ShopDetails from "../Pages/Details/ShopDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AddToCart from "../Pages/Order/AddToCart";
import Order from "../Pages/Order/Order";
import Products from "../Pages/Products/Products";
import Profile from "../Pages/Profile/Profile";
import RequestForSeller from "../Pages/Seller/RequestForSeller";
import Shops from "../Pages/Shpos/Shops";
import PrivateRouters from "./PrivateRouters";


export const router = createBrowserRouter([{
    path: '/',
    element: <HomeNav />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/products', element: <Products /> },
        { path: '/products/:id', element: <ProductDetail /> },
        { path: '/shops/:id', element: <ShopDetails /> },
        { path: '/shops', element: <Shops /> },
        { path: '/shops/catagory/:id', element: <Catagory /> },
        { path: '/add-address', element: <Address /> },
        { path: '/addtocart', element: <PrivateRouters><AddToCart /></PrivateRouters> },
    ]
},
{
    path: '/dashboard',
    element: <PrivateRouters><DashboardNav /></PrivateRouters>,
    children: [
        { path: '/dashboard/profile', element: <Profile /> },
        { path: '/dashboard/orders', element: <Order /> },
        { path: '/dashboard/sellerForm', element: <RequestForSeller /> },
    ]
},
{ path: '/login', element: <Login /> },
{ path: '/resister', element: <SignUp /> },
{ path: '*', element: <ErrorPage /> },
])
