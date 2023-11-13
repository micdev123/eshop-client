import React, { useState } from 'react'
import Stars from '../Stars';


const reviews = [4, 3, 2, 1];
const stores = ['e-shop', 'Amazon', 'ebay']

const FilterOptions = ({ category, activeSub_category, activeFilter_options, settingFilterOption_active, onClose }) => {
    return (
        <div className="filter_container w-[100%] fixed left-0 bottom-0 z-30 bg-white rounded-md pt-[3rem] px-[1rem] h-[40rem] overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[1.8px] md:w-[100%] md:static md:h-[100%] md:pt-0 md:px-0 md:bg-transparent md:rounded-none">
            {/* Button to close mobile filter options */}
            <button
                onClick={onClose}
                className='absolute right-[1rem] top-[1rem] mb-[2rem] font-medium text-[13px]'
            >
                Close
            </button>
            {/* Featured Stores */}
            <div className="mb-[2rem]">
                <h2 className='text-[14px] font-medium border-b-[1px] border-zinc-100 pb-[3px] mb-[8px]'>
                    Featured Stores
                </h2>
                <div className="options">
                    {stores?.map((store, index) => (
                        <label
                            htmlFor={store}
                            className='text-[13px] flex items-center gap-x-1 mb-[8px] cursor-pointer hover:font-medium' key={index}
                        >
                            <input
                                id={store}
                                value={store}
                                type="checkbox"
                                checked={activeFilter_options?.includes(store)}
                                onChange={() => settingFilterOption_active(store)}
                            />
                            {store}
                        </label>
                    ))}
                </div>
            </div>
            {/* Customer Reviews */}
            <div className="">
                <h2 className='text-[14px] font-medium border-b-[1px] border-zinc-100 pb-[3px] mb-[8px]'>
                    Customer Reviews
                </h2>
                <div className="mb-[2rem]">
                    {reviews.map((review) => (
                        <label htmlFor={review} className='text-[13px] flex items-center gap-x-1 mb-[8px] cursor-pointer hover:font-medium' key={review}>
                            <input
                                type="checkbox"
                                id={review}
                                value={review}
                                checked={activeFilter_options?.includes(review)}
                                onChange={() => settingFilterOption_active(review)}
                            />
                            <Stars stars={review} />
                            & up
                        </label>
                    ))}
                </div>
            </div>
            {/* Price Range */}
            <div className="mb-[2rem]">
                <h2 className='text-[14px] font-medium border-b-[1px] border-zinc-100 pb-[3px] mb-[8px]'>
                    Price Range
                </h2>
                
                <label htmlFor="Under $150" className='text-[13px] flex items-center gap-x-1 mb-[8px] cursor-pointer hover:font-medium'>
                    <input
                        type="checkbox"
                        id='Under $150'
                        value="Under $150"
                        checked={activeFilter_options?.includes('Under $150')}
                        onChange={() => settingFilterOption_active('Under $150')}
                    />
                    <p>
                        Under <span>$</span>150
                    </p>
                </label>
                <label htmlFor="From $150 to $350" className='text-[13px] flex items-center gap-x-1 mb-[8px] cursor-pointer hover:font-medium'>
                    <input
                        type="checkbox"
                        id="From $150 to $350"
                        value="From $150 to $350"
                        checked={activeFilter_options?.includes("From $150 to $350")}
                        onChange={() => settingFilterOption_active("From $150 to $350")}
                    />
                    <p>
                        From <span>$</span>150 to <span>$</span>350
                    </p>
                </label>
                <label htmlFor="Over $350" className='text-[13px] flex items-center gap-x-1 mb-[8px] cursor-pointer hover:font-medium'>
                    <input
                        type="checkbox"
                        id="Over $350"
                        value="Over $350"
                        checked={activeFilter_options?.includes("Over $350")}
                        onChange={() => settingFilterOption_active("Over $350")}
                    />
                    <p>
                        Over <span>$</span>350
                    </p>
                </label>
            
            </div>
            {
                activeSub_category === "all" ? (
                    category.filterOptions &&
                    category.filterOptions.map((options) => (
                        <div className="filter mb-[20px] last:mb-0" key={options?.id}>
                            <h2 className='text-[14px] font-medium border-b-[1px] border-zinc-100 pb-[3px] mb-[8px]'>
                                {options?.name}
                            </h2>
                            <div className={`min-h-fit overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[1.8px] cursor-pointer border-b-[1px] border-zinc-100 pb-[5px] ${options?.options.length > 4 && 'grid grid-cols-2'} md:block`}>
                                {options?.options.map((option)=> (
                                    <label htmlFor={option} className='text-[13px] flex items-center gap-x-1 mb-[8px] cursor-pointer hover:font-medium' key={option}>
                                        <input
                                            type="checkbox"
                                            id={option}
                                            value={option}
                                            checked={activeFilter_options?.includes(option)}
                                            onChange={() => settingFilterOption_active(option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))
                )    
                : (
                    category.subCategories &&
                    category.subCategories
                        .filter((sub_category) => sub_category.slug === activeSub_category)
                        .map((subCategoryFilterOptions) => {
                            const { filterOptions } = subCategoryFilterOptions;
                            // console.log(filterOptions);
                            return (
                                filterOptions !== null && filterOptions?.map((options) => (
                                    <div className="filter mb-[20px] last:mb-0" key={options?.id}>
                                        <h2 className='text-[14px] font-medium border-b-[1px] border-zinc-100 pb-[3px] mb-[8px]'>
                                            {options?.name}
                                        </h2>
                                        <div className={`min-h-fit overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[1.8px] cursor-pointer border-b-[1px] border-zinc-100 pb-[5px] ${options?.options.length > 4 && 'grid grid-cols-2'} md:block`}>
                                            {options?.options.map((option)=> (
                                                <label htmlFor={option} className='text-[13px] flex items-center gap-x-1 mb-[8px] cursor-pointer hover:font-medium' key={option}>
                                                    <input
                                                        type="checkbox"
                                                        id={option}
                                                        value={option}
                                                        checked={activeFilter_options?.includes(option)}
                                                        onChange={() => settingFilterOption_active(option)}
                                                    />
                                                    {option}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )
                    })
                )        
            }
        </div>
    )
}

export default FilterOptions