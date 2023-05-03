import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { getLimitProductsApi } from '../../Api/api';
import PrimaryButton from '../share/Buttons/PrimaryButton';
import Card from '../share/Template/Card';

const ProductsSection = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => getLimitProductsApi(20)
    })
    // console.log(products);

    return (
        <div className='container px-3 md:px-9 m-auto '>
            <div className="py-4">
                <div className="flex justify-between mb-4">
                    <p className="font-bold text-2xl">Products</p>
                    <PrimaryButton> <Link to='/all/products'>See more</Link></PrimaryButton>
                </div>

                <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  '>
                    {products?.map((product, i) =>
                        <Card
                            product={product}
                        />
                    )
                    }
                </ul>
            </div>

        </div>
    );
};

export default ProductsSection;