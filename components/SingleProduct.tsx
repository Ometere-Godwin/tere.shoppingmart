"use client";

import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import {MdFavoriteBorder} from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, {Toaster} from "react-hot-toast";

export default function SingleProduct({product} : any) {
    const dispatch = useDispatch()
  return (
    <div className="grid lg:grid-cols-2 bg-white gap-5 p-4 rounded-lg">
        <div>
        <Image 
        src={product?.image} 
        alt="product image" 
        height={500} 
        width={500}
        className="w-full max-h-[700px] object-cover rounded-lg"/>
        </div>

        <div className="flex flex-col justify-center gap-y-10">
            <div>
                <p className="text-3xl font-semibold">{product?.title}</p>
                <p className="text-xl font-semibold">
                    <FormattedPrice amount ={product?.price}/>
                </p>
            </div>
            <p className="text-lightText">{product?.description}</p>
            <div className="text-sm text-lightText flex flex-col">
                <span>
                    SKU: <span>{product?._id}</span>
                </span>

                <span>
                    Category: <span>{product?.category}</span>
                </span>

                <div className="flex items-center cursor-pointer group">
                    <button
                    onClick={() =>dispatch(addToCart(product)) &&
                        toast.success(
                          `${product?.title.substring(0, 15)} added successfully!`
                        )}
                    className="bg-darkText text-slate-100 px-6 py-3 text-sm 
                     uppercase flex items-center border-r-[1px] border-r-slate-500">
                        add to cart
                    </button>
                    <span className="bg-darkText text-slate-100 text-xl w-12 flex 
                    items-center justify-center group-hover:bg-orange-500 duration-200 py-3">
                    <IoMdCart/>
                    </span>
                </div>
                
            </div>
             {/* <div className="flex items-center gap-x-2">
                    <span><MdFavoriteBorder/></span>
                    <p>add to wishlist</p>
                </div> */}
            <p className="flex items-center gap-x-2">
                    <MdFavoriteBorder/>
                    Add to wishlist
                </p>
        </div>
        <Toaster/>
    </div>
  )
}
