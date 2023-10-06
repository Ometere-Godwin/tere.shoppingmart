"use client";
import Container from '../../../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../../type'
import CartItems from '../../../components/CartItems';
import { resetCart } from '@/redux/shoppingSlice';
import PaymentForm from '../../../components/PaymentForm';
import Link from "next/link";

export default function CartPage() {
    const dispatch = useDispatch();
    const {productData} = useSelector((state:StateProps) => state?.shopping)
  return (
    <Container>
        {
            productData.length > 0 ? (<Container>
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
        ) : (
        <div className='flex flex-col gap-y-6 items-center justify-center
        bg-white h-96 px-4'>
            <p className='border-[1px] border-orange-600 w-full p-2 text-center'>Your product cart is currenlty empty</p>
            <Link href={"/"}>
            <button className='bg-darkText py-2 px-6 hover:bg-orange-600 duration-200 rounded-md text-slate-100 uppercase'>Return to shop</button>
            </Link>
        </div>
        )
        }
    </Container>
  )
}
