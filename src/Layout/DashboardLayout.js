import { useQuery } from '@tanstack/react-query';

import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { getUser } from '../Api/api';
import Navbar from '../Components/Navbar/Navbar';
import { useFirebaseInfo } from '../Context/UserContext';

const DashboardLayout = () => {
    const { pathname } = useLocation();
    const { user } = useFirebaseInfo()
    const { data: useR = [] } = useQuery({
        queryKey: ['useR', user?.email],
        queryFn: async () => getUser(user?.email),
        enabled: !!user?.email
    })

    const navLink =
        <>
            <NavLink className={`flex items-center px-4 py-3 mt-10  transition-colors duration-300 transform  hover:bg-gray-100 ${pathname === "/dashboard/profile" ? "bg-blue-500 text-white" : ""} hover:text-gray-700 `} to='/dashboard/profile'>Account</NavLink>
            <NavLink className={`flex items-center px-4 py-3  transition-colors duration-300 transform  hover:bg-gray-100 ${pathname === "/dashboard/orders" ? "bg-blue-500 text-white" : ""} hover:text-gray-700 `} to='/dashboard/orders'>My orders</NavLink>
            {<NavLink className={`flex items-center px-4 py-3  transition-colors duration-300 transform  hover:bg-gray-100 ${pathname === "/dashboard/sellerShop" ? "bg-blue-500 text-white" : ""} hover:text-gray-700 `} to='/dashboard/sellerShop'>Your Shops</NavLink>}
            {<NavLink className={`flex items-center px-4 py-3  transition-colors duration-300 transform  hover:bg-gray-100 ${pathname === '/dashboard/products' ? "bg-blue-500 text-white" : ""} hover:text-gray-700 `} to='/dashboard/products'>Add Product</NavLink>}
            {<NavLink className={`flex items-center px-4 py-3  transition-colors duration-300 transform  hover:bg-gray-100 ${pathname === '/dashboard/MyProducts' ? "bg-blue-500 text-white" : ""} hover:text-gray-700 `} to='/dashboard/MyProducts'>Your Products</NavLink>}
            <NavLink className={`flex items-center px-4 py-3  transition-colors duration-300 transform  hover:bg-gray-100 ${pathname === '/dashboard/see_byers' ? "bg-blue-500 text-white" : ""} hover:text-gray-700 `} to='/dashboard/see_byers'>My Byers</NavLink>
            <NavLink className={`flex items-center px-4 py-3  transition-colors duration-300 transform  hover:bg-gray-100 ${pathname === '/dashboard/admin/pendingShop' ? "bg-blue-500 text-white" : ""} hover:text-gray-700 `} to='/dashboard/admin/pendingShop'>Pending Shops</NavLink>
            <NavLink className={`flex items-center px-4 py-3  transition-colors duration-300 transform  hover:bg-gray-100 ${pathname === '/dashboard/admin/advertisement/shops' ? "bg-blue-500 text-white" : ""} hover:text-gray-700 `} to='/dashboard/admin/advertisement/shops'>Pending AdShops</NavLink>
            <NavLink className={`flex items-center px-4 py-3  transition-colors duration-300 transform  hover:bg-gray-100 ${pathname === '/dashboard/admin/advertisement/products' ? "bg-blue-500 text-white" : ""} hover:text-gray-700 `} to='/dashboard/admin/advertisement/products'>Pending AdProducts</NavLink>
        </>
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Navbar />
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu md:mt-[72px] border-t w-56 bg-base-100 border-r md:bg-transparent text-base-content shadow-md">
                    {navLink}
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;