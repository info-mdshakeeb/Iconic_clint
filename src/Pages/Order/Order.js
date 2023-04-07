import React from 'react';
import BodyTemplate from '../../Components/share/Template/BodyTemplate';
import { useAddToCart } from '../../Context/AddToCatd';

const Order = () => {
    const { cart } = useAddToCart()
    console.log(cart);
    return (
        <BodyTemplate >
            hi

        </BodyTemplate>
    );
};

export default Order;