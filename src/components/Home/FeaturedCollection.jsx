import React, { useRef, useState } from 'react';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'
import { products } from '../../data'
import Product from '../Product';

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
                {featuredProducts.map((product) => (
                    <Product product={product} key={product?.id} />
                ))}
            </div>
        </section>
    )
}

export default FeaturedCollection