import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <div className='bg-bodyColor h-20 '>
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
                <div className=''>
                    <Link href='#' className='headerDiv'>
                        <span className='text-2xl'><AiOutlineUser /></span>
                        <p className='text-sm font-semibold'>Login/Register</p>
                    </Link>
                </div>

                {/* Shopping Cart */}
                <div className='register '>
                    <span className='text-white'>
                        <FaShoppingCart />
                    </span>
                    <label>$500</label>
                    <small className='cart'>0</small>
                </div>
            </Container>
        </div>
    )
}
