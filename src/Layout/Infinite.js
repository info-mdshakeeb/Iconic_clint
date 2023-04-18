import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Infinite = () => {
    return (
        <div>
            <Navbar need={true} />
            <Outlet />
        </div>
    );
};

export default Infinite;