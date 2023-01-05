import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import BodyTemplate from '../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../Context/UserContext';

const DashboardNav = () => {
    const { user } = useFirebaseInfo()
    const { data: useR = [] } = useQuery({
        queryKey: ['useR', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2100/user?email=${user?.email}`)
            const data = await res.json()
            return data.data[0]
        }
    })
    // console.log(useR);

    const navLink =
        <>
            <li ><NavLink className="shadow my-1" to='/dashboard/profile'>Account</NavLink></li>
            <li ><NavLink className="shadow my-1" to='/dashboard/orders'>My orders</NavLink></li>
            {useR?.role === ('seller' || 'admin') && <li ><NavLink className="shadow my-1" to='/dashboard/sellerForm'>Seller Form</NavLink></li>}
        </>
    return (
        <div className="">
            <Navbar />
            <BodyTemplate>
                <div className="drawer drawer-mobile h-auto ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2 border" className="drawer-overlay "></label>
                        <ul className="menu p-4 w-60 text-base-content  bg-base-100 lg:bg-slate-50 ">
                            {navLink}
                        </ul>
                    </div>
                </div>
            </BodyTemplate>
            <Footer />
        </div>

    );
};

export default DashboardNav;