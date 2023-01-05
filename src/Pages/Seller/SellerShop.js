import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useFirebaseInfo } from '../../Context/UserContext';
import AlartMessage from '../../Hooks/AlartMessage';


const RequestForSeller = () => {
    const { user } = useFirebaseInfo()
    const { successMessage } = AlartMessage()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: shop = [], refetch } = useQuery({
        queryKey: ['shops', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2100/shops?email=${user?.email}`)
            const data = await res.json()
            return data.data[0]
        }
    })
    const onSubmit = data => {
        console.log(data);
        const shopDetails = {
            ownerName: user.displayName,
            ownerEmail: user.email,
            name: data.name,
            photoUrl: data.photourl,
            location: data.location
        }
        fetch(`http://localhost:2100/shops`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(shopDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    successMessage('Added SuccessFull')
                }
                refetch()
            })
    }
    return (
        <BodyTemplate>
            {shop?._id ?
                <div className="max-w-2xl mx-auto">
                    <p className='mb-4 font-bold text-xl'>Your Shop</p>
                    <div className=" flex gap-4 p-4 bg-white rounded shadow">
                        <div className="">
                            <div className="">
                                <img src={shop?.photoUrl} height="120px" width="120px" alt="" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className='text-xl'>{shop?.name}
                            </p>
                            <p className='text-gray-600'>{shop?.location}</p>
                        </div>
                    </div>
                </div>
                :
                <div className="w-full">
                    <div className="max-w-2xl m-auto mt-4">
                        <p className='mb-4 font-bold text-xl'>Add A Shop</p>
                        <div className="p-4 mb-10 bg-white shadow">
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="mb-4"
                            >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder='name' className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.name ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                        {...register("name", { required: 'Name must required' })}
                                    />
                                    {errors.name && <span className="label-text text-red-400">{errors?.name.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoUrl</span>
                                    </label>
                                    <input type="text" placeholder='url' className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.photourl ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                        {...register("photourl", { required: 'photourl must required' })}
                                    />
                                    {errors.photourl && <span className="label-text text-red-400">{errors?.photourl.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Location</span>
                                    </label>
                                    <input type="text" placeholder='location' className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.location ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                        {...register("location", { required: 'location must required' })}
                                    />
                                    {errors.location && <span className="label-text text-red-400">{errors?.location.message}</span>}
                                </div>


                                <div className="mt-4">
                                    <SecondaryButton>
                                        Add Shop
                                    </SecondaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>}

        </BodyTemplate>
    );
};

export default RequestForSeller;