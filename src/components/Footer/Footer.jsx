import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const { pathname } = useLocation();

    const isLoginOrRegisterPage = pathname === '/loginAuth' || pathname === '/registerAuth';
    
    return !isLoginOrRegisterPage && (
        <section className='footer mt-5'>
            {/* NewLetter Container */}
            <div className="top_newsletter  bg-slate-100 mb-2 rounded-md py-10 dark:bg-zinc-600 dark:text-slate-200">
                {/* NewLetter Content Container */}
                <div className="w-[90%] mx-auto flex items-center justify-between md:w-[80%]">
                    <div className="content">
                        <h2 className='font-medium text-[1.15rem] w-[18rem] md:text-[1.3rem] md:w-[22rem]'>
                            Stay home & get your daily needs | updates from our shop
                        </h2>
                        <p className='text-[11px] text-lightBlack mt-2 dark:text-slate-200 md:w-[22rem]'>
                            Get daily update. Be aware of all the discounts and big sales! Don't miss your benefits.
                        </p>
                        {/* New Letter Form */}
                        <form action="" className='mt-4'>
                            {/* Input */}
                            <input type="text" placeholder='Your email address' className='rounded-l-xl text-[11px] py-1.5 pl-4 pr-10 md:py-2 md:pr-12' />
                            {/* Submit Button */}
                            <button className='text-[10.5px] bg-amber-800 text-white py-1.5 px-2 rounded-r-xl md:text-[11px] md:py-2 md:px-4 dark:bg-amber-500'>
                                Subscribe
                            </button>
                        </form>
                    </div>
                    {/* NewLetter Image */}
                    <div className="img_newsletter hidden w-[13rem] h-[13rem] sm:block">
                        <img src="/assets/newsletter.png" alt=""  className='w-[100%] object-contain relative top-[-3rem]'/>
                    </div>
                </div>
            </div>

            {/* Footer Middle Container */}
            <div className="middle bg-lighterOrange mb-2 py-6 rounded-md dark:bg-zinc-700 dark:text-slate-200">
                {/* Links Container */}
                <div className="top_contents w-[90%] mx-auto grid grid-cols-2 gap-3 md:w-[80%] sm:flex items-start justify-between">
                    {/* Links */}
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

                    {/* Links */}
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

                    {/* Links */}
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

            {/* Footer Bottom Container */}
            <div className="bottom bg-lighterBlue mb-8 sm:mb-0 rounded-md dark:bg-zinc-800 dark:text-slate-200">
                <div className="bottom_content w-[90%] mx-auto flex items-center justify-between py-4 md:w-[80%]">
                    {/* Social Links */}
                    <div className="left flex">
                        <FaGithub className='text-[1rem] mr-[10px] sm:mr-2' />
                        <FaLinkedin className='text-[1rem] mr-[10px] sm:mx-2' />
                        <SiUpwork className='text-[1rem] mr-[10px] sm:mx-2' />
                        <BsTwitter className='text-[1rem] mr-[10px] sm:mx-2' />
                        <AiFillInstagram className='text-[1rem] mr-[10px] sm:mx-2' />
                    </div>
                    {/* CopyRight */}
                    <div className="right">
                        <p className='text-[11px] text-black font-medium sm:text-[12px] dark:text-slate-200'>&copy; e-shop 2023 | mic--dev</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer