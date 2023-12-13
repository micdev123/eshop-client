import React from 'react'
import Stars from '../Stars'
import { IoMdHelp } from 'react-icons/io'
import { FaMinus, FaPlus } from 'react-icons/fa'

const ProductInfo = ({ showAbout, setShowAbout}) => {
    return (
        <div className="product_content w-[100%] lg:w-fit">
            {/* Product Type nad visit seller link */}
            <div className="product_type flex items-center gap-x-[10px] mb-1">
                {/* Product type */}
                <p className='text-[12px] font-medium'>Wooden Chair</p>
                {/* Visit seller store link */}
                <button className='text-[10px] bg-slate-600 text-white py-[4px] px-[10px] rounded-[5px]'>
                    Visit Florence & Sons
                </button>
                {/* Show product tabs and content */}
                <button
                    onClick={() => setShowAbout(!showAbout)}
                    className='bg-zinc-600 text-white p-[4px] rounded-md md:hidden'
                >
                    <IoMdHelp className='text-[1rem]' />
                </button>
            </div>
            {/* Product Name */}
            <div className="product_name">
                <h2 className='text-[1.5rem] capitalize font-semibold'>
                    Classique Wood Chair Cane Backrest
                </h2>
            </div>
            {/* Ratings */}
            <div className="rating_reviews flex items-center my-2">
                <div className="rating flex items-center mr-3">
                    <Stars stars={4} />
                </div>
                <div className="reviews">
                    <p className='text-[11px] text-lightBlack dark:text-slate-200'>
                        (100 Customer reviews)
                    </p>
                </div>
            </div>

            {/* Product Tagline */}
            <div className="product_tagline">
                <p className='text-[13.5px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore reprehenderit corrupti totam placeat atque illo doloremque repellat fuga possimus facere unde incidunt, nisi ipsa eaque saepe eius earum in?
                </p>
            </div>
            
            {/* Separator */}
            <div className="w-full h-[1px] bg-zinc-200 my-[13px]"></div>

            {/* Price */}
            <div className="product_prices flex items-center">
                <p className='discount_price font-semibold text-[18px] mr-3'>
                    $100.00
                </p>
                <p className='original_price text-[11px] line-through text-lightBlack font-semibold dark:text-slate-400'>
                    $200.00
                </p>
            </div>
        
            {/* Brand */}
            <div className="brand flex items-center my-3">
                <h2 className='font-medium text-[13.5px] mr-2'>
                    Brand:
                </h2>
                <p className='text-[12.5px] text-lightBlack dark:text-slate-400'>
                    Classique
                </p>
            </div>

            {/* Category */}
            <div className="category flex items-center">
                <h2 className='font-medium text-[13.5px] mr-2'>
                    Category:
                </h2>
                <p className='text-[12.5px] text-lightBlack dark:text-slate-400'>
                    Household & Health
                </p>
            </div>

            {/* Tags */}
            <div className="tags flex items-center my-3">
                <h2 className='font-medium text-[13.5px] mr-2'>
                    Tags:
                </h2>
                <p className='text-[12.5px] text-lightBlack dark:text-slate-400'>
                    Best Selling
                </p>
            </div>

            {/* Availability */}
            <div className="availability flex items-center">
                <h2 className='font-medium text-[13.5px] mr-2'>
                    Availability:
                </h2>
                <p className='text-[12.5px] text-lightBlack dark:text-slate-400'>
                    2 InStock
                </p>
            </div>

            {/* Colors */}
            <div className="colors my-3">
                <h2 className='font-medium text-[13.5px] mr-2'>
                    Color Gallery:
                </h2>
                <div className="flex items-center gap-x-[10px] mt-1">
                    <div className="red w-[1.7rem] h-[1.7rem] rounded-[3px] bg-red-900"></div>
                    <div className="red w-[1.7rem] h-[1.7rem] rounded-[3px] bg-red-900"></div>
                    <div className="red w-[1.7rem] h-[1.7rem] rounded-[3px] bg-red-900"></div>
                    <div className="red w-[1.7rem] h-[1.7rem] rounded-[3px] bg-red-900"></div>
                </div>
            </div>

            {/* Sizes */}
            <div className="sizes my-3">
                <h2 className='font-medium text-[13.5px] mr-2'>Sizes:</h2>
                <div className="flex items-center gap-x-[10px] mt-1">
                    <div className="text-[12px] font-medium w-[2rem] h-[1.7rem] flex items-center justify-center rounded-[3px] border-[1px] border-zinc-300">
                        M
                    </div>
                    <div className="text-[12px] font-medium w-[2rem] h-[1.7rem] flex items-center justify-center rounded-[3px] border-[1px] border-zinc-300">
                        L
                    </div>
                    <div className="text-[12px] font-medium w-[2rem] h-[1.7rem] flex items-center justify-center rounded-[3px] border-[1px] border-zinc-300">
                        XL
                    </div>
                    <div className="text-[12px] font-medium w-[2rem] h-[1.7rem] flex items-center justify-center rounded-[3px] border-[1px] border-zinc-300">
                        XXL
                    </div>
                </div>
            </div>

            {/* Quantity */}
            <div className="quantity flex items-center my-4">
                <h2 className='font-medium text-[13.5px] mr-2'>
                    Quantity:
                </h2>
                <div className="flex items-center">
                    <div className="qty border py-0.5 px-3 text-[13.8px] font-medium dark:border-slate-700">
                        1
                    </div>
                    <div className="qty_btns">
                        <FaPlus className='border text-[11px] font-medium cursor-pointer dark:border-slate-700'/>
                        <FaMinus className='border text-[11px] font-medium cursor-pointer dark:border-slate-700'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo