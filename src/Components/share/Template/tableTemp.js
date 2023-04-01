import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const tableTemp = ({ dates }) => {
    return (
        <div className='min-h-[80vh] overflow-y-hidden p-4'>
            <div className='px-4'>
                <div className='w-full m-auto p-4 border rounded-lg bg-white  '>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer text-xl font-[500]'>
                        <span>Shop Details</span>
                        <span className='hidden md:grid'>Owner Mail</span>
                        <span className='hidden md:grid'>Owner Name</span>
                        <span className='sm:text-left text-left'>Action</span>
                    </div>
                    <ul>
                        {dates.map(data =>
                            <li key={data?.id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className="flex items-center space-x-2">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-8 h-8">
                                            <img src={data?.photoUrl} alt="Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{data?.name}
                                        </div>
                                        <div className="text-sm opacity-50">Date : {data?.shopCreated?.slice(0, 10)}</div>
                                    </div>
                                </div>
                                <p className='hidden md:flex'> {data?.ownerEmail}</p>

                                <span className='hidden md:flex'>
                                    {data?.ownerName}
                                </span>

                                <div className='flex  items-center justify-between'>
                                    <div className="btn-group btn-xs text-white">
                                        <button className="btn btn-warning btn-xs">Verify</button>
                                        <button className="btn btn-xs btn-warning">Delete</button>
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
    );
};

export default tableTemp;