import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getShopByCategory } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import ShopCard from '../../Components/share/Cart/ShopCard';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';

const Catagory = () => {
    const { id } = useParams();
    const { data: catagories = [], isLoading, isFetching, isInitialLoading } = useQuery({
        queryKey: ['catagories'],
        queryFn: () => getShopByCategory(id),
        enabled: !!id
    })
    console.log(catagories);
    return (
        <TemplateCPS
            type={'Category'}

        >
            {isInitialLoading || isFetching || isLoading ?
                <div className="flex justify-center items-center w-full h-[200px]">
                    <PrimaryLoading />
                </div>


                : <ShopCard
                    shopsData={catagories} />}
        </TemplateCPS>
    );
};

export default Catagory;