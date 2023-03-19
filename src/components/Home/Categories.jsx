import React, { useRef } from 'react'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { categories } from '../../data'

const Categories = () => {
    const categories_container = useRef(null) 

    const handleLeftSlide = (e) => {
        e.preventDefault();
        categories_container.current.scrollLeft -= categories_container.current.offsetWidth;
    }

    const handleRightSlide = (e) => {
        e.preventDefault();
        categories_container.current.scrollLeft += categories_container.current.offsetWidth;
    }

    if (!categories || !categories.length) return null;
    return (
        <section className='my-7'>
            <div className="categories_header flex items-center justify-between mb-[5px] dark:text-slate-200">
                <h2 className='text-[14px] font-medium text-black lg:text-[15px] dark:text-slate-200'>Shop by categories</h2>
                <div className="navigation flex items-center">
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

            <div className="categories_container min-w-[100%] flex items-center justify-between gap-2 overflow-auto scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[2px] scrollbar-h-[5px] scrollbar-track-rounded-md scrollbar-thumb-rounded-md scroll-smooth cursor-pointer md:gap-3" ref={categories_container}>
                {categories.map((category) => {
                    const { id, photo, collection_name } = category;
                    return (
                        <div key={id} className="category bg-lighterBlue w-[100%] min-h-[17rem] dark:bg-slate-800 dark:text-slate-200 md:min-h-[20rem]">
                            <div className="overflow-hidden w-[44vw] h-[19rem] md:w-[100%] ">
                                <div className="category_img w-[9rem]  h-[15rem] sm:w-[40vw] md:w-[30vw] lg:w-[100%] lg:h-[16rem]">
                                    <img src={photo} alt={collection_name} className="w-[100%] h-[90%] object-cover relative right-[-1rem] lg:right-[-5rem] lg:top-[1rem] lg:object-contain"/>
                                </div>
                                <h1 className='font-semibold text-[13px] py-4 px-4 lg:px-10'>{collection_name}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Categories