import React from 'react';
import Button from '../../Hooks/Button';
import Product from './Product';

const Products = () => {
    return (
        <div className='container px-6 m-auto '>
            <div className="py-4">
                <div className="flex justify-between mb-4">
                    <p className=" font-bold text-2xl">Products</p>
                    <Button value={'See More'}></Button>
                </div>
                <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4  '>
                    <Product />
                </ul>
            </div>
            <div className="text-center py-5">
                <button className='btn  mx-auto btn-sm'>See More</button>
            </div>
        </div>
    );
};

export default Products;