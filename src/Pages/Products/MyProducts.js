import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { getProductsByUserApi, getUserShops, updateProductApi } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../../Context/UserContext';

const MyProducts = () => {
    const { user } = useFirebaseInfo();
    const [productId, setProductID] = useState(null);
    const { data: productsByUser = [], isInitialLoading, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        enabled: !!user?.email,
        queryFn: () => getProductsByUserApi(user?.email)
    })
    console.log(productsByUser);
    const { data: shops = [] } = useQuery({
        queryKey: ['shops'],
        enabled: !!user?.email,
        queryFn: () => getUserShops(user?.email)
    })
    const handelShop = (e) => {
        e.preventDefault()
        const form = e.target;
        const shopId = form.shops.value
        const Quantity = form.Quantity.value
        const shop = shops?.find(shop => shop?._id === shopId)
        handelUpdate(productId, { shop: shop?.name, shopId: shop?._id, Quantity: Quantity })
    }
    const handelPublish = (id, value) => {
        handelUpdate(id, { status: value })
    }
    const handleAdvertisement = (id, value) => {
        handelUpdate(id, { Advertisement: value })
    }
    const handelUpdate = (id, value) => {
        updateProductApi(id, value)
            .then(data => {
                refetch()
                toast.success("Success")
            }).catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

    if (isLoading || isInitialLoading)
        return <div className="flex justify-center items-center w-full h-[60vh]">
            <PrimaryLoading />
        </div>

    return (
        <BodyTemplate>
            <div className='min-h-[80vh] overflow-x-hidden '>
                <div className=''>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white h-[85vh] xl:h-[87vh] overflow-scroll '>
                        <div className='my-3 p-2 grid lg:grid-cols-3 xl:grid-cols-4  grid-cols-2 items-center justify-between cursor-pointer'>
                            <span>Product Details</span>
                            <span className='hidden md:grid'>shop</span>
                            <span className='hidden md:grid'>Add to shop & Quantity</span>
                            <span className='hidden xl:grid'>Action</span>
                        </div>
                        <ul>
                            {productsByUser.map(product =>
                                <li key={product?._id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid lg:grid-cols-3 xl:grid-cols-4  grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className="flex items-center space-x-2">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-8 h-8">
                                                <img src={product?.ImgUrls[0]} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{product?.Names} </div>
                                            <div className="text-sm opacity-50 flex ">{product?.BrandNames}
                                                {product?.shop && <>

                                                    {product?.Advertisement ?
                                                        <div className='pl-2'>{product?.Advertisement}
                                                            <button
                                                                onClick={() => handleAdvertisement(product?._id, false)}
                                                                className='ml-2 bg-black rounded-lg px-1 text-white '> Remove</button>
                                                        </div>
                                                        : <button
                                                            onClick={() => handleAdvertisement(product?._id, "pending")}
                                                            className='ml-2 bg-black rounded-lg px-1 text-white '> Advertise</button>
                                                    }
                                                </>}
                                            </div>
                                        </div>
                                    </div>
                                    {product?.shop ? <p className='hidden md:flex'>  <span className='px-2 text-green-500'>{product?.shop}</span></p>
                                        :
                                        <p className='text-yellow-400'>Add a Shop</p>
                                    }

                                    <div className="max-h-[30px]  ">
                                        <div className="-mt-10 -ml-10">
                                            <form action="" onSubmit={handelShop} className=''>
                                                <select required name="shops" className="select select-bordered select-xs w-28  ">
                                                    {shops?.map(shop =>
                                                        <option key={shop?._id} value={shop?._id} >
                                                            {shop?.name}
                                                        </option>)
                                                    }
                                                </select>
                                                <input defaultValue={product?.Quantity} name='Quantity' type="number" className='hidden md:inline-block select-xs w-20 ml-3' />
                                                <button
                                                    onClick={() => setProductID(product?._id)}
                                                    className='ml-4 btn btn-xs btn-warning'>
                                                    Update
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    {product?.shop && <div className='hidden lg:flex  items-center justify-around '>
                                        {product?.status === "published" ?
                                            <button
                                                onClick={() => handelPublish(product?._id, 'hidden')}
                                                htmlFor="confirmation-modal" className="btn btn-warning btn-xs">Hide</button> :
                                            <button
                                                onClick={() => handelPublish(product?._id, 'published')}
                                                htmlFor="confirmation-modal" className="btn btn-secondary btn-xs">Publish</button>}
                                        <BsThreeDotsVertical />
                                    </div>}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

            </div>
        </BodyTemplate>
    );
};

export default MyProducts;