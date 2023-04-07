import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BiUser } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

import { getUser } from '../../Api/api';
import { useAddToCart } from '../../Context/AddToCatd';
import { useFirebaseInfo } from '../../Context/UserContext';
import PrimaryLoading from '../LoadingSpin/PrimaryLoading';

const Navbar = ({ need }) => {
    const { user, logout, loading, setLoading } = useFirebaseInfo()
    const { cartDates } = useAddToCart()
    // console.log(user);
    const { data: useR = [] } = useQuery({
        queryKey: ['useR', user?.email],
        queryFn: () => getUser(user?.email),
        enabled: !!user?.email
    })
    const handleLLogout = () => {
        setLoading(true)
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to logout !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Logout`
        }).then((result) => {
            if (result.isConfirmed) {
                logout().then(re => {
                    setLoading(false)
                    Swal.fire({
                        icon: 'success',
                        title: `LogOut SuccessFull`,
                        showConfirmButton: false, timer: 1500
                    })
                })
            } else {
                setLoading(false)
            }
        })
    }
    const totalPrice = cartDates?.reduce((total, item) => total + item?.price * item?.amount, 0);
    return (
        <header className='shadow-sm shadow-gray-200  sticky top-0 z-50 bg-white ' >
            <div className=" container px-9 flex py-3 m-auto ">
                <div className="flex items-center flex-1 gap-4 md:gap-8">
                    <a href='/' className='text-2xl font-bold text-gray-800 transition-colors duration-300  hover:text-gray-700'>ICONIC</a>
                </div >
                <div className="flex items-center gap-4 md:gap-12">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cartDates?.length}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{cartDates?.length} Items</span>
                                <span className="text-info">total: {totalPrice} tk</span>

                                <div className="card-actions">
                                    <Link to='/orders' className="btn btn-primary btn-block">View cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <div className="dropdown ">
                        <label tabIndex={1}
                            className=" transition-colors md:hover:bg-gray-50">
                            <div className={`flex items-center ${user?.uid && "btn btn-ghost"} `}>
                                <BiUser className='text-2xl mr-2' />
                                {user?.uid ?
                                    <div className=" ">{useR?.name}</div> :
                                    <div className=''><Link to='/login'>Login</Link></div>
                                }
                            </div>
                        </label>
                        {user?.uid &&
                            <ul tabIndex={1} className="menu menu-compact dropdown-content w-28 md:w-32 lg:w-32  shadow bg-base-100 ">
                                <li>
                                    <Link to="/dashboard/profile" className="">
                                        Profile
                                    </Link>
                                </li>
                                <hr />
                                <li><Link to="/dashboard/orders">Orders</Link></li>
                                <hr />
                                <li><p onClick={() => handleLLogout()}>{loading ?
                                    <PrimaryLoading
                                        color={"#FFFFFF"}
                                        height={'16'}
                                    />
                                    : " Logout"}</p></li>
                            </ul>}
                    </div>
                </div>
            </div >
            {need &&
                <> <hr className='border-gray-100' />
                    <div className="container px-6 m-auto menu menu-compact ">
                        <ul className="flex overflow-auto hide-scrollbar py-2 items-center">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/shops'>Shops</NavLink></li>
                            {user && <>
                                <li><NavLink to='/products'>Products</NavLink></li>
                                <li><NavLink to='/orders'>Orders</NavLink></li>
                                <li><NavLink to='/add-address'>Delivery Address</NavLink></li>

                            </>}
                        </ul>
                    </div>
                </>
            }
        </header >
    );
};

export default Navbar;