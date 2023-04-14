import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { getCatagories, getUserShops } from '../../Api/api';
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
    const [shopsId, setShopsId] = useState(null);

    const { data: sellerShops = [], refetch, isLoading, isInitialLoading } = useQuery({
        queryKey: ['sellerShops'],
        queryFn: () => getUserShops(user?.email),
    })
    const { data: catagories = [] } = useQuery({
        queryKey: ['catagories'],
        queryFn: getCatagories,
        enabled: !!sellerShops
    })
    const requestValidation = (id, type) => {
        if (type === 'pending') {
            const update = { status: "pending" }
            updateShop(id, update)
        }
        else if (type === 'requested') {
            const update = { Advertisement: "requested" }
            updateShop(id, update)
        }
        else if (type === 'undo') {
            const update = { Advertisement: false }
            updateShop(id, update)
            return;
        }
        else {
            const update = { category: type }
            updateShop(id, update)
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
                console.log(data);
                successMessage('Request Sand')
                refetch()
            })
    }

    const handelCategory = (e) => {
        e.preventDefault()
        const form = e.target;
        const catagories = form.catagories.value;
        requestValidation(shopsId, catagories);
    }

    if (isLoading || isInitialLoading)
        return <div className="flex justify-center items-center w-full h-[60vh] overflow-hidden">
            <PrimaryLoading />
        </div>
    return (
        <BodyTemplate>
            <div className=" mx-auto mb-1 ">
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
            <div className=''>
                <div className=''>
                    <div className='w-full m-auto p-4 border rounded-lg bg-white h-[70vh] xl:h-[75vh] overflow-scroll  '>
                        <div className='my-3 p-2 grid xl:grid-cols-4 lg:grid-cols-3  grid-cols-2 items-center justify-between cursor-pointer text-xl font-[500]'>
                            <span>Shop Details</span>
                            <span className='hidden xl:grid'>Your Mail</span>
                            <span className='hidden lg:grid'>status & Type</span>
                            <span className='flex justify-center'>Action</span>
                        </div>
                        <ul>
                            {sellerShops.map(shop =>
                                <li key={shop.id}
                                    className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer gap-3'>
                                    <div className="flex items-center space-x-2">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-8 h-8">
                                                <img src={shop?.photoUrl} alt="Avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{shop?.name}
                                            </div>
                                            {shop?.status === 'pending' ? undefined : <div className="text-sm opacity-50">
                                                {shop?.Advertisement ?
                                                    <div className='flex gap-2'>
                                                        <p> {shop?.Advertisement}</p>
                                                        <button
                                                            onClick={() => requestValidation(shop?._id, "undo")}
                                                            className='btn btn-xs'> X</button>
                                                    </div>

                                                    : <button
                                                        onClick={() => requestValidation(shop?._id, "requested")}
                                                        className='btn btn-xs'>Advertise
                                                    </button>
                                                }
                                            </div>}
                                        </div>
                                    </div>
                                    <p className='hidden xl:flex'> {shop?.ownerEmail}</p>
                                    <span className='hidden lg:flex pl-3'>
                                        {shop?.status}  {shop?.status === 'verified' ?
                                            <span className='text-green-500 ml-3'>{shop?.category}</span> : ""}
                                    </span>
                                    <div className='flex  items-center justify-between max-h-10 overflow-hidden  '>
                                        <div className="">
                                            {shop?.status === 'verified' ?
                                                <>
                                                    <form action="" className=' overflow-x-hidden'
                                                        onSubmit={handelCategory}
                                                    >
                                                        <select required name="catagories" className="select select-bordered select-sm ">
                                                            {catagories?.map(category =>
                                                                <option key={category?._id} >{category?.name}</option>)
                                                            }
                                                        </select>
                                                        {shop?.category ?
                                                            <button
                                                                onClick={() => setShopsId(shop?._id)}
                                                                className='ml-2 btn btn-xs btn-warning'>Update</button>
                                                            :
                                                            <button
                                                                onClick={() => setShopsId(shop?._id)}
                                                                className='ml-2 btn btn-xs btn-warning'>publish</button>}
                                                    </form>
                                                </>
                                                :
                                                <>
                                                    {shop?.status === 'pending' ? "request sent" :
                                                        <button onClick={() => requestValidation(shop?._id, "pending")}>
                                                            <SecondaryButton>
                                                                <p>request  For verify</p>
                                                            </SecondaryButton>
                                                        </button>}
                                                </>
                                            }
                                        </div>
                                        <BsThreeDotsVertical />
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            {shopModal &&
                <AddShopModal
                    refetch={refetch}
                    setShopeModal={setShopeModal}
                />}
        </BodyTemplate >
    );
};

export default RequestForSeller;