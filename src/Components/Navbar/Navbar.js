import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BiUser } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useFirebaseInfo } from '../../Context/UserContext';
import PrimaryLoading from '../LoadingSpin/PrimaryLoading';

const Navbar = ({ need }) => {
    const { user, logout, loading, setLoading } = useFirebaseInfo()
    // console.log(user);

    const { data: useR = [], refetch } = useQuery({
        queryKey: ['useR', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2100/user?email=${user?.email}`)
            const data = await res.json()
            return data.data[0]
        }
    })
    // console.log(useR);

    const heandelLogout = () => {
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
    refetch()
    return (
        <header className='shadow-md shadow-gray-200  sticky top-0 z-50 bg-white ' >
            <div className=" container px-9 flex py-3 m-auto ">
                <div className="flex items-center flex-1 gap-4 md:gap-8">
                    <a href='/' className='text-2xl font-bold text-gray-800 transition-colors duration-300  hover:text-gray-700'>ICONIC</a>
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
                                <li><p onClick={() => heandelLogout()}>{loading ?
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
                            <li><NavLink to='/addtocart'>Card</NavLink></li>
                            <div className="navbar-center hidden lg:flex">
                                <li><NavLink to='/products'>Products</NavLink></li>
                                <li><NavLink to='/add-address'>Delivary Address</NavLink></li>
                            </div>
                        </ul>
                    </div>
                </>
            }
        </header >
    );
};

export default Navbar;