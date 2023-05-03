import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import PaymentModal from '../../Components/Modal/PaymentModal';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useAddToCart } from '../../Context/AddToCatd';
import { useFirebaseInfo } from '../../Context/UserContext';

const AddToCart = () => {

    const { cartDates, refetch, isLoading } = useAddToCart()
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
                toast.success("Success!");
                refetch();
            })
    }
    const totalPrice = cartDates?.reduce((total, item) => total + item?.price * item?.amount, 0);
    const totalQuantity = cartDates?.reduce((total, item) => total + item?.amount, 0);

    if (isLoading) {
        return (
            <div className='w-full  min-h-[calc(100vh_-_370px)]  flex justify-center items-center'>
                <PrimaryLoading />
            </div>
        )
    }

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
                                            htmlFor="confirmation-modal" className="btn btn-warning btn-xs ml-3 lg:ml-0"> x</label>
                                        <label
                                            onClick={() => setProduct(item)}
                                            htmlFor="my-modal-3" className='btn btn-sm btn-warning'>PAY</label>
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="">
                            <li className=' rounded-lg my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className="hidden md:flex items-center space-x-2">
                                    <Link className='btn btn-sm btn-primary mt-2' to={`all/products`}>BacK to Shopping</Link>
                                </div>
                                <p className='hidden md:flex '>Total :{totalQuantity}</p>
                                <span className='flex lg:-ml-12'>
                                    Total : {totalPrice}
                                </span>
                                <div className='flex items-center justify-between'>

                                    <Link to={`/dashboard/orders/payment-history`}
                                        className='btn btn-sm btn-warning ml-6'>Payment history</Link>
                                </div>
                            </li>
                        </div>
                    </div> :
                        <div className='flex flex-col items-center justify-center text-center text-2xl font-[400] text-gray-500 min-h-[calc(100vh_-_500px)]'>
                            <p> No payment history</p>
                            <div className="mt-10">
                                <Link className=' btn btn-sm' to={`/all/products`}>Products</Link>
                                <Link className='ml-3 btn btn-sm' to={`/dashboard/orders/payment-history`}>Payed</Link>
                            </div>
                        </div>
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