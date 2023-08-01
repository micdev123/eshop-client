import React, { useEffect, useState } from 'react'
import { MdArrowDropDown, MdMyLocation } from 'react-icons/md';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { GrMoney } from 'react-icons/gr'
import { Link, useLocation } from 'react-router-dom';
import { useGeoLocationStore } from '../../Store/GeoData/geoLocationStore';
import axios from 'axios';

const currencies = [
    {
        icon: '$',
        text: 'USD'
    },
    {
        icon: 'SLL',
        text: 'Leones'
    },
    
]



const TopNav = () => {
    const { pathname } = useLocation();
    // Toggle Theme Dropdown
    const [dropTheme, setDropTheme] = useState(false);
    const [dropCurrency, setDropCurrency] = useState(false);

    const { geoData, setGeoData } = useGeoLocationStore();
    // console.log(geoData);
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
    }, [theme])
    
    
    // Check if the current route is the loginAuth or registerAuth page
    const isLoginOrRegisterPage = pathname === '/loginAuth' || pathname === '/registerAuth';

    return !isLoginOrRegisterPage && (
        <nav className='flex'>
            <ul className='w-full pt-2 pb-1 md:flex md:items-center md:justify-between md:pt-3 md:pb-4'>
                <div className="left hidden md:flex">
                    <p className='hidden text-[0.6rem] font-medium text-gray-500 lg:flex dark:text-slate-400'>
                        Free Shipping Over $100 & Free Returns
                    </p>
                    <li className='hidden md:flex items-center lg:hidden'>
                        <MdMyLocation className='hidden text-[1rem] text-gray-600 md:flex md:pr-[5px] dark:text-slate-400' />
                        <p className=' text-[0.6rem] text-gray-500 md:flex lg:hidden dark:text-slate-400'>
                           {geoData[0]}
                        </p>
                    </li>
                </div>

                <div className="top_right flex items-center justify-between md:w-fit">
                    <div className="mobile hidden md:flex">
                        <li className=' lg:flex lg:items-center'>
                            <MdMyLocation className='lg:text-[0.95rem] text-gray-600 lg:flex md:pr-[5px] dark:text-slate-400' />
                            <p className='hidden lg:text-[0.2rem] lg:flex dark:text-slate-400'>
                                {geoData[0]}
                            </p>
                        </li>
                        <li className='relative'>
                            <p className='hidden lg:flex dark:text-slate-400'>USD</p>
                            <MdArrowDropDown
                                onClick={() => setDropCurrency(!dropCurrency)}
                                className='hidden lg:flex dark:text-slate-400 cursor-pointer'
                            />
                            {dropCurrency && (
                                <div className="">
                                    <div className="currency w-[14rem] absolute right-0 top-[1.4rem] bg-slate-50 py-2 px-3 rounded-md z-20">
                                        <div className="currency border-b-[1px] border-dashed border-slate-200 pb-1">
                                            <p className='text-[12px] font-medium mb-3 flex items-center gap-x-1'>
                                                <GrMoney className='text-[13px]' />
                                                Currency
                                            </p>
                                            
                                            <button
                                                type='button'
                                                onClick={() => setOpenSelect(!openSelect)}
                                                className='w-[100%] flex items-center justify-between cursor-pointer text-[12px] bg-zinc-50 py-[5px] px-[10px] border-[1px] border-slate-300 font-medium rounded-md'
                                            >
                                                <div className="flex items-center">
                                                    {currency} ({currency === 'USD' ? ('$') : ('SLL')})
                                                </div>
                                                <IoMdArrowDropdown className='text-[14px]' />
                                            </button>
                                            {openSelect && (
                                                <div className="px-4">
                                                    {currencies?.map((currency) => {
                                                        const { icon, text } = currency;
                                                        return (
                                                            <button
                                                                type='button'
                                                                onClick={() => [setCurrency(text), setOpenSelect(false)]}
                                                                key={text}
                                                                className={`w-[100%] flex items-center cursor-pointer text-[12px] my-3 font-medium`}
                                                            >
                                                                {text}
                                                                (
                                                                <span className='text-[11.5px] font-medium capitalize'>
                                                                {icon}
                                                                </span>
                                                                )
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                            )}
                                        </div>   
                                    </div>
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
                                    className='text-[1rem] cursor-pointer dark:text-sky-600 leading-none'
                                >
                                    <ion-icon name={opt.icon}></ion-icon>
                                </button>
                            )
                        ))}
                    
                        {dropTheme && (
                            <div className="w-[11rem] dropTheme absolute top-6 right-0 bg-zinc-100 px-4 py-1 z-30 shadow-sm rounded-md dark:bg-zinc-800">
                                {options?.map((opt) => (
                                    <button
                                        onClick={() => [setTheme(opt.text), setDropTheme(false)]}
                                        key={opt.text} className='flex items-center cursor-pointer text-[14px] my-4 dark:text-white'
                                    >
                                        <ion-icon name={opt.icon}></ion-icon>
                                        <span className='text-[12px] font-medium ml-[9px] capitalize'>{opt.text}</span>
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