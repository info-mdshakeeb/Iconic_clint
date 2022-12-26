import React from 'react';

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
            name: 'FnF',
            PhotoUrl: "https://media.e-valy.com/cms/brands/logo/7469b60b-c4f8-4b28-a0b9-796a4be25fdc"
        },
        {
            name: 'Pnp',
            PhotoUrl: "https://media.e-valy.com/cms/brands/logo/04ee8988-486c-4466-8de6-b18b2c102567"
        },
    ]

    return (
        <div className="container px-9 m-auto mb-5 ">
            <div className="grid grid-cols-4 gap-2 md:gap-4  group">
                {Catagorys.map((catagory, i) =>
                    <div className="cursor-pointer group-hover:blur-sm  
              hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  duration-300" key={i}>
                        <img src={catagory.PhotoUrl} height="300px" alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Catagorys;