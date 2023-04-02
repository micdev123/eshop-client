import React from 'react'
import { MdOutlineSecurity } from 'react-icons/md'

const PaymentMethod = () => {
    return (
        <div className='my-4'>
            <h2 className='text-[12px] font-medium mb-5'>
                Checkout | Shipping address | Payment Method
            </h2>
            <div className="container flex gap-7 bg-lighterBlue p-12 rounded-md my-3">
                <div className="left w-[70%]">
                    <div className="flex items-center justify-between">
                        <h2 className='text-[14px] font-medium'>Payment Method</h2>
                        <p className='flex items-center text-[13px] text-zinc-300'>
                            <MdOutlineSecurity  className='text-zinc-300'/>
                            Secure Server
                        </p>
                    </div>
                    <div className="left flex items-center mr-5">
                        <div className="w-[14px] h-[14px] rounded-full border border-slate-500 flex justify-center items-center">
                            <div></div>
                        </div>
                        <h2 className='text-[14px] font-medium ml-2'></h2>
                    </div>
                </div>
                <div className="right w-[30%]"></div>
            </div>
        </div>
    )
}

export default PaymentMethod