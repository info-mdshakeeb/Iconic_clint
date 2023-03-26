import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../share/Buttons/PrimaryButton';
import ShopCard from '../share/Cart/ShopCard';

const ShopsSection = () => {
    const data = [
        {
            brandName: 'Mens World',
            brandLocation: {
                road: '68',
                city: 'Palton',
                district: 'Dhaka'
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/63ba8216-b475-4cc9-a5db-89bb12127ed6'

        },
        {
            brandName: 'Samsung Smart Plaza Bashundhara City',
            brandLocation: {
                road: '',
                city: '',
                district: 'dhaka'
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/d6f8dbe8-c79c-4160-a99e-4c9fb8758a61'

        }, {
            brandName: 'One Plus Official',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/44d44b1d-f302-45b0-9af7-78f3b146d1e2'

        }, {
            brandName: 'Nabil Enterprise',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/7deaf19b-28e2-409c-a5a4-e1bf2f2e7283'

        },
        {
            brandName: 'Jamuna Electronics ',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/bbe2d1fa-0bbb-4080-83d4-4f96cc5dec5d'

        },
        {
            brandName: 'Oppo Official Store For PNP',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/40d5bd39-62be-4cb7-8441-bd4dbea9679e'

        }

    ]
    return (
        <div className='container px-3 md:px-9 m-auto '>
            <div className="py-4">
                <div className="flex justify-between mb-4">
                    <p className=" font-bold text-2xl">Shops</p>
                    <PrimaryButton><Link to='/shops'>see more</Link></PrimaryButton>
                </div>
                <ShopCard
                    shopsData={data} />
            </div>
        </div>
    );
};

export default ShopsSection;