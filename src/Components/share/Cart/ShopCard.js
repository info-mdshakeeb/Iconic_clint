import React from 'react';

const Shop = ({ datas }) => {

    return (
        <ul className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6  '>
            {datas?.map((data, i) =>
                <div className="inline-flex flex-col items-center justify-center w-full h-full bg-white rounded-md shadow-sm hover:scale-[1.08] duration-200  " key={i}>

                    <a href="/" className='p-4' >
                        <div className="h-[135px] " >
                            <img className=' max-h-32 w-32 mx-auto'
                                src={data.brandImg} alt="" />
                        </div>
                        <div className="h-[50px] w-full ">
                            <p className='lg:font-medium text-center hover:underline'>{data?.banadName.length > 30 ? data?.banadName.slice(0, 20) + '...' : data?.banadName}</p>
                        </div>
                    </a>

                </div>
            )}
        </ul>



    );
};

export default Shop;


