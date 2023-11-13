import React, { useEffect, useState } from 'react'

import { BsArrowRightCircle, BsDot } from 'react-icons/bs'
import { collectionProductSlider, categories } from '../../data'
import FeaturedCategory from './FeaturedCategory'
import FeaturedProduct from './FeaturedProduct'
import ProductSlider from './ProductSlider'

const HeaderBody = () => {
    const autoSlide = true;
    const autoSlideInterval = 15000

    // Slider state
    const [current, setCurrent] = useState(0);
   
    const [categories_, setCategories_] = useState([]); // State to store the filtered category slugs

    useEffect(() => {
        const matchingCategorySlugs = categories.filter((category) => collectionProductSlider.some((product) => product.category === category.slug)).map((category) => category);

        // Update the state to store the matching category slugs
        setCategories_(matchingCategorySlugs);
    
    }, []);

    // console.log("categories_:", categories_);
    
    // Check if curr slide === the last slide set curr slide to first slide otherwise move to the next
    const next = () => setCurrent(curr => curr === categories_.length - 1 ? 0 : curr + 1);

    // Auto slide effect
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval) // When carousal unmount
    }, [autoSlide, categories_])



    return (
        <div className='bg-lighterBlue w-full rounded-[5px] py-4 pl-4 flex flex-col sm:justify-center lg:items-center lg:justify-between sm:py-10 sm:px-8 lg:flex-row lg:my-4 lg:mb-[4rem] lg:gap-x-[1rem]  relative overflow-hidden dark:bg-zinc-800 dark:text-slate-200'>
            {/* Dot Navigators */}
            <div className="dot_nav_btn hidden items-center justify-center sm:pr-5 lg:flex lg:flex-col">
                {categories_.length > 0 && categories_?.map((_, i) => (
                    <BsDot onClick={() => setCurrent(i)} className={`text-[1.5rem] p-[2px] my-3 transition-all cursor-pointer ${current === i ? 'border-2 border-amber-600 border-solid rounded-full text-amber-600' : 'text-lightBlack dark:text-gray-200' }`} key={i} />
                ))}
            </div>

            {/* Slider Container */}
            <div className="slider_container w-[100%] flex items-center justify-between overflow-hidden">
                {categories_.length > 0 && categories_?.map((collection) => (
                    <div className="slider min-w-[100%] flex flex-col justify-between md:items-center md:flex-row transition-transform ease-out duration-500 relative overflow-hidden" style={{ transform: `translateX(-${current * 100}%)` }} key={collection?.id}>
                        <div className="left_header_body md:min-w-[45%] z-0 lg:w-[50%]">
                            <FeaturedCategory category={collection} />
                        </div>
                        
                        <div className='relative right-[-0.5rem] lg:overflow-hidden mb-[1rem] w-[100%] md:min-w-[70%] sm:right-0 md:right-[-1rem] lg:w-[50%] lg:right-[-5rem]'>
                            <ProductSlider autoSlide={true}>
                                {collectionProductSlider?.filter((product) => product.category === collection.slug)
                                .map(filtered => (
                                    <FeaturedProduct product={filtered}  key={filtered.id}/>
                                ))}
                            </ProductSlider>
                            
                        </div>
                    </div>
                ))}
            </div>
            
            <button
                onClick={next}
                className="next_nav_btn hidden sm:pl-2 lg:flex md:pl-3 absolute right-10 lg:static lg:pr-4"
            >
                <BsArrowRightCircle className='text-[1.2rem] font-thin text-gray-600 dark:text-gray-200' />
            </button>

            {/* Small Screens */}
            <div className="dot_nav_btn w-full flex items-center justify-center my-2 lg:my-0 lg:pr-8  lg:hidden">
                {categories_?.map((_, i) => (
                    <BsDot onClick={() => setCurrent(i)} className={`text-[1.5rem] p-[2px] my-3 transition-all cursor-pointer ${current === i ? 'border-2 border-amber-600 border-solid rounded-full text-amber-600' : 'text-lightBlack' }`} key={i} />
                ))}
            </div>
        </div>
    )
}

export default HeaderBody