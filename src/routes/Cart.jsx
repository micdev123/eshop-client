import React from 'react'
import { BiMinus } from 'react-icons/bi'
import { BsFillShareFill, BsFillTrashFill, BsPlus } from 'react-icons/bs'
import { FiSave } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div>
            <div className="cart_container  my-6">
                <button className='bg-zinc-700 text-white text-[12px] py-2 px-4 rounded-sm outline-none mb-5'>Continue Shopping</button>
                <div className="container bg-lighterBlue flex gap-[2rem] p-6 rounded-md">
                    <div className="left w-[75%]">
                        <div className="flex justify-between items-center mb-3 border-b-[1px] pb-2 border-slate-300">
                            <h2 className='text-[18px] font-medium'>Shopping Cart</h2>
                            <p className="total text-[15px] font-medium">Price</p>
                        </div>
                        <div className="items_container">
                            {/* Single Item */}
                            <div className="item w-[100%] flex items-center gap-3 mb-4 border-b-[1px] pb-3 border-slate-300">
                                {/* Checkbox */}
                                <input type="checkbox" />
                                {/* Item Img */}
                                <div className="item_img w-[12rem] h-[12rem] flex justify-center items-center">
                                    <img src="/assets/pp9.png" alt="" className='w-[100%] object-contain' />
                                </div>
                                {/* Item Content */}
                                <div className="item_content w-[100%] flex items-center justify-between">
                                    <div className="left">
                                        <h2 className='text-[18px] font-medium mb-1'>
                                            Keener All Wood Round Dining Table
                                        </h2>
                                        <div className="price flex items-center my-1.5">
                                            <h1 className='font-medium text-[13px] mr-2'>Price : </h1>
                                            <p className='text-[12px] text-lightBlack'>$50</p>
                                        </div>

                                        <div className="availability flex items-center my-1.5">
                                            <h2 className='font-medium text-[13px] mr-2'>Availability :</h2>
                                            <p className='text-[12px] text-lightBlack'>2 InStock</p>
                                        </div>

                                        <div className="color flex items-center my-1.5">
                                            <h2 className='font-medium text-[13px] mr-2'>Color : </h2>
                                            <p className='text-[12px] text-lightBlack'>Gray</p>
                                        </div>

                                        <div className="size flex items-center my-1.5">
                                            <h2 className='font-medium text-[13px] mr-2'>Size : </h2>
                                            <p className='text-[12px] text-lightBlack'>L</p>
                                        </div>

                                        <div className="quantity flex items-center my-1.5">
                                            <h2 className='font-medium text-[13px] mr-2'>Quantity :</h2>
                                            <div className="flex items-center">
                                                <div className="qty border py-0.5 px-3 text-[12px] font-medium">
                                                    1
                                                </div>
                                                <div className="qty_btns">
                                                    <BsPlus className='border text-[11.7px] font-medium cursor-pointer'/>
                                                    <BiMinus className='border text-[11.7px] font-medium cursor-pointer'/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="action flex items-center gap-4 mt-3">
                                            <p className='flex items-center text-[12.5px] gap-1.5'>
                                                <BsFillTrashFill className='text-[14px] text-red-700' />
                                                Delete
                                            </p>
                                            <p className='flex items-center text-[12.5px] gap-1.5'>
                                                <FiSave className='text-[14px]' />
                                                Save for later
                                            </p>
                                            <p className='flex items-center text-[12.5px] gap-1.5'>
                                                <BsFillShareFill className='text-[14px]' />
                                                Share
                                            </p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <p className='text-[14px] font-medium'>$1000</p>
                                    </div>
                                </div>
                            </div>

                            {/* Single Item */}
                            <div className="item w-[100%] flex items-center gap-3 mb-4 border-b-[1px] pb-3 border-slate-300">
                                {/* Checkbox */}
                                <input type="checkbox" />
                                {/* Item Img */}
                                <div className="item_img w-[12rem] h-[12rem] flex justify-center items-center">
                                    <img src="/assets/pp9.png" alt="" className='w-[100%] object-contain' />
                                </div>
                                {/* Item Content */}
                                <div className="item_content w-[100%] flex items-center justify-between">
                                    <div className="left">
                                        <h2 className='text-[18px] font-medium mb-1'>
                                            Keener All Wood Round Dining Table
                                        </h2>
                                        <div className="price flex items-center my-1.5">
                                            <h1 className='font-medium text-[13px] mr-2'>Price : </h1>
                                            <p className='text-[12px] text-lightBlack'>$50</p>
                                        </div>

                                        <div className="availability flex items-center my-1.5">
                                            <h2 className='font-medium text-[13px] mr-2'>Availability :</h2>
                                            <p className='text-[12px] text-lightBlack'>2 InStock</p>
                                        </div>

                                        <div className="color flex items-center my-1.5">
                                            <h2 className='font-medium text-[13px] mr-2'>Color : </h2>
                                            <p className='text-[12px] text-lightBlack'>Gray</p>
                                        </div>

                                        <div className="size flex items-center my-1.5">
                                            <h2 className='font-medium text-[13px] mr-2'>Size : </h2>
                                            <p className='text-[12px] text-lightBlack'>L</p>
                                        </div>

                                        <div className="quantity flex items-center my-1.5">
                                            <h2 className='font-medium text-[13px] mr-2'>Quantity :</h2>
                                            <div className="flex items-center">
                                                <div className="qty border py-0.5 px-3 text-[12px] font-medium">
                                                    1
                                                </div>
                                                <div className="qty_btns">
                                                    <BsPlus className='border text-[11.7px] font-medium cursor-pointer'/>
                                                    <BiMinus className='border text-[11.7px] font-medium cursor-pointer'/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="action flex items-center gap-4 mt-3">
                                            <p className='flex items-center text-[12.5px] gap-1.5'>
                                                <BsFillTrashFill className='text-[14px] text-red-700' />
                                                Delete
                                            </p>
                                            <p className='flex items-center text-[12.5px] gap-1.5'>
                                                <FiSave className='text-[14px]' />
                                                Save for later
                                            </p>
                                            <p className='flex items-center text-[12.5px] gap-1.5'>
                                                <BsFillShareFill className='text-[14px]' />
                                                Share
                                            </p>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <p className='text-[14px] font-medium'>$1000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right w-[25%] bg-slate-200 p-4 rounded-md h-fit">
                        <h2 className='text-[14px] font-medium text-center mb-2'>Your Cart Summary</h2>
                        <p className='text-[12px] text-center'>You have <span className='text-amber-700 font-medium'>2 items</span> in your cart</p>

                        <div className="content_container mt-4">
                            <div className="product_inCart flex items-center justify-between mb-3">
                                <h2 className='text-[13px] font-medium mr-2'>Product InCart : </h2>
                                <p className='text-[12px] text-lightBlack'>2 Items</p>
                            </div>
                            <div className="subtotal flex items-center justify-between">
                                <h2 className='text-[13px] font-medium mr-2'>Cart SubTotal : </h2>
                                <p className='text-[12px] text-lightBlack'>$100</p>
                            </div>
                        </div>

                        <button className='bg-amber-800 w-full rounded-md py-2 outline-none mt-4'>
                            <Link to='/checkout' className='text-[12px] font-medium  text-white '>
                                Checkout
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className="product_save_for_later bg-lighterBlue p-6 rounded-md">
                <h2 className='text-[15px] font-medium mb-4 border-b-[1px] border-slate-300 pb-2'>Save For Later Items(2)</h2>
                <div className="container grid grid-cols-4 gap-2">
                    <div className="item flex flex-col justify-center items-center bg-slate-200 py-4 px-3 rounded-md">
                        <div className="item_img w-[12rem] h-[12rem]">
                            <img src="/assets/pp4.png" alt="" />
                        </div>

                        <div className="content px-2">
                            <h2 className='text-[14.5px] font-medium my-2'>Brown Long Sleeve Ladder Jacket</h2>
                            
                            <div className="availability flex items-center my-1.5">
                                <h1 className='font-medium text-[13px] mr-2'>Availability : </h1>
                                <p className='text-[12px] text-green-700'>InStock</p>
                            </div>

                            <div className="price flex items-center my-1.5">
                                <h1 className='font-medium text-[13px] mr-2'>Price : </h1>
                                <p className='text-[12px] text-lightBlack'>$50</p>
                            </div>

                            <div className="color flex items-center my-1.5">
                                <h1 className='font-medium text-[13px] mr-2'>Color : </h1>
                                <p className='text-[12px] text-lightBlack'>Gray</p>
                            </div>

                            <div className="size flex items-center my-1.5">
                                <h1 className='font-medium text-[13px] mr-2'>Size : </h1>
                                <p className='text-[12px] text-lightBlack'>L</p>
                            </div>

                            <button className='text-[12px] bg-amber-700 text-white py-2 w-full rounded-md my-2'>
                                Move to cart
                            </button>
                            <button className='flex gap-2 justify-center items-center text-[12px] bg-red-900 text-white py-2 w-full rounded-md'>
                                <BsFillTrashFill className='text-[14px]' />
                                Delete
                            </button>
                        </div>
                    </div>
                    
                    <div className="item flex flex-col justify-center items-center bg-slate-200 py-4 px-3 rounded-md">
                        <div className="item_img w-[12rem] h-[12rem]">
                            <img src="/assets/pp4.png" alt="" />
                        </div>

                        <div className="content px-2">
                            <h2 className='text-[14.5px] font-medium my-2'>
                                Brown Long Sleeve Ladder Jacket
                            </h2>
                            
                            <div className="availability flex items-center my-1.5">
                                <h1 className='font-medium text-[13px] mr-2'>Availability : </h1>
                                <p className='text-[12px] text-green-700'>InStock</p>
                            </div>

                            <div className="price flex items-center my-1.5">
                                <h1 className='font-medium text-[13px] mr-2'>Price : </h1>
                                <p className='text-[12px] text-lightBlack'>$50</p>
                            </div>

                            <div className="color flex items-center my-1.5">
                                <h1 className='font-medium text-[13px] mr-2'>Color : </h1>
                                <p className='text-[12px] text-lightBlack'>Gray</p>
                            </div>

                            <div className="size flex items-center my-1.5">
                                <h1 className='font-medium text-[13px] mr-2'>Size : </h1>
                                <p className='text-[12px] text-lightBlack'>L</p>
                            </div>

                            <button className='text-[12px] bg-amber-700 text-white py-2 w-full rounded-md my-2'>
                                Move to cart
                            </button>
                            <button className='flex gap-2 justify-center items-center text-[12px] bg-red-900 text-white py-2 w-full rounded-md'>
                                <BsFillTrashFill className='text-[14px]' />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart