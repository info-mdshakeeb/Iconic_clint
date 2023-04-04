import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { getProductsByUserApi, getUserShops, updateProductApi } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import { useFirebaseInfo } from '../../Context/UserContext';

const MyProducts = () => {
    const { user } = useFirebaseInfo();

    const [productId, setProductID] = useState(null);
    const { data: products = [], isInitialLoading, isFetching, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        enabled: !!user?.email,
        queryFn: () => getProductsByUserApi(user?.email)
    })
    const { data: shops = [] } = useQuery({
        queryKey: ['shops'],
        enabled: !!user?.email,
        queryFn: () => getUserShops(user?.email)
    })
    const handelShop = (e) => {
        e.preventDefault()
        const form = e.target;
        const shopName = form.shops.value;
        handelUpdate({ shop: shopName })
    }
    const handelUpdate = (value) => {
        updateProductApi(productId, value)
            .then(data => {
                refetch()
                console.log(data);
            }).catch(err => {
                console.log(err);
            })
    }


    if (isLoading || isInitialLoading)
        return <div className="flex justify-center items-center w-full h-[60vh]">
            <PrimaryLoading />
        </div>
    return (
        <div>
            <div className='min-h-[80vh] overflow-y-hidden'>
                <div className='px-4'>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white  '>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <span>Product Details</span>
                            <span className='hidden md:grid'>Quantity remain</span>
                            <span className='hidden md:grid'>Add to shop</span>
                            <span className='sm:text-left text-left'>Action</span>
                        </div>
                        <ul>
                            {products.map(product =>
                                <li key={product?._id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className="flex items-center space-x-2">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-8 h-8">
                                                <img src="" alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">shakeeb </div>
                                            <div className="text-sm opacity-50">seller {" "} ID: 234</div>
                                        </div>
                                    </div>
                                    <p className='hidden md:flex'>@edf.csdc in <span className='px-2 text-green-500'>{product?.shop}</span></p>

                                    <form action="" onSubmit={handelShop}
                                    >
                                        <select required name="shops" className="select select-bordered select-sm  w-48">
                                            {shops?.map(shop =>
                                                <option key={shop?._id} defaultChecked={product?.shop === shop?.name} >{shop?.name}
                                                </option>)
                                            }
                                        </select>
                                        <button
                                            onClick={() => setProductID(product?._id)}
                                            className='ml-4 btn btn-xs btn-warning'>Update</button>

                                    </form>
                                    <div className='flex  items-center justify-between'>
                                        {product?.status === "published" ?
                                            <button
                                                onClick={() => handelUpdate({ status: 'hide' })}
                                                htmlFor="confirmation-modal" className="btn btn-warning btn-xs">Hide</button> :
                                            <button
                                                onClick={() => handelUpdate({ status: 'published' })}
                                                htmlFor="confirmation-modal" className="btn btn-warning btn-xs">Publish</button>}
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>

                            )}


                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProducts;