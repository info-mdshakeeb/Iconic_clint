import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {

    return (
        <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4  '>
            {products?.map((product, i) =>
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
                    <Link to={`/products/${i}`} key={i}>
                        <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-md shadow-md">
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div className="h-auto w-auto">
                                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={product?.ingUrl} alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/50">
                                </div>
                                <div className="absolute inset-0 flex translate-y-[70%]  xl:translate-y-[67%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                    <h1 className="font-dmserif text-sm xl:text-xl font-bold  text-white group-hover:opacity-0  ">{product?.name.length > 11 ? product?.name.slice(0, 16) + '..' : product?.name}</h1>
                                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 h-[135px]">
                                        {product?.name}
                                    </p>
                                    <div className="flex items-end justify-center gap-2 text-white">
                                        <div className="text-sm line-through">
                                            ৳ 100</div>
                                        <div className="text-sm ">
                                            ৳ 80</div>
                                    </div>
                                    {/* <button className=" my-6 px-3.5 font-com text-sm btn btn-sm text-white shadow">See More</button> */}
                                </div>
                            </div>
                        </div></Link>
                </div>)
            }
        </ul>
    );
};

export default ProductCard;