import React from 'react'

const ControlSteps = ({ handleClick, currentStep, steps}) => {
    return (
        <>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => handleClick()}
                    className={`bg-slate-300 text-[12px] py-1.5 px-10 mt-4  rounded-md hover:bg-zinc-300 transition duration-200 ease-in-out md:py-2 ${currentStep === 1 && "opacity-50 cursor-not-allowed"}`}
                >
                    Back
                </button>
                <button
                    onClick={() => handleClick('continue')}
                    className='bg-amber-700 text-white text-[12px] py-1.5 px-10 mt-4  rounded-md hover:bg-amber-600 transition duration-200 ease-in-out md:py-2'>
                    {currentStep === steps.length ? 'Done' : 'Continue'}
                </button>
            </div>
        </>
    )
}

export default ControlSteps