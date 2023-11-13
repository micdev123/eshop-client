import React, { useEffect, useRef, useState } from 'react'

const ProductSlider = ({ children: filtered, autoSlide = false, autoSlideInterval = 1000 * filtered.length }) => {

    // const slideRef = useRef(null)
    // Slider state
    const [curr, setCurr] = useState(0);

    const next = () => setCurr(curr => curr === filtered.length - 1 ? 0 : curr + 1)
     // Auto slide effect
    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval) // When carousal unmount
    }, [])
    return (
        <div className='min-w-[100%] overflow-hidden'>
            <div className="flex w-[100%] mx-auto transition-transform ease-out duration-500 md:justify-between" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {filtered}                 
            </div>
            {/* <button onClick={next}>test</button> */}
        </div>
    ) 
}

export default ProductSlider