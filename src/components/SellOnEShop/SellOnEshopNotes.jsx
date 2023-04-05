import React from 'react'

const SellOnEshopNotes = () => {
    return (
        <div>
            <h2 className='font-medium text-[14.5px] w-[16rem] mb-2 md:text-[17px]'>Here are ways to set yourself for success</h2>
            <div className="notes_container grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="note bg-lighterOrange p-6 rounded-md">
                    <h2 className='text-[13.5px] font-medium mb-2 md:text-[15px]'>Write a standout title</h2>
                    <ul className='list-disc'>
                        <li className='text-[11.5px] mb-2 md:text-[12px]'>
                            Be sure to include these in the title as we'll suggest search keywords that buyers frequently use.
                        </li>
                        <li className='text-[11.5px] md:text-[12px]'>
                            Stay away from using all capitals and concentrate on specifics like brand, model, size, and color.
                        </li>
                    </ul>
                </div>

                <div className="note bg-slate-200 p-6 rounded-md">
                    <h2 className='text-[13.5px] font-medium mb-2 md:text-[15px]'>
                        Take excellent pictures
                    </h2>
                    <ul className='list-disc'>
                        <li className='text-[11.5px] mb-2 md:text-[12px]'>
                            Take several pictures of your objects in a bright area while capturing any flaws to ensure clarity.
                        </li>
                        
                    </ul>
                </div>

                <div className="note bg-amber-200 p-6 rounded-md">
                    <h2 className='text-[13.5px] font-medium mb-2 md:text-[15px]'>
                        Decide on a fair amount.
                    </h2>
                    <ul className='list-disc'>
                        <li className='text-[11.5px] mb-2 md:text-[12px]'>
                            We'll suggest a figure based on recent transactions for comparable goods.
                        </li>
                        <li className='text-[11.5px] md:text-[12px]'>
                            Observe what other sellers are charging for similar goods, or use Best Offer to haggle and sell more quickly.
                        </li>
                    </ul>
                </div>

                <div className="note bg-gray-200 p-6 rounded-md">
                    <h2 className='text-[13.5px] font-medium mb-2 md:text-[15px]'>
                        Ship effortlessly
                    </h2>
                    <ul className='list-disc'>
                        <li className='text-[11.5px] mb-2 md:text-[12px]'>
                            We offer delivery suggestions, but if you want to save money on postage, use an e-shop delivery label.
                        </li>
                        <li className='text-[11.5px] md:text-[12px]'>
                            Additionally, you can also give Local Pickup if you're selling locally.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SellOnEshopNotes