import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { verifiedShopsAPI } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import ShopCard from '../../Components/share/Cart/ShopCard';
import TemplateCPS from '../../Components/share/Template/TemplateCPS';
import { usePagination } from '../../Context/Pagination/Pagination';
const ShopsAll = () => {
    const { searchData, setData, setProducts, searchLoading } = usePagination();


    const { data: verifyShops = [], isInitialLoading, isFetching, isLoading, refetch } = useQuery({
        queryKey: ['verifyShops'],
        queryFn: () => verifiedShopsAPI()

    })
    useEffect(() => {
        setProducts(false)
        setData(verifyShops)
    }, [verifyShops, isLoading, setData, setProducts])
    // console.log(allShops);
    return (
        <div  >
            <TemplateCPS
                type={'Shops'}
                value={"Shops"}

            >
                {isInitialLoading || isFetching || isLoading || searchLoading ?

                    <div className="flex justify-center items-center ">
                        <PrimaryLoading />
                    </div>
                    :
                    <div className=" " >
                        <ShopCard
                            shopsData={searchData}
                            refetch={refetch}
                        />
                    </div>
                }
            </TemplateCPS>
        </div>
    );
};

export default ShopsAll;