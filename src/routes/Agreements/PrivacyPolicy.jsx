import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
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


const PrivacyPolicy = () => {
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
                <title>e-shop. | User Privacy Policy</title>     
            </Helmet>
            <h2 className='font-medium text-[14.5px] mb-2 md:text-[16px] dark:text-slate-200'>
                User Privacy Policy
            </h2>
            <div className="policy_container bg-lighterBlue py-7 px-[10px] rounded-md sm:py-11 sm:px-[1rem] md:px-[3rem] dark:bg-slate-800">
                <p className='text-[13.5px]'>
                    Welcome to <span className='logo'>e-shop</span>, a multi-vendor online marketplace based in Sierra Leone, West Africa. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website and related services (collectively, "the Platform"). We value your privacy and are committed to safeguarding your personal data. By accessing or using our Platform, you consent to the practices described in this Privacy Policy.
                </p>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Information We Collect
                    </h3>
                    <ul>
                        <li>
                            <span>Personal Information:</span> When you register an account, place an order, or interact with our Platform, we may collect personal information, such as your name, email address, shipping address, phone number, and payment details. You voluntarily provide this information to us.
                        </li>
                        <li>
                            <span>Seller Information:</span> If you are a seller on our Platform, we may collect additional information, such as your business name, business address, tax identification number, product listings, and seller performance data.
                        </li>
                        <li>
                            <span>Device and Log Information:</span> We may automatically collect certain information when you access our Platform, including your IP address, browser type, device identifiers, and browsing activity.
                        </li>
                        <li>
                            <span>Cookies and Similar Technologies:</span> We use cookies and similar technologies to enhance your experience on our Platform. These technologies may collect information about your browsing behavior and preferences.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        How We Use Your Information
                    </h3>
                    <ul>
                        <li>
                            <span>Providing Services:</span> We use your personal information to facilitate your transactions, process orders, and provide customer support.
                        </li>
                        <li>
                            <span>Improving the Platform:</span> We analyze user behavior and feedback to improve our Platform, enhance user experience, and develop new features and services.
                        </li>
                        <li>
                            <span>Communication:</span> We may use your email address to send important updates, service notifications, and marketing materials, but only if you have given your consent to receive such communications
                        </li>
                        <li>
                            <span>Legal Compliance:</span> We may use and disclose your information as required by applicable laws and regulations or to respond to legal requests.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        How We Protect Your Information
                    </h3>
                    <ul>
                        <li>
                            <span>Security Measures:</span> We implement technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                        </li>
                        <li>
                            <span>Third-Party Service Providers:</span> We may engage third-party service providers to perform certain functions on our behalf. We ensure that these providers handle your data with appropriate security measures
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Sharing Your Information
                    </h3>
                    <ul>
                        <li>
                            <span>Sellers:</span> If you are a buyer, we share necessary information with sellers to facilitate transactions. If you are a seller, we share information with buyers to process orders.
                        </li>
                        <li>
                            <span>Third Parties:</span> We may share aggregated, non-personal information with third parties for analytics, marketing, or other business purposes.
                        </li>
                        <li>
                            <span>Legal Requirements:</span> We may disclose your information to comply with legal obligations, enforce our policies, or protect the rights, property, or safety of <span className='logo'>e-shop</span>, its users, or others.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Your Choices and Rights
                    </h3>
                    <ul>
                        <li>
                            <span>Account Settings:</span> You can review and update your account information through your profile settings on the Platform.
                        </li>
                        <li>
                            <span>Communication Preferences:</span> You can manage your communication preferences by opting in or out of email notifications and marketing materials.
                        </li>
                        <li>
                            <span>Access and Rectification:</span> You have the right to access and correct your personal information stored on our Platform.
                        </li>
                        <li className=''>
                            <span>Data Deletion:</span> You can request the deletion of your account and personal data by contacting us at 
                            <a target="_blank" rel="noreferrer" href='eshoponlinemarketplace@gmail.com' className='text-amber-600 ml-1'>
                                eshoponlinemarketplace@gmail.com
                            </a>.
                            However, certain information may be retained for legal and business purposes.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Children's Privacy
                    </h3>
                    <p className='text-[13.5px] flex flex-col lg:flex-row lg:items-center lg:gap-x-1'>
                        Our Platform is not intended for use by children under the age of 18. We do not knowingly collect personal information from individuals under 18 years of age. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at
                        <a target="_blank" rel="noreferrer" href='eshoponlinemarketplace@gmail.com' className='text-amber-600 ml-1'>
                            eshoponlinemarketplace@gmail.com
                        </a>.
                    </p>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Changes to this Privacy Policy
                    </h3>
                    <p className='text-[13.5px]'>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised date will be indicated at the top of the policy. We encourage you to review this Privacy Policy periodically.
                    </p>
                </div>

                <p className='text-[13.5px] my-5 flex flex-col lg:flex-row lg:items-center lg:gap-x-1'>
                    If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at <a target="_blank" rel="noreferrer" href='eshoponlinemarketplace@gmail.com' className='text-amber-600 ml-1'>
                        eshoponlinemarketplace@gmail.com
                    </a>.
                </p>
                
                <p className='text-[13.5px] my-5 '>
                    By using <span className='logo]'>e-shop</span>, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your personal information as described herein.
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

export default PrivacyPolicy