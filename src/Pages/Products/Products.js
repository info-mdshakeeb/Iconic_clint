import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getProductsApi } from '../../Api/api';
import ProductCard from '../../Components/share/Cart/ProductCard';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';

const ProductsAll = () => {
    const [searchData, setSearchData] = useState([]);
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProductsApi()
    })

    // console.log(products);
    return (
        <TemplateCPS
            type={'Products'}
            value={"Products"}
            data={products}
            setSearchData={setSearchData}
            products={true}
        >
            <ProductCard
                products={searchData}
            />
        </TemplateCPS>
    );
};

export default ProductsAll;