import React from 'react'
import { MdArrowDropDown, MdMyLocation } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';

const TopNav = () => {
    return (
        <nav className='flex'>
            <ul className='w-full pt-2 pb-1 md:flex md:items-end md:justify-between md:pt-3 md:pb-4'>
                <div className="left hidden md:flex">
                    <p className='hidden text-[0.7rem] text-gray-500 font-thin lg:flex'>Free Shipping Over $100 & Free Returns</p>
                    <li className='hidden md:flex items-center lg:hidden'>
                        <MdMyLocation className='hidden text-[1.1rem] text-gray-600 md:flex md:pr-[5px]' />
                        <p className='hidden text-[10px] text-gray-500 md:flex lg:hidden'>Sierra Leone</p>
                    </li>
                </div>
                <div className="top_right flex items-end justify-between md:w-fit">
                    <div className="mobile hidden md:flex">
                        <li className='hidden lg:flex lg:items-center'>
                            <MdMyLocation className='hidden text-[1.1rem] text-gray-600 lg:flex md:pr-[5px]' />
                            <p className='hidden lg:flex'>Sierra Leone</p>
                        </li>
                        <li>
                            <p className='hidden lg:flex'>English</p>
                            <MdArrowDropDown className='hidden lg:flex' />
                        </li>
                        <li>
                            <p className='hidden lg:flex'>USD</p>
                            <MdArrowDropDown className='hidden lg:flex' />
                        </li>
                    </div>
                    <li className='mr-0 md:mr-3 lg:mr-0'>
                        <p>sell on e-shop</p>
                    </li>
                    <li>
                        <HiOutlineLightBulb className='text-[1.2rem]' />
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default TopNav