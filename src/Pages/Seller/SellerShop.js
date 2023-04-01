import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
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
    const [shops, setShops] = useState([]);

    const { data = [], refetch, isLoading } = useQuery({
        queryKey: ['shops'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3210/api/v2/shops/${user?.email}`)
            const data = await res.json()
            setShops(data.data)
            return data.data
        },

    })
    console.log('shops', shops);

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
            <div className='min-h-[80vh] overflow-y-hidden'>
                <div className=''>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white  '>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer text-xl font-[500]'>
                            <span>Shop Details</span>
                            <span className='hidden md:grid'>Your Mail</span>
                            <span className='hidden md:grid'>status</span>
                            <span className='sm:text-left text-left'>Action</span>
                        </div>
                        <ul>
                            {shops.map(shop =>
                                <li key={shop.id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                    <div className="flex items-center space-x-2">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-8 h-8">
                                                <img src={shop?.photoUrl} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{shop?.name}
                                            </div>
                                            <div className="text-sm opacity-50">Date : {shop?.shopCreated?.slice(0, 10)}</div>
                                        </div>
                                    </div>
                                    <p className='hidden md:flex'> {shop?.ownerEmail}</p>

                                    <span className='hidden md:flex'>
                                        {shop?.status}
                                    </span>

                                    <div className='flex  items-center justify-between'>
                                        <div className=" ">
                                            {shop?.status === ('pending' || 'verified') ? "request sent" :
                                                <button onClick={() => requestValidation(shop?._id)}>
                                                    <SecondaryButton>
                                                        <p>request  For verify</p>
                                                    </SecondaryButton>
                                                </button>}
                                        </div>
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>

                            )
                            }
                        </ul>
                    </div>
                </div>

            </div>
            {/* <div className="mx-auto my-4 w-full">
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
            </div > */}
            {shopModal &&
                <AddShopModal
                    refetch={refetch}
                    setShopeModal={setShopeModal}
                />}
        </BodyTemplate >
    );
};

export default RequestForSeller;