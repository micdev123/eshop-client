import React from 'react'
import Stars from '../Stars'

const FeaturedProduct = ({ product }) => {
    return (
        <>
            <div className="featured_product min-w-[100%] mt-[4rem] mb-[10px] sm:mb-[3rem] sm:flex sm:mt-[2rem] relative md:mb-0 dark:text-slate-200">
                <div className="product_content max-w-[90%] bg-bgWhite py-3 pl-3 pr-[3rem] sm:relative sm:bottom-[-3rem] sm:left-0 sm:pr-[7rem] md:pr-[4rem]  lg:py-5 lg:pl-5 lg:pr-[6rem] lg:absolute lg:bottom-4 lg:left-0 z-0 rounded-[10px] dark:bg-slate-700">
                    <div className="w-[60%] sm:w-[100%] md:w-[70%] lg:w-[70%]">
                        <p className='text-[9px] text-lightBlack font-thin mb-[2px] sm:text-[10px] dark:text-slate-200'>
                            {product?.category}
                        </p>
                        <h2 className='text-[12px] leading-[16px] font-semibold sm:text-[13px] md:text-[15px] sm:leading-[20px]'>
                            {/* {product?.product_name.length >= 20 ? `${product?.product_name.substring(0, 20)}...` : product?.product_name} */}
                            {product?.product_name}
                        </h2>
                        <div className="rating_review flex items-center py-1.5">
                            <div className="rating flex items-center">
                               <Stars stars={product?.rating} />
                            </div>
                            <div className="review hidden ml-1 sm:ml-3 md:block">
                                <p className='text-[9px] text-lightBlack sm:text-[10px] dark:text-slate-200'>{product.reviews} reviews</p>
                            </div>
                        </div>
                        <div className="price flex items-center">
                            {product?.product_price_discount && (
                                <p className='font-semibold text-[13px] mr-2 sm:text-[15px] sm:mr-3'>
                                    ${product?.product_price_discount}
                                </p>
                            )}
                            <p className={product?.product_price_discount ? 'text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400' : 'font-semibold text-[14px] ' }>${product?.product_price_original}</p>
                        </div>
                        <button className='hidden bg-amber-600 text-[0.6rem] rounded-[5px] text-white sm:mt-0 lg:mt-2 lg:block sm:text-[0.7rem] sm:py-[4px] sm:px-[10px]'>Buy Now</button>
                    </div>
                </div>
                <div className="product_img absolute top-[-2rem] right-[-1.7rem] w-[13rem] h-[100%] sm:w-[19rem] sm:h-[10rem] sm:relative sm:top-[1rem] sm:right-[9rem] lg:w-[18rem] md:w-[16rem] md:h-[13rem] md:top-[-0.5rem] lg:h-[20rem]  lg:top-3 lg:right-[-8.5rem] flex justify-center items-center object-contain">
                    <div className="discount hidden absolute top-[4rem] right-[1rem] z-20 lg:block">
                        {product?.product_price_discount && (
                            <p className='bg-amber-600 rounded-[100%] w-[2.7rem] h-[2.7rem] flex items-center justify-center font-semibold text-white text-[15px]'>
                                {Math.floor((product.product_price_original - product.product_price_discount) / product.product_price_original * 100)}%
                            </p>
                        )}
                    </div>
                    <img src={product?.product_img} alt="featured_product" className='w-[90%] object-contain relative lg:right-[-2rem] lg:w-[100%] lg:object-cover' />
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct