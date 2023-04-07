import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { getLimitProductsApi } from '../../Api/api';
import PrimaryButton from '../share/Buttons/PrimaryButton';
import ProductCard from '../share/Cart/ProductCard';

const ProductsSection = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => getLimitProductsApi(20)
    })
    // console.log(products);

    return (
        <div className='container px-3 md:px-9 m-auto '>
            <div className="py-4">
                <div className="flex justify-between mb-4">
                    <p className="font-bold text-2xl">Products</p>
                    <PrimaryButton> <Link to='/products'>See more</Link></PrimaryButton>
                </div>
                <ProductCard
                    products={products}
                />
            </div>
            <div className="text-center py-5">
                <Link to='/products'>
                    <button className="relative group overflow-hidden px-4 h-8 rounded-md bg-gradient-to-r from-gray-700 via-gray-800 to-black
                      before:absolute 
                      before:inset-0 
                      before:bg-black
                      before:scale-y-[0.1] 
                      before:origin-bottom
                      before:transition
                      before:duration-300
                      hover:before:scale-y-100
                      ">
                        <span className="relative uppercase text-base text-white">Load More</span>
                    </button></Link>
            </div>
        </div>
    );
};

export default ProductsSection;