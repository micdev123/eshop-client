import React, { useEffect, useState } from 'react'

import { BsArrowRightCircle, BsDot } from 'react-icons/bs'
import { collectionProductSlider, categories } from '../../data'
import FeaturedCategory from './FeaturedCategory'
import FeaturedProduct from './FeaturedProduct'
import ProductSlider from './ProductSlider'

const HeaderBody = () => {
    const autoSlide = true;
    const autoSlideInterval = 14000

    // Slider state
    const [curr, setCurr] = useState(0);

    // Check if curr slide === the last slide set curr slide to first slide otherwise move to the next
    const next = () => setCurr(curr => curr === categories.length - 1 ? 0 : curr + 1)
   

    // Auto slide effect
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval) // When carousal unmount
    }, [])


   
    
    // console.log(product);
    return (
        <div className='bg-lighterBlue w-full rounded-[5px] py-4 pl-4 flex flex-col sm:justify-center lg:items-center lg:justify-between sm:py-10 sm:px-8 lg:flex-row lg:my-4 lg:mb-[4rem]  relative overflow-hidden dark:bg-slate-800 dark:text-slate-200'>
            <div className="dot_nav_btn hidden items-center justify-center sm:pr-8 lg:flex md:flex-col">
                {categories?.map((_, i) => (
                    <BsDot onClick={() => setCurr(i)} className={`text-[1.5rem] p-[2px] my-3 transition-all cursor-pointer ${curr === i ? 'border-2 border-amber-600 border-solid rounded-full text-amber-600' : 'text-lightBlack dark:text-gray-200' }`} key={i} />
                ))}
            </div>

            <div className="slider_container w-[100%] flex overflow-hidden">
                {categories?.map((collection) => (
                    <div className="slider min-w-[100%] flex flex-col lg:items-center lg:flex-row transition-transform ease-out duration-500 relative overflow-hidden" style={{ transform: `translateX(-${curr * 100}%)` }} key={collection?.id}>
                        <div className="left_header_body lg:w-[55%] z-0">
                            <FeaturedCategory category={collection} />
                        </div>
                        
                        <div className='lg:overflow-hidden mb-[1rem] w-[100%] lg:w-[60%]'>
                            <ProductSlider autoSlide={true}>
                                {collectionProductSlider?.filter((product) => product.category === collection.category)
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
                className="next_nav_btn hidden sm:pl-2 md:flex md:pl-3 absolute right-10 lg:static lg:pr-4"
            >
                <BsArrowRightCircle className='text-[1.2rem] font-thin text-gray-600 dark:text-gray-200' />
            </button>

            <div className="dot_nav_btn w-full flex items-center justify-center my-2 lg:my-0 lg:pr-8  lg:hidden">
                {categories?.map((_, i) => (
                    <BsDot onClick={() => setCurr(i)} className={`text-[1.5rem] p-[2px] my-3 transition-all cursor-pointer ${curr === i ? 'border-2 border-amber-600 border-solid rounded-full text-amber-600' : 'text-lightBlack' }`} key={i} />
                ))}
            </div>
        </div>
    )
}

export default HeaderBody