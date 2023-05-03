import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByShopApi, getShopById } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import Card from '../../Components/share/Template/Card';

const ShopDetails = () => {
    const { id } = useParams()
    // console.log(id);
    const { data: shop = [], isLoading, isInitialLoading, refetch, isFetching: load } = useQuery({
        queryKey: ['shop' + id, id],
        queryFn: () => getShopById(id),
        enabled: !!id
    })
    const { data: products = [], isFetching, isLoading: productLoading } = useQuery({
        queryKey: ['products', id],
        queryFn: () => getProductsByShopApi(id),
    })


    if (isLoading || isInitialLoading) {
        return <div className="flex justify-center items-center w-full h-[600px]">
            <PrimaryLoading />
        </div>
    }
    refetch()
    return (
        <BodyTemplate >
            <div className="flex gap-4 p-4 bg-white rounded shadow">
                <div className="">
                    <div className="">
                        <img src={shop?.photoUrl} height="120px" width="120px" alt="" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className='text-xl'>{shop?.name}
                    </p>
                    <p className='text-gray-600'>{shop?.location}</p>
                </div>
            </div>
            <br />
            <div className="mb-4 font-bold text-2xl ">Products</div>
            {isFetching || productLoading || isLoading ?
                <div className="flex justify-center items-center w-full ">
                    <PrimaryLoading />
                </div>
                : <>
                    {products.length ?
                        <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  '>
                            {products?.map((product, i) =>
                                <Card
                                    product={product}
                                />
                            )
                            }
                        </ul>
                        :
                        <div className="text-center text-gray-600 h-28">No Products added</div>
                    }
                </>}

        </BodyTemplate>

    );
};

export default ShopDetails;