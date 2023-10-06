"use client"

import React, { useEffect, useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { FiSearch, FiLogOut} from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from 'react-redux';
import { ProductsProps, StateProps } from '../type';
import FormattedPrice from './FormattedPrice';

export default function Header() {
    const {data:session} = useSession();
    const {productData}= useSelector((state: StateProps) => state.shopping);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let amount = 0;
        productData.map((item:ProductsProps) => {
            amount += item.price * item.quantity;
            return;
        })
        setTotalAmount(amount)
    },[productData]);

    return (
        <div className='bg-bodyColor h-20 sticky top-0 z-10'>
            <Container className='flex items-center justify-between h-full md:gap-x-5 md:justify-start'>
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        alt='logo'
                        width={100}
                        height={100} />
                </Link>

                {/* Search Field */}
                <div className='items-center group
            gap-x-1 border-[1px] border-lightText/50 
            rounded-full md:flex hidden w-full py-1.5 px-4 focus-within:border-orange-600 '>
                    <span className='text-gray-400 group-focus-within:text-darkText duration-200'>
                        <FiSearch />
                    </span>
                    <input
                        type="text"
                        placeholder='Search for products'
                        className='bg-transparent placeholder:text-sm flex-1 outline-none'
                    />
                </div>

                {/* Login/ Register */}
                {!session && (
                    <div className='headerDiv cursor-pointer' onClick={() => signIn()}>                    
                    <span className='text-2xl'><AiOutlineUser /></span>
                    <p className='text-sm font-semibold'>Login/Register</p>                   
            </div>
                )}

                {/* Shopping Cart */}
                <Link href={"/cart"}>
                <div className='register'>
                    <span className='text-white'>
                        <FaShoppingCart />
                    </span>
                    <label className='cursor-pointer'>
                        <FormattedPrice amount = {totalAmount ? totalAmount : 0}/>
                    </label>
                    <small className='cart'>
                    {productData ? productData?.length : 0}
                    </small>
                </div>
                </Link>

                {/* User Image */}
                {
                    session && <Image src={session?.user?.image as string} 
                    height={30} 
                    width={30} 
                    alt=''
                    className='rounded-full object-cover'/>
                }

                {/* Logout button */}
                {
                    session && (
                        <div 
                        onClick= {() => signOut()} className='headerDiv cursor-pointer'>
                    <span className='text-2xl'><FiLogOut/></span>
                    <p className='text-sm font-semibold'>Logout</p>
                </div>
                    )
                }
            </Container>
        </div>
    )
}
