import React from 'react'
import { BiCurrentLocation, BiSearch, BiSupport } from 'react-icons/bi'
import { BsFacebook, BsFillGridFill, BsFillShareFill, BsTwitter } from 'react-icons/bs'
// import { GoThreeBars } from 'react-icons/go'
import { GrFormNext } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import { MdCall, MdOutlineFavoriteBorder } from 'react-icons/md'
import Product from '../components/Product'
import Stars from '../components/Stars'
import { products } from '../data'

const Vendor = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="head w-[100%] mb-7">
                <div className="head_img w-[100%] h-[10rem] rounded-md bg-red-200">
                    <img src="/assets/background.jpg" alt="" className='w-[100%] h-[100%] object-cover rounded-md' />
                </div>
                <div className="content w-[100%] py-[1.6rem] relative">
                    <div className="logo w-[5rem] h-[5rem] border-[1px] rounded-full absolute top-[-2.5rem] left-[2rem] p-0.5 bg-zinc-50">
                        <div className="rounded-full">
                            <img src="/assets/vendor.jpg" alt="" className='w-[100%] object-cover rounded-full' />
                        </div>
                    </div>
                    {/* <div className="logo w-[8rem] h-[8rem] sm:w-[15rem] sm:h-[10rem] md:w-[8rem] md:h-[8rem]">
                        <img src="/assets/vendor.png" alt="" />
                    </div> */}
                    <div className="w-[100%] mt-[2rem] px-[2rem]">
                        <div className="text_content text-[12px]">
                            <h2 className='logo text-[20px] font-medium mb-2 text-center sm:text-left'>
                                Florence & Family
                            </h2>
                            <p className="description w-[100%] mb-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore corrupti, amet voluptatum magni provident blanditiis at ratione accusamus iusto!
                            </p>
                            <div className="rating_reviews flex items-center gap-2 mb-2">
                                <Stars stars={4} />
                                20 reviews
                            </div>
                            {/* Contacts */}
                            <div className="contact flex items-center gap-x-3 mt-[1rem]">
                                <p className="address flex items-center gap-x-2">
                                    <BiCurrentLocation />
                                    #21 Main Road, Mama Beach Village
                                </p>
                                <div className="w-[1.2px] h-[18px] bg-zinc-400"></div>
                                <p className="contact flex items-center gap-x-2">
                                    <MdCall />
                                    (+232)-000-000-000
                                </p>
                                <div className="w-[1.2px] h-[18px] bg-zinc-400"></div>
                                <BsTwitter className='text-[12.5px]' />
                                <AiFillInstagram className='text-[12.5px]' />
                                <BsFacebook className='text-[12.5px]' />
                            </div>
                            {/* Proof */}
                            <div className="proof hidden sm:block">
                                <div className="flex items-center gap-3 mt-4">
                                    <p className='flex flex-col-reverse items-center font-medium'>
                                        <span className='text-[16px]'>1.9K</span>
                                        Items sold
                                    </p>
                                    <p className='flex flex-col-reverse items-center font-medium'>
                                        <span className='text-[16px]'>90%</span>
                                        Delivery On Time
                                    </p>
                                    <p className='flex flex-col-reverse items-center font-medium'>
                                        <span className='text-[16px]'>90%</span>
                                        Response Time
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="right absolute bottom-[-4rem] right-0 left-0 mx-auto text-[12.5px] flex flex-col items-center justify-center gap-6 sm:flex-row sm:bottom-[-2rem] sm:justify-end md:bottom-[2rem] sm:right-[1rem] md:right-[3rem]">
                        <div className="flex items-center gap-3">
                            <p className='flex items-center gap-2'>
                                <BsFillShareFill className='text-[15px]' />
                                Share
                            </p>
                            <p className='flex items-center gap-2'>
                                <MdOutlineFavoriteBorder className='text-[15px]' />
                                Save Vendor
                            </p>
                        </div>
                        <button className='bg-slate-800 text-white py-1 px-4 text-[11px] flex items-center gap-2 rounded-sm outline-none'>
                            <BiSupport className='text-[15px]' />
                            Get Support
                        </button>
                    </div>
                </div>
            </div>

            {/* Search */}
            <div className="search w-[90%] mx-auto flex items-center justify-center relative mt-10 mb-14 md:w-[39%]">
                <BiSearch className='absolute left-3' />
                <input type="text" placeholder='Search Product' className='w-[100%] text-[12px] py-2  pl-8 rounded-md bg-zinc-200 border-2 md:py-2.5' />
            </div>

            {/* Container_ */}
            <div className="container_ flex gap-10 dark:text-slate-200">
                {/* All Filter Container */}
                <div className="left w-[16%] hidden md:block">
                    {/* Filter Container */}
                    <div className="filter_container w-[100%]">
                        {/* Rating Filter */}
                        <div className="reviews w-[100%] mb-4">
                            <h2 className='text-[14px] font-medium'>Customer Ratings</h2>
                            <div className="filter_list">
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='flex items-center text-[13.5px] ml-2'>
                                        <Stars stars={5} />
                                        <span className='text-[11px] ml-2 font-light'>5.0</span>
                                    </label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='flex items-center text-[13.5px] ml-2'>
                                        <Stars stars={4} />
                                        <span className='text-[11px] ml-2 font-light'>4.0</span>
                                    </label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='flex items-center text-[13.5px] ml-2'>
                                        <Stars stars={3} />
                                        <span className='text-[11px] ml-2 font-light'>3.0</span>
                                    </label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='flex items-center text-[13.5px] ml-2'>
                                        <Stars stars={2} />
                                        <span className='text-[11px] ml-2 font-light'>2.0</span>
                                    </label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='flex items-center text-[13.5px] ml-2'>
                                        <Stars stars={1} />
                                        <span className='text-[11px] ml-2 font-light'>1.0</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                         {/* Availability Filter */}
                        <div className="availability w-[100%] my-4">
                            <h2 className='text-[14px] font-medium'>Availability</h2>
                            <div className="filter_list">
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-[11.5px] ml-2'>In Stock (22)</label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-[11.5px] ml-2'>Out Of Stock (1)</label>
                                </div>
                            </div>
                        </div>
                        {/* Price Filter */}
                        <div className="price w-[100%] my-4">
                            <h2 className='text-[14px] font-medium'>Price</h2>
                            <div className="filter_list w-[100%] flex items-center my-2">
                                <div className="list w-[100%]">
                                    <input type="text" className='rounded-md w-[100%] bg-zinc-200 border dark:bg-slate-600 dark:border-slate-700' />
                                </div>

                                <div className="range_line w-3 h-[1.75px] bg-slate-600 mx-2 dark:bg-slate-200"></div>

                                <div className="list w-[100%]">
                                    <input type="text" className='rounded-md w-[100%] bg-zinc-200 border dark:bg-slate-600 dark:border-slate-700' />
                                </div>
                            </div>
                        </div>
                        {/* Colors Filter */}
                        <div className="colors w-[100%] my-4">
                            <h2 className='text-[14px] font-medium'>Colors</h2>
                            <div className="filter_list flex gap-2 items-center my-2">
                                <div className="list w-[1.15rem] h-[1.1rem] bg-slate-600 rounded-full"></div>
                                <div className="list w-[1.15rem] h-[1.1rem] bg-slate-600 rounded-full"></div>
                                <div className="list w-[1.15rem] h-[1.1rem] bg-slate-600 rounded-full"></div>
                                <div className="list w-[1.15rem] h-[1.1rem] bg-slate-600 rounded-full"></div>
                                <div className="list w-[1.15rem] h-[1.1rem] bg-slate-600 rounded-full"></div>
                            </div>
                        </div>
                        {/* Size Filter */}
                        <div className="size w-[100%] my-4">
                            <h2 className='text-[14px] font-medium'>Sizes</h2>
                            <div className="filter_list">
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-[11.5px] ml-2'>XS (22)</label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-[11.5px] ml-2'>S (1)</label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-[11.5px] ml-2'>M (1)</label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-[12.5px] ml-2'>L (1)</label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-[11.5px] ml-2'>XL (1)</label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-[11.5px] ml-2'>XXL (1)</label>
                                </div>
                            </div>
                        </div>
                        {/* Others Filter */}
                        <div className="others"></div>
                    </div>
                </div>

                {/* Products Container */}
                <div className="right w-[100%] md:w-[84%]">
                    {/* Header */}
                    <div className="after_search flex items-center justify-between mb-6">
                        {/* Current category */}
                        <h2 className='text-[14px] font-medium'>All Items</h2>
                        {/* SortBy & Grid Display */}
                        <div className="filter_display_style flex items-center gap-4">
                            <div className="sortBy flex gap-2 items-center">
                                <label htmlFor="" className='text-[12.5px] font-medium'>
                                    Sort By :
                                </label>
                                <select name="" id="" className='text-[12px] py-1 pl-2 pr-4 rounded-sm bg-zinc-200 dark:bg-slate-700'>
                                    <option value="">Best Selling</option>
                                    <option value="">Featured</option>
                                </select>
                            </div>
                            <div className="grid_display flex items-center gap-1">
                                <div className="bg-gray-200 py-1 px-1 rounded-sm dark:bg-slate-700">
                                    <BsFillGridFill />
                                </div>
                                <div className="bg-gray-200 py-1 px-1 rounded-sm dark:bg-slate-700">
                                    {/* <GoThreeBars /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products_result w-[100%]">
                        <div className="products grid grid-cols-2 gap-2 gap-y-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-3">
                            {products.slice(0, 12).map((product) => (
                                <Product product={product} key={product?.id} />
                            ))}
                        </div>
                        
                        {/* Pagination */}
                        <div className="pagination w-[100%] bg-lighterBlue py-2 px-3 rounded-sm flex justify-between items-center mt-2 dark:bg-slate-800 dark:text-slate-200">
                            {/* Info */}
                            <p className='bg-zinc-200 py-1.5 px-3 text-[10px] font-medium rounded-sm dark:bg-slate-700'>
                                Showing 12 of 21
                            </p>
                            {/* Pagination Button */}
                            <div className="pagination_container flex gap-2 items-center justify-center">
                                <div className="w-[1.3rem] h-[1.3rem] bg-slate-700 rounded-full text-white flex justify-center items-center dark:bg-sky-800">
                                <p className='text-[10px] font-semibold'>1</p>
                                </div>
                                <div className="w-[1.3rem] h-[1.3rem] bg-slate-700 rounded-full text-white flex justify-center items-center dark:bg-sky-800">
                                    <p className='text-[10px] font-semibold'>2</p>
                                </div>
                                <div className="w-[1.3rem] h-[1.3rem] bg-slate-300 rounded-full flex justify-center items-center">
                                    <GrFormNext className='text-[15px] font-semibold text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vendor