import React, { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import BodyTemplate from './BodyTemplate';
const ShopsAndProduct = ({ type, children, value, data, setSearchData, products }) => {

    const [search, setSearch] = useState("");
    useEffect(() => {
        if (search?.length > 0 && products === true) {
            const filterResult = data.filter(u => u?.Names?.toLowerCase().includes(search?.toLowerCase()))
            setSearchData(filterResult)
        } else if (search?.length > 0 && !products) {
            const filterResult = data.filter(u => u?.name?.toLowerCase().includes(search?.toLowerCase()))
            setSearchData(filterResult)
        }


        else {
            setSearchData(data)
        }
    }, [search, data])


    return (
        <BodyTemplate >
            <div className="flex flex-col mb-8 md:items-center md:justify-between md:flex-row">
                <p className='font-medium text-2xl py-4 md:py-0'>{type}</p>
                <div className="flex border">
                    {setSearch ?
                        <input className={` block p-2 outline-none bg-white-100 md:w-[250px] w-full `} type="text"

                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={`Search ${value}`} /> :
                        <input className={` block p-2 outline-none bg-white-100 md:w-[250px] w-full `} type="text"
                            disabled
                            placeholder={`In process `} />
                    }
                    <div className="flex items-center px-5 text-white bg-black py-4 md:py-0"><ImSearch /></div>
                </div>
            </div>
            {children}
        </BodyTemplate>
    );
};

export default ShopsAndProduct;