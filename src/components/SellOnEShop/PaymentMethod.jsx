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
            <div className="left w-[40%]">
                <div className="payment_methods">
                    {payMethods?.map((method, index) => {
                        const { id, type, cards } = method;
                        return (
                            <div
                                onClick={() => setIsSelected(index)}
                                key={id} className={`method flex gap-4 items-center justify-between bg-zinc-50 py-4 px-6 shadow-sm border rounded-md mb-2 cursor-pointer ${isSelected === index && ('border-2 border-sky-500')}`}>
                                <div className="left flex items-center mr-5">
                                    <div className="w-[14px] h-[14px] rounded-full border border-slate-500 flex justify-center items-center">
                                        <div className={`w-[8px] h-[8px] scale-0 bg-sky-700 rounded-full ${isSelected === index && ('scale-100')}`}></div>
                                    </div>
                                    <h2 className='text-[14px] font-medium ml-2'>{type}</h2>
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

            <div className="right w-[70%] ">
                <div className="right_container w-[100%] bg-zinc-50 border shadow-sm rounded-md p-4">
                    <div className="head flex items-center justify-between mb-5">
                        <h2 className='text-[16px] font-medium'>
                            Subscription Plan - 12 Months
                        </h2>
                        <div className="prices flex items-center">
                            <p className="original_price line-through text-[11px] text-slate-300 mr-2">$143.88</p>
                            <p className="discount_price text-[14px] font-medium">$35.88</p>
                        </div>
                    </div>

                    <select name="" id="" className='w-[100%] py-2 px-3 text-[12px] border rounded-md mb-4'>
                        <option value="">Sierra Leone</option>
                        <option value="">Australia</option>
                    </select>
                    
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

                    <div className="payment_form w-[100%] mt-7 mb-2">
                        <div className="card_name_card_number w-[100%] flex gap-2 my-3">
                            <input type="text" placeholder='Name on card' className='w-[50%] border rounded-md py-2 px-3 text-[12px]' />
                            <input type="text" placeholder='0000 0000 0000 0000' className='w-[50%] border rounded-md py-2 px-3 text-[12px]' />
                        </div>

                        <div className="card_expire_date_cvc_number w-[100%] flex gap-2 my-3">
                            <input type="text" placeholder='MM | YY' className='w-[50%] border rounded-md py-2 px-3 text-[12px]'  />
                            <input type="text" placeholder='CVC code' className='w-[50%] border rounded-md py-2 px-3 text-[12px]' />
                        </div>
                    </div>

                    <div className="info">
                        <p className='flex items-center text-[13px] text-zinc-500 font-medium my-1'>
                            <BiTimeFive className='text-[15px] mr-2' />
                            30-Day Money-Back Guarantee
                        </p>
                        <p className='flex items-center text-[13px] text-zinc-500 font-medium my-1'>
                            <MdOutlineSecurity className='text-[15px] mr-2' />
                            Encrypted and Secure Payments
                        </p>

                        <p className='text-[12px] mt-4'>
                            By checking out you agree with our <span className='text-amber-600 font-medium'>Terms of Service</span>. Your personal information will be processed by us in accordance with our <span className='text-amber-600 font-medium'>Privacy Policy</span> for the fulfillment of your purchase and other uses. Recurring payments can be stopped at any moment.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethod