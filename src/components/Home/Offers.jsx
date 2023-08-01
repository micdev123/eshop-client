import React from 'react'
import { HiOutlineGift, HiOutlineTruck } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi'
import { TbDiscount2 } from 'react-icons/tb'
import { BsCreditCard } from 'react-icons/bs';

const offers = [
    {
        id: 1,
        icon: <HiOutlineTruck />,
        title: "Free shipping",
        desc: "All order over $100"
    },
    {
        id: 2,
        icon: <BiSupport />,
        title: "support 24/7",
        desc: "Shop with an expert"
    },
    {
        id: 3,
        icon: <TbDiscount2 />,
        title: "Affordable",
        desc: "Get factory direct price"
    },
    {
        id: 4,
        icon: <HiOutlineGift />,
        title: "Daily surprise offers",
        desc: "Save up to 25% off"
    },
    {
        id: 5,
        icon: <BsCreditCard />,
        title: "Secure Payment",
        desc: "100% protected payment"
    }
]

const Offers = () => {
    return (
        <section className='my-[3rem] hidden lg:block dark:text-slate-200'>
            <div className="offers flex items-center justify-between px-8 dark:text-slate-200">
                {offers?.map((offer) => (
                    <div className="offer flex items-center" key={offer?.id}>
                        <p className="text-[1.8rem] mr-[7px]">
                            {offer?.icon}
                        </p>
                        <div className="basic_text">
                            <h2 className="font-semibold text-[13px] py-1">
                                {offer?.title}
                            </h2>
                            <p className="text-[10px] text-lightBlack dark:text-slate-400">
                                {offer?.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Offers