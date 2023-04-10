import React, { useEffect, useState } from 'react'

const ProductSlider = ({
    children: filtered,
    autoSlide = false,
    autoSlideInterval = 3000
}) => {
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
            <div className="flex justify-between min-w-[100%] transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {filtered}                 
            </div>
            {/* <button onClick={next}>test</button> */}
        </div>
    ) 
}

export default ProductSlider