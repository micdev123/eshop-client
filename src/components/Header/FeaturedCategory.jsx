import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedCategory = ({ category }) => {
    return (
        <div className="featured_category w-full sm:w-[70%] lg:w-[80%]">
            <Link to={`/category/${category?.slug}`} className="category">
                <h1 className='w-[75%] text-[20px] pt-4 uppercase font-semibold leading-[25px] sm:text-[20px] sm:w-[90%] sm:pt-0 md:w-full md:text-[22px] lg:leading-[40px] lg:text-[30px]'>
                    {category?.collection_name}
                </h1>
                <p className='w-[70%] text-[9.8px] leading-[15px] text-black font-normal my-2 sm:w-full sm:text-[14px] sm:leading-[20px]  sm:my-4 dark:text-slate-200'>
                    {category?.info_1}
                </p>
            </Link>
            <Link to={`/category/${category?.slug}`}
                className='hidden text-[12px] py-[5px] px-[25px] bg-zinc-800 text-white rounded-sm outline-none border-0 md:block w-fit'
            >
                Explore
            </Link>
        </div> 
        
    )
}

export default FeaturedCategory