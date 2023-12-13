import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { categories, products } from '../data';

import { BsFilterLeft } from 'react-icons/bs';
import Product from '../components/Product';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';

import Header from '../components/Category/Header';
import Tabs from '../components/Category/Tabs';
import FilterOptions from '../components/Category/FilterOptions';
import FilterProducts from '../components/Category/FilterProducts';



const sort_options = ["Featured", "Top Selling", "Newest", "LastMinute"];
const Category = () => {
    const params = useParams(); // getting url params
    const { slug } = params; // category slug

    const [category, setCategory] = useState({});
    const [fetchedCategoryProducts, setFetchedCategoryProducts] = useState([]); // Current category products state
    const [activeSub_category, setActiveSub_category] = useState('all'); // Active sub category state
    const [activeFilter_options, setActiveFilter_options] = useState([]) // Active filter options state
    const [openMobileFiltersOptions, setOpenMobileFiltersOptions] = useState(false);

    // Sorting States
    const [sortOptions, setSortOptions] = useState(false)
    const [activeSort_option, setActiveSort_option] = useState('Featured')

    // Setting active filter options
    const settingFilterOption_active = (active_option) => {
        if (activeFilter_options.includes(active_option)) {
            setActiveFilter_options(activeFilter_options.filter((curr_option) => curr_option !== active_option));
        } else {
            setActiveFilter_options([...activeFilter_options, active_option]);
        }
    }


    // Function to close openMobileFilterOptions
    const handleCloseMobileFilterOptions = () => setOpenMobileFiltersOptions(false);

    // Fetching Current Category
    useEffect(() => {
        const fetchCategory = () => {
            const targetCategory = categories.filter((category) => `${category?.slug}` === slug);
            
             if (targetCategory.length > 0) {
                setCategory(targetCategory[0]);
            }
        }
        fetchCategory()
    }, [slug])

    // Fetch product corresponding to category slug
    useEffect(() => {
        const fetchProducts = () => {
            const targetProducts = products.filter((product) => product?.category === slug);
            if (targetProducts.length > 0) {
                setFetchedCategoryProducts(targetProducts);
            }
        }
        fetchProducts()
    }, [slug, products])
   

    return (
        <div className={`category mt-[2rem] ${openMobileFiltersOptions && 'h-[10vh] overflow-hidden'}`}>
            <div className={openMobileFiltersOptions ? 'w-[100%] h-[100%] fixed top-0 left-0 bg-zinc-900 opacity-[0.2] z-30' : ''}></div>
            {/* Head */}
           <Header category={category} />
            {/* Main */}
            {fetchedCategoryProducts.length > 0 ? (
                <div className="main mt-[2rem]">
                    {/* Tabs Component */}
                    <Tabs category={category} setActiveSub_category={setActiveSub_category} />
                    {/* Sort By */}
                    <div className="sort w-[100%] relative my-[2rem]">
                        <div className="head flex items-center justify-end gap-x-3">
                            {/* Button to display filter options */}
                            <button
                                onClick={() => setOpenMobileFiltersOptions(!openMobileFiltersOptions)}
                                className='text-[12px] bg-zinc-100 rounded-sm py-[4px] px-[10px] md:hidden'
                            >
                                Filters
                            </button>
                            <div className="sort_container relative">
                                <button
                                    onClick={() => setSortOptions(!sortOptions)}
                                    className='w-fit text-[12px] bg-zinc-100  rounded-sm flex items-center gap-x-2 py-[4px] px-[20px] cursor-pointer hover:bg-zinc-50 dark:bg-zinc-800 dark:text-white'>
                                    <BsFilterLeft className='text-[13px]'
                                />
                                    Sort By: <span className='text-[12px] font-medium'>{activeSort_option}</span>
                                </button>
                                {sortOptions && (
                                    <div className="w-[100%] sort_options bg-zinc-100 border-[1px] rounded-md flex flex-col items-start gap-y-[5px] py-[1rem] absolute top-[30px] z-20 dark:bg-zinc-800 dark:text-white">
                                        {sort_options.map((option, index) => (
                                            <button
                                                onClick={() => {
                                                    setActiveSort_option(option);
                                                    setSortOptions(false);
                                                }}
                                                className={`text-[12px] py-[5px] px-4 ${activeSort_option === option ? 'font-medium' : 'text-zinc-500 dark:text-zinc-400'}`}
                                                key={index}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="display_type flex items-center gap-x-2">
                                <button className='bg-zinc-100 p-[2px] dark:bg-zinc-700 dark:text-white'>
                                    <BsFillGridFill />
                                </button>
                                <button>
                                    <AiOutlineUnorderedList />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Filter and Product container */}
                    <div className="flex flex-col-reverse items-start gap-x-[1rem] md:flex-row">
                        {/* Filter Options Component */}
                        <div className="hidden w-[20rem] md:flex">
                            <FilterOptions category={category} activeSub_category={activeSub_category} activeFilter_options={activeFilter_options} settingFilterOption_active={settingFilterOption_active} />
                        </div>
                        {/* Mobile Filter Options Component */}
                        {openMobileFiltersOptions && (
                            <div className="md:hidden">
                                <FilterOptions
                                    category={category}
                                    activeSub_category={activeSub_category}
                                    activeFilter_options={activeFilter_options}
                                    settingFilterOption_active={settingFilterOption_active}
                                    onClose={handleCloseMobileFilterOptions}
                                />
                            </div>
                        )}
                        {/* Category products */}
                        <div className="category_products w-[100%] mb-[2rem]">
                            <FilterProducts
                                fetchedCategoryProducts={fetchedCategoryProducts}
                                activeFilter_options={activeFilter_options}
                                activeSub_category={activeSub_category}
                                activeSort_option={activeSort_option}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="main mt-[2rem]">
                    Empty category products
                </div>
            )}
        </div>

    )
}



export default Category
