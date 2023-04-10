import React, { useRef } from 'react'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { FaHandPointDown } from 'react-icons/fa'
import { products } from '../../data'
import Product from '../Product'
import { Link } from 'react-router-dom'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { TbBookmarkOff, TbEyeCheck } from 'react-icons/tb'
import { BsHandbag } from 'react-icons/bs'
import Stars from '../Stars'

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
        <section className='mt-7 mb-4'>
            <div className="your_search_history_header flex items-center justify-between mb-[5px] dark:text-slate-200">
                <h2 className='flex items-center text-[14px] font-medium text-black lg:text-[15px] dark:text-slate-200'>
                    Guest, your recently viewed
                    <FaHandPointDown className='text-amber-500 ml-2' />
                </h2>
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
            <div className="recentViewed flex gap-2 overflow-auto scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[2px] scrollbar-h-[5px] scrollbar-track-rounded-md scrollbar-thumb-rounded-md scroll-smooth cursor-pointer" ref={recentViewed}>
                <Link to={`/product/${1}`} className="product bg-lighterBlue py-4 relative rounded-md dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                    <div className="percent_discount_best_seller hidden items-center mb-2 px-3 md:flex">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                            30%
                        </p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Selling</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder className='my-2 text-[14px]' />
                        <div className="icons lg:hidden">
                            <TbBookmarkOff className='my-2 text-[14px]' />
                            <TbEyeCheck className='my-2 text-[14px]' />
                            <BsHandbag className='my-2 text-[14px]' />
                        </div>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto flex justify-center items-center md:w-[12rem] md:h-[10rem]">
                        <img src='/assets/kitchen.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                    </div>
                    <div className="basic_text max-w-[12rem] px-4 mt-2">
                        <div className="brand py-2">
                            <h2 className='text-[0.65rem] font-semibold text-amber-600 dark:text-amber-500 md:text-[0.7rem]'>
                                araimo
                            </h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[12.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200 md:text-[13.5px]'>
                                Decent Ashes Soup Pan
                            </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <Stars stars={3} />
                            </div>
                            <div className="review hidden ml-3 md:block">
                                <p className='text-[11px] text-lightBlack dark:text-slate-200'>
                                    100 reviews
                                </p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>
                                $200
                            </p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>$200</p>
                        </div>
                    </div>
                </Link>

                <Link to={`/product/${1}`} className="product bg-lighterBlue py-4 relative rounded-md dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                    <div className="percent_discount_best_seller hidden items-center mb-2 px-3 md:flex">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                            30%
                        </p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Selling</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder className='my-2 text-[14px]' />
                        <div className="icons lg:hidden">
                            <TbBookmarkOff className='my-2 text-[14px]' />
                            <TbEyeCheck className='my-2 text-[14px]' />
                            <BsHandbag className='my-2 text-[14px]' />
                        </div>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto flex justify-center items-center md:w-[12rem] md:h-[10rem]">
                        <img src='/assets/kitchen.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                    </div>
                    <div className="basic_text max-w-[12rem] px-4 mt-2">
                        <div className="brand py-2">
                            <h2 className='text-[0.65rem] font-semibold text-amber-600 dark:text-amber-500 md:text-[0.7rem]'>
                                araimo
                            </h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[12.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200 md:text-[13.5px]'>
                                Decent Ashes Soup Pan
                            </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <Stars stars={3} />
                            </div>
                            <div className="review hidden ml-3 md:block">
                                <p className='text-[11px] text-lightBlack dark:text-slate-200'>
                                    100 reviews
                                </p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>
                                $200
                            </p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>$200</p>
                        </div>
                    </div>
                </Link>

                <Link to={`/product/${1}`} className="product bg-lighterBlue py-4 relative rounded-md dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                    <div className="percent_discount_best_seller hidden items-center mb-2 px-3 md:flex">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                            30%
                        </p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Selling</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder className='my-2 text-[14px]' />
                        <div className="icons lg:hidden">
                            <TbBookmarkOff className='my-2 text-[14px]' />
                            <TbEyeCheck className='my-2 text-[14px]' />
                            <BsHandbag className='my-2 text-[14px]' />
                        </div>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto flex justify-center items-center md:w-[12rem] md:h-[10rem]">
                        <img src='/assets/kitchen.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                    </div>
                    <div className="basic_text max-w-[12rem] px-4 mt-2">
                        <div className="brand py-2">
                            <h2 className='text-[0.65rem] font-semibold text-amber-600 dark:text-amber-500 md:text-[0.7rem]'>
                                araimo
                            </h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[12.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200 md:text-[13.5px]'>
                                Decent Ashes Soup Pan
                            </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <Stars stars={3} />
                            </div>
                            <div className="review hidden ml-3 md:block">
                                <p className='text-[11px] text-lightBlack dark:text-slate-200'>
                                    100 reviews
                                </p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>
                                $200
                            </p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>$200</p>
                        </div>
                    </div>
                </Link>

                <Link to={`/product/${1}`} className="product bg-lighterBlue py-4 relative rounded-md dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                    <div className="percent_discount_best_seller hidden items-center mb-2 px-3 md:flex">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                            30%
                        </p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Selling</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder className='my-2 text-[14px]' />
                        <div className="icons lg:hidden">
                            <TbBookmarkOff className='my-2 text-[14px]' />
                            <TbEyeCheck className='my-2 text-[14px]' />
                            <BsHandbag className='my-2 text-[14px]' />
                        </div>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto flex justify-center items-center md:w-[12rem] md:h-[10rem]">
                        <img src='/assets/kitchen.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                    </div>
                    <div className="basic_text max-w-[12rem] px-4 mt-2">
                        <div className="brand py-2">
                            <h2 className='text-[0.65rem] font-semibold text-amber-600 dark:text-amber-500 md:text-[0.7rem]'>
                                araimo
                            </h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[12.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200 md:text-[13.5px]'>
                                Decent Ashes Soup Pan
                            </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <Stars stars={3} />
                            </div>
                            <div className="review hidden ml-3 md:block">
                                <p className='text-[11px] text-lightBlack dark:text-slate-200'>
                                    100 reviews
                                </p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>
                                $200
                            </p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>$200</p>
                        </div>
                    </div>
                </Link>

                <Link to={`/product/${1}`} className="product bg-lighterBlue py-4 relative rounded-md dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                    <div className="percent_discount_best_seller hidden items-center mb-2 px-3 md:flex">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                            30%
                        </p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Selling</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder className='my-2 text-[14px]' />
                        <div className="icons lg:hidden">
                            <TbBookmarkOff className='my-2 text-[14px]' />
                            <TbEyeCheck className='my-2 text-[14px]' />
                            <BsHandbag className='my-2 text-[14px]' />
                        </div>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto flex justify-center items-center md:w-[12rem] md:h-[10rem]">
                        <img src='/assets/kitchen.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                    </div>
                    <div className="basic_text max-w-[12rem] px-4 mt-2">
                        <div className="brand py-2">
                            <h2 className='text-[0.65rem] font-semibold text-amber-600 dark:text-amber-500 md:text-[0.7rem]'>
                                araimo
                            </h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[12.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200 md:text-[13.5px]'>
                                Decent Ashes Soup Pan
                            </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <Stars stars={3} />
                            </div>
                            <div className="review hidden ml-3 md:block">
                                <p className='text-[11px] text-lightBlack dark:text-slate-200'>
                                    100 reviews
                                </p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>
                                $200
                            </p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>$200</p>
                        </div>
                    </div>
                </Link>

                <Link to={`/product/${1}`} className="product bg-lighterBlue py-4 relative rounded-md dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                    <div className="percent_discount_best_seller hidden items-center mb-2 px-3 md:flex">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                            30%
                        </p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Selling</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder className='my-2 text-[14px]' />
                        <div className="icons lg:hidden">
                            <TbBookmarkOff className='my-2 text-[14px]' />
                            <TbEyeCheck className='my-2 text-[14px]' />
                            <BsHandbag className='my-2 text-[14px]' />
                        </div>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto flex justify-center items-center md:w-[12rem] md:h-[10rem]">
                        <img src='/assets/kitchen.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                    </div>
                    <div className="basic_text max-w-[12rem] px-4 mt-2">
                        <div className="brand py-2">
                            <h2 className='text-[0.65rem] font-semibold text-amber-600 dark:text-amber-500 md:text-[0.7rem]'>
                                araimo
                            </h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[12.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200 md:text-[13.5px]'>
                                Decent Ashes Soup Pan
                            </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <Stars stars={3} />
                            </div>
                            <div className="review hidden ml-3 md:block">
                                <p className='text-[11px] text-lightBlack dark:text-slate-200'>
                                    100 reviews
                                </p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>
                                $200
                            </p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>$200</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default YourSearchHistory