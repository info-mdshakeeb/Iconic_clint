import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { usePagination } from '../../../Context/Pagination/Pagination';
import PrimaryLoading from '../../LoadingSpin/PrimaryLoading';
import BodyTemplate from '../Template/BodyTemplate';
import Card from '../Template/Card';
const ProductCard = ({ products }) => {
    const { hasMore, fetchData } = usePagination()

    return (
        <InfiniteScroll
            dataLength={products.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<div className="flex justify-center items-center mt-10"><PrimaryLoading /></div>}
        >
            {products.length > 0 ?
                <ul className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  '>
                    {products?.map((product, i) =>
                        <Card
                            product={product}
                        />
                    )
                    }
                </ul> :
                <BodyTemplate>
                    <div className="flex flex-col items-center justify-center">
                        <p className='text-2xl'> No Product Found</p>
                    </div>
                </BodyTemplate>

            }

        </InfiniteScroll>
    );
};

export default ProductCard;