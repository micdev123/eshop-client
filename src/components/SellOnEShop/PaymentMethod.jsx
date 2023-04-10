import React, { useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { BsPaypal } from 'react-icons/bs'
import { MdOutlineSecurity } from 'react-icons/md'
import { SiVisa } from 'react-icons/si'

const payMethods = [
    {
        id: 1,
        type: 'Credit card',
        cards: ['/assets/visa.png', '/assets/mastercard.png']
    },
    {
        id: 2,
        type: 'PayPal',
        cards: ['/assets/paypal.png']
    }
]
const PaymentMethod = () => {
    const [isSelected, setIsSelected] = useState(-1)
    return (
        <>
            {/* Left Side contains payment method */}
            <div className="left w-[100%] sm:w-[55%] md:w-[40%]">
                {/* Payment Methods */}
                <div className="payment_methods">
                    {payMethods?.map((method, index) => {
                        const { id, type, cards } = method;
                        return (
                            <div
                                onClick={() => setIsSelected(index)}
                                key={id} className={`method w-[100%] flex gap-4 items-center justify-between bg-zinc-50 py-4 px-4 shadow-sm border rounded-md mb-2 cursor-pointer md:px-6 dark:bg-gray-800 dark:border-slate-700 ${isSelected === index && ('border-2 border-sky-500')}`}>
                                <div className="left flex items-center mr-5">
                                    <div className="w-[14px] h-[14px] rounded-full border border-slate-500 flex justify-center items-center">
                                        <div className={`w-[8px] h-[8px] scale-0 bg-sky-700 rounded-full ${isSelected === index && ('scale-100')}`}></div>
                                    </div>
                                    <h2 className='text-[13px] font-medium ml-2 md:text-[14px]'>{type}</h2>
                                </div>
                                <div className="payment_method flex gap-4 items-center justify-center">
                                    {cards?.map((card, i) => (
                                        <div key={i} className="mastercard w-[1.2rem] h-[1.2rem]">
                                            <img src={card} alt={card} className='w-[100%] h-[100%] object-contain' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* Right Side */}
            <div className="right w-[100%] sm:w-[65%] md:w-[60%]">
                <div className="right_container w-[100%] bg-zinc-50 border shadow-sm rounded-md py-4 px-3 mx:px-4 dark:bg-gray-800 dark:border-slate-700">
                    <div className="head flex flex-col items-center justify-between mb-5 md:flex-row ">
                        <h2 className='text-[15px] font-medium md:text-[16px]'>
                            Subscription Plan - 12 Months
                        </h2>
                        <div className="prices flex items-center mt-3 md:mt-0">
                            <p className="original_price line-through text-[11px] text-slate-300 mr-2">$143.88</p>
                            <p className="discount_price text-[13px] font-medium md:text-[14px]">$35.88</p>
                        </div>
                    </div>
                    {/* Address */}
                    <select name="" id="" className='w-[100%] py-2 px-3 text-[12px] border rounded-md mb-4 dark:bg-slate-700 dark:border-slate-600'>
                        <option value="">Sierra Leone</option>
                        <option value="">Australia</option>
                    </select>
                    {/* Other */}
                    <div className="others">
                        <div className="plan_discount flex items-center justify-between mb-3">
                            <p className='text-[13px] font-medium'>
                                Plan discount - 75% off
                            </p>
                            <p className='text-[13px] font-medium'>$108.00</p>
                        </div>
                    </div>

                    <div className="total flex items-center justify-between border-t-[1.5px] border-slate-300 pt-2">
                        <h2 className='text-[15px] font-medium'>Total : </h2>
                        <div className="prices flex items-center">
                            <p className='original_total line-through text-[11px] text-slate-300 mr-2'>
                                $154.27
                            </p>
                            <p className='discount_total text-[15px] font-medium'>
                                $39.47
                            </p>
                        </div>
                    </div>

                    {/* Card Information */}
                    <div className="payment_form w-[100%] mt-7 mb-2">
                        {/* Card Name, Card Number */}
                        <div className="card_name_card_number w-[100%] flex flex-col gap-2 my-3 md:flex-row">
                            {/* Card Namr */}
                            <input type="text" placeholder='Name on card' className='w-[100%] border rounded-md py-2 px-3 text-[12px] md:w-[50%] dark:bg-slate-700 dark:border-slate-600' />
                            {/* Card Number */}
                            <input type="text" placeholder='0000 0000 0000 0000' className='w-[100%] border rounded-md py-2 px-3 text-[12px] md:w-[50%] dark:bg-slate-700 dark:border-slate-600' />
                        </div>

                        {/* Card Expire Date, Card CVC Number */}
                        <div className="card_expire_date_cvc_number w-[100%] flex flex-col gap-2 my-3 md:flex-row">
                            {/* Card Expire Date */}
                            <input type="text" placeholder='MM | YY' className='w-[100%] border rounded-md py-2 px-3 text-[12px] md:w-[50%] dark:bg-slate-700 dark:border-slate-600' />
                            {/* Card CVC Number */}
                            <input type="text" placeholder='CVC code' className='w-[100%] border rounded-md py-2 px-3 text-[12px] md:w-[50%] dark:bg-slate-700 dark:border-slate-600' />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="info">
                        <p className='flex items-center text-[12px] text-zinc-500 font-medium my-1 md:text-[13px]'>
                            <BiTimeFive className='text-[14px] mr-2 md:text-[15px]' />
                            30-Day Money-Back Guarantee
                        </p>
                        <p className='flex items-center text-[12px] text-zinc-500 font-medium my-1 md:text-[13px]'>
                            <MdOutlineSecurity className='text-[14px] mr-2 md:text-[15px]' />
                            Encrypted and Secure Payments
                        </p>

                        <p className='text-[11px] mt-4 md:text-[12px]'>
                            By checking out you agree with our
                            <span className='text-amber-600 font-medium dark:text-amber-500'>
                                Terms of Service
                            </span>.
                            Your personal information will be processed by us in accordance with our <span className='text-amber-600 font-medium dark:text-amber-500'>
                                Privacy Policy
                            </span>
                            for the fulfillment of your purchase and other uses. Recurring payments can be stopped at any moment.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethod