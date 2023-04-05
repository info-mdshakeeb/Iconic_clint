import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProductsApi } from '../../Api/api';
import ProductCard from '../../Components/share/Cart/ProductCard';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';

const ProductsAll = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProductsApi()
    })
    console.log(products);
    return (
        <TemplateCPS
            type={'Products'}
        >
            <ProductCard
                products={products}
            />
        </TemplateCPS>
    );
};

export default ProductsAll;