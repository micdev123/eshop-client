import React, { useEffect, useRef, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { FaHandPointDown } from 'react-icons/fa'
import { MdFavoriteBorder, MdOutlineFavoriteBorder, MdReply, MdReport, MdShare } from 'react-icons/md'
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
import { TbBookmarkOff, TbEyeCheck } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'
import { products } from '../data'
import Product from '../components/Product'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoClose, IoSparklesSharp } from "react-icons/io5";
import throttle from 'lodash.throttle'
import ProductInfo from '../components/SinglePageProduct/ProductInfo'
import BuyNowContainer from '../components/SinglePageProduct/BuyNowContainer'
import ProductTabsAndTabContent from '../components/SinglePageProduct/ProductTabsAndTabContent'

const images = [
    '/assets/pp8.png',
    '/assets/pp9.png',
    '/assets/pp12.png',
    '/assets/pp12.png',
    '/assets/pp12.png',
]


const SingleProduct = () => {
    const [showAbout, setShowAbout] = useState(false);
    const [showBuyNow, setShowBuyNow] = useState(false);
    const relatedContainerRef = useRef(null)

    const handleLeftSlide = (e) => {
        e.preventDefault();
        relatedContainerRef.current.scrollLeft -= 150;
    }
    const handleRightSlide = (e) => {
        e.preventDefault();
        relatedContainerRef.current.scrollLeft += 150;
    }

    const handleScroll = throttle(() => {
        // Get the current scroll position, client width, and total scrollable width

        const scrollContentLeft = relatedContainerRef.current.scrollLeft;
        const contentClientWidth = relatedContainerRef.current.clientWidth;
        const contentScrollWidth = relatedContainerRef.current.scrollWidth;

        // Calculate whether to show or hide the buttons based on scroll position;

        const isBackButtonVisible = scrollContentLeft >= 15;
        const isForwardButtonVisible = scrollContentLeft < contentScrollWidth - contentClientWidth - 15;

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
        const currentRef = relatedContainerRef.current

        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll)
        }
        
        // Clean up the scroll event listener when component unmounts
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);
    return (
        <div className="relative" >
            <div className={`overlay ${showAbout && "bg-zinc-700 opacity-[0.55] w-[100%] h-[100%] fixed top-0 left-0 right-0 z-10"} md:bg-transparent`}></div>
            <div className={`${showAbout && 'fixed w-[100%] h-[100vh]'} md:static md:h-[100%]`}>
                <div className="header flex justify-between items-center my-4 dark:text-slate-200">
                    <p className='text-[13px] font-medium'>Home | Product_name</p>
                    <div className="btns flex items-center gap-2">
                        <button className='flex items-center gap-1 text-[11px] font-medium uppercase'>
                            <FiArrowLeftCircle className='text-[13px]' />
                            Previous
                        </button>
                        <p>|</p>
                        <button className='flex items-center gap-1 text-[11px] font-medium uppercase'>
                            Next
                            <FiArrowRightCircle className='text-[13px]' />
                        </button>
                    </div>
                </div>
                {/* The Single Product */}
                <div className="top bg-zinc-100 px-4 py-6 flex flex-col gap-[2rem] items-start rounded-md sm:px-[2rem] md:px-4 md:flex-row  dark:bg-zinc-800 dark:text-slate-200">
                    {/* Product Image Content | Product Information | Vendor Information | Customer Reviews | Discussion */}
                    <div className="left_product_img w-[100%] lg:w-[55%]">
                        {/* Current Image */}
                        <div className="current_img w-[100%] border rounded-md dark:border-slate-700">
                            <img src="/assets/pp8.png" alt="" className='w-[100%] object-contain'/>
                        </div>
                        {/* Product Image List */}
                        <div className="product_imgs mt-3 flex gap-3 justify-center">
                            {images?.map(img => (
                                <div key={img} className="img w-[3rem] h-[3rem] border dark:border-slate-700">
                                    <img src={img} alt="" className='object-contain'/>
                                </div>
                            ))}
                        </div>
                        <div className={`hidden w-[100%]  border-t-[1px] my-[2rem] py-[25px] z-40 md:px-0 md:py-[10px] md:block`}>
                            <ProductTabsAndTabContent />
                        </div>
                    </div>
                    {/* Product Text Content |  */}
                    <div className="right_product_contents w-[100%] lg:w-[52%]">
                        {/* Product Text Contents Container */}
                        <div className="right_container w-[100%]">
                            {/* Product Text Contents */}
                            <ProductInfo showAbout={showAbout} setShowAbout={setShowAbout} />

                            {/* Actions Buttons | Add to cart, Buy now, Add to wishlist, and Share */}
                            <div className="buttons w-[100%]  items-center">
                                {/* Add to cart | Buy now */}
                                <div className="flex flex-col-reverse gap-3 items-center mb-2 lg:flex-row">
                                    {/* Add to cart */}
                                    <button className='w-[100%] bg-slate-800 text-white py-[9px] lg:w-fit lg:py-1 lg:px-4 rounded-xl text-[12px] capitalize dark:bg-slate-700'>
                                        Add to cart
                                    </button>

                                    {/* Buy now */}
                                    <button
                                        onClick={() => setShowBuyNow(!showBuyNow)}
                                        className='w-[100%] bg-amber-800 text-white py-[9px] lg:w-fit lg:py-1 lg:px-4 rounded-xl text-[12px] capitalize dark:bg-amber-500'
                                    >
                                        Buy now
                                    </button>
                                </div>
                                {/* Add to wishlist | Share */}
                                <div className="share_wishlist flex justify-center items-center gap-4 lg:justify-start">
                                    {/* Add to wishlist */}
                                    <p className='flex items-center text-[13px]'>
                                        <MdFavoriteBorder className='mr-1' />
                                        Add to wishlist
                                    </p>
                                    {/* Share */}
                                    <p className='text-[13px] flex items-center'>
                                        <MdShare className='mr-1' />
                                        Share
                                    </p>
                                </div>  
                            </div>
                            
                            {/* Buy now container */}
                            {showBuyNow ? (
                                <BuyNowContainer />
                            ) : null}
                            <div className="flex items-center gap-[10px] text-[12px] mt-[10px] md:w-[80%]">
                                <IoSparklesSharp className='text-[2rem]' />
                                <p>
                                    <span className='font-semibold'>Star Seller.</span> This seller consistently earned 5-star reviews, shipped on time, and replied quickly to any messages they received.
                                </p>
                            </div>
                            
                        </div>
                        {/* <div className="payment_method flex gap-4 items-center justify-center mt-4">
                            <BsPaypal className='text-[16px]' />
                            <FaStripe className='text-[16px]' />
                            <SiVisa className='text-[16px]' />
                            <div className="mastercard">
                                <img src="/assets/mastercard.png" alt="" />
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Single Product Bottom */}
                <div className="bottom mt-3">
                    {/* Reviews | Comment */}
                    <div className="reviews bg-lighterBlue rounded-md py-4 lg:py-5  dark:bg-zinc-800 dark:text-slate-200">
                        <div className="container_ w-[90%] mx-auto">
                            <div className="main_head flex flex-col items-center justify-between mb-7 sm:flex-row">
                                <h2 className='text-[14px] font-medium'>Customer Reviews | Feedbacks</h2>
                                {/* Review Button */}
                                <button className='text-[11px] border-[1.8px] border-slate-700 rounded-md py-0.5 px-4 outline-none mt-2 lg:mt-0 dark:border-slate-600'>
                                    Write a review
                                </button>
                            </div>
                            
                            {/* Review Container */}
                            <div className="reviews_container px-1 lg:px-5">
                                {/* Single Review */}
                                <div className="review mb-3">
                                    {/* Review Header */}
                                    <div className="review_head flex items-end justify-between border-b-2 pb-1 mb-2">
                                        <div className="top flex items-center">
                                            {/* Reviewer Image */}
                                            <div className="reviewer_img w-[2rem] h-[2rem] mr-2">
                                                <img src="/assets/user.png" alt="" className='w-[100%] object-contain' />
                                            </div>
                                            {/* Right Side :: Contains Reviewer Name, Rating */}
                                            <div className="right">
                                                {/* Reviewer Name */}
                                                <h2 className='reviewer_handle text-[12px] font-medium text-lightBlack dark:text-slate-200'>
                                                    Michael
                                                </h2>
                                                {/* Rating */}
                                                <div className="rating flex items-center">
                                                    <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                                    <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                                    <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                                    <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Date */}
                                        <p className='text-[12px] text-lightBlack dark:text-slate-200'>
                                            4 months ago
                                        </p>
                                    </div>
                                    {/* Review Body */}
                                    <div className="review_body px-1 lg:px-3">
                                        {/* Review Content */}
                                        <p className='text-[14px]'>Cool product.</p>
                                        {/* Actions */}
                                        <div className="reply_btns flex items-center gap-3 justify-start sm:justify-end mt-2">
                                            <p className='flex items-center text-[12px]'>
                                                <MdReply className='text-[14px] mr-1' />
                                                Reply
                                            </p>
                                            <p className='flex items-center text-[12px]'>
                                                <MdReport className='text-amber-700 text-[14px] mr-1' />
                                                Report
                                            </p>
                                        </div>
                                    </div>
                                    {/* Reply Body */}
                                    <div className="reply_body"></div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    {/* More from this store */}
                    <div className="product_from_store mt-[5rem]">
                        <div className="related_product_head flex items-center justify-between mb-3">
                            <div className="flex items-center">
                                <h2 className='text-[16px] font-medium dark:text-slate-200'>More from this store</h2>
                                <FaHandPointDown className='text-amber-500 ml-1' />
                            </div>
                            <button className='text-[12px] border-[1px] py-[4px] px-[10px] rounded-md dark:border-zinc-100 dark:text-white'>
                                See <span>10+</span> more
                            </button>
                        </div>
                        
                        <div className="store_products_container grid grid-cols-2 md:flex gap-2 justify-between">
                            <div className="product bg-lighterBlue p-4 relative dark:bg-zinc-800 dark:text-slate-200 transition-transform ease-out duration-500">
                                <div className="percent_discount_best_seller flex items-center mb-2">
                                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                                        20%
                                    </p>
                                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>
                                        Best Seller
                                    </p>
                                </div>
                                <div className="the_icons absolute top-2 right-2">
                                    <MdOutlineFavoriteBorder className='my-2' />
                                    <div className="icons lg:hidden">
                                        <TbBookmarkOff className='my-2' />
                                        <TbEyeCheck className='my-2' />
                                        <BsHandbag className='my-2' />
                                    </div>
                                </div>
                                <div className="product_img w-[9rem] h-[10rem] mx-auto">
                                    <img src='/assets/pp9.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                                </div>
                                <div className="basic_text max-w-[12rem]">
                                    <div className="brand py-2">
                                        <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>Classique</h2>
                                    </div>
                                    <div className="product_name">
                                        <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>Keener All Wood Round Dining Table</h2>
                                    </div>
                                    <div className="rating_review flex items-center py-1.5 my-[5px]">
                                        <div className="rating flex items-center text-[12px]">
                                            <Stars stars={4} />
                                        </div>
                                        <div className="review hidden ml-3 md:flex">
                                            <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                        </div>
                                    </div>
                                    <div className="price flex items-center">
                                        <p className='font-semibold text-[14px] mr-3'>$100</p>
                                        <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>120</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="product bg-lighterBlue p-4 relative dark:bg-zinc-800 dark:text-slate-200 transition-transform ease-out duration-500">
                                <div className="percent_discount_best_seller flex items-center mb-2">
                                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                                        20%
                                    </p>
                                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>
                                        Best Seller
                                    </p>
                                </div>
                                <div className="the_icons absolute top-2 right-2">
                                    <MdOutlineFavoriteBorder className='my-2' />
                                    <div className="icons lg:hidden">
                                        <TbBookmarkOff className='my-2' />
                                        <TbEyeCheck className='my-2' />
                                        <BsHandbag className='my-2' />
                                    </div>
                                </div>
                                <div className="product_img w-[9rem] h-[10rem] mx-auto">
                                    <img src='/assets/pp9.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                                </div>
                                <div className="basic_text max-w-[12rem]">
                                    <div className="brand py-2">
                                        <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>Classique</h2>
                                    </div>
                                    <div className="product_name">
                                        <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>Keener All Wood Round Dining Table</h2>
                                    </div>
                                    <div className="rating_review flex items-center py-1.5 my-[5px]">
                                        <div className="rating flex items-center text-[12px]">
                                            <Stars stars={4} />
                                        </div>
                                        <div className="review hidden ml-3 md:flex">
                                            <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                        </div>
                                    </div>
                                    <div className="price flex items-center">
                                        <p className='font-semibold text-[14px] mr-3'>$100</p>
                                        <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>120</p>
                                    </div>
                                </div>
                            </div>

                            <div className="product bg-lighterBlue p-4 relative dark:bg-zinc-800 dark:text-slate-200 transition-transform ease-out duration-500">
                                <div className="percent_discount_best_seller flex items-center mb-2">
                                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                                        20%
                                    </p>
                                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>
                                        Best Seller
                                    </p>
                                </div>
                                <div className="the_icons absolute top-2 right-2">
                                    <MdOutlineFavoriteBorder className='my-2' />
                                    <div className="icons lg:hidden">
                                        <TbBookmarkOff className='my-2' />
                                        <TbEyeCheck className='my-2' />
                                        <BsHandbag className='my-2' />
                                    </div>
                                </div>
                                <div className="product_img w-[9rem] h-[10rem] mx-auto">
                                    <img src='/assets/pp9.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                                </div>
                                <div className="basic_text max-w-[12rem]">
                                    <div className="brand py-2">
                                        <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>Classique</h2>
                                    </div>
                                    <div className="product_name">
                                        <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>Keener All Wood Round Dining Table</h2>
                                    </div>
                                    <div className="rating_review flex items-center py-1.5 my-[5px]">
                                        <div className="rating flex items-center text-[12px]">
                                            <Stars stars={4} />
                                        </div>
                                        <div className="review hidden ml-3 md:flex">
                                            <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                        </div>
                                    </div>
                                    <div className="price flex items-center">
                                        <p className='font-semibold text-[14px] mr-3'>$100</p>
                                        <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>120</p>
                                    </div>
                                </div>
                            </div>

                            <div className="product bg-lighterBlue p-4 relative dark:bg-zinc-800 dark:text-slate-200 transition-transform ease-out duration-500">
                                <div className="percent_discount_best_seller flex items-center mb-2">
                                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>
                                        20%
                                    </p>
                                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>
                                        Best Seller
                                    </p>
                                </div>
                                <div className="the_icons absolute top-2 right-2">
                                    <MdOutlineFavoriteBorder className='my-2' />
                                    <div className="icons lg:hidden">
                                        <TbBookmarkOff className='my-2' />
                                        <TbEyeCheck className='my-2' />
                                        <BsHandbag className='my-2' />
                                    </div>
                                </div>
                                <div className="product_img w-[9rem] h-[10rem] mx-auto">
                                    <img src='/assets/pp9.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                                </div>
                                <div className="basic_text max-w-[12rem]">
                                    <div className="brand py-2">
                                        <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>Classique</h2>
                                    </div>
                                    <div className="product_name">
                                        <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>Keener All Wood Round Dining Table</h2>
                                    </div>
                                    <div className="rating_review flex items-center py-1.5 my-[5px]">
                                        <div className="rating flex items-center text-[12px]">
                                            <Stars stars={4} />
                                        </div>
                                        <div className="review hidden ml-3 md:flex">
                                            <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                        </div>
                                    </div>
                                    <div className="price flex items-center">
                                        <p className='font-semibold text-[14px] mr-3'>$100</p>
                                        <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>120</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Product | Product you might also like */}
                    <div className="related_product mt-[5rem] relative">
                        <div className="related_product_head flex items-center mb-3">
                            <h2 className='text-[16px] font-medium dark:text-slate-200'>You might also like</h2>
                            <FaHandPointDown className='text-amber-500 ml-1' />
                        </div>
                        <div className="related_container flex items-center relative">
                            <div className="navigation z-20">
                                <button
                                    id='backButton'
                                    onClick={handleLeftSlide}
                                    className='hidden absolute left-0 bg-zinc-200 p-2 rounded-full text-[1.1rem] mr-2 cursor-pointer dark:bg-zinc-600 dark:text-white'
                                >
                                    <IoIosArrowBack className='text-[16px]' />
                                </button>
                                <button
                                    id='forwardButton'
                                    onClick={handleRightSlide}
                                    className='text-[1.1rem] cursor-pointer absolute right-0 bg-zinc-200 p-2 rounded-full dark:bg-zinc-600 dark:text-white'
                                >
                                    <IoIosArrowForward className='text-[16px]' />
                                </button>
                            </div>
                            <div className="flex gap-2 overflow-auto scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[2px] scrollbar-h-[3px] scrollbar-track-rounded-md scrollbar-thumb-rounded-md scroll-smooth cursor-pointer pb-1" ref={relatedContainerRef}>
                                {products.slice(0, 12).map((product) => (
                                    <div className="min-w-fit bg-lighterBlue py-4 relative rounded-md  dark:bg-zinc-800 dark:text-slate-200 transition-transform ease-out duration-500 sm:min-w-[12.5rem] md:min-w-[15rem]" key={product?.id}>
                                        <Product product={product} key={product?.id} />
                                    </div>
                                ))}
                            </div>
                        
                            </div>
                        <div className=" flex gap-2 justify-between">
                            
                        </div>
                    </div>
                </div>
            </div>
            {showAbout ? (
                <div className={`w-[100%] bg-zinc-50 fixed top-[2rem] right-0 left-0 mx-auto  border-t-[1px] my-[2rem] py-[25px] z-20 h-[86vh] overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[1.8px] rounded-t-lg sm:h-[100%] md:px-0 md:py-[10px] md:hidden`}>
                    <button
                        onClick={() => setShowAbout(false)}
                        className='bg-zinc-700 text-white p-[5px] rounded-md absolute top-[1.2rem] left-[1.2rem] md:hidden'
                    >
                        <IoClose className='text-[1rem]' />
                    </button>
                    {/* Tabs */}
                    <ProductTabsAndTabContent />
                </div>
            ) : null}
        </div>
    )
}

export default SingleProduct