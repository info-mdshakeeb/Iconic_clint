import React from 'react';
import Button from '../share/Buttons/PrimaryButton';
import ShopCard from '../share/Cart/ShopCard';

const Shops = () => {
    return (
        <div className='container px-3 md:px-9 m-auto '>
            <div className="py-4">
                <div className="flex justify-between mb-4">
                    <p className=" font-bold text-2xl">Shops</p>
                    <Button>see more</Button>
                </div>
                <ul className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6  '>
                    <ShopCard />
                </ul>
            </div>
        </div>
    );
};

export default Shops;