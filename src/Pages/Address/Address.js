import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { getAddressApi } from '../../Api/api';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import AddressAddModal from '../../Components/Modal/AddressAddModal';
import PrimaryButton from '../../Components/share/Buttons/PrimaryButton';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../../Context/UserContext';

const Address = () => {
    const [closeModal, setCloseModal] = useState(false)
    const { user } = useFirebaseInfo();
    const { data: address = [], refetch, isFetching, isLoading } = useQuery({
        queryKey: ['address'],
        enabled: !!user?.email,
        queryFn: () => getAddressApi(user?.email)
    })
    //handelDelete
    const handelDelete = (id) => {
        fetch(`http://localhost:3210/api/v2/users/address?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })
    }
    if (isFetching || isLoading) {
        return (
            <div className='w-full  min-h-[calc(100vh_-_370px)] flex justify-center items-center'>
                <PrimaryLoading />
            </div>
        )
    }
    return (
        <BodyTemplate >
            <div className="max-w-2xl py-4 m-auto">
                <div className="mb-5">
                    <div className="flex justify-between items-center h-9  ">
                        <p className='font-bold text-xl'>Delivery Address</p>
                        <PrimaryButton
                            h={9}
                        >
                            <label htmlFor="Add_Address"
                                onClick={() => setCloseModal(true)}
                                className='cursor-pointer'> Add Address</label>
                        </PrimaryButton>
                    </div>
                </div>
                {address.length ? <>
                    {address?.map((item, i) =>
                        <div key={i}
                            className="flex justify-between p-4 text-white rounded shadow mb-4 bg-black">
                            <div className="">
                                <p>name : {item?.name}  </p>
                                <p>Phone number : {item?.phone} </p>
                                <p>Address : {item?.address}</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span
                                    onClick={() => handelDelete(item?._id)}
                                ><SecondaryButton>
                                        Delete
                                    </SecondaryButton></span>
                            </div>
                        </div>
                    )}
                </> :
                    <div className="font-bold text-center mt-10">No Address Added</div>
                }
            </div>
            {closeModal &&
                <AddressAddModal
                    setCloseModal={setCloseModal}
                    refetch={refetch}
                />}
        </BodyTemplate>
    );
};

export default Address;