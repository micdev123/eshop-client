import React, { useEffect, useRef, useState } from 'react'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { lastMinuteDeals } from '../../data';
import Deal from '../Deal';

let count = 0;
const LastMinuteDeals = () => {
    const [curr, setCurr] = useState(0);
    const lastMinuteRef = useRef(null);

    const removeAnimation = () => {
        lastMinuteRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        lastMinuteRef.current.addEventListener("animationend", removeAnimation);
        startSlider()
    }, [])

    const startSlider = () => {
        const slideInterval = setInterval(() => {
            handleNext()
        }, 3000)
        return () => clearInterval(slideInterval);
    }

    const handleNext = () => {
        count = (count + 1) % lastMinuteDeals.length;
        setCurr(count);
        lastMinuteRef.current.classList.add("fade-anim");
    }

     if (!lastMinuteDeals || !lastMinuteDeals.length) return null;
    return (
        <section className='my-7'>
            <div className="last_minute_deal_header flex items-center justify-between mb-[5px] dark:text-slate-200">
                <h2 className='text-[14px] font-medium text-black lg:text-[15px] dark:text-slate-200'>Last Minute Deals</h2>
                <div className="navigation flex items-center lg:hidden">
                    <BiLeftArrowCircle className='text-[1.1rem] mr-2' />
                    <BiRightArrowCircle className='text-[1.1rem]' />
                </div>
            </div>
            <div className="Deals flex items-center gap-2">
                <div className="deal_type w-[100vw] bg-lighterOrange flex items-center px-3 md:pl-8 lg:pr-2 dark:bg-gray-700 dark:text-slate-200">
                    <div className="left">
                        <div className="basic_text w-[11.5rem] pt-4 md:pt-8 md:w-[16rem]">
                            <h2 className='text-[1.1rem] font-semibold md:text-[1.3rem]'>Comfy styles for her</h2>
                            <p className='text-[11.5px] font-light flex items-end leading-[15px] my-2 md:text-[13px] md:leading-[17px]'>
                                Shop e-shop fashion including clothing, shoes, jewelry, watches, bags and more
                            </p>
                        </div>
                        <div className="deals flex items-center pt-4 md:pt-8" ref={lastMinuteRef}>
                            <div className="slider_deals flex items-center">
                                <Deal deal={lastMinuteDeals[curr]} />
                            </div>
                            <div className="next_slide">
                                <BiRightArrowCircle
                                    onClick={handleNext}
                                    className='text-[1.1rem] cursor-pointer'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right the_her_img w-[16rem] h-[12rem] md:h-[16rem]">
                        <img src="/assets/her.png" alt="the_her_img" className='w-[100%] h-[100%] object-contain'/>
                    </div>
                </div>

                 <div className="deal_type w-[100vw] bg-lighterBlue flex items-center px-3 md:pl-8 lg:pr-2 dark:bg-slate-800 dark:text-slate-200">
                    <div className="left">
                        <div className="basic_text w-[11.5rem] pt-4 md:pt-8 md:w-[16rem]">
                            <h2 className='text-[1.1rem] font-semibold md:text-[1.3rem]'>Comfy styles for him</h2>
                            <p className='text-[11.5px] font-light flex items-end leading-[15px] my-2 md:text-[13px] md:leading-[17px]'>
                                Shop e-shop fashion including clothing, shoes, jewelry, watches, bags and more
                            </p>
                        </div>
                        <div className="deals flex items-center pt-4 md:pt-8">
                           <div className="slider_deals flex items-center">
                                <Deal deal={lastMinuteDeals[curr]} />
                            </div>
                            <div className="next_slide">
                                <BiRightArrowCircle
                                    onClick={handleNext}
                                    className='text-[1.1rem] cursor-pointer'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="right the_him_img w-[16rem] h-[12rem] md:h-[16rem]">
                        <img src="/assets/him.png" alt="the_her_img" className='w-[100%] h-[100%] object-contain'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastMinuteDeals