import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { getAdvertisementProductsApi, updateProductApi } from '../../Api/api';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';

const ProductsAD = () => {
    const { data: addProducts = [], refetch } = useQuery({
        queryKey: ['addProducts'],
        queryFn: () => getAdvertisementProductsApi(),
    })

    const requestValidation = (id, type) => {
        if (type === 'acceded') {
            const update = { Advertisement: "acceded" }
            handelUpdate(id, update)
            return;
        }
        else if (type === 'undo') {
            const update = { Advertisement: false }
            handelUpdate(id, update)
            return;
        }
    }

    const handelUpdate = (id, value) => {
        updateProductApi(id, value)
            .then(data => {
                refetch()
                toast.success("success")
            }).catch(err => {
                console.log(err);
                toast.error(err.message)
            })
    }

    return (
        <BodyTemplate>
            <div className='w-full m-auto p-4 border rounded-lg bg-white min-h-[85vh] xl:min-h-[87vh] overflow-scroll  '>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer text-xl font-[500]'>
                    <span>Product Details</span>
                    <span className='hidden md:grid'>Owner Mail</span>
                    <span className='hidden md:grid'>Owner Name</span>
                    <span className='sm:text-left text-left'>Action</span>
                </div>
                <ul>
                    {addProducts?.map(Product =>
                        <li key={Product?._id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <div className="flex items-center space-x-2">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-8 h-8">
                                        <img src={Product?.ImgUrls[0]} alt="Avatar" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{Product?.Names}
                                    </div>
                                    <div className="text-sm opacity-50">Date : {Product?.date?.slice(0, 10)}</div>
                                </div>
                            </div>
                            <p className='hidden md:flex'> {Product?.ownerEmail}</p>

                            <span className='hidden md:flex'>
                                {Product?.ownerName}
                            </span>
                            <div className='flex  items-center justify-between'>
                                <div className="btn-group btn-xs text-white">
                                    <button
                                        onClick={() => requestValidation(Product?._id, 'acceded')}
                                        className="btn btn-warning btn-xs">Verify</button>
                                    <button
                                        onClick={() => requestValidation(Product?._id, 'undo')}
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

export default ProductsAD;