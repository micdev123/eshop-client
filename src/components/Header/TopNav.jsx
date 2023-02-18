import React from 'react'
import { MdArrowDropDown, MdMyLocation } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';

const TopNav = () => {
    return (
        <nav className='flex'>
            <ul className='container flex items-end justify-between pt-3 pb-4'>
                <div className="left">
                    <p className='text-[0.7rem] text-gray-500 font-thin'>Free Shipping Over $100 & Free Returns</p>
                </div>
                <div className="top_right flex items-end">
                    <li className='flex items-center'>
                        <MdMyLocation className='pr-[5px] text-[1.1rem] text-gray-600' />
                        <p>Sierra Leone</p>
                    </li>
                    <li>
                        <p>English</p>
                        <MdArrowDropDown />
                    </li>
                    <li>
                        <p>USD</p>
                        <MdArrowDropDown />
                    </li>
                    <li>
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