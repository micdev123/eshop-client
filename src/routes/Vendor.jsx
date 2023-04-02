import React from 'react'
import { BiCurrentLocation, BiSearch, BiSupport } from 'react-icons/bi'
import { BsFillGridFill, BsFillShareFill } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'
import { GrFormNext } from 'react-icons/gr'
import { MdCall, MdOutlineFavoriteBorder } from 'react-icons/md'
import Product from '../components/Product'
import Stars from '../components/Stars'
import { products } from '../data'

const Vendor = () => {
    return (
        <div>
            <div className="hero w-[100%] h-[17rem] mb-7 relative">
                <div className="hero_img w-[100%] h-[100%] bg-gradient-to-r from-slate-700 to-cyan-700 rounded-md"></div>
                <div className="content w-[100%] flex absolute top-0 py-[1.6rem] px-[3rem]">
                    <div className="left flex item-start gap-2">
                        <div className="logo w-[8rem] h-[8rem]">
                            <img src="/assets/vendor.png" alt="" />
                        </div>
                        <div className="text_content text-white text-[12px]">
                            <h2 className='name text-[20px] font-medium mb-2'>
                                Florence & Family
                            </h2>
                            <p className="description w-[25rem] mb-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolore corrupti, amet voluptatum magni provident blanditiis at ratione accusamus iusto!
                            </p>
                            <p className="address flex items-center gap-2 mb-2">
                                <BiCurrentLocation />
                                #21 Main Road, Mama Beach Village
                            </p>
                            <p className="contact flex items-center gap-2 mb-2">
                                <MdCall />
                                (+232)-000-000-000
                            </p>
                            <div className="proof">
                                <div className="rating_reviews flex items-center gap-2 mb-2">
                                    <Stars stars={4} />
                                    20 reviews
                                </div>
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
                    <div className="right absolute bottom-[2rem] right-[3rem] text-white text-[12.5px] flex items-center justify-end gap-3">
                        <p className='flex items-center gap-2'>
                            <BsFillShareFill className='text-[15px]' />
                            Share
                        </p>
                        <p className='flex items-center gap-2'>
                            <MdOutlineFavoriteBorder className='text-[15px]' />
                            Save Vendor
                        </p>
                        <button className='bg-slate-800 py-2 px-4 text-[12px] flex items-center gap-2 rounded-sm outline-none'>
                            <BiSupport className='text-[15px]' />
                            Get Support
                        </button>
                    </div>
                </div>
            </div>
            <div className="search w-[39%] mx-auto flex items-center justify-center relative mt-10 mb-14">
                <BiSearch className='absolute left-3' />
                <input type="text" placeholder='Search Product' className='w-[100%] text-[12px] py-2.5 pl-8 rounded-md bg-zinc-200 border-2' />
            </div>
            <div className="container flex gap-10">
                <div className="left w-[16%]">
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
                                    <label htmlFor="" className='text-[12.5px] ml-2'>In Stock (22)</label>
                                </div>
                                <div className="list flex items-center my-2">
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-[12.5px] ml-2'>Out Of Stock (1)</label>
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
                        <div className="price w-[100%] my-4">
                            <h2 className='text-[14px] font-medium'>Price</h2>
                            <div className="filter_list w-[100%] flex items-center my-2">
                                <div className="list w-[100%]">
                                    <input type="text" className='rounded-md w-[100%] bg-zinc-200 border' />
                                </div>

                                <div className="range_line w-3 h-[1.75px] bg-slate-600 mx-2"></div>

                                <div className="list w-[100%]">
                                    <input type="text" className='rounded-md w-[100%] bg-zinc-200 border' />
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
                <div className="right w-[84%]">
                    <div className="after_search flex items-center justify-between mb-6">
                        <h2 className='text-[14px] font-medium'>All Items</h2>
                        <div className="filter_display_style flex items-center gap-4">
                            <select name="" id="" className='text-[12px] py-1 pl-2 pr-4 rounded-sm bg-zinc-200'>
                                <option value="">Best Selling</option>
                                <option value="">Featured</option>
                            </select>
                            <div className="grid_display flex items-center gap-1">
                                <div className="bg-gray-200 py-1 px-1 rounded-sm">
                                    <BsFillGridFill />
                                </div>
                                <div className="bg-gray-200 py-1 px-1 rounded-sm">
                                    <GoThreeBars />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products_result w-[100%]">
                        <div className="products grid grid-cols-4 gap-3">
                            {products.slice(0, 12).map((product) => (
                                <Product product={product} key={product?.id} />
                            ))}
                        </div>
                        
                        <div className="pagination w-[100%] bg-lighterBlue py-2 px-3 rounded-sm flex justify-between items-center mt-2">
                            <p className='bg-zinc-200 py-1.5 px-3 text-[11px] font-medium rounded-sm'>Showing 12 of 21</p>
                            <div className="pagination_container flex gap-2 items-center justify-center">
                                <div className="w-[1.4rem] h-[1.4rem] bg-slate-700 rounded-full text-white flex justify-center items-center">
                                <p className='text-[10px] font-semibold'>1</p>
                                </div>
                                <div className="w-[1.4rem] h-[1.4rem] bg-slate-700 rounded-full text-white flex justify-center items-center">
                                    <p className='text-[10px] font-semibold'>2</p>
                                </div>
                                <div className="w-[1.4rem] h-[1.4rem] bg-slate-300 rounded-full flex justify-center items-center">
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