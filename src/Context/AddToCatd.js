import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext, useState } from 'react';
import { useFirebaseInfo } from './UserContext';

const addToCart = createContext()
const AddToCart = ({ children }) => {
    const { user } = useFirebaseInfo()
    const [cart, setCart] = useState([])
    const [amount, setAmount] = useState(1);

    const { data: cartDates = [], isFetching, isLoading, refetch } = useQuery({
        queryKey: ['cartDates'],
        enabled: !!user?.email,
        queryFn: async () => {
            const response = await fetch(`http://localhost:3210/api/v2/cart?email=${user?.email}`);
            const data = await response.json();
            return data.data;
        }
    })

    const value = { cart, setCart, amount, setAmount, cartDates, isFetching, isLoading, refetch }
    return (
        <addToCart.Provider value={value}>
            {children}
        </addToCart.Provider>
    );
};

export const useAddToCart = () => {
    const cart = useContext(addToCart)
    return cart
}
export default AddToCart;