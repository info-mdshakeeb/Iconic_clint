import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShopByCategory } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import ShopCard from '../../Components/share/Cart/ShopCard';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';

const Catagory = () => {

    const [searchData, setSearchData] = useState([]);
    const { id } = useParams();
    const { data: catagories = [], isLoading, isFetching, isInitialLoading } = useQuery({
        queryKey: ['catagories'],
        queryFn: () => getShopByCategory(id),
        enabled: !!id
    })


    return (
        <TemplateCPS
            type={'Category'}
            value={"Category"}
            data={catagories}
            setSearchData={setSearchData}
        >
            {isInitialLoading || isFetching || isLoading ?
                <div className="flex justify-center items-center w-full h-[200px]">
                    <PrimaryLoading />
                </div>
                : <ShopCard
                    shopsData={searchData} />}
        </TemplateCPS>
    );
};

export default Catagory;