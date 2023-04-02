import React, { useEffect, useState } from 'react'
import { MdArrowDropDown, MdMyLocation } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const TopNav = () => {
    // Toggle Theme Dropdown
    const [dropTheme, setDropTheme] = useState(false);
    const [dropCurrency, setDropCurrency] = useState(false);
    // Toggle Theme State
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    );
    const element = document.documentElement;
    const options = [
        {
            icon: 'sunny',
            text: 'light'
        },
        {
            icon: 'moon',
            text: 'dark'
        },
        {
            icon: 'desktop-outline',
            text: 'system'
        },
    ]

    // On page load or when changing themes
    function onWindowWatch() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }

    onWindowWatch()

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;
            default:
                localStorage.removeItem('theme');
                onWindowWatch();
                break;
        }
    },[theme])

    return (
        <nav className='flex'>
            <ul className='w-full pt-2 pb-1 md:flex md:items-end md:justify-between md:pt-3 md:pb-4'>
                <div className="left hidden md:flex">
                    <p className='hidden text-[0.7rem] text-gray-500 font-thin lg:flex dark:text-slate-400'>Free Shipping Over $100 & Free Returns</p>
                    <li className='hidden md:flex items-center lg:hidden'>
                        <MdMyLocation className='hidden text-[1.1rem] text-gray-600 md:flex md:pr-[5px] dark:text-slate-400' />
                        <p className='hidden text-[10px] text-gray-500 md:flex lg:hidden dark:text-slate-400'>Sierra Leone</p>
                    </li>
                </div>
                <div className="top_right flex items-center justify-between md:w-fit">
                    <div className="mobile hidden md:flex">
                        <li className='hidden lg:flex lg:items-center'>
                            <MdMyLocation className='hidden text-[1.1rem] text-gray-600 lg:flex md:pr-[5px] dark:text-slate-400' />
                            <p className='hidden lg:flex dark:text-slate-400'>Sierra Leone</p>
                        </li>
                        <li>
                            <p className='hidden lg:flex dark:text-slate-400'>English</p>
                            <MdArrowDropDown className='hidden lg:flex dark:text-slate-400' />
                        </li>
                        <li className='relative'>
                            <p className='hidden lg:flex dark:text-slate-400'>USD</p>
                            <MdArrowDropDown
                                onClick={() => setDropCurrency(!dropCurrency)}
                                className='hidden lg:flex dark:text-slate-400 cursor-pointer'
                            />
                            {dropCurrency && (
                                <div className="w-[5rem] absolute top-8 right-0 bg-slate-50 px-4 py-1 z-30 drop-shadow-md rounded-md dark:bg-slate-800">
                                    <p className='text-[16px] my-2 dark:text-white'>LE</p>
                                    <p className='text-[16px] mb-2 dark:text-white'>USD</p>
                                </div>
                            )}
                        </li>
                    </div>
                    <Link to='/sell_on_e-shop' className='mr-0 md:ml-[2rem] lg:mr-0'>
                        <p className='dark:text-slate-400'>sell on e-shop</p>
                    </Link>
                    <li className='relative'>
                        {options?.map((opt) => (
                            theme === opt.text && (
                                <button
                                    key={opt.text}
                                    onClick={(e) => setDropTheme(!dropTheme)}
                                    className='text-[1.2rem] cursor-pointer dark:text-sky-600 leading-none'
                                >
                                    <ion-icon name={opt.icon}></ion-icon>
                                </button>
                            )
                        ))}
                    
                        {dropTheme && (
                            <div className="w-[11rem] dropTheme absolute top-8 right-0 bg-slate-50 px-4 py-1 z-30 drop-shadow-md rounded-md dark:bg-slate-800">
                                {options?.map((opt) => (
                                    <button
                                        onClick={() => [setTheme(opt.text), setDropTheme(false)]}
                                        key={opt.text} className='flex items-center cursor-pointer text-[16px] my-4 dark:text-white'
                                    >
                                        <ion-icon name={opt.icon}></ion-icon>
                                        <span className='text-[13px] font-normal ml-[9px] capitalize'>{opt.text}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default TopNav