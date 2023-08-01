import React from 'react'

const FeaturedCategory = ({ category }) => {
    return (
        <>
           <div className="featured_category w-full sm:w-[70%] lg:max-w-[100%]">
                <h1 className='w-[75%] text-[20px] pt-4 uppercase font-semibold leading-[25px] sm:text-[20px] sm:w-[90%] sm:pt-0 md:w-full md:text-[22px]  lg:leading-[40px] lg:text-[32px]'>{category?.collection_name}</h1>
                <p className='w-[65%] text-[9.8px] leading-[15px] text-black font-normal my-2 sm:w-full sm:text-[14px] sm:leading-[20px]  sm:my-4 dark:text-slate-200'>
                    {category?.desc}
                </p>
                <button className='border-[1px] border-black border-solid rounded-[5px] text-[10px] font-medium py-[2px] px-[10px] sm:text-[12px] sm:py-[3px] sm:px-[10px] dark:text-slate-200 dark:border-white'>view more</button>
            </div> 
        </>
    )
}

export default FeaturedCategory