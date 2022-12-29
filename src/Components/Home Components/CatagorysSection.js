import React from 'react';
import { Link } from 'react-router-dom';

const Catagorys = () => {
    const Catagorys = [
        {
            name: 'Cdb',
            PhotoUrl: "https://media.e-valy.com/cms/brands/logo/1aa5948f-690c-44cb-972b-62d399e50e33"
        },
        {
            name: 'Cod',
            PhotoUrl: "https://media.e-valy.com/cms/brands/logo/d4cfcd8b-12d8-4c84-89ac-75d2dba81066"
        },

        {
            name: 'Pnp',
            PhotoUrl: "https://media.e-valy.com/cms/brands/logo/04ee8988-486c-4466-8de6-b18b2c102567"
        },
        {
            name: 'FnF',
            PhotoUrl: "https://media.e-valy.com/cms/brands/logo/7469b60b-c4f8-4b28-a0b9-796a4be25fdc"
        },
        {
            name: 'Express',
            PhotoUrl: "https://media.e-valy.com/cms/brands/logo/255008bf-84c6-4b1a-9005-c5acb25f27c7"
        },

    ]
    return (
        <div className="container px-3 md:px-9 m-auto mb-5 ">
            <div className="grid grid-cols-5 md:grid-cols-5 gap-1 lg:gap-4  group">
                {Catagorys.map((catagory, i) =>
                    <Link to={`/shops/${i}`}>
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

export default Catagorys;