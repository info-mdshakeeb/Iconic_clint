import React from 'react';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';

const ProductDetail = () => {

    const productDescription = [
        { name: "Network", data: "2G, 3G, 4G" },
        { name: "Display", data: "6.7 inches" },
        { name: "Resolution", data: "Full HD+ 1080 x 2400 pixels" },
        { name: "Front Camera Resolution", data: "16 Megapixel" },
        { name: "Rear Camera Resolution", data: "48 Megapixel + 8 Megapixel + 2 Megapixel + 2 Megapixel" },
        { name: "Battery Type and Capacity", data: "Lithium-polymer 5000 mAh (non-removable)" },
        { name: "Operating System", data: "Android 11 (XOS 10.6)" },
        { name: "RAM", data: "6 GB" },
        { name: "Processor", data: "Octa-core, up to 2.0 GHz" },
        { name: "ROM", data: "128 GB" },
    ]

    return (
        <BodyTemplate>
            <div className="p-4 my-6 bg-white shadow">
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-shrink-0 flex-1">
                        <div className="md:max-w-[500px] lg:max-w-[600px] ">
                            <figure className=''>
                                <div className="">
                                    <img src="https://prodpublicbucket.blob.core.windows.net/cms/products/images/cf230154-25a8-4d90-8f7e-48a9c2c15d1f" alt="" />
                                </div>
                            </figure>
                            <div className="mt-2">
                                <ul className="flex gap-2 overflow-x-auto flex-nowrap hide-scrollbar">
                                    <li className='cursor-pointer hover:border-gray-600 transition-colors duration-300 border-2 flex-shrink-0 '>
                                        <div className="">
                                            <img src="https://media.e-valy.com/cms/products/images/7a848abe-821d-4ed9-8aff-a4809c247783" alt="" height="50px" width="50px" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className='font-bold text-xl md:mt-8'>Realme 9 Pro+ RAM 8GB ROM 128GB Smartphone</p>
                        <p className='mb-6 text-gray-600'>
                            <strong>Category: Comming Soon</strong>
                            <span className='mx-2'>||</span>
                            <strong>Brand:Phone</strong>
                        </p>
                        <p className='mb-2 text-base font-semibold'>
                            Specification:
                        </p>
                        <div className="">
                            {productDescription.map(details =>
                                <dl className="flex gap-4 mb-1">
                                    <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">{details.name}</dt>
                                    <dd className="flex-1 text-gray-500">{details.data}</dd>

                                </dl>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-6">
                <p className='mb-3 text-base text-semibold'>Buy Form</p>
            </div>
            <div className="flex gap-4 pb-1 overflow-x-auto flex-nowrap hide-scrollbar lg:grid lg:grid-cols-2">
                <div className="p-4 bg-white shadow w-full md:max-w-[400px] min-w-[300px]">
                    <div className="flex gap-2 mb-2">
                        <div className="">
                            <a href="/" className="">
                                <div className="">
                                    <img src="https://media.e-valy.com/cms/brands/logo/7deaf19b-28e2-409c-a5a4-e1bf2f2e7283" alt="" height="50px" width="50px" />
                                </div>
                            </a>
                        </div>
                        <div className="">
                            <a href="/" className="">
                                <p className="text-base font-medium hover:text-gray-600">
                                    Nabil Enterprise For CBD
                                </p>
                                <p><span className="px-2 py-0.5 text-xs bg-gray-200 rounded">CBD</span></p>
                            </a>
                        </div>
                    </div>
                    <p className='flex items-center gap-2 mb-1'>
                        <span className="">Q</span>
                        <span className="flex-1">Gha-100/A Middle Badda, Dhaka, Dhaka, Dhaka</span>
                    </p>
                    <hr />
                    <div className="my-4">
                        <div className="flex items-end gap-2">
                            <p className="text-sm text-gray-600 line-through">100000 ৳</p>
                            <p className="text-base font-semibold text-blue-500">10000 ৳</p>
                            <div className=""></div>
                        </div>
                        <button className="mt-3 btn btn-sm type-info    ">
                            Add to card
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-4 my-6 bg-white shadow">
                <p className=''>Description :</p>
                <p className='text-gray-600'>
                    {productDescription.map(details => <>
                        <p className='inline'>{details.name} {" "} {details.data}</p>
                        <p className='inline'></p>
                    </>)}
                </p>
            </div>
            <div className=""></div>
        </BodyTemplate>
    );
};

export default ProductDetail;