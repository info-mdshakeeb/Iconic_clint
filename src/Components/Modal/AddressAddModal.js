import React from 'react';
import { useForm } from 'react-hook-form';
import SecondaryButton from '../share/Buttons/SecondaryButton';

const AddressAddModal = ({ closeModal, setCloseModal }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        setCloseModal(false)
    }
    return (
        <div>
            <input type="checkbox" id="Add_Address" className="modal-toggle" />
            <label htmlFor="Add_Address" className="modal cursor-pointer">
                <label className="modal-box relative bg-gradient-to-r from-gray-100 to-gray-300" htmlFor="">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className=""
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder='Full name' className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.name ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("name", { required: 'Name must required' })}
                            />
                            {errors.name && <span className="label-text text-red-400">{errors?.name.message}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder='phone' className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.phone ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("phone", { required: 'phone must required' })}
                            />
                            {errors.phone && <span className="label-text text-red-400">{errors?.phone.message}</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" placeholder='Address' className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.address ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("address", { required: 'address must required' })}
                            />
                            {errors.address && <span className="label-text text-red-400">{errors?.address.message}</span>}
                        </div>

                        <div className="mt-4">
                            <SecondaryButton>Submit</SecondaryButton>
                        </div>

                    </form>
                </label>
            </label>

        </div>
    );
};

export default AddressAddModal;