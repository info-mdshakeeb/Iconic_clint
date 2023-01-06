import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import AddShop from '../../Components/SalarsComponent/AddShop';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../../Context/UserContext';


const RequestForSeller = () => {
    const { user } = useFirebaseInfo()
    const [loadingM, setLoadingM] = useState(false);
    const { data: shops = [], refetch } = useQuery({
        queryKey: ['shops'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2100/shops?email=${user?.email}`)
            const data = await res.json()
            return data.data
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
    console.log(shops);
    return (
        <BodyTemplate>
            <div className="max-w-2xl mx-auto mb-5">
                <div className=" flex gap-4 p-4 bg-white rounded shadow items-center justify-between">
                    <p className='mb-4 font-bold text-xl'>Add Shops</p>
                    <div className="">
                        <SecondaryButton>
                            <label className='cursor-pointer' htmlFor="AddShop">Add Shop</label>
                        </SecondaryButton>
                    </div>
                </div>
            </div>
            {shops?.map(shop =>
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
                </div>
            )}
            <AddShop
                refetch={refetch}
            ></AddShop>
        </BodyTemplate>
    );
};

export default RequestForSeller;