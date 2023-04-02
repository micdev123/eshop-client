import React, { useState } from 'react'
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa'


const accordions_data = [
    {
        id: 1,
        title: 'How should I set the amount for my listing?',
        desc: 'For most items, we can provide a price recommendation for you based on recently sold, similar items. How you price your item can depend on how you prefer to sell it'
    },
    {
        id: 2,
        title: 'How much does it cost to sell?',
        desc: 'We typically charge between 10% and 15% of the ultimate selling price for your item. Your first 100(standard) | 250(ultimate) listing each month are free; each additional listing costs $0.35 to insert.'
    },
    {
        id: 3,
        title: 'How much will it cost to ship my item?',
        desc: 'You can select the shipping method that provides you with the most value and ease.'
    },
    {
        id: 4,
        title: 'How does e-shop protect sellers?',
        desc: 'We acknowledge that as a seller, events may take place that are beyond your influence. When they do, you can rely on us.'
    }
]

const Accordion = () => {
    const [accordion, setAccordion] = useState(-1)
    const [dropQuestion, setDropQuestion] = useState(false)
    // console.log(accordion);
    return (
        <>
            {accordions_data?.map((data, index) => (
                <div key={data?.id} className={`accordion my-3 ${accordion === index && ("active")}`}>
                    <div
                        onClick={() => [setAccordion(index), setDropQuestion(!dropQuestion)]}
                        className="head_title flex items-center justify-between cursor-pointer text-zinc-500">
                        <h2 className='title text-[15.5px] font-medium'>
                            {data?.title}
                        </h2>
                        <FaRegArrowAltCircleDown className={`text-[14px] cursor-pointer ${accordion === index && ('hidden')}`} />
                        <FaRegArrowAltCircleUp className={`${accordion === index ? 'flex' : 'hidden'}`} />
                    </div>
                    <div className="body mt-2">
                        {dropQuestion && (
                            <p className={`desc text-[13px] hidden ${accordion === index && ('active')} `}>
                                {data?.desc}
                            </p>
                        )}
                        
                    </div>
                </div>
            ))}
        </>
    )
}

export default Accordion