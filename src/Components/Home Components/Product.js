import React from 'react';

const Product = () => {
    const products = [
        {
            name: 'Microwear W26+ Pro Smartwatch - Black',
            ingUrl: 'https://media.e-valy.com/cms/products/images/82c396a6-cf45-43cb-8fe4-09073e0567a0',
            price: '2000',
            dropPrice: '1800'
        },
        {
            name: 'CURREN 8106 Stainless Steel Analog Watch For Men - White and Black',
            ingUrl: 'https://media.e-valy.com/cms/products/images/318f4000-94fd-409b-b845-f9c52f6acfaa',
            price: '3200',
            dropPrice: '2900'
        },
        {
            name: 'Lenovo Lp40 Tws Wireless Bluetooth Earbuds - Black',
            ingUrl: 'https://media.e-valy.com/cms/products/images/681fa11a-7f58-46c3-a441-52a8ff85dbf5',
            price: '1100',
            dropPrice: '800'
        },
        {
            name: 'Awei T20 Budget TWS',
            ingUrl: 'https://media.e-valy.com/cms/products/images/5960d045-319f-4d97-9854-79f5d517214e',
            price: '1500',
            dropPrice: '1200'
        },
        {
            name: 'UiiSii U1 Wired In -Ear Heavy Bass Headphones',
            ingUrl: 'https://media.e-valy.com/cms/products/images/caab360b-e07b-4e1f-806b-5c8242413070',
            price: '300',
            dropPrice: '200'
        },
    ]
    return (
        <>
            {products.map((product, i) =>
                <div className="inline-flex flex-col items-center justify-center w-full h-full bg-white rounded-md shadow-sm  " key={i}>
                    <a href="/" className='p-4' >
                        <div className="h-[135px] " >
                            <img className=' max-h-32 w-32 mx-auto'
                                src={product?.ingUrl} alt="" />
                        </div>
                        <div className=" w-full ">
                            <p className='font-medium text-center  hover:underline'>
                                {product?.name.length > 50 ? product?.name.slice(0, 50) + '...' : product?.name}
                            </p>
                        </div>
                        <div className="flex items-end justify-center gap-2">
                            <div className="text-sm text-gray-600 line-through">
                                ৳ 100</div>
                            <div className="text-sm text-gray-600 ">
                                ৳ 80</div>
                        </div>
                    </a>

                </div>)}
        </>
    );
};

export default Product;