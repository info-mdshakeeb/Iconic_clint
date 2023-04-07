import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useAddToCart } from '../../Context/AddToCatd';
import { useFirebaseInfo } from '../../Context/UserContext';

const AddToCart = () => {
    const { cart, setCart } = useAddToCart()
    const { user } = useFirebaseInfo()

    const { data: cartData = [] } = useQuery({
        queryKey: ['cartData'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3210/api/v2/cart?email=${user?.email}`);
            const data = await response.json();
            return data.data;
        }
    })

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }
    return (
        <BodyTemplate>
            <div className="mx-4 lg:w-3/4 lg:mx-auto mt-7 ">
                <div className="grid grid-cols-5">
                    <div className="">items</div>
                    <div className="">price</div>
                    <div className="">Quantity</div>
                    <div className="">Subtotal</div>
                    <div className="">remove</div>
                </div>
                <hr className='' />
                {cartData.map((item, i) =>
                    <div key={i} className="grid grid-cols-5 mt-7">
                        <div className="">
                            <div className="flex items-center  space-x-2">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-8 h-8">
                                        <img src={item?.image} alt="Avatar" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{item?.name} </div>
                                    <div className="text-sm opacity-50">{item?.shop} type :{item?.variants}</div>
                                </div>
                            </div></div>
                        <div className="">{item?.price}</div>
                        <div className="">{item?.amount}</div>
                        <div className="">{item?.price * item?.amount}</div>
                        <div
                            onClick={() => removeItem(item?.id)}
                            className="">D</div>
                    </div>
                )}
            </div>
        </BodyTemplate>
    );
};

export default AddToCart;