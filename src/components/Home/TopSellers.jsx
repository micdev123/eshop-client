import React, { useRef } from 'react'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { products } from '../../data'
import Product from '../Product'

const TopSellers = () => {
    const topSellingProducts = [];
    const top_seller = useRef(null);
    
    function getTopSellingProducts() {
        // Target the main
        for (let i = 0; i < products.length; i++) {
            if (products[i].level[0] === 'topSelling' || products[i].level[1] === 'topSelling') {
                topSellingProducts[i] = products[i];
            }
        }
        return topSellingProducts;
    }
    getTopSellingProducts()

    
    const handleLeftSlide = (e) => {
        e.preventDefault();
        top_seller.current.scrollLeft -= top_seller.current.offsetWidth;
    }
    const handleRightSlide = (e) => {
        e.preventDefault();
        top_seller.current.scrollLeft += top_seller.current.offsetWidth;
    }

    if (!topSellingProducts || !topSellingProducts.length) return null;
    return (
        <section className='my-7'>
            <div className="top_seller_header flex items-center justify-between mb-[5px] dark:text-slate-200">
                <h2 className='text-[14px] font-medium text-black lg:text-[15px] dark:text-slate-200'>e-shop Top Sellers</h2>
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
            <div className="top_seller flex gap-2 overflow-auto scrollbar scrollbar-thumb-slate-800 scrollbar-track-slate-400 scrollbar-w-[2px] scrollbar-h-[5px] scrollbar-track-rounded-md scrollbar-thumb-rounded-md scroll-smooth cursor-pointer" ref={top_seller}>
                {topSellingProducts.map((product) => (
                    <Product product={product} key={product?.id} />
                ))}
            </div>
        </section>
    )
}

export default TopSellers