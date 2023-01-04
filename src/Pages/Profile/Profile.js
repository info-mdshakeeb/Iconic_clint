import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import { useFirebaseInfo } from '../../Context/UserContext';

const Profile = () => {
    const { user } = useFirebaseInfo()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [seller, getSeller] = useState(false)

    // console.log(seller);
    const onSubmit = data => {
        // console.log(data);
    }
    return (
        <div className="w-full">
            <div className="max-w-2xl m-auto mt-4">
                <p className='mb-4 font-bold text-xl'>Profile</p>
                <div className="p-4 mb-10 bg-white shadow">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mb-4"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.name ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("name", { required: 'Name must required' })}
                            />
                            {errors.name && <span className="label-text text-red-400">{errors?.name.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} disabled className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg cursor-not-allowed  "
                            />
                        </div>
                        <div className="form-control pt-3 md:w-60">
                            <label className="cursor-pointer label">
                                <span className="text "
                                >UnLock Seller Form</span>
                                <input onClick={() => getSeller(!seller)}
                                    type="checkbox" className="checkbox checkbox-warning"
                                    {...register("check")}
                                />
                            </label>
                        </div>
                        <div className="mt-4">
                            <SecondaryButton>
                                Update
                            </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Profile;