import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'

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
    
const UserAgreement = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [yesOutput, setYesOutput] = useState(false);
    const [noOptions, setNoOptions] = useState(false);
    const [noOutput, setNoOutput] = useState(false);
    
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
        <div className='mt-4'>
            <Helmet>
                <title>e-shop. | User Agreement</title>     
            </Helmet>
            <h2 className='font-medium text-[14.5px] mb-2 md:text-[16px] dark:text-slate-200'>
                User Agreement
            </h2>
            <div className="agreement_container bg-lighterBlue py-7 px-[10px] rounded-md sm:py-11 sm:px-[1rem] md:px-[3rem] dark:bg-slate-800">
                <p className='text-[13.5px]'>
                    Welcome to <span className='logo font-semibold text-[15px]'>e-shop</span>, a multi-vendor online marketplace based in Sierra Leone, West Africa. This User Agreement outlines the terms and conditions governing your use of our platform. By accessing or using our website, you agree to comply with and be bound by the following terms. Please read this agreement carefully before using our services.
                </p>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Acceptance of Terms
                    </h3>
                    <p className='text-[13.5px]'>
                        By accessing and using our platform, you acknowledge that you have read, understood, and agreed to be bound by this User Agreement and our Privacy Policy. If you do not agree to any part of these terms, you must refrain from using our services.
                    </p>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Account Registration
                    </h3>
                    <ul>
                        <li>
                            To use certain features of our platform, you may need to create an account. You must provide accurate and complete information during the registration process.
                        </li>
                        <li>
                            You are responsible for maintaining the confidentiality of your account credentials and are liable for any activity that occurs under your account.
                        </li>
                        <li>
                            You must notify us immediately of any unauthorized use of your account or any other security breach.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        User Conduct
                    </h3>
                    <ul>
                        <li>
                            You agree not to use our platform for any unlawful, harmful, or malicious purposes that violate applicable laws and regulations.
                        </li>
                        <li>
                            You must not engage in any activity that could harm our platform, disrupt the service, or compromise the security of other users.
                        </li>
                        <li>
                            You are responsible for the content you post, upload, or share on our platform, and you agree not to submit any content that is offensive, defamatory, or violates the rights of others.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Buying and Selling on <span className='logo font-semibold text-[16px]'>e-shop.</span>
                    </h3>
                    <ul>
                        <li>
                            <span className='logo font-semibold text-[15px]'>e-shop</span> serves as an online marketplace connecting buyers and sellers. As a buyer, you agree to purchase products/services from sellers in good faith.
                        </li>
                        <li>
                            As a seller, you agree to accurately represent your products/services, fulfill orders in a timely manner, and maintain a high standard of customer service.
                        </li>
                        <li>
                            We reserve the right to take appropriate action against any user engaging in fraudulent, deceptive, or malicious activities.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Payment and Fees
                    </h3>
                    <ul>
                        <li>
                            <span className='logo font-semibold text-[15px]'>e-shop</span> may charge fees for certain services. By using these services, you agree to pay the applicable fees as specified.
                        </li>
                        <li>
                            All payments made through our platform are subject to our secure payment gateway. We do not store any sensitive payment information.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Intellectual Property
                    </h3>
                    <ul>
                        <li>
                            <span className='logo font-semibold text-[15px]'>e-shop</span> and its content, including logos, trademarks, and images, are protected by intellectual property laws. You agree not to use, reproduce, or distribute our content without prior written permission.
                        </li>
                        <li>
                           As a user, you retain ownership of your content uploaded to the platform, but you grant <span className='logo font-semibold text-[15px]'>e-shop</span> a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content on the platform.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Dispute Resolution
                    </h3>
                    <ul>
                        <li>
                            In case of any disputes between users, we encourage you to try to resolve the matter amicably.
                        </li>
                        <li>
                           If a dispute arises, <span className='logo font-semibold text-[15px]'>e-shop</span> may act as a mediator, but we are not responsible for resolving disputes between users.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Modification and Termination
                    </h3>
                    <ul>
                        <li>
                            <span className='logo font-semibold text-[15px]'>e-shop</span>reserves the right to modify, suspend, or terminate the platform's services at any time without notice.
                        </li>
                        <li>
                           We may also modify this User Agreement from time to time. Changes will be effective upon posting on the platform.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Limitation of Liability
                    </h3>
                    <ul>
                        <li>
                            <span className='logo font-semibold text-[15px]'>e-shop</span> is not liable for any direct, indirect, or consequential damages resulting from the use of our platform or the products/services purchased on it.
                        </li>
                        <li>
                           We do not guarantee the accuracy, availability, or quality of products/services offered by sellers.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Governing Law
                    </h3>
                    <p className='text-[13.5px]'>
                        This User Agreement shall be governed by the laws of Sierra Leone, West Africa, without regard to its conflict of laws principles.
                    </p>
                </div>

                <p className='text-[13.5px] my-5'>
                    By using <span className='logo font-semibold text-[15px]'>e-shop</span>, you acknowledge that you have read and understood this User Agreement and agree to abide by its terms and conditions. If you do not agree to these terms, please refrain from using our platform.
                </p>

                <p className='text-[13.5px] flex flex-col lg:flex-row lg:items-center lg:gap-x-1'>
                    If you have any questions or concerns about this User Agreement, please contact us at
                    <a target="_blank" rel="noreferrer" href='eshoponlinemarketplace@gmail.com' className='text-amber-600'>
                        eshoponlinemarketplace@gmail.com
                    </a>.
                </p>

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
        </div>
    )
}

export default UserAgreement