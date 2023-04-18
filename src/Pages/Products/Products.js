import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getProductsApi, getProductsScroll } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import ProductCard from '../../Components/share/Cart/ProductCard';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';
import { usePagination } from '../../Context/Pagination/Pagination';

const ProductsAll = () => {
    const { searchData, setData, setProducts, searchLoading } = usePagination()
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [scroll, setScroll] = useState(true)

    const { data: products = [], isFetching, isLoading, isInitialLoading } = useQuery({
        queryKey: ['products'],
        // queryFn: () => getProductsApi()
        queryFn: () => getProductsScroll(1, 20)
    })
    const { data: allProducts = [] } = useQuery({
        queryKey: ['allProducts'],
        queryFn: () => getProductsApi()
    })
    useEffect(() => {
        setProducts(true)
        setData(allProducts)
    }, [setData, setProducts, products, allProducts])

    useEffect(() => {
        async function fetchMoreData() {
            setLoading(true)
            const res = await getProductsScroll(page, 10)
            if (!res.length) {
                setScroll(false)
                setLoading(false)
            } else {
                setData(prev => [...prev, ...res])
                setLoading(false)
            }
        }
        window.onscroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && scroll) {
                setTimeout(() => {
                    setLoading(true)
                    setPage(prev => prev + 1)
                    fetchMoreData()
                }, 400)
            }
        }
    }, [page])

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
                <>
                    <ProductCard
                        products={searchData}
                    />
                    {loading && <div className="flex justify-center items-center mt-10">
                        <PrimaryLoading />
                    </div>}
                </>
            }
        </TemplateCPS>
    );
};

export default ProductsAll;