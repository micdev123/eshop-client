import React, { useEffect, useRef, useState } from 'react'
import { FaStoreAlt } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = ({ category }) => {
    // Header Slider Ref
    const slideRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent(curr => (curr + 1) % category?.photos.length);
    // Header Slider
    const autoSlide = true;
    const autoSlideInterval = 2000;

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval) // When carousal unmount
    }, [autoSlide, category.photos])
    return (
         <div className="head w-[100%] flex flex-col items-center gap-y-[2rem]  md:flex-row md:gap-x-[5rem] md:gap-y-0">
            {/* Category Contents */}
            <div className="category-content w-[100%] md:w-[55%]">
                {/* Category Name */}
                <p className='text-[10px] w-fit bg-zinc-200 py-[2px] px-[7px] font-medium'>
                    {category?.collection_name}
                </p>

                {/* Category Title */}
                <h2 className='text-[1.3rem] font-medium mb-2'>
                    {category?.title}
                </h2>

                {/* Category info */}
                <p className='text-[13px]'>
                    {category?.info_1}
                </p>

                {/* Create a campaign btn */}
                <Link to='/sell_on_e-shop'
                    className=" w-fit text-[10px] py-[7px] px-[1rem] font-medium rounded-sm border-0 bg-zinc-700 text-white mb-1 flex items-center gap-x-2 mt-4">
                    <FaStoreAlt className='text-[15px]' />
                    Sell on e-shop.
                </Link>
            </div>

            {/* Category Image */}
            <div className="image w-[100%] h-[25rem] flex flex-col  bg-gradient-to-b from-slate-200 to-zinc-50 rounded-md p-[2rem] md:w-[45%]">
                <div className="w-[100%] h-[100%] flex overflow-hidden bg-gradient-to-b from-slate-200 to-zinc-50">
                    <div className="slide-in-right w-[100%] h-[100%] transition-transform linear duration-500 relative" ref={slideRef} >
                        <img src={category?.photos && category?.photos[current]} alt="" className=' w-[100%] h-[100%] object-cover rounded-md absolute right-0' />
                    </div>
                </div>
                
                <div className="flex items-center justify-center mt-[1rem]">
                    {category.photos && category?.photos.map((_, index) => (
                        <BsDot
                            onClick={() => setCurrent(index)}
                            className={`text-[1.3rem] cursor-pointer ${current === index ? 'text-amber-600' : 'text-lightBlack dark:text-gray-200'}`}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header