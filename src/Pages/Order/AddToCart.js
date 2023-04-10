import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PaymentModal from '../../Components/Modal/PaymentModal';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useAddToCart } from '../../Context/AddToCatd';
import { useFirebaseInfo } from '../../Context/UserContext';

const AddToCart = () => {
    const { cartDates, refetch } = useAddToCart()
    const { user } = useFirebaseInfo()
    const [product, setProduct] = useState(null)

    // update o


    const removeItem = (id) => {
        // console.log(id);
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
                    <p className='text-2xl font-[400] mb-5'>Orders : </p>
                    {cartDates.length > 0 ? <div className='w-full m-auto p-4 border rounded-lg bg-white  '>
                        <div className='my-3 p-2 grid md:grid-cols-4  grid-cols-2 items-center justify-between cursor-pointer'>
                            <span>items</span>
                            <span className='hidden md:grid'>price & Quantity</span>
                            <span className='hidden md:grid'>Subtotal</span>
                            <span className='sm:text-left text-left'>Action</span>
                        </div>
                        <ul>
                            {cartDates?.map((item, i) =>
                                <li key={i} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <Link to={`/products/${item?.productId}`}>
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
                                    </Link>
                                    <p className='hidden md:flex'>{item?.price} - ({item?.amount})</p>
                                    <span className='hidden md:flex'>
                                        {item?.price * item?.amount}
                                    </span>
                                    <div className='flex  items-center justify-between'>
                                        <label
                                            onClick={() => removeItem(item?.id)}
                                            htmlFor="confirmation-modal" className="btn btn-warning btn-xs"> x</label>

                                        <label
                                            onClick={() => setProduct(item)}
                                            htmlFor="my-modal-3" className='btn btn-sm btn-warning'>Make Payment</label>
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="">
                            <li className=' rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className="hidden md:flex items-center space-x-2">
                                    <Link className='btn btn-sm btn-primary mt-2' to={`/products`}>BacK to Shopping</Link>
                                </div>
                                <p className='hidden md:flex '>Total :{totalQuantity}</p>
                                <span className='flex -ml-12'>
                                    Total : {totalPrice}
                                </span>
                                <div className='flex items-center justify-between'>

                                    <Link to={`/dashboard/orders/payment-history`}
                                        className='btn btn-sm btn-warning ml-6'>Got to Payment history</Link>
                                </div>
                            </li>
                        </div>
                    </div> :
                        <div className="flex items-center justify-center h-28 text-2xl"><p>Currently No order Pending );</p></div>
                    }
                </div>
            </div>
            {product &&
                <PaymentModal
                    product={product}
                    setProduct={setProduct}
                />}
        </BodyTemplate>
    );
};

export default AddToCart;