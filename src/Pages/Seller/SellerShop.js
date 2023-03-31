import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import AddShopModal from '../../Components/Modal/AddShopModal';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../../Context/UserContext';
import AlartMessage from '../../Hooks/AlartMessage';


const RequestForSeller = () => {
    const { user } = useFirebaseInfo();
    const { successMessage } = AlartMessage();
    const [shopModal, setShopeModal] = useState(false);

    const { data: shops = [], refetch, isLoading } = useQuery({
        queryKey: ['shops'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3210/api/v2/shops/${user?.email}`)
            const data = await res.json()
            return data.data
        },
        enabled: !!user?.email
    })

    const requestValidation = (id) => {
        const update = { status: "pending" }
        fetch(`http://localhost:3210/api/v2/shops/update/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                successMessage('Request Sand')
                refetch()
            })
    }

    if (isLoading)
        return
    <div className="flex justify-center items-center w-full h-[60vh]"> <PrimaryLoading />
    </div>
    return (
        <BodyTemplate>
            <div className="w-full mx-auto mb-5 ">
                <div className=" flex gap-4 p-4 bg-white rounded shadow items-center justify-between">
                    <p className='mb-4 font-bold text-xl'>Add Shop</p>
                    <div className="">
                        <SecondaryButton>
                            <label
                                onClick={() => setShopeModal(true)}
                                className='cursor-pointer' htmlFor="AddShop">Add Shop</label>
                        </SecondaryButton>
                    </div>
                </div>
            </div>
            <div className="mx-auto my-4 w-full">
                <p className='mb-4 font-bold text-xl'>Your Shop</p>
                <div className="">
                    {shops?.map(shop =>
                        <div className="my-4" key={shop?._id}>
                            <div className="flex gap-6  p-4 bg-white rounded shadow items-center " >
                                <div className="">
                                    <div className="">
                                        <img src={shop?.photoUrl} height="220px" width="220px" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className='text-xl'>{shop?.name} </p>
                                    <p className='text-gray-600 h-20 overflow-scroll'>{shop?.location}</p>
                                    <p>status: {shop?.status}</p>
                                    <p>category:{shop?.category}</p>
                                    <div className=" w-80">
                                        {shop?.status === ('pending' || 'verified') ? "" :
                                            <button onClick={() => requestValidation(shop?._id)}>
                                                <SecondaryButton>
                                                    <p>request  For verify</p>
                                                </SecondaryButton>
                                            </button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div >
            {shopModal &&
                <AddShopModal
                    refetch={refetch}
                    setShopeModal={setShopeModal}
                />}
        </BodyTemplate >
    );
};

export default RequestForSeller;