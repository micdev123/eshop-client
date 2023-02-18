import React from 'react';
import { CgMenuGridO } from 'react-icons/cg'
import { BiSearchAlt } from 'react-icons/bi'
import { RiRefreshLine } from 'react-icons/ri'
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';

const MainNav = () => {
    return (
        <div className='container flex items-center justify-between pt-2 pb-4'>
            <nav className="main_nav_left flex">
                <ul className='flex items-center'>
                    <li className='mr-[1.2rem]'>
                        <h2 className='font-bold text-[1.2rem]'>e-shop.</h2>
                    </li>
                    <li className='flex items-center mx-4'>
                        <CgMenuGridO className='font-bold' />
                        <p> Shop Categories</p>
                    </li>
                    <li className='mx-4'>
                        <p>Products</p>
                    </li>
                    <li className='mx-4'>
                        <p>Sell on e-shop</p>
                    </li>
                </ul>
            </nav>

            <nav className="main_nav_right flex">
                <ul className='flex items-center'>
                    <li className='flex items-center mx-4'>
                        <BiSearchAlt />
                        <p className='text-[0.9rem] font-medium'>Search</p>
                    </li>
                    <li className='mx-4'>
                        <RiRefreshLine />
                    </li>
                    <li className='mx-4'>
                        <MdOutlineFavoriteBorder />
                    </li>
                    <li className='mx-4'>
                        <AiOutlineUser />
                    </li>
                    <li className='flex items-center relative'>
                        <p className='text-[0.7rem] absolute bottom-[15px] left-[5px] font-bold text-red-800'>0</p>
                        <BsCart4 className='font-[1.1rem]' />
                        <p className='w-[2px] h-[25px] bg-slate-900 mx-[5px]'></p>
                        <p className='text-[0.7rem] text-red-800 font-semibold'>$0.00</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNav