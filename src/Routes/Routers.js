import { createBrowserRouter } from "react-router-dom";
import HomeNav from "../Layout/HomeNav";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";


export const router = createBrowserRouter([{
    path: '/',
    element: <HomeNav />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
    ]
},
{ path: '/login', element: <Login /> }

])
