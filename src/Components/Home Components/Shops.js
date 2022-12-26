import React from 'react';
import Button from '../../Hooks/Button';
import Shop from './Shop';

const Shops = () => {
    return (
        <div className='container px-6 m-auto '>
            <div className="py-4">
                <div className="flex justify-between mb-4">
                    <p className=" font-bold text-2xl">Shops</p>
                    <Button value={'See More'}></Button>
                </div>
                <ul className='grid grid-cols-2 gap-4 lg:grid-cols-6 sm:grid-cols-4 '>
                    <Shop />
                </ul>
            </div>
        </div>
    );
};

export default Shops;