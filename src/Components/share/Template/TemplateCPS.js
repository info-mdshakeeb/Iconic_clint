import React from 'react';
import { ImSearch } from 'react-icons/im';
import BodyTemplate from './BodyTemplate';
const ShopsAndProduct = ({ type, children }) => {
    return (
        <BodyTemplate>
            <div className="flex flex-col mb-8 md:items-center md:justify-between md:flex-row">
                <p className='font-medium text-2xl py-4 md:py-0'>{type}</p>
                <div className="flex border">
                    <input className='block p-2 outline-none bg-white-100 md:w-[250px] w-full' type="text" placeholder={`${type} name`} />
                    <div className="flex items-center px-5 text-white bg-black py-4 md:py-0"><ImSearch /></div>
                </div>
            </div>
            {children}
        </BodyTemplate>
    );
};

export default ShopsAndProduct;