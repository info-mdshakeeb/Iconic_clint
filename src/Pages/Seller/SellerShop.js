import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import AddShopModal from '../../Components/Modal/AddShopModal';
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

    if (loadingM) return <div className="flex justify-center items-center w-full h-[60vh]">
        <PrimaryLoading />
    </div>
    // console.log(shops);
    return (
        <BodyTemplate>
            <div className="max-w-2xl mx-auto mb-5">
                <div className=" flex gap-4 p-4 bg-white rounded shadow items-center justify-between">
                    <p className='mb-4 font-bold text-xl'>Add Shop</p>
                    <div className="">
                        <SecondaryButton>
                            <label className='cursor-pointer' htmlFor="AddShop">Add Shop</label>
                        </SecondaryButton>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl mx-auto my-4">
                <p className='mb-4 font-bold text-xl'>Your Shops</p>

                {shops?.map(shop =>
                    <div className="my-4">
                        <div className=" flex gap-4 p-4 bg-white rounded shadow">
                            <div className="">
                                <div className="">
                                    <img src={shop?.photoUrl} height="120px" width="120px" alt="" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className='text-xl'>{shop?.name} </p>
                                <p className='text-gray-600'>{shop?.location}</p>
                                <div className="py-3">status:</div>
                            </div>
                        </div>
                        <SecondaryButton>
                            request Admin For verify
                        </SecondaryButton>
                    </div>)}
            </div>
            <AddShopModal
                refetch={refetch}
            />
        </BodyTemplate>
    );
};

export default RequestForSeller;