import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Navbar need={true} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;