import React from 'react';

import { Link } from 'react-router-dom';
import { FatchData } from '../../Hooks/FatchData';
import PrimaryLoading from '../LoadingSpin/PrimaryLoading';

const CatagorysSection = () => {

    const { data, isLoading, refetch } = FatchData(`http://localhost:2100/catagories`)
    console.log(data);


    if (isLoading) return <div className="flex justify-center items-center w-full h-[200px]">
        <PrimaryLoading />
    </div>
    refetch()

    return (
        <div className="container px-3 md:px-9 m-auto mb-5 ">
            <div className="grid grid-cols-5 md:grid-cols-5 gap-1 lg:gap-4  group">
                {data?.map((catagory, i) =>
                    <Link to={`/shops/catagory/${i}`} key={i}>
                        <div className="cursor-pointer group-hover:blur-sm  
              hover:!blur-none group-hover:scale-[0.92] hover:!scale-100  duration-300" key={i}>
                            <img src={catagory.PhotoUrl} height="300px" alt="" />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CatagorysSection;