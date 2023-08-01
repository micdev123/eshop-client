import React, { useEffect, useRef, useState } from 'react'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { dealTypes, lastMinuteDeals } from '../../data';
import Deal from '../Deal';

let count = 0;
const LastMinuteDeals = () => {
    const [leftCurr, setLeftCurr] = useState(0);
    const [rightCurr, setRightCurr] = useState(0);
    const leftLastMinuteRef = useRef(null);
    const rightLastMinuteRef = useRef(null);

    const deals_container = useRef(null) 

    const slideIntervals = useRef([]);
    // const lastMinute_container = useRef(null)

    const removeAnimation = () => {
        leftLastMinuteRef.current.classList.remove("fade-anim");
        rightLastMinuteRef.current.classList.remove("fade-anim");
    };

    // Set up slide intervals dynamically based on the number of sliders (2 in this case: left and right)
    useEffect(() => {
        leftLastMinuteRef.current.addEventListener("animationend", removeAnimation);
        rightLastMinuteRef.current.addEventListener("animationend", removeAnimation);
        
        slideIntervals.current = [
            setInterval(() => {
                handleNext(0);
            }, 4000),
            setInterval(() => {
                handleNext(1);
            }, 4000)
        ];

        // Clean up intervals when the component unmounts
        return () => {
            slideIntervals.current.forEach((interval) => clearInterval(interval));
        };
    }, [])

    const handleNext = (index) => {
        // console.log(index);
        if (index === 0) {
            const herFilter = lastMinuteDeals.filter((deal) => deal?.dealType === 'her' || deal?.dealType === 'both').length;
            setLeftCurr((leftCurr) => (leftCurr + 1) % herFilter);
            leftLastMinuteRef.current.classList.add("fade-anim");
        }
        else {
            const himFilter = lastMinuteDeals.filter((deal) => deal?.dealType === 'him' || deal?.dealType === 'both').length;
            setRightCurr((rightCurr) => (rightCurr + 1) % himFilter);
            rightLastMinuteRef.current.classList.add("fade-anim");
        }
        // console.log(index);
        
    }
    

    const handleLeftSlide = () => {
        deals_container.current.scrollLeft -= deals_container.current.offsetWidth;
        // console.log(deals_container);
    }

    const handleRightSlide = () => {
        deals_container.current.scrollLeft += deals_container.current.offsetWidth;
        // console.log(deals_container);
    }

    if (!dealTypes || !dealTypes.length) return null;

    if (!lastMinuteDeals || !lastMinuteDeals.length) return null;
    return (
        <section className='my-[3rem] w-[100%]'>
            <div className="last_minute_deal_header flex items-center justify-between mb-[10px] dark:text-slate-200">
                <h2 className='text-[14px] font-medium text-black lg:text-[15px] dark:text-slate-200'>Last Minute Deals</h2>
                <div className="navigation flex items-center xl:hidden">
                    <BiLeftArrowCircle
                        onClick={handleLeftSlide}
                        className='text-[1.1rem] mr-2 cursor-pointer'
                    />
                    <BiRightArrowCircle
                        onClick={handleRightSlide}
                        className='text-[1.1rem] cursor-pointer'
                    />
                </div>
            </div>
            <div className="deals_container min-w-[100%] flex items-center gap-2 overflow-auto scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[2px] scrollbar-h-[3px] scrollbar-track-rounded-md scrollbar-thumb-rounded-md scroll-smooth cursor-pointer pb-1" ref={deals_container}>
                {dealTypes.length > 0 && dealTypes?.map((dealType, index) => {
                    const { id, dealFor, img } = dealType;
                    const currDeals = index === 0 ? lastMinuteDeals.filter((deal) => deal?.dealType === dealFor || deal?.dealType === 'both')[leftCurr] : lastMinuteDeals.filter((deal) => deal?.dealType === dealFor || deal?.dealType === 'both')[rightCurr];
                    return (
                        <div className={`deal_type w-[100%]  flex items-center px-3 rounded-md md:pl-8 lg:pr-2  dark:text-slate-200 ${index === 1 ? 'bg-lighterBlue dark:bg-zinc-800' : 'bg-lighterOrange dark:bg-zinc-700'}`} key={id}>
                            <div className="left">
                                <div className="basic_text w-[11.5rem] pt-4 md:pt-8 md:w-[16rem]">
                                    <h2 className='text-[1.1rem] font-semibold md:text-[1.3rem]'>
                                        Comfy styles for {dealType?.dealFor}
                                    </h2>
                                    <p className='text-[11.5px] font-light flex items-end leading-[15px] my-2 md:text-[13px] md:leading-[17px]'>
                                        {dealType?.desc}
                                    </p>
                                </div>
                                <div className="deals flex items-center pt-4 md:pt-8" ref={index === 0 ? leftLastMinuteRef : rightLastMinuteRef}>
                                    <div className="slider_deals flex items-center">
                                        <Deal
                                            deal={currDeals}
                                        />
                                    </div>
                                    <div className="next_slide">
                                        <BiRightArrowCircle
                                            onClick={() => handleNext(index)}
                                            className='text-[1.1rem] cursor-pointer'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="right the_her_img w-[16rem] h-[12rem] md:h-[16rem]">
                                <img src={img} alt={`the_${dealFor}_img`} className='w-[100%] h-[100%] object-contain' />
                            </div>
                        </div>
                    )
                })}

            
            </div>
        </section>
    )
}

export default LastMinuteDeals