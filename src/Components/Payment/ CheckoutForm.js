import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAddressApi } from '../../Api/api';
import { useAddToCart } from '../../Context/AddToCatd';
import { useFirebaseInfo } from '../../Context/UserContext';
import AlartMessage from '../../Hooks/AlartMessage';
import "../../index.css";

const CheckoutForm = ({ product, setProduct }) => {
    const { successMessage } = AlartMessage()
    const stripe = useStripe();
    const { refetch } = useAddToCart()
    const { user } = useFirebaseInfo()
    const elements = useElements();
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const price = product?.price * product?.amount;
    const { data: address = [], isLoading } = useQuery({
        queryKey: ['address'],
        enabled: !!user?.email,
        queryFn: () => getAddressApi(user?.email)
    })

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:3210/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handelDelete = (product) => {
        fetch(`http://localhost:3210/api/v2/cart/payment?email=${user?.email}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product })
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                setProduct(null)
            })
    }
    const addToDb = (product) => {
        fetch(`http://localhost:3210/api/v2/cart/payment/confirmed?email=${user?.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                setProduct(null)
                handelDelete(product)
                successMessage('Payment Successful')
            })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const address = form.address.value;
        if (!stripe || !elements) { return; }
        const card = elements.getElement(CardElement);

        if (card == null) { return; }
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card, });

        if (error) {
            setError(error)
        } else { setError(null) }
        const { paymentIntent, error: confirmationError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: product?.userEmail,
                    },
                },
            },
        );
        if (confirmationError) {
            setError(confirmationError); return;
        }
        if (paymentIntent.status === "succeeded") {
            const confirmPayment = {
                paymentID: paymentIntent.id,
                address,
                ...product,
                data: new Date().toDateString(),
                status: 'Confirmed',
                max: null,
            }
            addToDb(confirmPayment)
        }
    };
    if (isLoading) return <div className='text-center mt-10'>Loading...</div>

    return (
        <form onSubmit={handleSubmit}>
            <div className=" ">
                <div className="mb-4">
                    {address.length ? <>
                        <p>Select delivery Address</p>
                        <select name='address' className="select select-warning w-full max-w-xs" required>
                            {address.map((item, index) => <option key={index}>{item.address}</option>)}
                        </select>
                    </> :
                        <div className='mb-10'>
                            <input type="text" name='address' className='border-2 mr-2' required placeholder='Please Add Address : -' />
                            <Link to={`/add-address`} className='btn btn-sm'>Address</Link>
                        </div>
                    }
                </div>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn-warning btn btn-sm mt-6' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
            {error && <p className='text-red-600 mt-4'>{error.message}</p>}
        </form>
    );
};

export default CheckoutForm;