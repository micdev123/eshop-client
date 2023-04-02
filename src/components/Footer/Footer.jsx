import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

const Footer = () => {
    return (
        <section className='footer mt-5'>
            <div className="top_newsletter  bg-slate-100 mb-2 rounded-lg py-10">
                <div className="w-[80%] mx-auto flex items-center justify-between">
                    <div className="content">
                        <h2 className='font-medium text-[1.3rem] w-[22rem]'>Stay home & get your daily needs from our shop</h2>
                        <p className='text-[11px] text-lightBlack mt-2 dark:text-slate-200 w-[12rem]'>Get daily update | Start your daily shopping with e-shop</p>
                        <form action="" className='mt-4'>
                            <input type="text" placeholder='Your email address' className='rounded-l-xl text-[11px] py-2 pl-4 pr-14'/>
                            <button className='text-[11px] bg-amber-800 text-white py-2 px-4 rounded-r-xl'>Subscribe</button>
                        </form>
                    </div>
                    <div className="img_newsletter w-[9rem] h-[9rem]">
                        <img src="/assets/newsletter.png" alt=""  className='w-[100%] object-contain relative top-[-3rem]'/>
                    </div>
                </div>
            </div>
            <div className="middle bg-lighterOrange mb-2 py-6 dark:bg-gray-700 dark:text-slate-200">
                <div className="top_contents w-[90%] mx-auto grid grid-cols-2 gap-3 md:w-[80%] sm:flex items-start justify-between">
                    <div className="content">
                        <h2 className="text-[13px] text-black font-semibold dark:text-slate-200">Let us help you</h2>
                        <nav>
                            <ul>
                                <li>My Account</li>
                                <li>Track Your Order</li>
                                <li>Wishlist</li>
                                <li>Compare Products</li>
                                <li>Your Cart</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content">
                        <h2 className="text-[13px] text-black font-semibold dark:text-slate-200">Resources</h2>
                        <nav>
                            <ul>
                                <li>Customer Service</li>
                                <li>Gift Cards</li>
                                <li>Product Recalls</li>
                                <li>FAQ</li>
                                <li>Support</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content">
                        <h2 className="text-[13px] text-black font-semibold dark:text-slate-200">Categories</h2>
                        <nav>
                            <ul>
                                <li>Computers & Accessories</li>
                                <li>Beauty Picks</li>
                                <li>Video Games</li>
                                <li>Toys</li>
                                <li>Digital Books</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="bottom bg-lighterBlue mb-8 md:mb-0 dark:bg-slate-800 dark:text-slate-200">
                <div className="bottom_content w-[90%] mx-auto flex items-center justify-between py-4 md:w-[80%]">
                    <div className="left flex">
                        <FaGithub className='text-[1rem] mr-[10px] sm:mr-2' />
                        <FaLinkedin className='text-[1rem] mr-[10px] sm:mx-2' />
                        <SiUpwork className='text-[1rem] mr-[10px] sm:mx-2' />
                        <BsTwitter className='text-[1rem] mr-[10px] sm:mx-2' />
                    </div>
                    <div className="right">
                        <p className='text-[11px] text-black font-medium sm:text-[12px] dark:text-slate-200'>&copy; e-shop 2023 | mic--dev</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer