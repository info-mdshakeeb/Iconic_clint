import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const products = [
        {
            name: 'Microwear W26+ Pro Smartwatch - Black',
            ingUrl: 'https://media.e-valy.com/cms/products/images/82c396a6-cf45-43cb-8fe4-09073e0567a0',
            price: '2000',
            dropPrice: '1800'
        },
        {
            name: 'CURREN 8106 Stainless Steel Analog Watch For Men - White and Black',
            ingUrl: 'https://media.e-valy.com/cms/products/images/318f4000-94fd-409b-b845-f9c52f6acfaa',
            price: '3200',
            dropPrice: '2900'
        },
        {
            name: 'Lenovo Lp40 Tws Wireless Bluetooth Earbuds - Black',
            ingUrl: 'https://media.e-valy.com/cms/products/images/681fa11a-7f58-46c3-a441-52a8ff85dbf5',
            price: '1100',
            dropPrice: '800'
        },
        {
            name: 'Awei T20 Budget TWS',
            ingUrl: 'https://media.e-valy.com/cms/products/images/5960d045-319f-4d97-9854-79f5d517214e',
            price: '1500',
            dropPrice: '1200'
        },
        {
            name: 'UiiSii U1 Wired In -Ear Heavy Bass Headphones',
            ingUrl: 'https://media.e-valy.com/cms/products/images/caab360b-e07b-4e1f-806b-5c8242413070',
            price: '300',
            dropPrice: '200'
        },
    ]
    return (
        <>
            {products.map((product, i) =>
                <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-md shadow-sm  " key={i}>
                    {/* <a href="/" className='p-4' >
                        <div className="h-[135px] " >
                            <img className=' max-h-32 w-32 mx-auto'
                                src={product?.ingUrl} alt="" />
                        </div>
                        <div className=" w-full ">
                            <p className='font-medium text-center  hover:underline'>
                                {product?.name.length > 50 ? product?.name.slice(0, 50) + '...' : product?.name}
                            </p>
                        </div>
                        <div className="flex items-end justify-center gap-2">
                            <div className="text-sm text-gray-600 line-through">
                                ৳ 100</div>
                            <div className="text-sm text-gray-600 ">
                                ৳ 80</div>
                        </div>
                    </a> */}
                    <Link to={`/products/${i}`}>
                        <div class="flex flex-col items-center justify-center w-full h-full bg-white rounded-md shadow-md">
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div class="h-auto w-auto">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={product?.ingUrl} alt="" />
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/50">
                                </div>
                                <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 class="font-dmserif text-xl font-bold  text-white group-hover:opacity-0  ">{product?.name.length > 11 ? product?.name.slice(0, 10) + '...' : product?.name}</h1>
                                    <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 h-[135px]">
                                        {product?.name}
                                    </p>
                                    <div className="flex items-end justify-center gap-2 text-white">
                                        <div className="text-sm line-through">
                                            ৳ 100</div>
                                        <div className="text-sm ">
                                            ৳ 80</div>
                                    </div>
                                    {/* <button class=" my-6 px-3.5 font-com text-sm btn btn-sm text-white shadow">See More</button> */}
                                </div>
                            </div>
                        </div></Link>
                </div>)
            }
        </>
    );
};

export default Product;