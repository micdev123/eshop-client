import React from 'react'
import { MdLocalShipping, MdOutlineDateRange } from 'react-icons/md'
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaHandshake } from 'react-icons/fa';

const ShippingReturnsPayments = () => {
    return (
        <div className='my-[2rem]'>
            <h2 className='text-[1rem] font-medium'>
                Seller assumes all responsibilities for this product.
            </h2>
            <div className="mt-[20px]">
                <p className='text-[1rem] mb-[20px] font-medium sm:flex sm:items-center sm:gap-x-[10px]'>
                    <MdOutlineDateRange className='text-[1.2rem] mb-[5px] md:mb-0' />
                    Order today to get by
                    <span className='border-b-[1.5px] border-dashed border-zinc-900 pb-[2px] ml-[5px] md:ml-0'>
                        10 Dec - 01 Jan
                    </span>
                </p>
                <p className='w-fit flex flex-col gap-y-[5px] border-b-[1.5px] border-dashed border-zinc-900 pb-[2px] pr-[10px] text-[1rem] font-medium mb-[20px] sm:flex-row sm:items-center sm:gap-x-[10px] sm:gap-y-0'>
                    <IoReturnDownBackOutline className='text-[1.2rem]' />
                    Returns & Exchanges not accepted
                </p>
                <p className='flex items-center gap-x-[10px] font-medium text-[1rem]'>
                    <MdLocalShipping className='text-[1.2rem]' />
                    Free shipping
                </p>

                <div className="mt-[2rem]">
                    <p className='text-[14px] flex flex-col gap-[5px] font-medium my-[10px] sm:flex-row sm:items-center'>
                        Product Location:
                        <span className='text-[13px] text-zinc-600 px-[10px] md:px-0'>
                            Mama Beach Village
                        </span>
                    </p>
                    <p className='text-[14px] flex flex-col gap-[5px] font-medium sm:flex-row sm:items-center'>
                        Delivery to:
                        <span className='text-[13px] text-zinc-600 px-[10px] md:px-0'>
                            Sierra Leone
                        </span>
                    </p>
                    
                </div>

                <div className="flex flex-col  gap-x-[1rem] bg-slate-200 p-[15px] rounded-md mt-[20px] md:flex-row md:items-center">
                    <FaHandshake className='text-[2rem] md:text-[4.1rem]' />
                    <p className='text-[13.5px] flex flex-col md:block md:text-[12.5px]'>
                        <span className='font-semibold mr-[5px]'>
                            eshop Purchase Protection:
                        </span>
                        Shop confidently on eshop knowing if something goes wrong with an order, we've got your back for all eligible purchases — see program terms
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShippingReturnsPayments