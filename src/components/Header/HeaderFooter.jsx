import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaHandPointRight } from 'react-icons/fa'

const HeaderFooter = () => {
    return (
        <div className='hidden bg-lighterOrange lg:flex items-center justify-between py-3 pl-5 pr-7 my-2'>
            <div className="max-w-[40%] static_part flex items-center mr-4">
                <div className="the_user w-[55%] flex items-center">
                    <div className="user_img max-w-[4rem] max-h-[4rem]">
                        <img src="/assets/user.png" alt="user" className='max-w-[100%] object-contain' />
                    </div>
                    <div className="basic_text ml-1">
                        <p className='text-[12px] font-semibold'>
                            Hello, Guest recommendation for you <span><FaHandPointRight className='text-amber-500 text-[0.8rem]' /></span>
                        </p>
                    </div>
                </div>
                <div className="the_user_orders flex items-center">
                    <div className="order_img max-w-[5rem] max-h-[5rem]">
                        <img src="/assets/order.png" alt="order" className='max-w-[100%] object-cover' />
                    </div>
                    <div className="basic_text">
                        <p className='text-[12px] font-semibold'>Your Orders</p>
                        <p className='text-[10px] text-lightBlack'>View your orders</p>
                    </div>
                </div>
            </div>
            <div className="slider_part flex items-center">
                <div className="item flex items-center mx-4">
                    <div className=" max-w-[4rem] max-h-[4rem]">
                        <img src="/assets/electronic.png" alt="electronic" />
                    </div>
                    <div className="basic_text ml-2">
                        <p className='text-[12px] font-semibold'>Electronic</p>
                        <p className='text-[10px] text-lightBlack'>Big sale 30%</p>
                    </div>
                </div>
                <div className="item flex items-center mx-4">
                    <div className="item_img max-w-[4rem] max-h-[4rem]">
                        <img src="/assets/kitchen.png" alt="kitchen" />
                    </div>
                    <div className="basic_text ml-2">
                        <p className='text-[12px] font-semibold'>Home & Kitchen</p>
                        <p className='text-[10px] text-lightBlack'>Big sale 30%</p>
                    </div>
                </div>
                <div className="item flex items-center mx-4">
                    <div className="item_img max-w-[4rem] max-h-[4rem]">
                        <img src="/assets/foot_wear.png" alt="foot_wear" />
                    </div>
                    <div className="basic_text ml-2">
                        <p className='text-[12px] font-semibold'>Foot Wear</p>
                        <p className='text-[10px] text-lightBlack'>Big sale 30%</p>
                    </div>
                </div>
            </div>
            <div className="next_nav_btn pl-2 pr-2">
                <BsArrowRightCircle className='text-[1.2rem] font-thin text-gray-600' />
            </div>
        </div>
    )
}

export default HeaderFooter