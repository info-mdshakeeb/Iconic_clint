import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    return (
        <div className="flex flex-col items-center justify-center  rounded-md " key={product?._id}>
            <Link to={`/products/${product?._id}`} >
                <div className="flex flex-col items-center justify-center bg-white rounded-md shadow-md">
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="">
                            <img className=" h-60 w-52 transition-transform duration-500  object-fill group-hover:rotate-3 group-hover:scale-125" src={product?.ImgUrls[0]} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/50 group-hover:via-black/60 group-hover:to-black/50">
                        </div>
                        <div className="absolute inset-0 flex translate-y-[70%]  xl:translate-y-[67%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 shadow-sm">
                            <h1 className="font-dmserif text-sm xl:text-xl font-bold  text-white group-hover:opacity-0  ">{product?.Names.length > 11 ? product?.Names.slice(0, 11) + '..' : product?.Names}</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 h-[135px]">
                                {product?.Names}
                            </p>
                            {/* <button className=" my-6 px-3.5 font-com text-sm btn btn-sm text-white shadow">See More</button> */}
                        </div>
                    </div>
                </div></Link>
        </div>
    );
};

export default Card;