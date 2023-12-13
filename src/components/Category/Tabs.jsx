import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import throttle from 'lodash.throttle';

const Tabs = ({ category, setActiveSub_category }) => {
    //  Sub-categories Tabs Ref
    const tabSlideRef = useRef(null);
    const [targetSub_category, setTargetSub_category] = useState('all');

     // Sub-Categories Slider Buttons
    const slideNext = () => {
        tabSlideRef.current.scrollLeft += 200;
        // console.log(tabSlideRef.current.scrollLeft);
        // console.log(tabSlideRef.current.scrollWidth, tabSlideRef.current.clientWidth);
    }

    const slidePre = () => {
        tabSlideRef.current.scrollLeft -= 200;
    }
    // End of Header Slider

    // The handleScroll function is a throttled function that calculates whether the back and forward buttons should be visible based on the current scroll position (scrollLeft), the width of the visible area (clientWidth), and the total width of the scrollable content (scrollWidth).
    const handleScroll = throttle(() => {
        // Get the current scroll position, client width, and total scrollable width
        const scrollLeft = tabSlideRef.current.scrollLeft;
        const clientWidth = tabSlideRef.current.clientWidth;
        const scrollWidth = tabSlideRef.current.scrollWidth;

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
    }, 200); // Throttle interval in milliseconds

    // The useEffect hook is used to attach the scroll event listener when the component mounts.
    // It also handles cleanup by removing the event listener when the component unmounts.
    useEffect(() => {
        const currentRef = tabSlideRef.current;

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
        <div className="sub_categories_tabs w-[100%] flex items-center justify-between bg-zinc-100  relative dark:bg-zinc-800 dark:text-white">
            <div className="buttons flex items-center z-20">
                <button
                    id="backButton"
                    onClick={() => slidePre()}
                    className="hidden absolute left-0 px-[20px] h-[100%] bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 dark:bg-zinc-600 dark:text-white">
                    <IoIosArrowBack />
                </button>
                <button
                    id="forwardButton"
                    onClick={() => slideNext()}
                    className="absolute right-0 px-[20px] h-[100%] bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 dark:text-white">
                        <IoIosArrowForward />
                </button>
            </div>
            {/* Tab */}
            <div className="tabs flex items-center justify-between py-[8px] px-[15px] overflow-x-scroll scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[0px] scrollbar-h-[0px] scroll-smooth " ref={tabSlideRef}>
                <button
                    onClick={() => {
                        setTargetSub_category("all");
                        setActiveSub_category("all")
                    }}
                    className={`text-[13px] px-[1rem] rounded-md ${targetSub_category === 'all' && 'bg-zinc-800 text-white dark:bg-zinc-600 dark:text-white'}`}>
                    All
                </button>
                {category?.subCategories &&
                    category?.subCategories.map((subCat) => (
                        <button
                            onClick={() => {
                                setTargetSub_category(subCat?.slug)
                                setActiveSub_category(subCat?.slug)
                            }}
                            className={`min-w-fit text-[13px] mx-[1rem] px-[1rem] last:mx-0 outline-none border-0 rounded-md ${targetSub_category === subCat?.slug && 'bg-zinc-800 text-white'}`} key={subCat?.id}>
                            {subCat.name}
                        </button>
                ))}
            </div>
        </div>
    )
}

export default Tabs