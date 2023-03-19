import React, { useEffect, useRef } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaHandPointRight } from 'react-icons/fa'
import { products } from '../../data';

const HeaderFooter = () => {
    const autoSlide = false;
    const autoSlideInterval = 1000;

    const lastMinuteProducts = [];
    const lastMinute = useRef(null);
    
    function getLastMinuteProducts() {
        // Target the main
        for (let i = 0; i < products.length; i++) {
            if (products[i].level[0] === 'lastMinute' || products[i].level[1] === 'lastMinute' || products[i].level[2] === 'lastMinute') {
                lastMinuteProducts[i] = products[i];
            }
        }
        return lastMinuteProducts;
    }
    getLastMinuteProducts()

    useEffect(() => {
        startSlider()
    }, [])

    const startSlider = () => {
        setInterval(() => {
            handleNext()
        }, 1000)
    }
    const handleNext = () => {
        // e.preventDefault();
        lastMinute.current.scrollLeft += lastMinute.current.offsetWidth;
        // console.log(lastMinuteRef.current.offsetWidth);
    }

 

    if (!lastMinuteProducts || !lastMinuteProducts.length) return null;
    return (
        <div className='hidden min-w-[100%] bg-lighterOrange lg:flex items-center justify-between py-3 pl-5 pr-7 my-2 dark:bg-gray-700 dark:text-slate-200 relative'>
            <div className="min-w-[40%] static_part flex items-center mr-4">
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
                        <p className='text-[10px] text-lightBlack dark:text-slate-400'>View your orders</p>
                    </div>
                </div>
            </div>

            <div className="w-full z-0 overflow-auto" ref={lastMinute}>
                <div className="slider_part flex gap-3 items-center justify-between overflow-hidden lg:w-[180%]" >
                    {lastMinuteProducts?.map((product) => (
                        <div className="item flex items-center" key={product?.id}>
                            <div className=" max-w-[3rem] max-h-[3rem]">
                                <img src={product?.product_img} alt="electronic" className='object-contain w-[100%]'/>
                            </div>
                            <div className="basic_text ml-2">
                                <p className='text-[12px] font-semibold capitalize'>{product.category}</p>
                                <p className='text-[10px] text-lightBlack dark:text-slate-400'>Big sale 30%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="next_nav_btn pl-3 pr-1  z-10 ">
                <BsArrowRightCircle
                    onClick={handleNext}
                    className='text-[1.2rem] font-thin text-gray-600 cursor-pointer dark:text-slate-200'
                />
            </div>
        </div>
    )
}

export default HeaderFooter