import React from 'react'
import Stars from '../Stars'
import { MdFavoriteBorder, MdOutlineDateRange } from 'react-icons/md'
import { FaLocationCrosshairs, FaLessThanEqual } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Seller = () => {
    return (
        <div className='mt-[20px]'>
            <div className="head flex flex-col gap-x-[10px]  mb-[15px] sm:flex-row sm:items-end md:flex-col md:items-start lg:flex-row lg:items-end">
                {/* Store or seller logo */}
                <div className="logo w-[3rem] mb-[10px] sm:w-[4rem] lg:mb-0">
                    <img src="/assets/logo.png" alt="" className='w-[100%] object-contain rounded-md' />
                </div>
                {/* Store or Seller name | Ratings and review */}
                <div className="">
                    {/* Store or seller name */}
                    <h2 className='text-[1.2rem] font-medium mb-[5px]'>
                        Florence & Sons
                    </h2>
                    {/* Ratings & review */}
                    <div className="flex items-center gap-x-[10px]">
                        <p className="rating flex items-center text-[12px]">
                            <Stars stars={4} />
                        </p>
                        <p className='text-[12px]'>
                            (100 Customer reviews)
                        </p>
                    </div>
                </div>
            </div>
            {/* Store or Seller tagline | description */}
            <p className='text-[13.5px] mb-[15px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim eveniet similique illum culpa quo pariatur eaque eius nisi dignissimos aliquam incidunt.
            </p>
            {/* Date joined | Store or Seller location */}
            <div className="flex flex-col  gap-[1rem] mb-[20px] sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center">
                <p className='flex items-center gap-x-[10px] text-[13.5px]'>
                    <MdOutlineDateRange />
                    Joined since 13 May 2023
                </p>
                {/* Separator */}
                <div className="hidden w-[1px] h-[1rem] bg-zinc-500 sm:flex md:hidden lg:flex"></div>
                <p className='flex items-center gap-x-[10px] text-[13.5px]'>
                    <FaLocationCrosshairs />
                    Mama Beach Village
                </p>
            </div>
            {/* Seller proof */}
            <div className="proof flex flex-col my-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Response timr */}
                <div className="flex flex-col-reverse sm:flex-col sm:items-center">
                    <p className='text-[13px] font-medium text-lightBlack dark:text-slate-200'>
                        Response time
                    </p>
                    <h2 className='font-semibold text-[1.2rem] mb-[5px] flex items-center gap-x-[5px] md:text-[15px] md:mb-0'>
                        <FaLessThanEqual />
                        4h
                    </h2>
                </div>
                {/* On-time delivery rate */}
                <div className="delivery flex flex-col-reverse my-[1rem] md:my-0 sm:flex-col sm:items-center">
                    <p className='text-[13px] font-medium text-lightBlack dark:text-slate-200'>
                        On-time delivery rate
                    </p>
                    <h2 className='font-semibold text-[1.2rem] mb-[5px] md:text-[15px] md:mb-0'>
                        99%
                    </h2>
                </div>
                {/* Transaction scores */}
                <div className="flex flex-col-reverse  sm:flex-col sm:items-center">
                    <p className='flex items-center gap-x-[5px] text-[13px] font-medium text-lightBlack dark:text-slate-200'>
                        <span>57</span>
                        Transactions
                    </p>
                    <h2 className='font-semibold text-[1.2rem] mb-[5px] md:text-[15px] md:mb-0'>
                        $50,000+
                    </h2>
                </div>
            </div>
            {/* Actions */}
            <div className="mt-[30px]">
                <div className="save_seller_view_store flex flex-col gap-4 items-center mb-2 sm:flex-row">
                    <button className='w-[100%] flex items-center justify-center gap-x-[5px] text-[12px] border-[1px] border-zinc-900 py-[10px] rounded-md md:py-[7px]'>
                        <MdFavoriteBorder className='text-[15px]' />
                        Save Vendor
                    </button>
                    <Link to="/vendor/1" className='w-[100%] text-[12px] text-center  bg-amber-700 text-white rounded-md py-[10px] md:py-[7px]'>
                        View store
                    </Link>
                    <button className='w-[100%] text-[12px] bg-zinc-700 text-white rounded-md py-[10px] md:py-[7px]'>
                        Message | Chat
                    </button>
                </div>
            
                <p className='flex items-center justify-center gap-1 text-[13px] mt-[2rem]'>
                    Sell on e-shop |
                    <span className='text-amber-700 font-medium dark:text-amber-500'>
                        Register now!
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Seller