import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { getAdvertisementShopsApi } from '../../Api/api';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';

const ShopAD = () => {
    const { data: adShops = [], refetch } = useQuery({
        queryKey: ['adShops'],
        queryFn: () => getAdvertisementShopsApi(),
    })

    const requestValidation = (id, type) => {
        if (type === 'acceded') {
            const update = { Advertisement: "acceded" }
            updateShop(id, update)
            return;
        }
        else if (type === 'rejected') {
            const update = { Advertisement: false }
            updateShop(id, update)
            return;
        }
    }
    const updateShop = (id, update) => {
        fetch(`http://localhost:3210/api/v2/shops/update/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success("success")
            })
    }

    return (
        <BodyTemplate>
            <div className='w-full m-auto p-4 border rounded-lg bg-white xl:min-h-[87vh] overflow-scroll  '>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer text-xl font-[500]'>
                    <span>Shop Details</span>
                    <span className='hidden md:grid'>Owner Mail</span>
                    <span className='hidden md:grid'>Owner Name</span>
                    <span className='sm:text-left text-left'>Action</span>
                </div>
                <ul>
                    {adShops?.map(shop =>
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
                                        onClick={() => requestValidation(shop?._id, "acceded")}
                                        className="btn btn-warning btn-xs">Verify</button>
                                    <button
                                        onClick={() => requestValidation(shop?._id, "rejected")}
                                        className="btn btn-xs btn-warning"
                                    >Delete</button>
                                </div>
                                <BsThreeDotsVertical />
                            </div>
                        </li>

                    )}
                </ul>
            </div>
        </BodyTemplate>
    );
};

export default ShopAD;