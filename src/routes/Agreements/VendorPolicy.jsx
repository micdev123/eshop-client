import React, { useState } from 'react'
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


const VendorPolicy = () => {
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
                <title>e-shop. | Vendor Policy</title>     
            </Helmet>
            <h2 className='font-medium text-[14.5px] mb-2 md:text-[16px] dark:text-slate-200'>
                Vendor Policy
            </h2>
            <div className="vendor_policy_container bg-lighterBlue py-7 px-[10px] rounded-md sm:py-11 sm:px-[1rem] md:px-[3rem] dark:bg-slate-800">
                <p className='text-[13.5px]'>
                    Welcome to <span className='logo'>e-shop</span>, a multi-vendor online marketplace. This Vendor Policies document ("Policies") outlines the guidelines and rules that all vendors/sellers must adhere to when using our platform. By registering as a vendor and listing your products/services on the E-Shop, you acknowledge that you have read, understood, and agree to comply with these Policies.
                </p>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Vendor Registration and Account
                    </h3>
                    <ul>
                        <li>
                            <span>Vendor Eligibility:</span> To become a vendor on the E-Shop, you must meet the eligibility requirements as set forth by our platform.
                        </li>
                        <li>
                            <span>Account Information:</span> Vendors must provide accurate and up-to-date information during the registration process.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Product/Service Listings
                    </h3>
                    <ul>
                        <li>
                            <span>Accurate Information:</span> Vendors are responsible for providing accurate and detailed descriptions of their products/services
                        </li>
                        <li>
                            <span>Prohibited Items:</span> The <span className='logo'>e-shop</span> strictly prohibits the sale of illegal, counterfeit, or restricted items. Ensure that your listings comply with all applicable laws and regulations.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Pricing and Transaction
                    </h3>
                    <ul>
                        <li>
                            <span>Security Measures:</span> Vendors have the freedom to set their own prices for products/services, which must be in the local currency specified by the <span className='logo'>e-shop</span>.
                        </li>
                        <li>
                            <span>Transaction Processing:</span> Vendors must promptly process transactions and fulfill orders upon receiving notification from the <span className='logo'>e-shop</span>.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Shipping and Fulfillment
                    </h3>
                    <ul>
                        <li>
                            <span>Shipping Information:</span> Vendors must provide accurate shipping information and ensure timely delivery of products/services to buyers.
                        </li>
                        <li>
                            <span>Shipping Fees:</span> Vendors are responsible for any shipping fees or related expenses incurred in fulfilling orders.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Customer Service
                    </h3>
                    <ul>
                        <li>
                            <span>Communication:</span> Vendors are expected to maintain open communication with buyers and promptly respond to inquiries and concerns.
                        </li>
                        <li>
                            <span>Order Issues:</span> Vendors must resolve any order issues, such as delays or damaged items, in a professional and customer-focused manner.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Intellectual Property
                    </h3>
                    <ul>
                        <li>
                            <span>Copyright and Trademarks:</span> Vendors must respect the intellectual property rights of others and not infringe on copyrights, trademarks, or patents.
                        </li>
                        <li>
                            <span>Authorized Use:</span> Vendors should have the necessary rights and permissions to use any logos, images, or trademarks in their listings.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Prohibited Activities
                    </h3>
                    <ul>
                        <li>
                            <span>The following activities are strictly prohibited on the <span className='logo'>e-shop</span>:</span>
                        </li>
                        <li>
                            Fraudulent or Deceptive Practices
                        </li>
                        <li>
                            Manipulating Ratings or Reviews
                        </li>
                        <li>
                            Violating Privacy of Buyers or Other Vendors
                        </li>
                        <li>
                             Engaging in Unethical or Illegal Activities
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Compliance with Laws
                    </h3>
                    <p className='text-[13.5px]'>
                        Vendors must comply with all applicable laws and regulations, including tax requirements and product safety standards.
                    </p>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Vendor Agreement and Termination
                    </h3>
                    <ul>
                        <li>
                            <span>Vendor Agreement:</span> By registering as a vendor, you agree to the terms outlined in this Policies document and our Vendor Agreement.
                        </li>
                        <li>
                            <span>Authorized Use:</span> The <span className='logo]'>e-shop</span> reserves the right to suspend or terminate a vendor's account if they violate these Policies or engage in prohibited activities.
                        </li>
                    </ul>
                </div>

                <div className='my-5'>
                    <h3 className='text-[15px] font-medium mb-1'>
                        Modifications
                    </h3>
                    <p className='text-[13.5px]'>
                        The <span className='logo]'>e-shop</span> may update or modify these Policies at any time. Vendors will be notified of any changes, and their continued use of the platform constitutes acceptance of the updated Policies.
                    </p>
                </div>

                <p className='text-[13.5px] my-5 flex flex-col lg:flex-row lg:items-center lg:gap-x-1'>
                    For any questions or concerns related to these Vendor Policies, please contact our support team at <a target="_blank" rel="noreferrer" href='eshoponlinemarketplace@gmail.com' className='text-amber-600 ml-1'>
                        eshoponlinemarketplace@gmail.com
                    </a>.
                </p>
                
                
                <p className='text-[13.5px] my-5 '>
                    By becoming a vendor on <span className='logo]'>e-shop</span>, you acknowledge that you have read, understood, and agreed to these Vendor Policies.
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

export default VendorPolicy