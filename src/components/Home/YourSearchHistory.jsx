import React, { useRef } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { FaHandPointDown } from 'react-icons/fa'
import { products } from '../../data'
import Product from '../Product'
import { Link } from 'react-router-dom'
import { MdNavigateNext } from 'react-icons/md'

const YourSearchHistory = () => {
    const recentViewedProducts = [];
    const recentViewed = useRef(null);
    
    function getRecentViewedProducts() {
        // Target the main
        for (let i = 0; i < products.length; i++) {
            if (products[i].level[0] === 'recentViewed' || products[i].level[1] === 'recentViewed') {
                recentViewedProducts[i] = products[i];
            }
        }
        return recentViewedProducts;
    }
    getRecentViewedProducts()

    
    const handleLeftSlide = (e) => {
        e.preventDefault();
        recentViewed.current.scrollLeft -= recentViewed.current.offsetWidth;
    }
    const handleRightSlide = (e) => {
        e.preventDefault();
        recentViewed.current.scrollLeft += recentViewed.current.offsetWidth;
    }


    if (!recentViewedProducts || !recentViewedProducts.length) return null;
    return (
        <section className='my-[3rem] mb-4'>
            <div className="your_search_history_header flex items-center justify-between mb-[10px] dark:text-slate-200">
                <h2 className='flex items-center text-[14px] font-medium text-black lg:text-[15px] dark:text-slate-200'>
                    Guest, your recently viewed
                    <FaHandPointDown className='text-amber-500 ml-2' />
                </h2>
                <div className="navigation flex items-center">
                    <GrFormPrevious
                        onClick={handleLeftSlide}
                        className='text-[1.1rem] mr-2 cursor-pointer'
                    />
                    <MdNavigateNext
                        onClick={handleRightSlide}
                        className='text-[1.1rem] cursor-pointer'
                    />
                </div>
            </div>
            <div className="recentViewed flex gap-2 overflow-auto scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[2px] scrollbar-h-[3px] scrollbar-track-rounded-md scrollbar-thumb-rounded-md scroll-smooth cursor-pointer pb-1" ref={recentViewed}>
               {products.slice(0, 12).map((product) => (
                   <div className="min-w-fit bg-lighterBlue py-4 relative rounded-md  dark:bg-zinc-800 dark:text-slate-200 transition-transform ease-out duration-500 sm:min-w-[12.5rem] md:min-w-[15rem]" key={product?.id}>
                       <Product product={product} key={product?.id} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default YourSearchHistory