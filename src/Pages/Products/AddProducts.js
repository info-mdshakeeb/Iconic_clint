import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { addProductApi } from '../../Api/api';
import FormTemplate from '../../Components/share/Template/FormTemplate';
import { useFirebaseInfo } from '../../Context/UserContext';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useFirebaseInfo();
    const tableData = [
        { name: "name", type: "text", placeholder: "Product Name", error: errors.name },
        { name: "BrandName", type: "text", placeholder: "BrandName", error: errors.BrandName },
        { name: "imgUrl_1st", type: "text", placeholder: "imgUrl_1st", error: errors.imgUrl_1st },
        { name: "imgUrl_2nd", type: "text", placeholder: "imgUrl_2nd", error: errors.imgUrl_2nd },
        { name: "imgUrl_3rd", type: "text", placeholder: "imgUrl_3rd", error: errors.imgUrl_3rd },
        { name: "imgUrl_4th", type: "text", placeholder: "imgUrl_4th", error: errors.imgUrl_4th },
        { name: "Network", type: "text", placeholder: "Network", error: errors.Network },
        { name: "Display", type: "text", placeholder: "Display", error: errors.Display },
        { name: "Resolution", type: "text", placeholder: "Resolution", error: errors.Resolution },
        { name: "Front_Camera", type: "text", placeholder: "Front_Camera", error: errors.Front_Camera },
        { name: "Back_Camera", type: "text", placeholder: "Back_Camera", error: errors.Back_Camera },
        { name: "Battery", type: "text", placeholder: "Battery", error: errors.Battery },
        { name: "Operating_System", type: "text", placeholder: "Operating_System", error: errors.Operating_System },
        { name: "Processor", type: "text", placeholder: "Processor", error: errors.Processor },
        { name: "description", type: "text", placeholder: "description", error: errors.description },
        { name: "variants1", type: "text", placeholder: "variants", error: errors.price1 },
        { name: "price1", type: "text", placeholder: "Price", error: errors.variants1 },
        { name: "variants2", type: "text", placeholder: "variants", error: errors.variants2 },
        { name: "price2", type: "text", placeholder: "Price", error: errors.variants2 },
        { name: "variants3", type: "text", placeholder: "variants", error: errors.variants3 },
        { name: "price3", type: "text", placeholder: "Price", error: errors.variants3 },
        { name: "Quantity", type: "number", placeholder: "Quantity", error: errors.Quantity },
    ]
    const onSubmit = data => {
        const Names = data.name;
        const BrandNames = data.BrandName;
        const ImgUrls = [data.imgUrl_1st, data.imgUrl_2nd, data.imgUrl_3rd, data.imgUrl_4th];
        const Network = data.Network;
        const Display = data.Display;
        const Resolution = data.Resolution;
        const Cameras = [data.Front_Camera, data.Back_Camera];
        const Battery = data.Battery;
        const Operating_System = data.Operating_System;
        const Processor = data.Processor;
        const description = data.description;
        const variants1 = data.variants1;
        const price1 = data.price1;
        const variants2 = data.variants2;
        const price2 = data.price2;
        const variants3 = data.variants3;
        const price3 = data.price3;
        const Quantity = data.Quantity;
        const Advertisement = false;
        const date = new Date();
        const productData = {
            Names, BrandNames, ImgUrls, Network, Display, Resolution, Cameras, Battery, Operating_System, Processor, date, ownerName: user?.displayName, ownerEmail: user?.email,
            description, Quantity, variants: [{ variant: variants1, price: price1 }, { variant: variants2, price: price2 }, { variant: variants3, price: price3 }], Advertisement,
            available: false
        }

        //add data to database
        addProductApi(productData)
            .then(res => {
                toast.success("added product")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}
                className="mt-6 w-full  ">
                <div className=" ">
                    <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-4 ">
                        {tableData.map((data, index) =>
                            <FormTemplate
                                key={index}
                                data={data}
                                register={register}
                            />
                        )}
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button className=' btn btn-primary btn-sm '>add data</button>
                </div>
            </form>
        </div>

    );
};

export default AddProducts;