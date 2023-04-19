import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { pendingShops } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import AlartMessage from '../../Hooks/AlartMessage';

const PendingShop = () => {
    const { successMessage } = AlartMessage();

    const { data: shopsPending = [], refetch, isLoading, isInitialLoading } = useQuery({
        queryKey: ['shopsPending'],
        queryFn: () => pendingShops(),
    })
    const handelShopUpdate = (id) => {
        const update = { status: "verified" }
        fetch(`https://iconic-server-v2.vercel.app/api/v2/shops/update/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                successMessage('SuccessFull')
                refetch()
            })
    }
    if (isLoading || isInitialLoading)
        return <div className="flex justify-center items-center w-full h-[60vh]">
            <PrimaryLoading />
        </div>
    return (
        <BodyTemplate>

            <div className='min-h-[80vh] overflow-y-hidden '>
                {shopsPending.length > 0 ? <div className=''>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white  xl:min-h-[87vh] overflow-scroll '>
                        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer text-xl font-[500]'>
                            <span>Shop Details</span>
                            <span className='hidden md:grid'>Owner Mail</span>
                            <span className='hidden md:grid'>Owner Name</span>
                            <span className='sm:text-left text-left'>Action</span>
                        </div>
                        <ul>
                            {shopsPending?.map(shop =>
                                <li key={shop?.id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
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
                                        {shop?.ownerName}
                                    </span>
                                    <div className='flex  items-center justify-between'>
                                        <div className="btn-group btn-xs text-white">
                                            <button
                                                onClick={() => { handelShopUpdate(shop?._id) }}
                                                className="btn btn-warning btn-xs">Verify</button>
                                            <button className="btn btn-xs btn-warning"
                                                onClick={() => successMessage("working on it")}
                                            >Delete</button>
                                        </div>
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>

                            )}
                        </ul>
                    </div>
                </div> :
                    <div className='flex justify-center items-center w-full h-[69vh] text-5xl'>
                        No pending Shops (;
                    </div>}
            </div>
        </BodyTemplate>
    );
};

export default PendingShop;