import React from 'react';
import { Link } from 'react-router-dom';

const ShopCard = ({ shopsData }) => {

    return (
        <ul className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6  '>
            {shopsData?.map((data, i) =>
                <Link to={`/shops/${i}`} key={i}>
                    <div className="inline-flex flex-col items-center justify-center w-full h-full bg-white rounded-md shadow-sm hover:scale-[0.91] duration-200  " >
                        <a href="/" className='p-4' >
                            <div className="h-[135px] " >
                                <img className=' max-h-32 w-32 mx-auto'
                                    src={data.brandImg} alt="" />
                            </div>
                            <div className="h-[50px] w-full ">
                                <p className='lg:font-medium text-center hover:underline'>{data?.brandName.length > 30 ? data?.brandName.slice(0, 20) + '...' : data?.brandName}</p>
                            </div>
                        </a>
                    </div>
                </Link>
            )}
        </ul>
    );
};

export default ShopCard;


