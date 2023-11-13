import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa'

// text-[0.6rem] md:text-[0.7rem]
const Stars = ({ stars, size }) => {
    const ratingStars = Array.from({ length: 5 }, (element, index) => {
        let number = index + 0.5;

        return (
            <span className="text-ratingBg" key={index}>
                {stars >= index + 1 ? (
                    <AiFillStar  />
                ) : stars >= number ? (
                    <FaStarHalfAlt />
                ) : (
                    <AiOutlineStar />
                )
                }
            </span>
        )
    })
    return (
        <div className='flex'>
            { ratingStars }
        </div>
    )
}

export default Stars