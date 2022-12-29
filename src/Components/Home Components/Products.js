import React from 'react';
import PrimaryButton from '../share/Buttons/PrimaryButton';
import ProductCard from '../share/Cart/ProductCard';

const Products = () => {
    return (
        <div className='container px-3 md:px-9 m-auto '>
            <div className="py-4">
                <div className="flex justify-between mb-4">
                    <p className=" font-bold text-2xl">Products</p>
                    <PrimaryButton>See more</PrimaryButton>
                </div>
                <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4  '>
                    <ProductCard />
                </ul>
            </div>
            <div className="text-center py-5">
                <button className='btn  mx-auto btn-sm'>See More</button>
            </div>
        </div>
    );
};

export default Products;