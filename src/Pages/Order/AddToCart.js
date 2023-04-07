import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useAddToCart } from '../../Context/AddToCatd';
import { useFirebaseInfo } from '../../Context/UserContext';

const AddToCart = () => {
    const { cartDates, isFetching, isLoading, refetch } = useAddToCart()
    const { user } = useFirebaseInfo()

    const removeItem = (id) => {
        fetch(`http://localhost:3210/api/v2/cart?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }
    const totalPrice = cartDates?.reduce((total, item) => total + item?.price * item?.amount, 0);
    const totalQuantity = cartDates?.reduce((total, item) => total + item?.amount, 0);

    return (
        <BodyTemplate>

            <div className=' overflow-y-hidden'>
                <div className='px-4'>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white  '>
                        <div className='my-3 p-2 grid md:grid-cols-4  grid-cols-2 items-center justify-between cursor-pointer'>
                            <span>items</span>
                            <span className='hidden md:grid'>price & Quantity</span>
                            <span className='hidden md:grid'>Subtotal</span>
                            <span className='sm:text-left text-left'>Action</span>
                        </div>
                        <ul>
                            {cartDates?.map((item, i) =>
                                <li className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className="flex items-center space-x-2">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-8 h-8">
                                                <img src={item?.image} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item?.name}
                                            </div>
                                            <div className="text-sm opacity-50">{item?.shop} type :{item?.variants}</div>
                                        </div>
                                    </div>
                                    <p className='hidden md:flex'>{item?.price} - ({item?.amount})</p>
                                    <span className='hidden md:flex'>
                                        {item?.price * item?.amount}
                                    </span>

                                    <div className='flex  items-center justify-between'>
                                        <label
                                            onClick={() => removeItem(item?.id)}
                                            htmlFor="confirmation-modal" className="btn btn-warning btn-xs"> x</label>
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="">
                            <li className=' rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className="hidden md:flex items-center space-x-2">

                                </div>
                                <p className='flex '>Total :{totalQuantity}</p>
                                <span className='flex -ml-12'>
                                    Total : {totalPrice}
                                </span>

                                <div className='hidden md:flex items-center justify-between'>

                                </div>
                            </li>
                        </div>
                    </div>
                </div>

            </div>
        </BodyTemplate>
    );
};

export default AddToCart;