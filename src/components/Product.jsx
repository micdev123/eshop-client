import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { TbBookmarkOff, TbEyeCheck } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import Stars from './Stars'

const Product = ({ product }) => {
    const { id, product_name, product_img, reviews, product_price_original, product_price_discount, category, brand, tag, rating } = product;
    return (
        <Link to={`/product/${1}`} key={id} className="product bg-lighterBlue py-4 relative rounded-md dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
            <div className="percent_discount_best_seller hidden items-center mb-2 px-3 md:flex">
                {product_price_discount && (
                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>{Math.floor((product_price_original - product_price_discount) / product_price_original * 100)}%</p>
                )}
                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>{tag}</p>
            </div>
            <div className="the_icons absolute top-2 right-2">
                <MdOutlineFavoriteBorder className='my-2 text-[14px]' />
                <div className="icons lg:hidden">
                    <TbBookmarkOff className='my-2 text-[14px]' />
                    <TbEyeCheck className='my-2 text-[14px]' />
                    <BsHandbag className='my-2 text-[14px]' />
                </div>
            </div>
            <div className="product_img w-[5rem] h-[8rem] mx-auto flex justify-center items-center md:w-[12rem] md:h-[10rem]">
                <img src={product_img} alt="product" className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className="basic_text max-w-[12rem] px-4 mt-2">
                <div className="brand py-2">
                    <h2 className='text-[0.65rem] font-semibold text-amber-600 dark:text-amber-500 md:text-[0.7rem]'>
                        {brand}
                    </h2>
                </div>
                <div className="product_name">
                    <h2 className='text-[12.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200 md:text-[13.5px]'>{product_name} </h2>
                </div>
                <div className="rating_review flex items-center py-1.5">
                    <div className="rating flex items-center">
                        <Stars stars={rating} />
                    </div>
                    <div className="review hidden ml-3 md:block">
                        <p className='text-[11px] text-lightBlack dark:text-slate-200'>{reviews} reviews</p>
                    </div>
                </div>
                <div className="price flex items-center">
                    {product_price_discount && (
                        <p className='font-semibold text-[14px] mr-3'>${product_price_discount}</p>
                    )}
                    <p className={product_price_discount ? 'text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400' : 'font-semibold text-[14px]'}>${product_price_original}</p>
                </div>
            </div>
        </Link>
    )
}

export default Product