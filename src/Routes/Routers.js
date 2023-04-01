
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import HomeLayout from "../Layout/HomeLayout";
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
import AddProducts from "../Pages/Products/AddProducts";
import Products from "../Pages/Products/Products";
import Profile from "../Pages/Profile/Profile";
import SellerShop from "../Pages/Seller/SellerShop";
import Shops from "../Pages/Shpos/Shops";
import PendingShop from "../Pages/Shpos/pendingShop";
import PrivateRouters from "./PrivateRouters";


export const router = createBrowserRouter([{
    path: '/',
    element: <HomeLayout />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/products', element: <Products /> },
        { path: '/products/:id', element: <ProductDetail /> },
        { path: '/shops/:id', element: <ShopDetails /> },
        { path: '/shops', element: <Shops /> },
        { path: '/shops/catagory/:id', element: <Catagory /> },
        { path: '/add-address', element: <Address /> },
        { path: '/orders', element: <PrivateRouters><AddToCart /></PrivateRouters> },
        { path: '/dashboard/profile', element: <PrivateRouters> <Profile /> </PrivateRouters> },
        { path: '/dashboard/orders', element: <PrivateRouters>  <Order /> </PrivateRouters> },
    ]
},
{
    path: '/dashboard',
    element: <PrivateRouters><DashboardLayout /></PrivateRouters>,
    children: [
        { path: '/dashboard/sellerShop', element: <SellerShop /> },
        { path: '/dashboard/addproducts', element: <AddProducts /> },
        { path: '/dashboard/products/pending', element: <PendingShop /> },
    ]
},
{ path: '/login', element: <Login /> },
{ path: '/resister', element: <SignUp /> },
{ path: '*', element: <ErrorPage /> },
])
