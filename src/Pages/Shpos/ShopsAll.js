import React from 'react';
import { ImSearch } from 'react-icons/im';
import ShopCard from '../../Components/share/Cart/ShopCard';

const ShopsAll = () => {
    const datas = [
        {
            banadName: 'Mens World',
            brandLocation: {
                road: '68',
                city: 'Palton',
                district: 'Dhaka'
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/63ba8216-b475-4cc9-a5db-89bb12127ed6'

        },
        {
            banadName: 'Samsung Smart Plaza Bashundhara City',
            brandLocation: {
                road: '',
                city: '',
                district: 'dhaka'
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/d6f8dbe8-c79c-4160-a99e-4c9fb8758a61'

        }, {
            banadName: 'One Plus Official',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/44d44b1d-f302-45b0-9af7-78f3b146d1e2'

        }, {
            banadName: 'Nabil Enterprise',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/7deaf19b-28e2-409c-a5a4-e1bf2f2e7283'

        },
        {
            banadName: 'Jamuna Electronics ',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/bbe2d1fa-0bbb-4080-83d4-4f96cc5dec5d'

        },
        {
            banadName: 'Oppo Official Store For PNP',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/40d5bd39-62be-4cb7-8441-bd4dbea9679e'

        }

    ]
    return (
        <div className='bg-slate-100'>
            <div className=" h-full min-h-[calc(100vh_-_400px)] container px-3 md:px-9 mx-auto">
                <div className="py-4">
                    <div className="flex flex-col mb-4 md:items-center md:justify-between md:flex-row">
                        <p className='font-medium  text-2xl'>Shops</p>
                        <div className="flex border">
                            <input className='block p-2 outline-none bg-white-100 md:w-[250px] w-full' type="text" />
                            <div className="flex items-center px-5 text-white bg-black"><ImSearch /></div>
                        </div>
                    </div>
                    <ShopCard
                        datas={datas} />
                </div>
            </div>

        </div>
    );
};

export default ShopsAll;