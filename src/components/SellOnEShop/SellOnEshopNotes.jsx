import React from 'react'

const SellOnEshopNotes = () => {
    return (
        <div>
            <h2 className='font-medium text-[17px] w-[16rem] mb-2'>Here are ways to set yourself for success</h2>
            <div className="notes_container flex gap-3">
                <div className="note bg-lighterOrange p-6 rounded-md">
                    <h2 className='text-[15px] font-medium mb-2'>Write a standout title</h2>
                    <ul className='list-disc'>
                        <li className='text-[12px] mb-2'>
                            Be sure to include these in the title as we'll suggest search keywords that buyers frequently use.
                        </li>
                        <li className='text-[12px]'>
                            Stay away from using all capitals and concentrate on specifics like brand, model, size, and color.
                        </li>
                    </ul>
                </div>

                <div className="note bg-slate-200 p-6 rounded-md">
                    <h2 className='text-[15px] font-medium mb-2'>
                        Take excellent pictures
                    </h2>
                    <ul className='list-disc'>
                        <li className='text-[12px] mb-2'>
                            Take several pictures of your objects in a bright area while capturing any flaws to ensure clarity.
                        </li>
                        
                    </ul>
                </div>

                <div className="note bg-amber-200 p-6 rounded-md">
                    <h2 className='text-[15px] font-medium mb-2'>
                        Decide on a fair amount.
                    </h2>
                    <ul className='list-disc'>
                        <li className='text-[12px] mb-2'>
                            We'll suggest a figure based on recent transactions for comparable goods.
                        </li>
                        <li className='text-[12px]'>
                            Observe what other sellers are charging for similar goods, or use Best Offer to haggle and sell more quickly.
                        </li>
                    </ul>
                </div>

                <div className="note bg-gray-200 p-6 rounded-md">
                    <h2 className='text-[15px] font-medium mb-2'>
                        Ship effortlessly
                    </h2>
                    <ul className='list-disc'>
                        <li className='text-[12px] mb-2'>
                            We offer delivery suggestions, but if you want to save money on postage, use an e-shop delivery label.
                        </li>
                        <li className='text-[12px]'>
                            Additionally, you can also give Local Pickup if you're selling locally.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SellOnEshopNotes