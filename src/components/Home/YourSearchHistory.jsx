import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { BsHandbag } from 'react-icons/bs'
import { FaHandPointDown } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { TbBookmarkOff, TbEyeCheck } from 'react-icons/tb'

const YourSearchHistory = () => {
    return (
        <section className='my-7'>
            <div className="your_search_history_header flex items-center justify-between mb-[5px]">
                <h2 className='flex items-center text-[14px] font-medium text-black lg:text-[15px]'>
                    Guest, your recently viewed
                    <FaHandPointDown className='text-amber-500 ml-2' />
                </h2>
                <div className="navigation flex items-center">
                    <BiLeftArrowCircle className='text-[1.1rem] mr-2' />
                    <BiRightArrowCircle className='text-[1.1rem]' />
                </div>
            </div>
            <div className="top_seller flex gap-2">
                <div className="product bg-lighterBlue p-4 relative">
                    <div className="percent_discount_best_seller flex items-center mb-2">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>-33%</p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] ml-2'>Best Seller</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder  className='my-2'/>
                        <TbBookmarkOff  className='my-2'/>
                        <TbEyeCheck  className='my-2'/>
                        <BsHandbag  className='my-2'/>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto">
                        <img src="/assets/p3.png" alt="product" className='w-[100%] h-[100%] object-contain'/>
                    </div>
                    <div className="basic_text max-w-[12rem]">
                        <div className="brand py-2">
                            <h2 className='text-[0.7rem] font-semibold text-amber-600'>araimo</h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px]'>The New Araimo Running bulk 10 black earbud </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                            </div>
                            <div className="review ml-3">
                                <p className='text-[11px] text-lightBlack'>1,245 reviews</p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>$125.00</p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold'>$250.00</p>
                        </div>
                    </div>
                </div>

                 <div className="product bg-lighterBlue p-4 relative">
                    <div className="percent_discount_best_seller flex items-center mb-2">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>-33%</p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] ml-2'>Best Seller</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder  className='my-2'/>
                        <TbBookmarkOff  className='my-2'/>
                        <TbEyeCheck  className='my-2'/>
                        <BsHandbag  className='my-2'/>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto">
                        <img src="/assets/p3.png" alt="product" className='w-[100%] h-[100%] object-contain'/>
                    </div>
                    <div className="basic_text max-w-[12rem]">
                        <div className="brand py-2">
                            <h2 className='text-[0.7rem] font-semibold text-amber-600'>araimo</h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px]'>The New Araimo Running bulk 10 black earbud </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                            </div>
                            <div className="review ml-3">
                                <p className='text-[11px] text-lightBlack'>1,245 reviews</p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>$125.00</p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold'>$250.00</p>
                        </div>
                    </div>
                </div>

                 <div className="product bg-lighterBlue p-4 relative">
                    <div className="percent_discount_best_seller flex items-center mb-2">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>-33%</p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] ml-2'>Best Seller</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder  className='my-2'/>
                        <TbBookmarkOff  className='my-2'/>
                        <TbEyeCheck  className='my-2'/>
                        <BsHandbag  className='my-2'/>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto">
                        <img src="/assets/p3.png" alt="product" className='w-[100%] h-[100%] object-contain'/>
                    </div>
                    <div className="basic_text max-w-[12rem]">
                        <div className="brand py-2">
                            <h2 className='text-[0.7rem] font-semibold text-amber-600'>araimo</h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px]'>The New Araimo Running bulk 10 black earbud </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                            </div>
                            <div className="review ml-3">
                                <p className='text-[11px] text-lightBlack'>1,245 reviews</p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>$125.00</p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold'>$250.00</p>
                        </div>
                    </div>
                </div>

                 <div className="product bg-lighterBlue p-4 relative">
                    <div className="percent_discount_best_seller flex items-center mb-2">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>-33%</p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] ml-2'>Best Seller</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder  className='my-2'/>
                        <TbBookmarkOff  className='my-2'/>
                        <TbEyeCheck  className='my-2'/>
                        <BsHandbag  className='my-2'/>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto">
                        <img src="/assets/p3.png" alt="product" className='w-[100%] h-[100%] object-contain'/>
                    </div>
                    <div className="basic_text max-w-[12rem]">
                        <div className="brand py-2">
                            <h2 className='text-[0.7rem] font-semibold text-amber-600'>araimo</h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px]'>The New Araimo Running bulk 10 black earbud </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                            </div>
                            <div className="review ml-3">
                                <p className='text-[11px] text-lightBlack'>1,245 reviews</p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>$125.00</p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold'>$250.00</p>
                        </div>
                    </div>
                </div>

                 <div className="product bg-lighterBlue p-4 relative">
                    <div className="percent_discount_best_seller flex items-center mb-2">
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>-33%</p>
                        <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] ml-2'>Best Seller</p>
                    </div>
                    <div className="the_icons absolute top-2 right-2">
                        <MdOutlineFavoriteBorder  className='my-2'/>
                        <TbBookmarkOff  className='my-2'/>
                        <TbEyeCheck  className='my-2'/>
                        <BsHandbag  className='my-2'/>
                    </div>
                    <div className="product_img w-[10rem] h-[10rem] mx-auto">
                        <img src="/assets/p3.png" alt="product" className='w-[100%] h-[100%] object-contain'/>
                    </div>
                    <div className="basic_text max-w-[12rem]">
                        <div className="brand py-2">
                            <h2 className='text-[0.7rem] font-semibold text-amber-600'>araimo</h2>
                        </div>
                        <div className="product_name">
                            <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px]'>The New Araimo Running bulk 10 black earbud </h2>
                        </div>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                <AiFillStar className='text-ratingBg text-[0.87rem]' />
                            </div>
                            <div className="review ml-3">
                                <p className='text-[11px] text-lightBlack'>1,245 reviews</p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[14px] mr-3'>$125.00</p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold'>$250.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourSearchHistory