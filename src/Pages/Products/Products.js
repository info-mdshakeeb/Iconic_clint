import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { getProductsApi } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import ProductCard from '../../Components/share/Cart/ProductCard';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';
import { usePagination } from '../../Context/Pagination/Pagination';

const ProductsAll = () => {
    const { searchData, setData, setProducts, searchLoading } = usePagination()

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
        >
            {isInitialLoading || isFetching || isLoading || searchLoading ?
                <BodyTemplate>
                    <div className="flex justify-center items-center ">
                        <PrimaryLoading />
                    </div>
                </BodyTemplate> :
                <ProductCard
                    products={searchData}
                />}
        </TemplateCPS>
    );
};

export default ProductsAll;