import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeaturedProduct = ({ product }) => {
    return (
        <>
            <div className="featured_product min-w-[100%] mt-[3rem] mb-[10px] sm:mb-[2rem] sm:flex sm:mt-0 relative md:mb-0">
                <div className="product_content max-w-[90%] bg-bgWhite py-3 pl-3 pr-[3rem] sm:relative sm:bottom-[-3rem] sm:left-0 sm:pr-[5rem]  lg:py-5 lg:pl-5 lg:pr-[8rem] lg:absolute lg:bottom-4 lg:left-0 z-0 rounded-[10px]">
                    <div className="w-[70%] sm:w-[80%] lg:w-[90%]">
                        <p className='text-[9px] text-lightBlack font-thin mb-[2px] sm:text-[10px]'>
                            {product?.category}
                        </p>
                        <h2 className='text-[13px] leading-[16px] font-semibold sm:text-[15px] sm:leading-[20px]'>
                            {product?.product_name}
                        </h2>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                                {/* {product?.rating}   */}
                                <AiFillStar className='text-ratingBg text-[0.5rem] md:text-[0.65rem]' />
                                <AiFillStar className='text-ratingBg text-[0.5rem] md:text-[0.65rem]' />
                                <AiFillStar className='text-ratingBg text-[0.5rem] md:text-[0.65rem]' />
                                <AiFillStar className='text-ratingBg text-[0.5rem] md:text-[0.65rem]' />
                                <AiFillStar className='text-ratingBg text-[0.5rem] md:text-[0.65rem]' />
                            </div>
                            <div className="review ml-1 sm:ml-3">
                                <p className='text-[9px] text-lightBlack sm:text-[10px]'>{product.reviews} reviews</p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            <p className='font-semibold text-[13px] mr-2 sm:text-[15px] sm:mr-3'>${product?.product_price_discount}</p>
                            <p className='text-[11px] line-through text-lightBlack font-semibold'>${product?.product_price_original}</p>
                        </div>
                        <button className='hidden bg-amber-600 text-[0.6rem] rounded-[5px] text-white sm:mt-0 lg:mt-2 lg:block sm:text-[0.7rem] sm:py-[4px] sm:px-[10px]'>Buy Now</button>
                    </div>
                </div>
                <div className="discount hidden absolute top-10 right-[4.5rem] z-20 lg:block">
                    <p className='bg-amber-600 rounded-[100%] w-[2.7rem] h-[2.7rem] flex items-center justify-center font-semibold text-white text-[15px]'>50%</p>
                </div>
                <div className="product_img absolute top-[-5.5rem] right-[-3.5rem] w-[15rem] h-[100%] sm:w-[16rem] sm:h-[8rem] sm:relative sm:top-[-3rem] sm:right-[8rem] lg:w-[18rem] lg:h-[18rem]  lg:top-0 lg:right-[-8rem] bg-yellow-600">
                    <img src={product?.product_img} alt="featured_product" className='max-w-[90%] object-contain relative right-[-2rem]' />
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct