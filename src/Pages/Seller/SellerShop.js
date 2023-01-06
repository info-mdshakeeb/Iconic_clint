import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import AddShop from '../../Components/SalarsComponent/AddShop';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../../Context/UserContext';


const RequestForSeller = () => {
    const { user } = useFirebaseInfo()
    const [loadingM, setLoadingM] = useState(false);
    const { data: shop = [], refetch } = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2100/shops?email=${user?.email}`)
            const data = await res.json()
            return data.data[0]
        }
    })
    useEffect(() => {
        setLoadingM(true)
        setTimeout(() => {
            setLoadingM(false)
        }, 400)
    }, [])

    if (loadingM) return <div className="flex justify-center items-center w-full h-[200px]">
        <PrimaryLoading />
    </div>

    return (
        <BodyTemplate>
            {shop?._id &&
                <div className="max-w-2xl mx-auto">
                    <p className='mb-4 font-bold text-xl'>Your Shop</p>
                    <div className=" flex gap-4 p-4 bg-white rounded shadow">
                        <div className="">
                            <div className="">
                                <img src={shop?.photoUrl} height="120px" width="120px" alt="" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className='text-xl'>{shop?.name}
                            </p>
                            <p className='text-gray-600'>{shop?.location}</p>
                        </div>
                    </div>
                </div>}

            <div className="w-full">
                <div className="max-w-2xl m-auto mt-4">
                    <p className='mb-4 font-bold text-xl'>Add A Shop</p>
                    <label htmlFor="AddShop" className="btn">open modal</label>
                </div>
            </div>
            <AddShop></AddShop>
        </BodyTemplate>
    );
};

export default RequestForSeller;