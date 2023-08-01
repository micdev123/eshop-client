import React, { useRef } from 'react'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { products } from '../../data'
import Product from '../Product'

const TopSellers = () => {
    const topSellingProducts = [];
    // const top_seller = useRef(null);
    
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

    
    // const handleLeftSlide = (e) => {
    //     e.preventDefault();
    //     top_seller.current.scrollLeft -= top_seller.current.offsetWidth;
    // }
    // const handleRightSlide = (e) => {
    //     e.preventDefault();
    //     top_seller.current.scrollLeft += top_seller.current.offsetWidth;
    // }

    if (!topSellingProducts || !topSellingProducts.length) return null;
    return (
        <section className='my-[3rem]'>
            <div className="top_seller_header flex items-center justify-between mb-[10px] dark:text-slate-200">
                <h2 className='text-[14px] font-medium text-black lg:text-[15px] dark:text-slate-200'>e-shop Top Sellers</h2>
                {/* <div className="navigation flex items-center">
                    <BiLeftArrowCircle
                        onClick={handleLeftSlide}
                        className='text-[1.1rem] mr-2 cursor-pointer'
                    />
                    <BiRightArrowCircle
                        onClick={handleRightSlide}
                        className='text-[1.1rem] cursor-pointer'
                    />
                </div> */}
            </div>
            <div className="top_seller w-[100%] grid grid-cols-2 gap-2 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-3">
                {topSellingProducts.map((product) => (
                    <Product product={product} key={product?.id} />
                ))}
            </div>
        </section>
    )
}

export default TopSellers