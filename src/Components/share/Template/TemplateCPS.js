import React from 'react';
import { ImSearch } from 'react-icons/im';
const ShopsAndProduct = ({ type, children }) => {
    return (
        <div className='bg-slate-50'>
            <div className=" h-full min-h-[calc(100vh_-_400px)] container px-3 md:px-9 mx-auto">
                <div className="py-8">
                    <div className="flex flex-col mb-8 md:items-center md:justify-between md:flex-row">
                        <p className='font-medium text-2xl py-4 md:py-0'>{type}</p>
                        <div className="flex border">
                            <input className='block p-2 outline-none bg-white-100 md:w-[250px] w-full' type="text" placeholder={`${type} name`} />
                            <div className="flex items-center px-5 text-white bg-black py-4 md:py-0"><ImSearch /></div>
                        </div>
                    </div>
                    {children}

                </div>
            </div>

        </div>
    );
};

export default ShopsAndProduct;