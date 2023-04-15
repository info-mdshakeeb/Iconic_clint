import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShopByCategory } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import ShopCard from '../../Components/share/Cart/ShopCard';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';
import { usePagination } from '../../Context/Pagination/Pagination';

const Category = () => {

    const { searchData, setData, setProducts, searchLoading } = usePagination()
    const { id } = useParams();
    const { data: catagories = [], isLoading, isFetching, isInitialLoading } = useQuery({
        queryKey: ['catagories'],
        queryFn: () => getShopByCategory(id),
        enabled: !!id
    })
    useEffect(() => {
        setProducts(false)
        setData(catagories)
    }, [catagories, isLoading, setData, setProducts])

    return (
        <TemplateCPS
            type={'Category'}
            value={"Category"}
        >
            {isInitialLoading || isFetching || isLoading || searchLoading ?
                <div className="flex justify-center items-center w-full h-[200px]">
                    <PrimaryLoading />
                </div>
                : <ShopCard
                    shopsData={searchData} />}
        </TemplateCPS>
    );
};

export default Category;