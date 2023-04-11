import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../../Context/UserContext';
import AlartMessage from '../../Hooks/AlartMessage';

const Profile = () => {
    const { user, updateProfilePic } = useFirebaseInfo()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [seller, getSeller] = useState(false)
    const { successMessage } = AlartMessage()

    const { data: useR = [], refetch, isLoading } = useQuery({
        queryKey: ['useR', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3210/api/v2/users?email=${user?.email}`)
            const data = await res.json()
            return data.data[0]
        }
    })

    const onSubmit = data => {

        if (seller) {
            const updateUser = { name: data.name, role: useR?.role }
            updateSeller(user?.email, updateUser)
        }
        else {
            const updateUser = { name: data.name, role: "seller" }
            updateSeller(user?.email, updateUser)
        }
        updateProfilePic(data.name)

    }
    //user?.email
    const updateSeller = (email, updateUser) => {
        fetch(`http://localhost:3210/api/v2/users?email=${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success) {
                    successMessage('Update SuccessFull')
                }
                refetch()
            })
    }
    if (isLoading) {
        return <div className="w-full mx-auto flex justify-center items-center h-96">
            <PrimaryLoading></PrimaryLoading>
        </div>
    }
    return (
        <BodyTemplate >
            <div className="max-w-2xl m-auto mt-4 ">
                <p className='mb-4 font-bold text-xl'>Profile</p>
                <div className=" bg-white shadow">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mb-4 w-full"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" defaultValue={useR?.name} className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.name ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("name", { required: 'Name must required' })}
                            />
                            {errors.name && <span className="label-text text-red-400">{errors?.name.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={useR?.email} disabled className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg cursor-not-allowed  "
                            />
                        </div>
                        <div className="form-control pt-3 md:w-60">
                            {useR?.role === "buyer" ?
                                <label className="cursor-pointer label">
                                    <span className="text ">UnLock Seller Form</span>
                                    <input onClick={() => getSeller(!seller)}
                                        type="checkbox" checked className="checkbox checkbox-warning hidden"
                                        {...register("check")}
                                    /> : <input onClick={() => getSeller(!seller)}
                                        type="checkbox" className="checkbox checkbox-warning"
                                        {...register("check")}
                                    />
                                </label> : undefined}
                        </div>
                        <div className="mt-4">
                            <SecondaryButton>Update </SecondaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </BodyTemplate>
    );
};

export default Profile;