"use client";
import { useDispatch, useSelector } from 'react-redux'
import { ProductsProps, StateProps } from '../type'
import { useEffect, useState } from 'react';
import FormattedPrice from './FormattedPrice';
import {loadStripe} from '@stripe/stripe-js';
import {useSession} from "next-auth/react";
import { resetCart, saveOrder } from '@/redux/shoppingSlice';

export default function PaymentForm() {
    const dispatch = useDispatch();
    const {productData, userInfo} = useSelector(
        (state: StateProps) => state?.shopping
    );
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let amount = 0;
        productData.map((item:ProductsProps) => {
            amount += item.price * item.quantity;
            return;
        });
        setTotalAmount(amount)
    },[productData]);

    // Stripe payment starts here
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    const {data: session} = useSession();
    const handleCheckout = async () => {
        const stripe = await stripePromise;
        const response = await fetch("http://localhost:3000/api/checkout", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                items: productData,
                email: session?.user?.email,

            }),
        });

        // To access data
        const data = await response.json();

        // Set a condition
        if (response.ok){
            await dispatch(saveOrder({order:productData, id:data.id}));
            stripe?.redirectToCheckout({sessionId: data.id})
            dispatch(resetCart());
        } else {
            throw new Error ("Failed to create Stripe Payment")
        }
    };

    // Stripe payment ends here
  return (
    <div className='w-full bg-white p-4'>
        <h2>Cart Totals</h2>

        <div className='border-b-[1px] border-b-slate-300 py-2'>
            <div className='max-w-lg flex items-center justify-between'>
                <p className='uppercase font-medium'>Subtotal</p>
                <p>
                    <FormattedPrice amount={totalAmount}/>
                </p>
            </div>
        </div>

        {/* Cost of Shipping */}
        <div className='border-b-[1px] border-b-slate-300 py-2'>
            <div className='max-w-lg flex items-center justify-between'>
                <p className='uppercase font-medium'>shipping value</p>
                <p>
                    <FormattedPrice amount={20}/>
                </p>
            </div>
        </div>

        {/* Actual Totals */}
        <div className='border-b-[1px] border-b-slate-300 py-2'>
            <div className='max-w-lg flex items-center justify-between'>
                <p className='uppercase font-medium'>Subtotal</p>
                <p>
                    <FormattedPrice amount={totalAmount + 20}/>
                </p>
            </div>
        </div>

        {/* Checkout */}
        <div>
        {
            userInfo? (
                <button
                onClick={handleCheckout}
                className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 duration-200'>Proceed to checkout</button>
            ) : (
                <div className=''>
                    <button
                    onClick={handleCheckout}
                    className='bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-red-800  duration-200 font-semibold uppercase'>Proceed to checkout</button>
                    <p className='text-base mt-1 text-red-500 font-semibold animate-bounce'>Please login to continue</p>
                </div>
            )
        }
        </div>
    </div>
  )
}
