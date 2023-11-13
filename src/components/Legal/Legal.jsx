import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import PrivacyPolicy from './PrivacyPolicy';
import UserAgreement from './UserAgreement';
import VendorPolicy from './VendorPolicy'

const options = [
    {
        value: 'confusing',
        label: 'This information is unclear or inaccurate',
    },
    {
        value: 'notlookingfor',
        label: "This is not the information I was seeking",
    },
    {
        value: 'dislikepolicy',
        label: "I am not in favor of this policy.",
    },
];


const Legal = ({ selectedLegal }) => {
    // const [activeLegal, setActiveLegal] = useState(selectedLegal)
    const [selectedOption, setSelectedOption] = useState(null);
    const [yesOutput, setYesOutput] = useState(false);
    const [noOptions, setNoOptions] = useState(false);
    const [noOutput, setNoOutput] = useState(false);

    const renderActiveLegal = () => {
        switch (selectedLegal) {
            case 'privacy policy':
                return <PrivacyPolicy />;
            case 'vendor policy':
                return <VendorPolicy />;
            case 'user agreement':
                return <UserAgreement />;
            // case 'Update':
            //     return <CampaignUpdate />;
            default:
                return null;
        }
    }
    
    const HandleNotHelpful = (e) => {
        e.preventDefault();
        if (!selectedOption) {
            toast.error('Please select an option!')
        }
        else {
            setNoOutput(true);
        }
    }
    return (
        <div className=' bg-lighterBlue py-7 px-[10px] rounded-md sm:py-11 sm:px-[1rem] md:px-[3rem] dark:bg-slate-800'>
            <div className="">
                {renderActiveLegal()}
            </div>
            <div className="w-[100%]  mt-[2.5rem] border-[1px] border-zinc-200 p-3 rounded-md md:w-fit">
                {!(noOptions || yesOutput) && (
                    <div className="">
                        <p className='text-[14px] font-medium mb-2'>
                            Was this information helpful?
                        </p>
                    
                        <div className="buttons flex items-center gap-x-3">
                            <button
                                className='bg-zinc-300 rounded-md p-[0.4rem] outline-none'
                                onClick={() => setYesOutput(!yesOutput)}
                            >
                                <AiOutlineLike />
                            </button>
                            <button
                                className='bg-zinc-300 rounded-md p-[0.4rem] outline-0'
                                onClick={() => setNoOptions(!noOptions)}
                            >
                                <AiOutlineDislike />
                            </button>
                            
                        </div>
                    </div>
                )}
                {yesOutput && (
                    <p className="yes_output text-[14px] font-medium">
                    Thanks for your feedback.
                    </p>
                )}
                <div className="">
                    {!noOutput && (
                        <div className="">
                            {noOptions && (
                                <div className="">
                                    <p className='text-[14px] font-medium mb-2'>
                                        Please choose the option that most accurately represents the information provided:
                                    </p>
                                    
                                    {options.map((option) => (
                                        <label key={option.value} className='my-1 text-[13.5px] flex items-center gap-x-2'>
                                            <input
                                                type="radio"
                                                value={option.value}
                                                checked={selectedOption === option.value}
                                                onChange={(e) => setSelectedOption(e.target.value)}
                                                className=''
                                            />
                                            {option.label}
                                        </label>
                                    ))}
                                    <button
                                        className='w-fit mt-4 text-[11.5px] bg-zinc-700 text-white rounded-sm py-[4px] px-[15px]'
                                        onClick={HandleNotHelpful}
                                    >
                                        Submit
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    {noOutput && (
                        <p className='text-[13px] font-medium'>
                            Thank you for your feedback! Although we may not respond directly, we value your input, and we'll utilize this information to enhance our online Help resources.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Legal