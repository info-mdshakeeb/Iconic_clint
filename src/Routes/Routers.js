import { createBrowserRouter } from "react-router-dom";
import HomeNav from "../Layout/HomeNav";
import Catagory from "../Pages/Catagory/Catagory";
import ProductDetail from "../Pages/Details/ProductDetail";
import ShopDetails from "../Pages/Details/ShopDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Shops from "../Pages/Shpos/Shops";



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
    ]
},
{ path: '/login', element: <Login /> }

])
