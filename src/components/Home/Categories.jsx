import React from 'react'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'

const Categories = () => {
    return (
        <section className='my-7 overflow-hidden'>
            <div className="categories_header flex items-center justify-between mb-[5px]">
                <h2 className='text-[14px] font-medium text-black lg:text-[15px]'>Shop by categories</h2>
                <div className="navigation flex items-center">
                    <BiLeftArrowCircle className='text-[1.1rem] mr-2' />
                    <BiRightArrowCircle className='text-[1.1rem]' />
                </div>
            </div>
            <div className="categories max-w-[100%] flex items-center justify-between gap-3 overflow-hidden">
                <div className="category bg-lighterBlue w-[100%] min-h-[20rem]">
                    <div className="category_img w-[75vw]  h-[16rem] overflow-hidden sm:w-[40vw] md:w-[30vw] lg:w-[100%]">
                        <img src="/assets/beauty.png" alt="beauty" className="w-[100%] h-[100%] object-contain relative right-[-4.5rem] lg:right-[-5rem]"/>
                    </div>
                    <h1 className='font-semibold text-[13px] py-4 px-8 lg:px-10'>Beauty Picks</h1>
                </div>

                <div className="category bg-lighterBlue w-[100%] min-h-[20rem]">
                    <div className="category_img w-[75vw] h-[16rem] overflow-hidden sm:w-[40vw] md:w-[30vw] lg:w-[100%]">
                        <img src="/assets/computer.png" alt="computer" className="w-[100%] h-[100%] object-contain relative right-[-4.5rem] lg:right-[-5rem]"/>
                    </div>
                    <h1 className='font-semibold text-[13px] py-4 px-8 lg:px-10'>Computers & Accessories</h1>
                </div>

                <div className="category bg-lighterBlue w-[100%] min-h-[20rem]">
                    <div className="category_img w-[75vw] h-[16rem] overflow-hidden sm:w-[40vw] md:w-[30vw] lg:w-[100%]">
                        <img src="/assets/game.png" alt="games" className="w-[100%] h-[100%] object-contain relative right-[-4.5rem] lg:right-[-5rem]"/>
                    </div>
                    <h1 className='font-semibold text-[13px] py-4 px-8 lg:px-10'>Video Games</h1>
                </div>

                <div className="category bg-lighterBlue w-[100%] min-h-[20rem]">
                    <div className="category_img w-[75vw] h-[16rem] overflow-hidden sm:w-[40vw] md:w-[30vw] lg:w-[100%]">
                        <img src="/assets/toy.png" alt="toys"className="w-[100%] h-[100%] object-contain relative right-[-4.5rem] lg:right-[-5rem]"/>
                    </div>
                    <h1 className='font-semibold text-[13px] py-4 px-8 lg:px-10'>Toys</h1>
                </div>
            </div>
        </section>
    )
}

export default Categories