"use client";
import Container from '../../../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../../type'
import CartItems from '../../../components/CartItems';
import { resetCart } from '@/redux/shoppingSlice';
import PaymentForm from '../../../components/PaymentForm';

export default function CartPage() {
    const dispatch = useDispatch();
    const {productData} = useSelector((state:StateProps) => state?.shopping)
  return (
    <Container>
        <h1 className='text-2xl font-semibold mb-2'>Cart</h1>

        <div className='flex flex-col gap-5'>
            <CartItems/>
            <div className='flex items-center justify-end'>
                <button
                onClick={() => dispatch(resetCart())}
                className='bg-red-500 text-base font-semibold 
                text-slate-100 py-2 px-6 hover:bg-red-700 hover:text-white duration-200'>
                    Reset Cart
                </button>
            </div>
        </div>

        {/* Payment Form */}
        <PaymentForm/>
    </Container>
  )
}
