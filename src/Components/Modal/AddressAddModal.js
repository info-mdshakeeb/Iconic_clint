import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useFirebaseInfo } from '../../Context/UserContext';
import SecondaryButton from '../share/Buttons/SecondaryButton';

const AddressAddModal = ({ closeModal, setCloseModal, refetch }) => {
    const { user } = useFirebaseInfo();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const Address = {
            name: data.name,
            address: data.address,
            phone: data.phone,
            userEmail: user?.email
        }
        //add to db
        fetch(`http://localhost:3210/api/v2/users/address?email=${user?.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Address)
        })
            .then(res => res.json())
            .then(data => {
                setCloseModal(false)
                refetch();
                toast.success("added Address")
            })
    }
    return (
        <div>
            <input type="checkbox" id="Add_Address" className="modal-toggle" />
            <label htmlFor="Add_Address" className="modal cursor-pointer">
                <label className="modal-box relative bg-gradient-to-r from-gray-100 to-gray-300 w-96 h-96 overflow-hidden" htmlFor="">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="-mt-10 "
                    >
                        <div className="form-control -ml-10">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder='Full name' className={`max-w-xs px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.name ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("name", { required: 'Name must required' })}
                            />
                            {errors.name && <span className="label-text text-red-400">{errors?.name.message}</span>}
                        </div>

                        <div className="form-control -ml-10">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder='phone' className={`max-w-xs px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.phone ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("phone", { required: 'phone must required' })}
                            />
                            {errors.phone && <span className="label-text text-red-400">{errors?.phone.message}</span>}
                        </div>

                        <div className="form-control -ml-10">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" placeholder='Address' className={`max-w-xs px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.address ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("address", { required: 'address must required' })}
                            />
                            {errors.address && <span className="label-text text-red-400">{errors?.address.message}</span>}
                        </div>

                        <div className="mt-4 max-w-xs -ml-10">
                            <SecondaryButton>Submit</SecondaryButton>
                        </div>

                    </form>
                </label>
            </label>

        </div>
    );
};

export default AddressAddModal;