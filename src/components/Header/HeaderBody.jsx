import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowRightCircle, BsDot } from 'react-icons/bs'

const HeaderBody = () => {
    return (
        <div className='bg-lighterBlue rounded-[5px] py-4 pl-4 flex flex-col sm:justify-center lg:items-center lg:justify-between sm:py-10 sm:px-8 lg:flex-row'>
            <div className="left_header_body flex items-center">
                <div className="dot_nav_btn hidden items-center justify-center sm:pr-8 lg:flex md:flex-col">
                    <BsDot className=' border-2 border-amber-600 border-solid rounded-full text-[1.5rem] text-amber-600 my-3 p-[2px]' />
                    <BsDot className='text-[1.5rem] p-[2px] my-3 text-lightBlack' />
                    <BsDot className='text-[1.5rem] p-[2px] my-3 text-lightBlack' />
                    <BsDot className='text-[1.5rem] p-[2px] my-3 text-lightBlack' />
                    <BsDot className='text-[1.5rem] p-[2px] my-3 text-lightBlack' />
                </div>
                <div className="featured_category w-full sm:w-[70%] lg:max-w-[60%]">
                    <h1 className='w-[75%] text-[20px] pt-4 uppercase font-semibold leading-[25px] sm:text-[20px] sm:w-[90%] sm:pt-0 md:w-full md:text-[22px]  lg:leading-[40px] lg:text-[32px]'>Shop computer & accessories</h1>
                    <p className='w-[65%] text-[9.8px] leading-[15px] text-black font-normal my-2 sm:w-full sm:text-[14px] sm:leading-[20px]  sm:my-4'>
                        Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more..
                    </p>
                    <button className='border-2 border-black border-solid rounded-[8px] text-[10px] font-medium py-[2px] px-[8px] sm:text-[12px] sm:py-[3px] sm:px-[10px]'>view more</button>
                </div>
            </div>
            <div className="right_header_body flex items-center justify-between sm:mb-[3rem] md:mb-[5rem] lg:mb-0">
                <div className="featured_product w[100%] mt-[3rem] mb-[10px] sm:mb-[2rem] sm:flex sm:mt-0 relative md:mb-0">
                    <div className="product_content bg-bgWhite py-3 pl-3 pr-[3rem] sm:relative sm:bottom-[-3rem] sm:left-0 sm:pr-[5rem]  lg:py-5 lg:pl-5 lg:pr-[8rem] lg:absolute lg:bottom-4 lg:left-[-8rem] z-0 rounded-[10px]">
                        <div className="w-[90%]">
                            <p className='text-[9px] text-lightBlack font-thin mb-[2px] sm:text-[11px]'>computer & accessories</p>
                            <h2 className='text-[13px] leading-[16px] font-semibold sm:text-[16px] sm:leading-[20px]'>JBL T460BT Black Earbud</h2>
                            <div className="rating_review flex items-center py-1">
                                <div className="rating flex items-center">
                                    <AiFillStar className='text-ratingBg text-[0.6rem] md:text-[0.87rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.6rem] md:text-[0.87rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.6rem] md:text-[0.87rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.6rem] md:text-[0.87rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.6rem] md:text-[0.87rem]' />
                                </div>
                                <div className="review ml-1 sm:ml-3">
                                    <p className='text-[9px] text-lightBlack sm:text-[11px]'>1,245 reviews</p>
                                </div>
                            </div>
                            <div className="price flex items-center">
                                <p className='font-semibold text-[14px] mr-2 sm:text-[16px] sm:mr-3'>$125.00</p>
                                <p className='text-[11px] line-through text-lightBlack font-semibold'>$250.00</p>
                            </div>
                            <button className='hidden bg-amber-600 text-[0.7rem] rounded-[5px] text-white sm:mt-0 lg:mt-2 lg:block sm:text-[0.8rem] sm:py-[4px] sm:px-[10px]'>Buy Now</button>
                        </div>
                    </div>
                    <div className="discount hidden absolute top-10 right-[4.5rem] z-20">
                        <p className='bg-amber-600 rounded-[100%] w-[2.7rem] h-[2.7rem] flex items-center justify-center font-semibold text-white text-[15px]'>50%</p>
                    </div>
                    <div className="product_img absolute top-[-5.5rem] right-[-5.5rem] w-[100%] h-[100%] sm:w-[19rem] sm:h-[8rem] sm:relative sm:top-[-3rem] sm:right-[8rem] lg:w-[100%] lg:h-[100%] lg:static lg:top-0 lg:right-0">
                        <img src="/assets/p6.png" alt="featured_product" className='max-w-[90%] object-contain relative right-[-2rem] z-10' />
                    </div>
                </div>
                <div className="next_nav_btn hidden sm:pl-2 md:flex">
                    <BsArrowRightCircle className='text-[1.2rem] font-thin text-gray-600' />
                </div>
            </div>

            <div className="dot_nav_btn w-full flex items-center justify-center my-2 lg:my-0 lg:pr-8  lg:hidden">
                <BsDot className=' border-2 border-amber-600 border-solid rounded-full text-[1.5rem] text-amber-600 mx-1 p-[2px]' />
                <BsDot className='text-[1.5rem] p-[2px] mx-1 text-lightBlack' />
                <BsDot className='text-[1.5rem] p-[2px] mx-1 text-lightBlack' />
                <BsDot className='text-[1.5rem] p-[2px] mx-1 text-lightBlack' />
                <BsDot className='text-[1.5rem] p-[2px] mx-1 text-lightBlack' />
            </div>
        </div>
    )
}

export default HeaderBody