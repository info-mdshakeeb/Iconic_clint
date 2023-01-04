import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import BodyTemplate from '../Components/share/Template/BodyTemplate';

const DashboardNav = () => {

    const navlink = [
        { name: "Account", link: '/dashboard/profile' },
        { name: "My orders", link: '/dashboard/orders' },
    ]

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
                            {navlink.map((link, i) =>
                                <li key={i}><NavLink className="shadow my-1" to={link?.link}>{link?.name}</NavLink></li>
                            )}
                        </ul>
                    </div>
                </div>
            </BodyTemplate>
            <Footer />
        </div>

    );
};

export default DashboardNav;