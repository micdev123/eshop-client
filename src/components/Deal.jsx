import React from 'react'

const Deal = ({ deal }) => {
    const { deal_img, deal_name, deal_percent } = deal;
    return (
        <div className="deal flex items-center">
            <div className="deal_img w-[4rem] h-[4rem] md:w-[4rem] md:h-[4rem]">
                <img src={deal_img} alt="bag" className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className="basic_text mx-1 md:mx-3">
                <p className='text-[11px] font-semibold text-black py-1 md:text-[13px] dark:text-slate-200'>{deal_name}</p>
                <p className='text-[9px] text-lightBlack md:text-[10px] dark:text-slate-400'>Big sale -{deal_percent}%</p>
            </div>
        </div>
        
    )
}

export default Deal