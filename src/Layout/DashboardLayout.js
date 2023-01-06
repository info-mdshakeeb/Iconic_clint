import { useQuery } from '@tanstack/react-query';

import { NavLink, Outlet } from 'react-router-dom';
import NavbarDashBoard from '../Components/Navbar/NavbarDashBoard';
import BodyTemplate from '../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../Context/UserContext';

const DashboardLayout = () => {
    const { user } = useFirebaseInfo()
    const { data: useR = [] } = useQuery({
        queryKey: ['useR', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2100/user?email=${user?.email}`)
            const data = await res.json()
            return data.data[0]
        }
    })

    const navLink =
        <>
            <li ><NavLink className="shadow my-1" to='/dashboard/profile'>Account</NavLink></li>
            <li ><NavLink className="shadow my-1" to='/dashboard/orders'>My orders</NavLink></li>
            {useR?.role === ('seller' || 'admin') && <li ><NavLink className="shadow my-1" to='/dashboard/sellerShop'>Your Shops</NavLink></li>}
        </>
    return (

        <div className="h-screen bg-slate-50">
            <NavbarDashBoard
                useR={useR}
            />
            <BodyTemplate>
                <div className="drawer drawer-mobile h-auto ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu  w-48  bg-slate-50 md:bg-inherit text-base-content">
                            {navLink}
                        </ul>
                    </div>
                </div>
            </BodyTemplate>
        </div>
    );
};

export default DashboardLayout;