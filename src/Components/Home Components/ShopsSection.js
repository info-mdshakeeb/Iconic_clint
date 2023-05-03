import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { verifiedShopsAPI } from '../../Api/api';
import PrimaryLoading from '../LoadingSpin/PrimaryLoading';
import PrimaryButton from '../share/Buttons/PrimaryButton';
import ShopCard from '../share/Cart/ShopCard';

const ShopsSection = () => {
    const { data: shops = [], isLoading, isInitialLoading } = useQuery({
        queryKey: ['shops'],
        queryFn: () => verifiedShopsAPI(12)
    })
    return (
        <div className='container px-3 md:px-9 m-auto '>
            <div className="py-4">
                <div className="flex justify-between mb-4">
                    <p className=" font-bold text-2xl">Shops</p>
                    <PrimaryButton><Link to='/all/shops'>see more</Link></PrimaryButton>
                </div>
                {isInitialLoading || isLoading ?
                    <div className="flex justify-center items-center w-full h-[200px]">
                        <PrimaryLoading />
                    </div>
                    :
                    <ShopCard
                        shopsData={shops} />}
            </div>
        </div>
    );
};

export default ShopsSection;