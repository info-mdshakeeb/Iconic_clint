import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const HomeNav = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default HomeNav;