import React, { useContext } from 'react';
import { BiUser } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { AuthUser } from '../../Context/UserContext';

const Navbar = () => {
    const { user, loading } = useContext(AuthUser)
    console.log(user);

    const navitems =
        <>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/shops'>Shops</NavLink></li>
            <li><NavLink to='/order'>Order</NavLink></li>
            <li><NavLink to='/delivaryaddress'>Delivary Address</NavLink></li>
            <li><NavLink to='/addphone'>Add Phone Number</NavLink></li>
        </>
    return (
        <header className='shadow-lg sticky top-0 z-50 bg-white ' >
            <div className=" container px-6 flex py-3 m-auto ">
                <div className="flex items-center flex-1 gap-4 md:gap-8">
                    <p className='text-2xl'>ICONIC</p>
                </div >
                <div className="flex items-center gap-4 md:gap-12">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown ">
                        <label tabIndex={1}
                            className=" transition-colors md:hover:bg-gray-50">
                            <div className={`flex items-center ${user?.uid && "btn btn-ghost"} `}>
                                <BiUser className='text-2xl mr-2' />
                                {user?.uid ?
                                    <div className=" ">{user.displayName}</div> :
                                    <div className=''><Link to='/login'>Login</Link></div>
                                }
                            </div>
                        </label>
                        {user?.uid &&
                            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>}
                    </div>
                </div>
            </div >
            <hr className='border-gray-100' />
            <div className="container m-auto menu menu-compact ">
                <ul className="flex overflow-auto hide-scrollbar py-2">
                    {navitems}
                </ul>
            </div>

        </header >

    );
};

export default Navbar;