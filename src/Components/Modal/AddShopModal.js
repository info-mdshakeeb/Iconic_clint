import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useFirebaseInfo } from '../../Context/UserContext';
import AlartMessage from '../../Hooks/AlartMessage';
import SecondaryButton from '../share/Buttons/SecondaryButton';

const AddShopModal = ({ refetch, setShopeModal }) => {
    const { user } = useFirebaseInfo()
    const { successMessage } = AlartMessage()
    const { register, handleSubmit, formState: { errors } } = useForm();

    // console.log(catagories);
    const onSubmit = data => {
        // console.log(data);
        const shopDetails = {
            ownerName: user.displayName,
            ownerEmail: user.email,
            name: data.name,
            photoUrl: data.photourl,
            location: data.location,
            category: null,
            status: 'Unauthorized',
            shopCreated: new Date(),
            Advertisement: false,
        }
        fetch(`https://iconic-server-v2.vercel.app/api/v2/shops`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(shopDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Added Shop")
                    setShopeModal(false)
                }
                refetch()
            })
    }
    return (
        <div className="">
            <input type="checkbox" id="AddShop" className="modal-toggle" />
            <div className="modal  ">
                <div className="modal-box relative bg-gradient-to-r from-gray-100 to-gray-300">
                    <label
                        onClick={() => setShopeModal(false)}
                        htmlFor="AddShop" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
        </div>
    );
};

export default AddShopModal;