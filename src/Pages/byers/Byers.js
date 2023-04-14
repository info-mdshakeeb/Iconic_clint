import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../../Context/UserContext';

const Byers = () => {

    const { user } = useFirebaseInfo()
    const { data: getByers } = useQuery({
        queryKey: ['byers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3210/api/v2/cart/payment/confirmed/${user?.email}`)
            const data = await res.json()
            return data.data
        }
    })
    return (
        <BodyTemplate>
            <div className='overflow-y-hidden'>
                <div className=''>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white h-[87vh] overflow-scroll  '>
                        <div className='my-3 p-2 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <span>Product</span>
                            <span className='hidden md:grid'>PaymentID</span>
                            <span className='hidden xl:grid'>Payment Date</span>
                            <span className='sm:text-left text-left'>byers Mail</span>
                        </div>
                        {getByers?.length > 0 ?
                            <ul>
                                {getByers?.map((item, i) =>
                                    <li key={i}
                                        className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                        <Link to={`/products/${item?.productId}`}>
                                            <div className="flex items-center space-x-2">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-8 h-8">
                                                        <img src={item?.image} alt="Avatar" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item?.name} {item?.variants}
                                                    </div>
                                                    <div className="text-sm opacity-50">Shop:{item?.shop} ,{" "} Amount {item?.amount} </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <p className='hidden lg:flex'>{item?.paymentID}</p>
                                        <span className='hidden xl:flex'>
                                            {item?.data}
                                        </span>
                                        <div className='flex  items-center justify-between'>
                                            <label htmlFor="confirmation-modal" className="">
                                                {item?.userEmail}
                                            </label>
                                            <BsThreeDotsVertical />
                                        </div>
                                    </li>)}
                            </ul> : <div className='flex flex-col items-center justify-center text-center text-2xl font-[400] text-gray-500 min-h-[calc(100vh_-_500px)]'>
                                <p> Currently on byers Available</p>
                            </div>
                        }
                    </div>
                </div>

            </div>

        </BodyTemplate>
    );
};

export default Byers;