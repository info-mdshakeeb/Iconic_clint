import { useQuery } from '@tanstack/react-query';

import { NavLink, Outlet } from 'react-router-dom';
import { getUser } from '../Api/api';
import Navbar from '../Components/Navbar/Navbar';
import { useFirebaseInfo } from '../Context/UserContext';

const DashboardLayout = () => {
    const { user } = useFirebaseInfo()
    const { data: useR = [] } = useQuery({
        queryKey: ['useR', user?.email],
        queryFn: async () => getUser(user?.email),
        enabled: !!user?.email
    })

    console.log(useR.role);
    const className = 'flex items-center px-6 py-1 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md hover:bg-gray-100  hover:text-gray-700 '
    const navLink =
        <>
            <NavLink className={className} to='/dashboard/profile'>Account</NavLink>
            <NavLink className={className} to='/dashboard/orders'>My orders</NavLink>
            {<NavLink className={className} to='/dashboard/sellerShop'>Your Shops</NavLink>}
            {<NavLink className={className} to='/dashboard/addproducts'>Add Product</NavLink>}
        </>
    return (

        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Navbar />
                <Outlet />
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 bg-base-100 text-base-content shadow-sm">
                    {navLink}
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;