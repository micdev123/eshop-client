import React from 'react'
import { HiOutlineGift, HiOutlineTruck } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi'
import { TbDiscount2 } from 'react-icons/tb'
import { BsCreditCard } from 'react-icons/bs';

const Offers = () => {
    return (
        <section className='mb-6 hidden lg:block dark:text-slate-200'>
            <div className="offers flex items-center justify-between px-8 dark:text-slate-200">
                <div className="offer flex items-center">
                    <HiOutlineTruck className="text-[1.8rem] mr-[7px]"/>
                    <div className="basic_text">
                        <h2 className="font-semibold text-[13px] py-1">Free shipping</h2>
                        <p className="text-[10px] text-lightBlack dark:text-slate-400">For all order over $100</p>
                    </div>
                </div>

                <div className="offer flex items-center">
                    <BiSupport className="text-[1.8rem] mr-[7px]"/>
                    <div className="basic_text">
                        <h2 className="font-semibold text-[13px] py-1">support 24/7</h2>
                        <p className="text-[10px] text-lightBlack dark:text-slate-400">Shop with an expert</p>
                    </div>
                </div>

                <div className="offer flex items-center">
                    <TbDiscount2 className="text-[1.8rem] mr-[7px]"/>
                    <div className="basic_text">
                        <h2 className="font-semibold text-[13px] py-1">Affordable</h2>
                        <p className="text-[10px] text-lightBlack dark:text-slate-400">Get factory direct price</p>
                    </div>
                </div>

                <div className="offer flex items-center">
                    <HiOutlineGift className="text-[1.8rem] mr-[7px]"/>
                    <div className="basic_text">
                        <h2 className="font-semibold text-[13px] py-1">Daily surprise offers</h2>
                        <p className="text-[10px] text-lightBlack dark:text-slate-400">save up to 25% off</p>
                    </div>
                </div>

                <div className="offer flex items-center">
                    <BsCreditCard className="text-[1.8rem] mr-[7px]"/>
                    <div className="basic_text">
                        <h2 className="font-semibold text-[13px] py-1">Secure Payment</h2>
                        <p className="text-[10px] text-lightBlack dark:text-slate-400">100% protected payment</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers