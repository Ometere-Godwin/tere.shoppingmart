"use client";
import { useSelector } from 'react-redux'
import { ProductsProps, StateProps } from '../type'
import { useEffect, useState } from 'react';
import FormattedPrice from './FormattedPrice';

export default function PaymentForm() {
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
    </div>
  )
}
