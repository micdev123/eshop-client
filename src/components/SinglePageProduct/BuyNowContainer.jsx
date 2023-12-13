import React, { useState } from 'react'
import { IoMdContacts } from 'react-icons/io';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { MdLocalShipping, MdOutlinePayment } from 'react-icons/md';
import { PiHandCoinsFill } from 'react-icons/pi';

const payMethods = [
    {
        id: 1,
        type: 'Orange Money',
        cards: ['/assets/orange.png']
    },
    {
        id: 2,
        type: 'AfriMoney',
        cards: ['/assets/africell.png']
    },
    {
        id: 3,
        type: 'Credit | Debit card',
        cards: ['/assets/visa.png', '/assets/mastercard.png']
    },
    {
        id: 4,
        type: 'Pay on delivery | Cash',
        cards: [<PiHandCoinsFill />]
    }
]

const BuyNowContainer = () => {
    const [isSelected, setIsSelected] = useState(payMethods[0].type);
    return (
        <div className="buyNow_form my-[2rem] bg-zinc-50 p-[1.5rem] rounded-sm h-[86vh] overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[1.8px] md:my-[1rem]">
            <h2 className='text-[1rem] font-medium border-b-[1px] border-zinc-300 pb-[7px]'>
                Your Order
            </h2>
            {/* Buy now product info */}
            <div className="product_container">
                {/* Cart Products container */}
                <div className="items_container">
                    {/* Single Cart Item */}
                    <div className="item w-[100%] flex items-start  gap-3 mb-2 border-b-[1px] pb-2 border-slate-300 sm:items-center relative  dark:border-slate-700">
                        {/* The Product */}
                        <div className="flex flex-col w-[100%] justify-between sm:flex-row md:flex-col lg:flex-row">
                            {/* Item Img */}
                            <div className="item_img w-[12rem] mx-auto h-[12rem] flex justify-center items-center">
                                <img src="/assets/pp9.png" alt="" className='w-[100%] object-contain' />
                            </div>
                            {/* Item Content */}
                            <div className="item_content w-[100%] flex items-end justify-between sm:items-center">
                                {/* Left Side */}
                                <div className="left px-2 relative">
                                    {/* Item Name */}
                                    <h2 className='text-[16.5px] font-medium mb-1 md:text-[18px]'>
                                        Keener All Wood Round Dining Table
                                    </h2>
                                    {/* Item Price */}
                                    <p className='flex items-center gap-x-[7px] font-medium text-[12.5px] md:text-[13px]'>
                                        Price :
                                        <span className='font-normal text-lightBlack dark:text-slate-300'>
                                            $50
                                        </span>
                                    </p>
                                    {/* Item Color */}
                                    <p className='flex items-center gap-x-[7px] font-medium text-[12.5px] md:text-[13px]'>
                                        Color :
                                        <span className='font-normal text-lightBlack dark:text-slate-300'>
                                            Gray
                                        </span>
                                    </p>
                                    {/* Item Size */}
                                    <p className='flex items-center gap-x-[7px] font-medium text-[12.5px] md:text-[13px]'>
                                        Size :
                                        <span className='font-normal text-lightBlack dark:text-slate-300'>
                                            L
                                        </span>
                                    </p>
                                    {/* Quantity */}
                                    <p className='flex items-center gap-x-[7px] font-medium text-[12.5px] md:text-[13px]'>
                                        Quantity :
                                        <span className='font-normal text-lightBlack dark:text-slate-300'>
                                            2
                                        </span>
                                    </p>
                                </div>
                                {/* Cart Item Total Price */}
                                <div className="right absolute bottom-[3rem] right-2 sm:static">
                                    <p className='text-[14px] font-semibold md:font-medium'>$1000</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>

            {/* Who is placing the order */}
            <div className="my-[2rem]">
                <h2 className='text-[14px] font-medium flex items-center gap-x-[5px] mb-[15px]'>
                    <IoMdContacts className='text-[1.2rem]' />
                    Who is placing this order?
                </h2>
                <form action="">
                    <div className="flex flex-col items-center gap-[2rem] mb-[2rem] lg:mb-0 lg:my-[1rem] lg:flex-row">
                        {/* First name */}
                        <input type="text"
                            placeholder='First name'
                            className='w-[100%] text-[13px] border-b-[1px] border-zinc-400 bg-transparent pb-[5px] px-[5px]'
                        />
                        {/* Last name */}
                        <input type="text"
                            placeholder='Last name'
                            className='w-[100%] text-[13px] border-b-[1px] border-zinc-400 bg-transparent pb-[5px] px-[5px]'
                        />
                        
                    </div>
                    {/* Email | Phone number */}
                    <div className="flex flex-col items-center gap-[2rem] my-[1rem] lg:flex-row">
                        {/* Email */}
                        <input type="email"
                            placeholder='Email'
                            className='w-[100%] text-[13px] border-b-[1px] border-zinc-400 bg-transparent pb-[5px] px-[5px]'
                        />
                        {/* Phone number */}
                        <input type="text"
                            placeholder='Phone number'
                            className='w-[100%] text-[13px] border-b-[1px] border-zinc-400 bg-transparent pb-[5px] px-[5px]'
                        />
                        
                    </div>
                </form>
            </div>

            {/* Delivery | Where should the order been sent */}
            <div className="delivery_options mt-[2.5rem]">
                <h2 className='text-[14px] font-medium flex items-center gap-x-[5px] mb-[10px]'>
                    <MdLocalShipping className='text-[1.2rem]' />
                    Where would you like your order sent?
                </h2>
                <p className='text-[14px] leading-[2rem] md:leading-0'>
                    <span className='border-b-[1px] border-dashed border-zinc-800 pb-[2px] mr-[5px]'>
                        Contact supplier
                    </span>
                    to negotiate delivery details.
                </p>
            </div>

            {/* Payment methods */}
            <div className="payment_method mt-[2.5rem]">
                <h2 className='text-[14px] font-medium flex items-center gap-x-[5px] mb-[5px]'>
                    <MdOutlinePayment className='text-[1.2rem]' />
                    How would you like to pay?
                </h2>
                <p className='text-[11.5px] text-zinc-700 mb-[20px]'>
                    Enjoy encrypted and secure payments 
                    <span className='font-medium border-b-[1px] border-dashed border-zinc-800 pb-[2px] cursor-pointer ml-[5px]'>
                        View details
                    </span>
                </p>
                {/* Payment method */}
                <div className="methods w-[100%] mt-1">
                    {payMethods?.map((method) => {
                        const { id, type, cards } = method;
                        return (
                            <div
                                onClick={() => setIsSelected(type)}
                                key={id} className={`method w-[100%] flex gap-4 items-center justify-between bg-zinc-50 py-[8px] px-2 border-[1px] rounded-md mb-2 cursor-pointer md:px-6 ${isSelected === type && ('border-2 border-sky-500')}`}>
                                <div className="left flex items-center mr-5">
                                    <div className="w-[13px] h-[12.5px] rounded-full border border-slate-500 flex justify-center items-center">
                                        <div className={`w-[7px] h-[7px] scale-0 bg-sky-700 rounded-full ${isSelected === type && ('scale-100')}`}></div>
                                    </div>
                                    <h2 className='text-[11px] font-medium ml-2 md:text-[11.5px]'>
                                        {type}
                                    </h2>
                                </div>
                                {/* Method */}
                                <div className="payment_method flex gap-2 items-center justify-center md:gap-4">
                                    {cards?.map((card, i) => (
                                        <div key={i} className="mastercard w-[1.4rem] h-[1.4rem]">
                                            {method?.id == 4 ?
                                                card : 
                                                <img src={card} alt={card} className='w-[100%] h-[100%] object-contain' />
                                            } 
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* Card Info */}
                {isSelected === payMethods[2].type && (
                    <div className="card-info">
                        {/* Card */}
                        <div className="card mt-4">
                            {/* Card name & Card number */}
                            <div className="flex items-center flex-col gap-y-3 mt-4 sm:flex-row sm:gap-x-2 md:flex-col lg:flex-row lg:gap-x-2">
                                <input
                                    type="text"
                                    name='cardName'
                                    id='cardName'
                                    // required={isSelected === payMethods[2].type}
                                    placeholder='Name on the card please'
                                    className='w-[100%] text-[11px] py-[8px] px-[10px] rounded-sm outline-0'
                                    // value={details?.cardName}
                                    // onChange={handleChange}
                                />
                                <input
                                    type="number"
                                    name='cardNumber'
                                    id='cardNumber'
                                    // required={isSelected === payMethods[2].type}
                                    placeholder='Card number'
                                    className='w-[100%] text-[11px] py-[8px] px-[10px] rounded-sm outline-0'
                                    // value={details?.cardNumber}
                                    // onChange={handleChange}
                                />
                            </div>
                            {/* Card date, Card cvv code and country */}
                            <div className="flex items-center flex-col gap-x-2 gap-y-3 mt-4 sm:flex-row md:flex-col lg:flex-row">
                                {/* Date on the card */}
                                <input
                                    type="date"
                                    name='cardDate'
                                    id='cardDate'
                                    // required={isSelected === payMethods[2].type}
                                    placeholder='MM | YY'
                                    className='w-[100%] text-[11px] py-[8px] px-[10px] rounded-sm outline-0'
                                    // value={details?.cardDate}
                                    // onChange={handleChange}
                                />
                                    
                                {/* CVV code */}
                                <input
                                    type="number"
                                    name='cvvCode'
                                    id='cvvCode'
                                    // required={isSelected === payMethods[2].type}
                                    placeholder='CVV code please'
                                    className='w-[100%] text-[11px] py-[8px] px-[10px] rounded-sm outline-0'
                                    // value={details?.cvvCode}
                                    // onChange={handleChange}
                                />
                    
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Returns */}
            <div className="mt-[2.5rem]">
                <h2 className='text-[14px] font-medium flex items-center gap-x-[5px] mb-[5px]'>
                    <IoReturnDownBackOutline className='text-[1.2rem]' />
                    Returns & Refunds
                </h2>
                <p className='text-[14px] font-medium text-zinc-700 mb-[20px]'>
                    Eligible for refunds within 30 days of receiving products. 
                    <span className='font-medium border-b-[1px] border-dashed border-zinc-800 pb-[2px] cursor-pointer ml-[5px]'>
                        View details
                    </span>
                </p>
            </div>

            {/* Total summary */}
            <div className="total_summary border-t-[1px] border-zinc-400 pt-[10px]">
                <div className="px-[10px]">
                    {/* Subtotal */}
                    <p className='flex items-center justify-between text-[13px] my-[10px]'>
                        Subtotal:
                        <span className="font-medium">
                            $100
                        </span>
                    </p>
                    {/* Discount */}
                    <p className='flex items-center justify-between text-[13px] my-[10px]'>
                        Discount:
                        <span className="font-medium">
                            $0
                        </span>
                    </p>
                    {/* Delivery amount */}
                    <p className='flex items-center justify-between text-[13px] my-[10px]'>
                        Delivery:
                        <span className="font-medium">
                            $0
                        </span>
                    </p>
                </div>
                {/* Total */}
                <p className='flex items-center justify-between text-[14px] my-[10px] border-t-[1px] border-zinc-400 pt-[10px] mt-[5px] px-[10px] font-medium'>
                    Total:
                    <span className="font-medium">
                        $100
                    </span>
                </p>
            </div>

            {/* Place order button */}
            <button className='w-[100%] flex items-center justify-center bg-slate-600 text-white py-[8px] text-[12px] rounded-md mt-[2rem] md:py-[6px]'>
                Place Order
            </button>
            
        </div>
    )
}

export default BuyNowContainer