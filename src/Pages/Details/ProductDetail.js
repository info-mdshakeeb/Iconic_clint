import React from 'react';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';

const ProductDetail = () => {
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
                            <dl className="flex gap-4 mb-1">
                                <dt className="flex-1 max-w-[200px] font-semibold text-gray-600">Brand :</dt>
                                <dd className="flex-1 text-gray-500">Shakeeb</dd>
                            </dl>
                        </div>
                    </div>

                </div>
            </div>
            <div className="my-6">
                <p className='mb-3 text-base text-semibold'>Buy Form</p>
            </div>
            <div className="flex gap-4 pb-1 overflow-x-auto flex-nowrap hide-scrollbar lg:grid lg:grid-cols-4">
                <div className="p-4 bg-white shadow min-w-[300px] lg:min-w-full">
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
                <p className=''>Description</p>
                <p className='text-gray-600'>
                    Operating System: realme UI 3.0 | Based on Android 12
                    Processor: MediaTek Dimensity 920 5G Processor
                    CPU: Octa-core, 6nm, up to 2.5GHz
                    GPU: Arm Mali-G68 MC4
                    RAM: Up to 13GB (8GB+5GB) Dynamic RAM
                    ROM: 128GB UFS 2.2
                    Network: 2G/3G/4G/5G
                    Sim Slot: 2 Nano Card Slots
                    Rear Camera: 50MP+2MP+8MP
                    Rear Camera Mechanism: Sony IMX766 Sensor, F/1.8 Aperture, OIS (Primary Camera) | f/2.4 aperture, EIS, 88.8° FOV (Macro Lens) | f/2.2, 5P Lens, EIS, 119° FOV (Ultra Wide-angle Lens)
                    Front Camera: 16MP In-display Selfie | Aperture: F2.4 | FOV: 78°
                    Display Size: 6.4" | 90Hz Super AMOLED Display | Touch sampling rate: 360Hz
                    Display Resolution: 2400x1080 FHD+
                    Battery: 4500mAh | 60W SuperDart Charge | Includes a 10V/6.5A Charging Adaptor
                    Connectivity: Wi-Fi 2.4/5GHz (IEEE802.11 a/b/g/n/ac/ax) | Bluetooth 5.2 | GPS
                    Buttons & Ports: USB Type-C | 3.5 mm Earphone Port | Dual Speakers | Dual Microphones | Volume up / down
                    Sensors: Magnetic induction sensor | Light sensor | Proximity Sensor | Acceleration sensor | in-display fingerprint sensor with heart rate monitor
                </p>
            </div>
            <div className=""></div>
        </BodyTemplate>
    );
};

export default ProductDetail;