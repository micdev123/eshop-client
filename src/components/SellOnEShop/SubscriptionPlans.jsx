import React, { useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'


const plans = [
    {
        id: 1,
        duration: '1',
        title: 'Standard',
        original_price: 5.99,
        discount_price: null,
        features: ['A week of featured products', 'List your products', 'Vendor protection', 'Free 100 listing each month'],
        renew_price: 5.99
    },
    {
        id: 2,
        duration: '12',
        title: 'Ultimate',
        original_price: 3.99,
        discount_price: null,
        features: ['A week of featured products', 'List your products', 'Vendor protection', 'Free 250 listing each month'],
        renew_price: 4.99
    }
]
const SubscriptionPlans = () => {
    const [isSelected, setIsSelected] = useState(-1)
    return (
        <>
            <div className="plans w-[100%] flex flex-col gap-3 sm:flex-row md:flex-col">
                {plans?.map((plan, index) => {
                    const { id, duration, title, original_price, discount_price, features, renew_price } = plan;
                    return (
                        <div
                            onClick={() => setIsSelected(index)}
                            key={id} className={`plan bg-zinc-50 p-4 rounded-md drop-shadow-sm border mb-3 cursor-pointer w-[100%] dark:bg-gray-800 dark:border-slate-700 ${isSelected === index && ('border-2 border-sky-500')}`}>
                            <h2 className='text-[14px] font-medium text-center mb-5 md:text-[15px]'>
                                {duration} {Number(duration) === 1 ? 'Month' : 'Months'}
                            </h2>
                            <div className="head flex justify-between items-center mb-3">
                                <div className="left flex items-center gap-2">
                                    <div className="w-[14px] h-[14px] rounded-full border border-slate-500 flex justify-center items-center">
                                        <div className={`w-[8px] h-[8px] scale-0 bg-sky-700 rounded-full ${isSelected === index && ('scale-100')}`}></div>
                                    </div>
                                    <h2 className='text-[15px] font-medium md:text-[17px]'>{title}</h2>
                                </div>
                                <p className='text-[15px] font-semibold md:text-[17px]'>${original_price} <span className='font-light text-[12px]'>/mo</span></p>
                            </div>
                            <div className="body">
                                <ul>
                                    {features?.map((feature , i) => (
                                        <li key={i} className='text-[12px] flex items-center mt-2 md:text-[13px]'>
                                            <BsCheck2Circle className='mr-2' />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className='text-[11px] font-light text-center mt-4 md:text-[12px]'>
                                Plan renew at
                                <span className='font-medium text-[13px]'>${renew_price}</span>
                                /mo on 25/04/23
                            </p>
                        </div>
                    )
                })}
                
            </div>
        </>
    )
}

export default SubscriptionPlans