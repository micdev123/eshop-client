import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa'

const Stars = ({ stars }) => {
    const ratingStars = Array.from({ length: 5 }, (element, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <AiFillStar className='text-ratingBg text-[0.7rem]' />
                ) : stars >= number ? (
                    <FaStarHalfAlt className='text-ratingBg text-[0.7rem]' />
                ) : (
                    <AiOutlineStar className='text-ratingBg text-[0.7rem]' />
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