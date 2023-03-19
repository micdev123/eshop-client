import React, { useRef, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { BsHandbag } from 'react-icons/bs'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { TbBookmarkOff, TbEyeCheck } from 'react-icons/tb'
import { products } from '../../data'

const FeaturedCollection = () => {
    // const [product, setProduct] = useState([]);
    const featuredProducts = [];
    const collection = useRef(null);
    
    function getFeaturedProducts() {
        // Target the main
        for (let i = 0; i < products.length; i++) {
            if (products[i].level[0] === 'featured' || products[i].level[1] === 'featured') {
                featuredProducts[i] = products[i];
            }
        }
        return featuredProducts;
    }
    getFeaturedProducts()

    
    const handleLeftSlide = (e) => {
        e.preventDefault();
        collection.current.scrollLeft -= collection.current.offsetWidth;
    }
    const handleRightSlide = (e) => {
        e.preventDefault();
        collection.current.scrollLeft += collection.current.offsetWidth;
    }

    if (!featuredProducts || !featuredProducts.length) return null;
    return (
        <section className='w-[100%] my-7'>
            <div className="collection_header flex items-center justify-between mb-[5px] dark:text-slate-200">
                <h2 className='text-[14px] font-medium text-black lg:text-[15px] dark:text-slate-200'>Featured Collection</h2>
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
            <div className="collection w-[100%] flex gap-2 overflow-auto scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[2px] scrollbar-h-[5px] scrollbar-track-rounded-md scrollbar-thumb-rounded-md scroll-smooth cursor-pointer" ref={collection}>
                {featuredProducts.map((product) => {
                    const { id, product_name, product_img, reviews, product_price_original, product_price_discount, category, brand, tag, rating } = product;
                    return (
                        <div key={id} className="product bg-lighterBlue p-4 relative dark:bg-slate-800 dark:text-slate-200 transition-transform ease-out duration-500">
                            <div className="percent_discount_best_seller flex items-center mb-2">
                                {product_price_discount && (
                                    <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px] mr-2'>{Math.floor((product_price_original - product_price_discount) / product_price_original * 100)}%</p>
                                )}
                                <p className='text-[9px] font-semibold bg-amber-500 text-white py-1 px-2 rounded-[10px]'>{tag}</p>
                            </div>
                            <div className="the_icons absolute top-2 right-2 lg:hidden">
                                <MdOutlineFavoriteBorder className='my-2' />
                                <TbBookmarkOff className='my-2' />
                                <TbEyeCheck className='my-2' />
                                <BsHandbag className='my-2' />
                            </div>
                            <div className="product_img w-[10rem] h-[10rem] mx-auto">
                                <img src={product_img} alt="product" className='w-[100%] h-[100%] object-contain' />
                            </div>
                            <div className="basic_text max-w-[12rem]">
                                <div className="brand py-2">
                                    <h2 className='text-[0.7rem] font-semibold text-amber-600 dark:text-amber-500'>{brand}</h2>
                                </div>
                                <div className="product_name">
                                    <h2 className='text-[13.5px] font-semibold text-black capitalize leading-[18px] dark:text-slate-200'>{product_name} </h2>
                                </div>
                                <div className="rating_review flex items-center py-1.5">
                                    <div className="rating flex items-center">
                                        <AiFillStar className='text-ratingBg text-[0.8rem]' />
                                        <AiFillStar className='text-ratingBg text-[0.8rem]' />
                                        <AiFillStar className='text-ratingBg text-[0.8rem]' />
                                        <AiFillStar className='text-ratingBg text-[0.8rem]' />
                                        <AiFillStar className='text-ratingBg text-[0.8rem]' />
                                    </div>
                                    <div className="review ml-3">
                                        <p className='text-[11px] text-lightBlack dark:text-slate-200'>{reviews} reviews</p>
                                    </div>
                                </div>
                                <div className="price flex items-center">
                                    {product_price_discount && (
                                        <p className='font-semibold text-[14px] mr-3'>${product_price_discount}</p>
                                    )}
                                    <p className={product_price_discount ? `text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400` : 'font-semibold text-[14px]'}>${product_price_original}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FeaturedCollection