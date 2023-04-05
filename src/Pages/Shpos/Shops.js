import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { verifiedShopsAPI } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import ShopCard from '../../Components/share/Cart/ShopCard';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';
const ShopsAll = () => {

    const { data: shops = [], isInitialLoading, isFetching, isLoading, refetch } = useQuery({
        queryKey: ['shops'],
        queryFn: () => verifiedShopsAPI()

    })
    // console.log(allShops);

    return (
        <TemplateCPS
            type={'Shops'}
            py={8}
        >
            {isInitialLoading || isFetching || isLoading ?
                <div className="flex justify-center items-center w-full h-[600px]">
                    <PrimaryLoading />
                </div> :
                <ShopCard
                    shopsData={shops}
                    refetch={refetch}
                />}
        </TemplateCPS>
    );
};

export default ShopsAll;