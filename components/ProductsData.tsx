import React from "react";
import { ItemProps } from "../type";
import Image from "next/image";
import { calculatePercentage } from "@/helpers";
import FormattedPrice from "./FormattedPrice";
import {IoIosStar} from "react-icons/io";

export default function ProductsData({ item }: ItemProps) {
  const startArray = Array.from({length: item?.rating}, (_, index) => (
    <span key={index} className="text-yellow-400">
        <IoIosStar/>
    </span>
  ))
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div>
        <div
          className=" w-full h-96 
            group overflow-hidden relative "
        >
          <Image
            src={item?.image}
            alt="Poducts"
            width={500}
            height={500}
            className="w-full h-full object-cover group-hover:scale-110 
            duration-200 rounded-t-lg cursor-pointer"
          />

          {item?.isNew && (
            <span
              className="absolute top-2 right-2 rounded-full 
              border-orange-600 group-hover:bg-orange-600 
              group-hover:text-white text-sm py-1 px-3 font-medium"
            >
              New Arrival
            </span>
          )}
        </div>

        <div 
        className="border-[1px] border-slate-300 
        border-t-0 px-2 py-4 flex flex-col gap-y-2 bg-white rounded-b-lg">
            <p className="text-sm">
                {item?.title}
            </p>

            {/* To calculate the price */}
            <div className="flex items-center justify-between">
                <div className="border-[1px] text-sm
                border-orange-600 rounded-full py-1 px-4">
                    <p>{calculatePercentage(item?.price, item?.oldPrice)} % off</p>
                </div>

                <div className="flex items-center gap-x-2">
                    <p className="text-slate-500 line-through text-sm">
                        <FormattedPrice amount={item?.oldPrice}/>
                    </p>

                    <p className="text-slate-500 text-sm font-semibold">
                        <FormattedPrice amount={item?.price}/>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between">
            
            {/* Add to cart button */}
            <button className="bg-orange-600 font-bold 
            rounded-full text-slate-100 py-2 px-4 
            hover:bg-orange-800 tracking-wide hover:text-white">
                Add to Cart
            </button>

            {/* Star icons */}
            <div className="flex items-center gap-x-1">{startArray}</div>
            </div>
        </div>    
      </div>
    </div>
  );
}
