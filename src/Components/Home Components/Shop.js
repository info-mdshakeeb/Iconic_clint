import React from 'react';

const Shop = () => {
    const datas = [
        {
            banadName: 'Mens World for COD',
            brandLocation: {
                road: '68',
                city: 'Palton',
                district: 'Dhaka'
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/63ba8216-b475-4cc9-a5db-89bb12127ed6'

        },
        {
            banadName: 'Samsung Smart Plaza Bashundhara City For PNP',
            brandLocation: {
                road: '',
                city: '',
                district: 'dhaka'
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/d6f8dbe8-c79c-4160-a99e-4c9fb8758a61'

        }, {
            banadName: 'One Plus Official For CBD',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/44d44b1d-f302-45b0-9af7-78f3b146d1e2'

        }, {
            banadName: 'Nabil Enterprise For CBD',
            brandLocation: {
                road: '',
                city: '',
                district: ''
            },
            brandImg: 'https://media.e-valy.com/cms/brands/logo/7deaf19b-28e2-409c-a5a4-e1bf2f2e7283'

        },
        {
            banadName: 'Jamuna Electronics For COD',
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

        <>
            {datas.map((data, i) =>
                <div className="inline-flex flex-col items-center justify-center w-full h-full bg-white rounded-md shadow-sm  " key={i}>

                    <a href="/" className='p-4' >
                        <div className="h-[135px] " >
                            <img className=' max-h-32 w-32 mx-auto'
                                src={data.brandImg} alt="" />
                        </div>
                        <div className="h-[50px] w-full ">
                            <p className='font-medium text-center  hover:underline'>{data?.banadName.length > 30 ? data?.banadName.slice(0, 30) + '...' : data?.banadName}</p>
                        </div>
                    </a>

                </div>
            )}
        </>

    );
};

export default Shop;


