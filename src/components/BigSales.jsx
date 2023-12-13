import React, { useEffect, useRef } from 'react'
import { products } from '../data'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import throttle from 'lodash.throttle';

const BigSales = () => {
    const slideRef = useRef(null);

     // Sub-Categories Slider Buttons
    const slideNext = () => {
        slideRef.current.scrollLeft += 1000;
    }

    const slidePre = () => {
        slideRef.current.scrollLeft -= 1000;
    }
    // End of Header Slider

    // The handleScroll function is a throttled function that calculates whether the back and forward buttons should be visible based on the current scroll position (scrollLeft), the width of the visible area (clientWidth), and the total width of the scrollable content (scrollWidth).
    const handleScroll = throttle(() => {
        // Get the current scroll position, client width, and total scrollable width
        const scrollLeft = slideRef.current.scrollLeft;
        const clientWidth = slideRef.current.clientWidth;
        const scrollWidth = slideRef.current.scrollWidth;

        // Calculate whether to show or hide the buttons based on scroll position
        const isBackButtonVisible = scrollLeft >= 20;
        const isForwardButtonVisible = scrollLeft < scrollWidth - clientWidth - 20;

        // Set the visibility of the buttons using DOM manipulation
        const backButton = document.getElementById('backButton');
        const forwardButton = document.getElementById('forwardButton');

        // Update the visibility of the back button based on the calculated condition
        if (backButton) {
            backButton.style.display = isBackButtonVisible ? 'block' : 'none';
        }

        // Update the visibility of the forward button based on the calculated condition
        if (forwardButton) {
            forwardButton.style.display = isForwardButtonVisible ? 'block' : 'none';
        }
    }, 400); // Throttle interval in milliseconds

    // The useEffect hook is used to attach the scroll event listener when the component mounts.
    // It also handles cleanup by removing the event listener when the component unmounts.
    useEffect(() => {
        const currentRef = slideRef.current;

        if (currentRef) {
            // Attach the scroll event listener when component mounts
            currentRef.addEventListener('scroll', handleScroll);
        }
        
        // Clean up the scroll event listener when component unmounts
        return () => {
            currentRef.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='bg-lighterOrange p-[2rem] flex items-center relative'>
            <div className="buttons flex items-center z-20">
                <button
                    id="backButton"
                    onClick={() => slidePre()}
                    className=" absolute left-0 px-[20px] h-[100%] bg-gradient-to-r from-lighterOrange to-lighterOrange dark:bg-zinc-600 dark:text-white"
                >
                    <p className='border-[1px] border-zinc-700 rounded-full p-[2px]'>
                        <IoIosArrowBack className='text-[13px]' />
                    </p>
                </button>
                <button
                    id="forwardButton"
                    onClick={() => slideNext()}
                    className="absolute right-0 px-[20px] h-[100%] bg-gradient-to-r from-lighterOrange to-lighterOrange dark:from-zinc-800 dark:to-zinc-900 dark:text-white"
                >
                    <p className='border-[1px] border-zinc-700 rounded-full p-[2px]'>
                        <IoIosArrowForward className='text-[13px]' />
                    </p>     
                </button>
            </div>
            <div className="flex items-center justify-between gap-x-[2rem] px-[15px] overflow-x-scroll scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[0px] scrollbar-h-[0px] scroll-smooth" ref={slideRef}>
                {products.filter((product) => product?.discount > 0)?.map((product) => (
                    <div className="min-w-fit flex items-center gap-x-[5px]" key={product?.id}>
                        <div className="img w-[3.5rem] h-[3.5rem]">
                            <img src={product?.product_img} alt={product?.product_name} className='w-[100%] h-[100%] object-contain' />
                        </div>
                        <div className="">
                            <h2 className='font-medium text-[12px]'>
                                {product?.product_name}
                            </h2>
                            <p className='text-[10px] text-zinc-500'>
                                Big Sale {product?.discount}%
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BigSales