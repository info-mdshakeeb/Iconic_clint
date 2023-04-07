import React, { createContext, useContext, useState } from 'react';

const addToCart = createContext()
const AddToCart = ({ children }) => {
    const [cart, setCart] = useState([])
    const [amount, setAmount] = useState(1);
    const value = { cart, setCart, amount, setAmount }
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