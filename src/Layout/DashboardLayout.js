import { useQuery } from '@tanstack/react-query';

import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { useFirebaseInfo } from '../Context/UserContext';

const DashboardLayout = () => {
    const { user } = useFirebaseInfo()
    const { data: useR = [] } = useQuery({
        queryKey: ['useR', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3210/api/v2/users?email=${user?.email}`)
            const data = await res.json()
            return data.data[0]
        }
    })
    console.log(useR);
    const className = 'flex items-center px-6 py-1 mt-5 text-gray-500 transition-colors duration-300 transform rounded-md hover:bg-gray-100  hover:text-gray-700 '
    const navLink =
        <>
            <NavLink className={className} to='/dashboard/profile'>Account</NavLink>
            <NavLink className={className} to='/dashboard/orders'>My orders</NavLink>
            {useR?.role === ('seller' || 'admin') && <NavLink className={className} to='/dashboard/sellerShop'>Your Shops</NavLink>}
            {<NavLink className={className} to='/dashboard/addproducts'>Add Product</NavLink>}
        </>
    return (
        <div className="h-screen bg-white">
            {/* <Navbar need={false} /> */}
            <Navbar need={false} />
            <div className="drawer drawer-mobile h-auto  ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="flex flex-col mt-1 w-64 min-h-[90vh] px-4 py-8 bg-gray-00 border-r ">
                        <div className="flex flex-col justify-between flex-1 text-white ">
                            <nav className=''>
                                {navLink}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default DashboardLayout;