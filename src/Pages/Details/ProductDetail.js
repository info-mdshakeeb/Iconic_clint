import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductByIdApi, getShopById } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import Variants from '../../Components/Variants/Variants';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useAddToCart } from '../../Context/AddToCatd';
import { useFirebaseInfo } from '../../Context/UserContext';
const ProductDetail = () => {

    const { user } = useFirebaseInfo();
    const { cart, setCart, amount, setAmount, refetch } = useAddToCart();
    const { id } = useParams();
    const [img, setImg] = useState(null);
    const [variantsPrice, setVariantsPrice] = useState(null);
    const [variants, setVariants] = useState(null);

    const { data: product = [] } = useQuery({
        queryKey: ['product' + id, id],
        queryFn: () => getProductByIdApi(id),
        enabled: !!id
    })
    const { data: shop = [], isFetching, isLoading, isInitialLoading } = useQuery({
        queryKey: ['shop' + product?.shopId, product?.shopId],
        queryFn: () => getShopById(product?.shopId),
        enabled: !!id && !!product?.shopId
    })
    const setDecrease = (price) => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = (price) => {
        amount < product?.Quantity ? setAmount(amount + 1) : setAmount(product?.Quantity);
    }
    // console.log(product);
    const handleAddToCart = (data) => {
        const cartData = {
            id: data._id + variants,
            name: data.Names,
            amount: amount,
            image: data?.ImgUrls[0],
            price: variantsPrice ? variantsPrice : data?.Price,
            max: data?.Quantity,
            shop: data?.shop,
            shopId: data?._id,
            userEmail: user?.email,
            variants: variants,
            status: 'pending',
            data: new Date().toDateString()
        }
        const common = cart.find((item) => item.id === cartData.id);
        // console.log(common);
        if (common) {
            const newCart = cart.map((item) => {
                if (item.id === cartData.id) {
                    return {
                        ...item,
                        amount: item.amount + cartData.amount
                    }
                }
                return item;
            })
            handleUpdateWishList(cartData);
            setCart(newCart);
            refetch()
            return;
        } else {
            handleAddToWishList(cartData);
            setCart([...cart, cartData])
            refetch()
        }
    }
    //add to database :
    const handleAddToWishList = (data) => {
        fetch('http://localhost:3210/api/v2/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                refetch()

                console.log(data);
            })
    }
    //update 
    const handleUpdateWishList = (data) => {
        fetch(`http://localhost:3210/api/v2/cart?id=${data?.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
            })
    }
    if (isLoading || isInitialLoading || isFetching) {
        return <div className="flex justify-center items-center w-full h-[600px]">
            <PrimaryLoading />
        </div>
    }

    return (
        <BodyTemplate>
            <div className="p-4 my-6 bg-white shadow">
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-shrink-0 flex-1">
                        <div className="md:max-w-[500px]  ">
                            <figure className='flex justify-center items-center'>
                                <div className="">
                                    {img ? <img className='h-[450px]' src={img} alt="" /> :
                                        <img className='h-[450px]' src={product?.ImgUrls[1]} alt="" />}
                                </div>
                            </figure>
                            <div className="mt-2">
                                <ul className="flex gap-2 overflow-x-auto flex-nowrap hide-scrollbar">
                                    <div className="flex gap-3">
                                        {product?.ImgUrls.map((img, i) =>
                                            <li
                                                key={i}
                                                onClick={() => setImg(img)}
                                                className='cursor-pointer hover:border-gray-600 transition-colors duration-300 border-2 flex-shrink-0 '>
                                                <img className='object-fill h-12 w-12 p-1' src={img} alt="" />
                                            </li>
                                        )}
                                    </div>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className='font-bold text-xl md:mt-8'>{product?.Names}</p>
                        <p className='mb-6 text-gray-600'>
                            <strong>Category: {shop?.category}</strong>
                            <span className='mx-2'>||</span>
                            <strong>Brand: {product?.BrandNames}</strong>
                        </p>
                        <p className='mb-2 text-base font-semibold'>
                            Specification:
                        </p>
                        <div className="">
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">Network</dt>
                                <dd className="flex-1 text-gray-500">{product?.Network}</dd>
                            </dl>
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">Display</dt>
                                <dd className="flex-1 text-gray-500">{product?.Display}</dd>
                            </dl>
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">Resolution</dt>
                                <dd className="flex-1 text-gray-500">{product?.Resolution}</dd>
                            </dl>
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">font Cameras</dt>
                                <dd className="flex-1 text-gray-500">{product?.Cameras[0]}</dd>
                            </dl>
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">Main Cameras</dt>
                                <dd className="flex-1 text-gray-500">{product?.Cameras[1]}</dd>
                            </dl>
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">Battery</dt>
                                <dd className="flex-1 text-gray-500">{product?.Battery}</dd>
                            </dl>
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">Operating_System</dt>
                                <dd className="flex-1 text-gray-500">{product?.Operating_System}</dd>
                            </dl>
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">Processor</dt>
                                <dd className="flex-1 text-gray-500">{product?.Processor}</dd>
                            </dl>
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">Quantity</dt>
                                <dd className="flex-1 text-gray-500">{product?.Quantity}</dd>
                            </dl>
                            {product?.Quantity > 0 &&
                                <Variants
                                    product={product}
                                    setVariantsPrice={setVariantsPrice}
                                    setVariants={setVariants}
                                />
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="my-6">
                <p className='mb-3 text-base text-semibold'>Buy Form</p>
            </div>
            <div className="flex gap-4 pb-1 overflow-x-auto flex-nowrap hide-scrollbar lg:grid lg:grid-cols-2">
                <div className="p-4 bg-white shadow w-full md:max-w-[400px] min-w-[300px]">
                    <div className="flex gap-2 mb-2">
                        <div className="">
                            <a href="/" className="">
                                <div className="">
                                    <img src={shop?.photoUrl} alt="" height="50px" width="50px" />
                                </div>
                            </a>
                        </div>
                        <div className="">
                            <a href={`/shops/${shop?._id}`} className="">
                                <p className="text-base font-medium hover:text-gray-600">
                                    {shop?.name}
                                </p>
                                <p><span className="px-2 py-0.5 text-xs bg-gray-200 rounded">{shop?.category}</span></p>
                            </a>
                        </div>
                    </div>
                    <p className='flex items-center gap-2 mb-1'>
                        <span className="">Q</span>
                        <span className="flex-1">{shop?.location}</span>
                    </p> <hr />
                    <div className="my-4">
                        <div className="flex items-end gap-2">
                            {variantsPrice ? <p className="text-base font-semibold text-gray-600">Price : {variantsPrice}</p>
                                : <p className="text-base font-semibold text-gray-600"> Please Select a variant</p>
                            }
                        </div>
                        <div className="flex items-center gap-4 ">
                            <div className="flex gap-4 items-center ">
                                <button className='px-3 border hover:bg-black hover:text-white ' onClick={() => setDecrease()}>-</button>
                                <p className='w-4'>{amount}</p>
                                <button className='px-3 border hover:bg-black hover:text-white ' onClick={() => setIncrease()}>+</button>
                            </div>
                            <Link
                                onClick={() => handleAddToCart(product)}
                                className={`mt-3 btn btn-sm type-info  ${variantsPrice ? "" : "btn-disabled"}`}>Add to card</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4 my-6 bg-white shadow">
                <p className=''>Description :</p>
                <p className='text-gray-600'>
                    <p className='inline'>{product?.description}</p>
                </p>
            </div>
            <div className=""></div>
        </BodyTemplate>
    );
};

export default ProductDetail;