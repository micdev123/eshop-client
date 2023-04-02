import React from 'react'
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <div className='my-4'>
            <h2 className='text-[12px] font-medium mb-5'>Checkout | Shipping address</h2>
        
            <div className="container flex gap-7 bg-lighterBlue p-12 rounded-md my-3">
                <div className="left w-[70%]">
                    <h2 className='text-[16px] font-medium mb-4'>Choose a shipping address</h2>
                    <div className="current_address flex items-center gap-2 mb-2">
                        <input type="radio" />
                        <label htmlFor="" className='flex gap-2'>
                            <h2 className='text-[13px] font-medium'>Michael L Bangura</h2>
                            <p className='text-[13px]'>Mama Beach</p>
                            <p className='text-[13px]'>Freetown</p>
                            <p className='text-[13px]'>Sierra Leone...</p>
                            <p className='text-[13px] text-amber-700 font-medium'>Edit address</p>
                        </label>
                    </div>
                    <button className='flex items-center gap-2 text-[12px] font-medium my-2'>
                        <MdAdd className='text-[16px] border-dotted border-2 border-sky-500 rounded-full font-medium' />
                        Add a new address
                    </button>

                    <div className="new_address my-7 w-[60%]">
                        <div className="presonal_information">
                            <h2 className='text-[14px] font-medium mb-2'>Personal Information:</h2>
                            <div className="name flex flex-col my-3">
                                <label htmlFor="name" className='text-[12px] mb-2 font-medium'>Full name</label>
                                <input type="text" className='text-[12px] p-2 rounded-md' />
                            </div>
                            <div className="email flex flex-col my-3">
                                <label htmlFor="email" className='text-[12px] mb-2 font-medium'>Email</label>
                                <input type="email" className='text-[12px] p-2 rounded-md' />
                            </div>
                            <div className="phone_number flex flex-col my-3">
                                <label htmlFor="name" className='text-[12px] mb-2 font-medium'>Phone number</label>
                                <input type="text" className='text-[12px] p-2 rounded-md' />
                            </div>
                        </div>

                        <div className="delivery_information mt-7">
                            <h2 className='text-[14px] font-medium mb-2'>Delivery Details:</h2>
                            <div className="container w-[100%]">
                                <div className="form_group w-[100%] flex gap-2 my-3">
                                    <div className="country w-[100%] flex flex-col">
                                        <label htmlFor="name" className='text-[12px] mb-2 font-medium'>Country | Region</label>
                                        <select name="" id="" className='text-[12px] p-2 rounded-md'>
                                            <option value="">Sierra Leone</option>
                                            <option value="">United State</option>
                                        </select>
                                    </div>
                                    <div className="town_state w-[100%] flex flex-col">
                                        <label htmlFor="name" className='text-[12px] mb-2 font-medium'>Town | State</label>
                                        <input type="text" className='text-[12px] p-2 rounded-md' />
                                    </div>
                                </div>
                                <div className="form_group w-[100%] flex gap-2 my-3">
                                    <div className="street w-[100%] flex flex-col">
                                        <label htmlFor="name" className='text-[12px] mb-2 font-medium'>Street</label>
                                        <input type="text" className='text-[12px] p-2 rounded-md' />
                                    </div>
                                    <div className="zip_code w-[100%] flex flex-col">
                                        <label htmlFor="name" className='text-[12px] mb-2 font-medium'>Zip Code</label>
                                        <input type="text" className='text-[12px] p-2 rounded-md' />
                                    </div>
                                </div>
                            </div>
                            <div className="checkbox flex items-center gap-2 my-2">
                                <input type="checkbox" />
                                <label htmlFor="name" className='text-[12px] font-medium'>Use as default address</label>
                            </div>
                        </div>

                        <button className='bg-amber-800 w-full rounded-md py-2 outline-none mt-4'>
                            <Link to='/paymentMethod' className='text-[12px] font-medium  text-white '>
                                Use this address
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="right w-[30%] bg-slate-200 p-4 rounded-md h-fit">
                    <h2 className='text-[14px] font-medium text-center mb-3'>Your Order Summary</h2>
                    <div className="content_container mt-3">
                        <div className="product_inCart flex items-center justify-between mb-3">
                            <h2 className='text-[13px] font-medium mr-2'>Product InCart : </h2>
                            <p className='text-[12px] text-lightBlack'>2 Items</p>
                        </div>
                        <div className="shipping flex items-center justify-between mb-3">
                            <h2 className='text-[13px] font-medium mr-2'>Shipping & Handling : </h2>
                            <p className='text-[12px] text-lightBlack'>--</p>
                        </div>
                        <div className="total_before_tax flex items-center justify-between mb-3">
                            <h2 className='text-[13px] font-medium mr-2'>Total before tax : </h2>
                            <p className='text-[12px] text-lightBlack'>--</p>
                        </div>
                        
                        <div className="subtotal flex items-center justify-between border-t-[1px] border-slate-300 pt-2">
                            <h2 className='text-[14px] font-medium mr-2'>Order Total : </h2>
                            <p className='text-[12px] text-lightBlack'>$100</p>
                        </div>
                        <button className='bg-amber-800 w-full rounded-md py-2 outline-none mt-4 text-[12px] font-medium  text-white'>
                            Continue
                        </button>
                        <p className='text-[11.5px] text-center mt-2'>
                            Choose an address to continue checking out. You'll still have a chance to review and edit your order before it's final.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout