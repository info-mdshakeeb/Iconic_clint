import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../share/Buttons/PrimaryButton';
import ProductCard from '../share/Cart/ProductCard';

const ProductsSection = () => {
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