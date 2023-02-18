import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowRightCircle, BsDot } from 'react-icons/bs'

const HeaderBody = () => {
    return (
        <div className='bg-lighterBlue rounded-[5px] flex items-center justify-between py-10 px-8'>
            <div className="left_header_body flex items-center">
                <div className="dot_nav_btn flex-col items-center justify-center pr-8">
                    <BsDot className=' border-2 border-amber-600 border-solid rounded-full text-[1.5rem] text-amber-600 my-3 p-[2px]' />
                    <BsDot className='text-[1.5rem] p-[2px] my-3 text-lightBlack' />
                    <BsDot className='text-[1.5rem] p-[2px] my-3 text-lightBlack' />
                    <BsDot className='text-[1.5rem] p-[2px] my-3 text-lightBlack' />
                    <BsDot className='text-[1.5rem] p-[2px] my-3 text-lightBlack' />
                </div>
                <div className="featured_category max-w-[60%]">
                    <h1 className='text-[32px] uppercase font-semibold leading-[40px]'>Shop computer & accessories</h1>
                    <p className='text-[15px] font-normal leading-[20px] text-black my-4'>
                        Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more..
                    </p>
                    <button className='border-2 border-black border-solid rounded-[8px] text-[13px] font-medium py-[3px] px-[10px]'>view more</button>
                </div>
            </div>
            <div className="right_header_body flex items-center">
                <div className="featured_product mx-w[100%] relative">
                    <div className="product_content bg-bgWhite py-5 pl-5 pr-[6rem] absolute bottom-4 left-[-10rem] z-0 rounded-[10px]">
                        <div className="max-w-[80%]">
                            <p className='text-xs text-lightBlack font-thin mb-[2px]'>computer & accessories</p>
                            <h2 className='text-[16px] font-semibold leading-[20px]'>JBL T460BT Black Earbud</h2>
                            <div className="rating_review flex items-center py-1">
                                <div className="rating flex items-center">
                                    <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.87rem]' />
                                </div>
                                <div className="review ml-3">
                                    <p className='text-[12px] text-lightBlack'>1,245 reviews</p>
                                </div>
                            </div>
                            <div className="price flex items-center">
                                <p className='font-semibold text-[16px] mr-3'>$125.00</p>
                                <p className='text-[11px] line-through text-lightBlack font-semibold'>$250.00</p>
                            </div>
                            <button className='bg-amber-600 text-[0.8rem] text-white py-[4px] px-[10px] rounded-[5px] mt-2'>Buy Now</button>
                        </div>
                    </div>
                    <div className="discount absolute top-10 right-[4.5rem] z-20">
                        <p className='bg-amber-600 rounded-[100%] w-[2.7rem] h-[2.7rem] flex items-center justify-center font-semibold text-white text-[15px]'>50%</p>
                    </div>
                    <div className="product_img max-w-[100%] max-h-[100%]">
                        <img src="/assets/p6.png" alt="featured_product" className='max-w-[90%] object-contain relative right-[-2rem] z-10' />
                    </div>
                </div>
                <div className="next_nav_btn pl-2">
                    <BsArrowRightCircle className='text-[1.3rem] font-thin text-gray-600' />
                </div>
            </div>
        </div>
    )
}

export default HeaderBody