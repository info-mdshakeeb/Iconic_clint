import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { getProductsApi } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import ProductCard from '../../Components/share/Cart/ProductCard';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';
import { usePagination } from '../../Context/Pagination/Pagination';

const ProductsAll = () => {
    const { searchData, setData, setSearch, setProducts } = usePagination()

    const { data: products = [], isFetching, isLoading, isInitialLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProductsApi()
    })
    useEffect(() => {
        setProducts(true)
        setData(products)
    }, [setData, setProducts, products])



    // console.log(products);
    return (
        <TemplateCPS
            type={'Products'}
            value={"Products"}
            setSearch={setSearch}
        >
            {isInitialLoading || isFetching || isLoading ?
                <div className="flex justify-center items-center w-full h-[600px]">
                    <PrimaryLoading />
                </div> :
                <ProductCard
                    products={searchData}
                />}
        </TemplateCPS>
    );
};

export default ProductsAll;