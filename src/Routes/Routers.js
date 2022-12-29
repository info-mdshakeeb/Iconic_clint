import { createBrowserRouter } from "react-router-dom";
import HomeNav from "../Layout/HomeNav";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProductsAll from "../Pages/Products/ProductsAll";
import ShopsAll from "../Pages/Shpos/ShopsAll";


export const router = createBrowserRouter([{
    path: '/',
    element: <HomeNav />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/products', element: <ProductsAll /> },
        { path: '/shops', element: <ShopsAll /> },
    ]
},
{ path: '/login', element: <Login /> }

])
