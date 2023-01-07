import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
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
    const [loadingM, setLoadingM] = useState(false);
    const { data: shops = [], refetch } = useQuery({
        queryKey: ['shops'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2100/shops?email=${user?.email}`)
            const data = await res.json()
            return data.data
        }
    })
    const requestValidation = (id) => {
        const update = { status: "Unauthorised" }
        fetch(`http://localhost:2100/shop/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    successMessage('Request Sand')
                }
                refetch()
            })
    }
    useEffect(() => {
        setLoadingM(true)
        setTimeout(() => {
            setLoadingM(false)
        }, 150)
    }, [])

    if (loadingM) return <div className="flex justify-center items-center w-full h-[60vh]">
        <PrimaryLoading />
    </div>
    console.log(shops);
    return (
        <BodyTemplate>
            <div className="w-full mx-auto mb-5">
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
                <p className='mb-4 font-bold text-xl'>Your Shops</p>
                <div className="grid  md:grid-cols-2 md:gap-3">
                    {shops?.map(shop =>
                        <div className="my-4" key={shop?._id}>
                            <div className="flex gap-6 p-4 bg-white rounded shadow items-center" >
                                <div className="h-36">
                                    <div className="">
                                        <img src={shop?.photoUrl} height="120px" width="120px" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className='text-xl'>{shop?.name} </p>
                                    <p className='text-gray-600 h-20 overflow-scroll'>{shop?.location}</p>
                                    <div className="py-3">status: {shop?.status}</div>
                                </div>
                            </div>
                            <SecondaryButton>
                                <p onClick={() => requestValidation(shop?._id)}>request Admin For verify</p>
                            </SecondaryButton>
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