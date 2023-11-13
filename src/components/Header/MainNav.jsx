import React, { useState } from 'react';
import { CgMenuGridO, CgMenuHotdog } from 'react-icons/cg'
import { BiLogOutCircle, BiSearchAlt } from 'react-icons/bi'
import { RiRefreshLine } from 'react-icons/ri'
import { MdArrowDropDown, MdOutlineFavoriteBorder } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { FiBox } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const MainNav = () => {
    const { pathname } = useLocation();

    const [menu, setMenu] = useState(false);
     // Check if the current route is the loginAuth or registerAuth page
    const isLoginOrRegisterPage = pathname === '/loginAuth' || pathname === '/registerAuth';
    
    return !isLoginOrRegisterPage && (
        <div className='w-full flex items-center justify-between pt-1 pb-4 relative dark:text-slate-200'>
            <nav className="main_nav_left flex">
                <Link to='/' className='mr-[0.3rem]'>
                    <h2 className='logo font-bold text-[1rem] md:text-[1.1rem] lg:text-[1.1rem]'>e-shop.</h2>
                </Link>
                <ul className='hidden md:flex items-center'>
                    <li className='hidden md:flex md:gap-x-1 md:items-center lg:mx-4'>
                        <CgMenuGridO className='hidden font-bold lg:flex' />
                        <p className='hidden lg:flex'> Shop Categories</p>
                        <MdArrowDropDown className='ml-2' />
                    </li>
                    <Link to='/sell_on_e-shop' className='mx-4'>
                        <p>Sell on e-shop</p>
                    </Link>
                </ul>
            </nav>

            <nav className="main_nav_right flex">
                <ul className='w-[100%] flex items-center justify-between fixed bottom-0 left-0 bg-gray-50 py-3 px-8 z-20 sm:hidden lg:flex lg:static lg:bg-transparent dark:bg-zinc-900'>
                    <li className='order-1 sm:order-none'>
                        <CgMenuGridO className='text-[1rem] lg:hidden' />
                    </li>

                    <li className='flex items-center gap-x-1 order-last sm:order-none lg:mx-4'>
                        <BiSearchAlt className='text-[0.9rem]' />
                        <p className='hidden text-[0.8rem] font-medium lg:text-[0.8rem] lg:flex'>Search</p>
                    </li>
                    <li className='hidden sm:order-none md:flex lg:mx-4'>
                        <RiRefreshLine className='text-[0.9rem]' />
                    </li>
                    <li className='order-3 sm:order-none  lg:mx-4'>
                        <MdOutlineFavoriteBorder className='text-[0.9rem]' />
                    </li>
                    <li className='order-4 sm:order-none lg:mx-4'>
                        <FiBox className='text-[0.9rem]'  />
                    </li>
                    <Link to='/loginAuth' className='order-2 sm:order-none lg:mx-4'>
                        <AiOutlineUser  className='text-[0.9rem]'/>
                    </Link>
                </ul>
                <Link to='/cart' className='flex items-center relative'>
                    <p className='text-[0.68rem] absolute bottom-[13.5px] left-[5px] font-bold text-red-800 lg:bottom-[23.5px] lg:text-[0.7rem] dark:text-amber-500'>0</p>
                    <BsCart4 className='font-[1.1rem]' />
                    <p className='w-[2px] h-[25px] bg-slate-900 mx-[5px] dark:bg-slate-200'></p>
                    <p className='text-[0.7rem] text-red-800 font-semibold dark:text-amber-500'>$0.00</p>
                </Link>
                <div className="menu_bar ml-3 lg:ml-0">
                    <CgMenuHotdog
                        onClick={(e) => setMenu(!menu)}
                        className='text-[1.2rem] lg:hidden cursor-pointer'
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            {menu && (
                <div className="mobile_nav scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[3px] bg-white p-5 w-[92%] h-[78vh] mx-auto fixed top-[5rem] left-0 right-0 rounded-md overflow-y-auto scroll-smooth drop-shadow-2xl z-20 md:hidden dark:bg-slate-800 dark:text-slate-200">
                    <div className="mobile_nav_head flex justify-between items-end border-b-2 pb-1 mb-2">
                        <div className='flex flex-col'>
                            <h2 className='text-[13px]'>Hello,</h2>
                            <p className='text-[13px] font-semibold'>Guest</p>
                        </div>
                        <button className='bg-amber-500 font-medium py-1 px-5 text-[11px] rounded-sm text-white'>Login</button>
                    </div>
                    <nav className='main_mobile_nav'>
                        <ul>
                            <li className='py-1 text-[13px]'>
                                <p>Products</p>
                            </li>
                            <li className='py-1 text-[13px]'>
                                <p>Today's Deals</p>
                            </li>
                            <li className='py-1 text-[13px]'>
                                <p>Sell on e-shop</p>
                            </li>
                        </ul>
                    </nav>
                    <nav className="categories_nav">
                        <h2 className='border-y-2 py-1 my-2 text-[13px] font-semibold'>Shop By Categories</h2>
                        <ul>
                            <li className='py-1 text-[13px]'>
                                <p>Beauty Picks</p>
                            </li>
                            <li className='py-1 text-[13px]'>
                                <p>Electronics</p>
                            </li>
                            <li className='py-1 text-[13px]'>
                                <p>Fashion</p>
                            </li>
                            <li className='py-1 text-[13px]'>
                                <p>Toys & Hobbies</p>
                            </li>
                            <li className='py-1 text-[13px]'>
                                <p>Digital Contents(Books)</p>
                            </li>
                            <li className='py-1 text-[13px]'>
                                <p>Health & Household</p>
                            </li>
                        </ul>
                    </nav>
                    <div className="mobile_nav_footer border-t-2 mt-2 py-1">
                        <p className='py-1 text-[13px]'>Your Account</p>
                        <div className="logout  mt-2 py-1 flex justify-center items-center bg-amber-900 text-white font-medium rounded-sm">
                            <BiLogOutCircle />
                            <p className='text-[14px] ml-2'>Logout</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MainNav