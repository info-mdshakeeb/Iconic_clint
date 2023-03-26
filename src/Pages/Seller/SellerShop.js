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
        }
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

                {/* <div className="flex flex-wrap -mx-3">
                    <div className="flex-none w-full max-w-full px-3">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words  border-0 border-transparent border-solid shadow-xl   rounded-2xl bg-clip-border">
                            <div className="flex-auto px-0 pt-0 pb-2">
                                <div className="p-0 overflow-x-auto">
                                    <table className="items-center w-full mb-0 align-top border-collapse text-slate-500">
                                        <thead className="align-bottom">
                                            <tr>
                                                <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none   text-xxs border-b-solid tracking-none whitespace-nowra opacity-70">Your Shops</th>
                                                <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none   text-xxs border-b-solid tracking-none whitespace-nowra opacity-70">catagories</th>
                                                <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none   text-xxs border-b-solid tracking-none whitespace-nowrap  opacity-70">Status</th>
                                                <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none   tracking-none whitespace-nowra opacity-70"></th>
                                            </tr>
                                        </thead>
                                        {shops?.map(shop => <tbody key={shop?._id}>
                                            <tr>
                                                <td className="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div>
                                                            <img className='h-10 px-3' src={shop?.photoUrl} alt='/' />
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal ">{shop?.name}</h6>
                                                            <p className="mb-0 text-xs leading-tight">{shop?.ownerEmail}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent overflow-hidden">

                                                    {shop?.status === 'verified' ?
                                                        <Link to={`/shops/${shop?._id}`} className="mb-0 text-xs font-semibold leading-tight ">{shop?.location.length > 50 ? shop?.location.slice(0, 56) + '..' : shop?.location}
                                                        </Link> :
                                                        <p to={`/shops/${shop?._id}`} className="mb-0 text-xs font-semibold leading-tight ">{shop?.location.length > 50 ? shop?.location.slice(0, 56) + '..' : shop?.location}
                                                        </p>
                                                    }
                                                </td>
                                                <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                                    {shop?.status === 'Unauthorized' ?
                                                        <button
                                                            onClick={() => requestValidation(shop?._id)}
                                                            className='btn btn-sm btn-warning'>Request to admin</button> :
                                                        <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5  rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white"> {shop?.status}</span>
                                                    }
                                                </td>
                                                {shop?.status === 'verified' &&
                                                    <td className="p-2 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                                                        <p className="text-xs font-semibold leading-tight"> Edit </p>
                                                    </td>}
                                            </tr>
                                        </tbody>)}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
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