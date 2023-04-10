import React from 'react'
import Stars from '../components/Stars'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose, GrFormNext } from 'react-icons/gr';
import { BsFillGridFill } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go'
import { products } from '../data';
import Product from '../components/Product';
import { Link } from 'react-router-dom';

export const Products = () => {
    return (
        <div className='products_container flex gap-10 my-3 dark:text-slate-200'>
            {/* All Filter Container */}
            <div className="left w-[16%] hidden lg:block">
                <h2 className='text-[18px] font-semibold mb-[2rem]'>Products</h2>
                {/* Filter Container */}
                <div className="filter_container w-[100%]">
                    {/* Add category filter */}
                    
                    {/* Vendors List Filter */}
                    <div className="vendors_list w-[100%]">
                        <h2 className='text-[14px] font-medium'>Vendors</h2>
                        <div className="search relative flex items-center mt-2 mb-3">
                            <BiSearch className='absolute' />
                            <input type="text" placeholder="Search" className='py-1 pl-5 pr-3 text-[12px] bg-transparent border-b-2' />
                        </div>
                        <div className="filter_list w-[100%] h-[24vh] overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[3px] cursor-pointer">
                            <Link to='/vendor/1' className="list flex items-center my-2 cursor-pointer">
                                <input type="checkbox" className='cursor-pointer' />
                                <label htmlFor="" className='text-[12.5px] ml-2 cursor-pointer'>e-shop</label>
                            </Link>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                        </div>
                    </div>
                    {/* Availability Filter */}
                    <div className="availability w-[100%] my-4">
                        <h2 className='text-[14px] font-medium'>Availability</h2>
                        <div className="filter_list">
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>In Stock (22)</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>Out Of Stock (1)</label>
                            </div>
                        </div>
                    </div>
                    {/* Rating Filter */}
                    <div className="reviews w-[100%] my-4">
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
                    {/* Brands Filter */}
                    <div className="brands w-[100%] my-4">
                        <h2 className='text-[14px] font-medium'>Brands</h2>
                        <div className="search relative flex items-center mt-2 mb-3">
                            <BiSearch className='absolute' />
                            <input type="text" placeholder="Search" className='py-1 pl-5 pr-3 text-[12px] bg-transparent border-b-2' />
                        </div>
                        <div className="filter_list w-[100%] h-[24vh] overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[3px]">
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>e-shop</label>
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
                                <label htmlFor="" className='text-[12.5px] ml-2'>XS (22)</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>S (1)</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>M (1)</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>L (1)</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>XL (1)</label>
                            </div>
                            <div className="list flex items-center my-2">
                                <input type="checkbox" />
                                <label htmlFor="" className='text-[12.5px] ml-2'>XXL (1)</label>
                            </div>
                        </div>
                    </div>
                    {/* Others Filter */}
                    <div className="others"></div>
                </div>
            </div>

            {/* Products Container */}
            <div className="right w-[100%] lg:w-[84%]">
                {/* Showing The current category */}
                <div className="current_category mt-[0.45rem]">
                    {/* Current category */}
                    <p className='text-[13.5px] font-medium mb-[1rem] text-zinc-600 md:mb-[2rem] dark:text-slate-300'>
                        All Products |
                    </p>
                </div>
                {/* Search Keywords, SortBy & Grid Display */}
                <div className="search_keywords_sortBy_grid_display flex items-center justify-between mb-7">
                    {/* Search Keywords */}
                    <div className="search_keywords flex items-center gap-4">
                        {/* Info */}
                        <div className="info">
                            <p className='text-[11.5px] font-medium'>1-12 of 365 results</p>
                        </div>
                        {/* Keywords */}
                        <div className="keywords hidden md:flex gap-3 items-center">
                            <div className="keywords_container flex gap-3 items-center">
                                <div className="keyword flex items-center bg-zinc-200 rounded-md text-[11px] font-medium py-1 px-2 text-zinc-600">
                                    <p>e-shop.com</p>
                                    <GrFormClose className='text-[14px] ml-2' />
                                </div>
                                
                                <div className="keyword flex items-center bg-zinc-200 rounded-md text-[11px] font-medium py-1 px-2 text-zinc-600">
                                    <p>e-shop.com</p>
                                    <GrFormClose className='text-[14px] ml-2' />
                                </div>
                                <div className="keyword flex items-center bg-zinc-200 rounded-md text-[11px] font-medium py-1 px-2 text-zinc-600">
                                    <p>e-shop.com</p>
                                    <GrFormClose className='text-[14px] ml-2' />
                                </div>
                            </div>
                            {/* Reset Button */}
                            <button className='text-[12px] py-[2px] px-2 border-2 border-zinc-400 bg-transparent rounded-md'>
                                Reset
                            </button>
                        </div>
                    </div>
                    {/* SortBy & Grid Display */}
                    <div className="sortBy_grid_display flex items-center gap-4">
                        {/* SortBy */}
                        <div className="sortBy flex gap-2 items-center">
                            <label htmlFor="" className='text-[12.5px] font-medium'>Sort By :</label>
                            <select name="" id="" className='text-[12px] py-1 pl-2 pr-4 rounded-sm bg-zinc-200 dark:bg-slate-700'>
                                <option value="">Featured</option>
                                <option value="">Best Selling</option>
                            </select>
                        </div>
                        {/* Grid Display */}
                        <div className="grid_display hidden md:flex items-center gap-1">
                            <div className="bg-gray-200 py-1 px-1 rounded-sm dark:bg-slate-700">
                                <BsFillGridFill />
                            </div>
                            <div className="bg-gray-200 py-1 px-1 rounded-sm dark:bg-slate-700">
                                <GoThreeBars />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products Result */}
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
    )
}
