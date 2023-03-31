import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCatagories } from '../../Api/api.js';

import { Link } from 'react-router-dom';
import PrimaryLoading from '../LoadingSpin/PrimaryLoading';

const CatagoriesSection = () => {

    const { data: catagories = [], isLoading, refetch } = useQuery({
        queryKey: ['catagories'],
        queryFn: getCatagories,
    })

    if (isLoading) return <div className="flex justify-center items-center w-full h-[200px]">
        <PrimaryLoading />
    </div>

    refetch()
    return (
        <div className="container px-3 md:px-9 m-auto mb-5 ">
            <div className="grid grid-cols-5 md:grid-cols-5 gap-1 lg:gap-4  group">
                {catagories?.map((data, i) =>
                    <Link to={`/shops/catagory/${i}`} key={i}>
                        <div className="cursor-pointer group-hover:blur-sm  
              hover:!blur-none group-hover:scale-[0.92] hover:!scale-100  duration-300" key={i}>
                            <img src={data.PhotoUrl} height="300px" alt="" />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CatagoriesSection;