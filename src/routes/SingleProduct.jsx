import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiCurrentLocation, BiMinus } from 'react-icons/bi'
import { BsHandbag, BsPaypal, BsPlus } from 'react-icons/bs'
import { FaHandPointDown, FaStripe } from 'react-icons/fa'
import { MdCall, MdFavoriteBorder, MdOutlineFavoriteBorder, MdReply, MdReport, MdShare } from 'react-icons/md'
import { SiVisa } from 'react-icons/si'
import { TbBookmarkOff, TbEyeCheck } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Stars from '../components/Stars'

const images = [
    '/assets/pp8.png',
    '/assets/pp9.png',
    '/assets/pp12.png',
]

const SingleProduct = () => {
    return (
        <div className=''>
            <div className="header my-4">
                <p className='text-[13px] font-medium'>Home | Product_name</p>
            </div>
            <div className="top bg-lighterBlue px-4 py-6 flex flex-col gap-5 items-start rounded-md md:flex-row">
                <div className="left_product_img w-[100%] lg:w-[50%]">
                    <div className="current_img w-[100%] border rounded-md">
                        <img src="/assets/pp8.png" alt="" className='w-[100%] object-contain'/>
                    </div>
                    <div className="product_imgs mt-3 flex gap-3 justify-center">
                        {images?.map(img => (
                            <div key={img} className="img w-[3rem] h-[3rem] border">
                                <img src={img} alt="" className='object-contain'/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right_product_contents w-[100%] lg:w-[80%]">
                    <div className="right_container w-[100%] flex justify-between gap-5">
                        <div className="product_content w-[100%] lg:w-fit">
                            <div className="product_type mb-3">
                                <p className='text-[12px] font-medium'>Wooden Chair</p>
                            </div>
                            <div className="product_name">
                                <h2 className='capitalize font-semibold'>Classique Wood Chair Cane Backrest</h2>
                            </div>
                            <div className="rating_reviews flex items-center my-2">
                                <div className="rating flex items-center mr-3">
                                    <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                    <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                </div>
                                <div className="reviews">
                                    <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                </div>
                            </div>
                            <div className="product_prices flex items-center">
                                <p className='discount_price font-semibold text-[14px] mr-3'>$100.00</p>
                                <p className='original_price text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>$200.00</p>
                            </div>
                            <div className="write_review">
                                <form action="" className='flex flex-col'>
                                    <input type="text" placeholder='Write a review' className='text-[12px] border-b-2 bg-transparent py-1.5 outline-none' />
                                </form>
                            </div>
                            <div className="brand flex items-center my-2">
                                <h2 className='font-medium text-[13px] mr-2'>Brand :</h2>
                                <p className='text-[12px] text-lightBlack'>Classique</p>
                            </div>
                            <div className="category flex items-center">
                                <h2 className='font-medium text-[13px] mr-2'>Category :</h2>
                                <p className='text-[12px] text-lightBlack'>Household & Health</p>
                            </div>
                            <div className="tags flex items-center my-2">
                                <h2 className='font-medium text-[13px] mr-2'>Tags :</h2>
                                <p className='text-[12px] text-lightBlack'>Best Selling</p>
                            </div>
                            <div className="availability flex items-center">
                                <h2 className='font-medium text-[13px] mr-2'>Availability :</h2>
                                <p className='text-[12px] text-lightBlack'>2 InStock</p>
                            </div>
                            <div className="color flex items-center">
                                <div className="black"></div>
                                <div className="brown"></div>
                            </div>
                            <div className="quantity flex items-center my-4">
                                <h2 className='font-medium text-[13px] mr-2'>Quantity :</h2>
                                <div className="flex items-center">
                                    <div className="qty border py-0.5 px-3 text-[12px] font-medium">1</div>
                                    <div className="qty_btns">
                                        <BsPlus className='border text-[11.7px] font-medium'/>
                                        <BiMinus className='border text-[11.7px] font-medium'/>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons w-[100%]  items-center">
                                <div className="flex flex-col-reverse gap-3 items-center mb-2 lg:flex-row">
                                    <button className='w-[100%] bg-slate-800 text-white py-1.5 lg:w-fit lg:py-1 lg:px-4 rounded-xl text-[12px] capitalize'>Add to cart</button>

                                    <button className='w-[100%] bg-amber-800 text-white py-1.5 lg:w-fit lg:py-1 lg:px-4 rounded-xl text-[12px] capitalize'>Buy now</button>
                                </div>
                                <div className="share_wishlist flex justify-center items-center gap-4 lg:justify-start">
                                    <p className='flex items-center text-[13px]'>
                                        <MdFavoriteBorder className='mr-1' />
                                        Add to wishlist
                                    </p>
                                    <p className='text-[13px] flex items-center'>
                                        <MdShare className='mr-1' />
                                        Share
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="hidden right_seller_information border py-2 px-6 rounded-md lg:block">
                            <h2 className='font-semibold text-center text-[14px] mb-2'>Vendor Information</h2>
                            <div className="seller_container">
                                <Link to='/vendor/1' className="">
                                    <div className="vendor_img w-[11rem] h-[10rem] mx-auto">
                                        <img src="/assets/vendor.png" alt="" className='w-[100%] object-contain' />
                                    </div>
                                    <h2 className='text-center font-medium text-amber-700 text-[15px] mt-2'>Florence & Son</h2>
                                    <div className="rating_reviews flex items-center justify-center my-1">
                                        <div className="rating flex items-center mr-3">
                                            <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                            <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                            <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                            <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                        </div>
                                        <div className="reviews">
                                            <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                        </div>
                                    </div>
                                    <p className='text-[12px] text-lightBlack text-center'>100 Items Sold</p>
                                    <p className='location flex justify-center text-[12px] text-lightBlack w-[14rem] mx-auto mt-2'>
                                        <BiCurrentLocation className='text-[14px] mr-2' />
                                        #21 Main Road, Mama Beach Village
                                    </p>
                                    <p className='flex text-[12px] text-lightBlack w-[14rem] mx-auto mt-2'>
                                        <MdCall className='text-[14px] mr-2' />
                                        (+232)-000-000-000
                                    </p>
                                    <div className="proof flex gap-4 items-center my-4">
                                        <div className="rating flex flex-col items-center">
                                            <p className='text-[11px] font-medium text-lightBlack dark:text-slate-200'>Ratings</p>
                                            <h2 className='font-semibold text-[15px]'>90%</h2>
                                        </div>
                                        <div className="delivery flex flex-col items-center">
                                            <p className='text-[11px] font-medium text-lightBlack dark:text-slate-200'>Deliver on time</p>
                                            <h2 className='font-semibold text-[15px]'>90%</h2>
                                        </div>
                                        <div className="response flex flex-col items-center">
                                            <p className='text-[11px] font-medium text-lightBlack dark:text-slate-200'>24/7 Support</p>
                                            <h2 className='font-semibold text-[15px]'>90%</h2>
                                        </div>
                                    </div>
                                </Link>
                                <div className="save_seller_view_store flex gap-4 justify-center items-center mb-2">
                                    <p className='flex items-center text-[13px] font-semibold'>
                                        <MdFavoriteBorder />
                                        Save Vendor
                                    </p>
                                    <Link to="/vendor/1" className='text-[13px] font-semibold'>View store</Link>
                                </div>
                               
                                <p className='text-[13px] text-center my-2'>Sell on e-shop | <span className='text-amber-700 font-medium'>Register now!</span></p>
                            </div>
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
            <div className="bottom mt-3">
                <div className="reviews bg-lighterBlue rounded-md py-4 lg:py-5">
                    <div className="container_ w-[90%] mx-auto">
                        <div className="main_head flex flex-col items-center justify-between mb-7 sm:flex-row">
                            <h2 className='text-[14px] font-medium'>Customer Reviews | Feedbacks</h2>
                            <button className='text-[11px] border-[1.8px] border-slate-700 rounded-md py-0.5 px-4 outline-none mt-2 lg:mt-0'>
                                Write a review
                            </button>
                        </div>
                         
                        <div className="reviews_container px-1 lg:px-5">
                            <div className="review mb-3">
                                <div className="review_head flex items-end justify-between border-b-2 pb-1 mb-2">
                                    <div className="top flex items-center">
                                        <div className="reviewer_img w-[2rem] h-[2rem] mr-2">
                                            <img src="/assets/user.png" alt="" className='w-[100%] object-contain' />
                                        </div>
                                        <div className="right">
                                            <h2 className='reviewer_handle text-[12px] font-medium text-lightBlack'>Michael</h2>
                                            <div className="rating flex items-center">
                                                <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                                <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                                <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                                <AiFillStar className='text-ratingBg text-[0.7rem]' />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-[12px] text-lightBlack'>4 months ago</p>
                                </div>
                                <div className="review_body px-1 lg:px-3">
                                    <p className='text-[14px]'>Cool product.</p>
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
                                <div className="reply_body"></div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="related_product mt-4">
                    <div className="related_product_head flex items-center mb-2">
                        <h2 className='text-[15px] font-medium'>You might also like</h2>
                        <FaHandPointDown className='text-amber-500 ml-1' />
                    </div>
                    
                    <div className="related_container flex gap-2">
                        <div className="product bg-lighterBlue p-4 relative dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                            <div className="percent_discount_best_seller flex items-center mb-2">
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>20%</p>
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Seller</p>
                            </div>
                            <div className="the_icons absolute top-2 right-2">
                                <MdOutlineFavoriteBorder className='my-2' />
                                <div className="icons lg:hidden">
                                    <TbBookmarkOff className='my-2' />
                                    <TbEyeCheck className='my-2' />
                                    <BsHandbag className='my-2' />
                                </div>
                            </div>
                            <div className="product_img w-[10rem] h-[10rem] mx-auto">
                                <img src='/assets/pp9.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                            </div>
                            <div className="basic_text max-w-[12rem]">
                                <div className="brand py-2">
                                    <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>Classique</h2>
                                </div>
                                <div className="product_name">
                                    <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>Keener All Wood Round Dining Table</h2>
                                </div>
                                <div className="rating_review flex items-center py-1.5">
                                    <div className="rating flex items-center">
                                        <Stars stars={4} />
                                    </div>
                                    <div className="review ml-3">
                                        <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                    </div>
                                </div>
                                <div className="price flex items-center">
                                    <p className='font-semibold text-[14px] mr-3'>$100</p>
                                    <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>120</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="product bg-lighterBlue p-4 relative dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                            <div className="percent_discount_best_seller flex items-center mb-2">
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>20%</p>
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Seller</p>
                            </div>
                            <div className="the_icons absolute top-2 right-2">
                                <MdOutlineFavoriteBorder className='my-2' />
                                <div className="icons lg:hidden">
                                    <TbBookmarkOff className='my-2' />
                                    <TbEyeCheck className='my-2' />
                                    <BsHandbag className='my-2' />
                                </div>
                            </div>
                            <div className="product_img w-[10rem] h-[10rem] mx-auto">
                                <img src='/assets/pp9.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                            </div>
                            <div className="basic_text max-w-[12rem]">
                                <div className="brand py-2">
                                    <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>Classique</h2>
                                </div>
                                <div className="product_name">
                                    <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>Keener All Wood Round Dining Table</h2>
                                </div>
                                <div className="rating_review flex items-center py-1.5">
                                    <div className="rating flex items-center">
                                        <Stars stars={4} />
                                    </div>
                                    <div className="review ml-3">
                                        <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                    </div>
                                </div>
                                <div className="price flex items-center">
                                    <p className='font-semibold text-[14px] mr-3'>$100</p>
                                    <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>120</p>
                                </div>
                            </div>
                        </div>

                        <div className="product bg-lighterBlue p-4 relative dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                            <div className="percent_discount_best_seller flex items-center mb-2">
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>20%</p>
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Seller</p>
                            </div>
                            <div className="the_icons absolute top-2 right-2">
                                <MdOutlineFavoriteBorder className='my-2' />
                                <div className="icons lg:hidden">
                                    <TbBookmarkOff className='my-2' />
                                    <TbEyeCheck className='my-2' />
                                    <BsHandbag className='my-2' />
                                </div>
                            </div>
                            <div className="product_img w-[10rem] h-[10rem] mx-auto">
                                <img src='/assets/pp9.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                            </div>
                            <div className="basic_text max-w-[12rem]">
                                <div className="brand py-2">
                                    <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>Classique</h2>
                                </div>
                                <div className="product_name">
                                    <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>Keener All Wood Round Dining Table</h2>
                                </div>
                                <div className="rating_review flex items-center py-1.5">
                                    <div className="rating flex items-center">
                                        <Stars stars={4} />
                                    </div>
                                    <div className="review ml-3">
                                        <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                    </div>
                                </div>
                                <div className="price flex items-center">
                                    <p className='font-semibold text-[14px] mr-3'>$100</p>
                                    <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>120</p>
                                </div>
                            </div>
                        </div>

                        <div className="product bg-lighterBlue p-4 relative dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                            <div className="percent_discount_best_seller flex items-center mb-2">
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>20%</p>
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Seller</p>
                            </div>
                            <div className="the_icons absolute top-2 right-2">
                                <MdOutlineFavoriteBorder className='my-2' />
                                <div className="icons lg:hidden">
                                    <TbBookmarkOff className='my-2' />
                                    <TbEyeCheck className='my-2' />
                                    <BsHandbag className='my-2' />
                                </div>
                            </div>
                            <div className="product_img w-[10rem] h-[10rem] mx-auto">
                                <img src='/assets/pp9.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                            </div>
                            <div className="basic_text max-w-[12rem]">
                                <div className="brand py-2">
                                    <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>Classique</h2>
                                </div>
                                <div className="product_name">
                                    <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>Keener All Wood Round Dining Table</h2>
                                </div>
                                <div className="rating_review flex items-center py-1.5">
                                    <div className="rating flex items-center">
                                        <Stars stars={4} />
                                    </div>
                                    <div className="review ml-3">
                                        <p className='text-[11px] text-lightBlack dark:text-slate-200'>100 reviews</p>
                                    </div>
                                </div>
                                <div className="price flex items-center">
                                    <p className='font-semibold text-[14px] mr-3'>$100</p>
                                    <p className='text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>120</p>
                                </div>
                            </div>
                        </div>

                        <div className="product bg-lighterBlue p-4 relative dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                            <div className="percent_discount_best_seller flex items-center mb-2">
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>20%</p>
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>Best Seller</p>
                            </div>
                            <div className="the_icons absolute top-2 right-2">
                                <MdOutlineFavoriteBorder className='my-2' />
                                <div className="icons lg:hidden">
                                    <TbBookmarkOff className='my-2' />
                                    <TbEyeCheck className='my-2' />
                                    <BsHandbag className='my-2' />
                                </div>
                            </div>
                            <div className="product_img w-[10rem] h-[10rem] mx-auto">
                                <img src='/assets/pp9.png' alt="product" className='w-[100%] h-[100%] object-contain' />
                            </div>
                            <div className="basic_text max-w-[12rem]">
                                <div className="brand py-2">
                                    <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>Classique</h2>
                                </div>
                                <div className="product_name">
                                    <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>Keener All Wood Round Dining Table</h2>
                                </div>
                                <div className="rating_review flex items-center py-1.5">
                                    <div className="rating flex items-center">
                                        <Stars stars={4} />
                                    </div>
                                    <div className="review ml-3">
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
            </div>
        </div>
    )
}

export default SingleProduct