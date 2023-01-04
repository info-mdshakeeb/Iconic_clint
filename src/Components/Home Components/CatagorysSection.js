import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import PrimaryLoading from '../LoadingSpin/PrimaryLoading';

const CatagorysSection = () => {
    const url = `http://localhost:2100/catagories`;
    const { data: Catagorys = [], isLoading, refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data.data
        }
    })
    if (isLoading) return <div className="flex justify-center items-center w-full h-[200px]">
        <PrimaryLoading />
    </div>
    refetch()
    return (
        <div className="container px-3 md:px-9 m-auto mb-5 ">
            <div className="grid grid-cols-5 md:grid-cols-5 gap-1 lg:gap-4  group">
                {Catagorys?.map((catagory, i) =>
                    <Link to={`/shops/catagory/${i}`} key={i}>
                        <div className="cursor-pointer group-hover:blur-sm  
              hover:!blur-none group-hover:scale-[0.92] hover:!scale-100  duration-300" key={i}>
                            <LazyLoadImage
                                className=''
                                alt={catagory.PhotoUrl}
                                src={catagory.PhotoUrl}
                                effect="blur"
                                placeholderSrc={catagory.PhotoUrl}
                            />
                            {/* <img src={catagory.PhotoUrl} height="300px" alt="" /> */}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CatagorysSection;