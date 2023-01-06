import React from 'react';

import { BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useFirebaseInfo } from '../../Context/UserContext';



import PrimaryLoading from '../LoadingSpin/PrimaryLoading';

const NavbarDashBoard = ({ useR }) => {
    const { user, logout, loading, setLoading } = useFirebaseInfo()

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
    return (
        <header className='shadow-md  sticky top-0 z-50  bg-white' >
            <div className=" container px-9 flex py-3 m-auto ">
                <div className="flex items-center flex-1 gap-4 md:gap-8">
                    <a href='/' className='text-2xl font-bold text-gray-800 transition-colors duration-300  hover:text-gray-700'>ICONIC</a>
                </div >
                <div className="flex items-center gap-4 md:gap-12">
                    <div className="dropdown">

                        <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
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
        </header >
    );
};

export default NavbarDashBoard;