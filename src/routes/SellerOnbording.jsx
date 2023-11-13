import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import { ImDownload, ImUpload } from 'react-icons/im'
import { HiTrash } from 'react-icons/hi'
import { categories, deliveryMethods, paymentMethods } from '../data';
import Legal from '../components/Legal/Legal';
import { AiOutlineClose } from 'react-icons/ai';



const SellerOnbording = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const [openCategories, setOpenCategories] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [openDeliveryMethods, setOpenDeliveryMethods] = useState(false);
    const [selectedDeliveryMethods, setSelectedDeliveryMethods] = useState([]);

    const [openPaymentMethods, setOpenPaymentMethods] = useState(false);
    const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);

    const [socialContacts, setSocialContacts] = useState([]);
    const [socialContact, setSocialContact] = useState('');


    const HandleSelectedMethod = (key, method) => {
        if (key === 'delivery') {
            // Check if the method is already in the selectedDeliveryMethods array
            const isMethodSelected = selectedDeliveryMethods.some((selectedMethod) => selectedMethod.slug === method.slug);

            if (!isMethodSelected) {
                setSelectedDeliveryMethods((prevMethods) => [...prevMethods, method]);
            }
        }
        else {
            // Check if the method is already in the selectedDeliveryMethods array
            const isMethodSelected = selectedPaymentMethods.some((selectedMethod) => selectedMethod.slug === method.slug);

            if (!isMethodSelected) {
                setSelectedPaymentMethods((prevMethods) => [...prevMethods, method]);
            }
        }
        
    }


    const HandleRemoveSelectedMethod = (key, index) => {
        if (key === 'delivery') {
             // Create a copy of the selectedDeliveryMethods array
            const updatedDeliveryMethods = [...selectedDeliveryMethods];
            
            // Remove the item at the specified index from the copy
            updatedDeliveryMethods.splice(index, 1);

            // Update the state with the new array without the removed item
            setSelectedDeliveryMethods(updatedDeliveryMethods);
        }
        else {
            const updatedPaymentMethods = [...selectedPaymentMethods];
            
            // Remove the item at the specified index from the copy
            updatedPaymentMethods.splice(index, 1);

            // Update the state with the new array without the removed item
            setSelectedPaymentMethods(updatedPaymentMethods);
        }
       
    }


    const HandleContacts = () => {
        const alreadyExist = socialContacts.some((contact) => contact === socialContact);
        if (!alreadyExist) {
            setSocialContacts((preContacts) => [...preContacts, socialContact]);
            
        }
        setSocialContact('')
    }

    const HandleRemoveContact = (index) => {
        const updatedSocialContacts = [...socialContacts];
        
        updatedSocialContacts.splice(index, 1);

        setSocialContacts(updatedSocialContacts);
    }
    
    // console.log(socialContacts);
    return (
        <div className='relative mb-[2rem]'>
            <div className={modalOpen ? `overlay w-[100vw] h-[100%] bg-zinc-600 fixed top-0 left-0 z-20 opacity-[0.4]` : 'hidden'}></div>
            {modalOpen && (
                <div className="w-[90%] h-[93.5vh] fixed top-[2rem] left-0 right-0 mx-auto z-30 overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[2px]">
                    <Legal selectedLegal={'vendor policy'} />
                    <button
                        type='button'
                        onClick={() => setModalOpen(false)}
                        className='bg-zinc-700 text-white rounded-md p-1 absolute top-3 right-3 cursor-pointer'>
                        <AiOutlineClose className='text-[12px]' />
                    </button>
                </div>
            )}
            <div className="head flex items-center gap-x-1">
                <div className="img w-[10rem]">
                    <img src="/assets/onboarding.png" alt="onboarding" className='w-full object-cover' />
                </div>
                <div className="">
                    <h2 className='text-[1.2rem] font-medium'>
                        Vendor Onboarding
                    </h2>
                    <p className='w-[60%] text-[12.5px] mt-1'>
                        Welcome! We're excited to have you join our <span className='logo font-medium text-[14px]'>e-shop</span> as a seller. Please provide the following information to get started:
                    </p>
                    {/* <p className='w-[70%] text-[12.5px] mt-1'>
                        We're here to support you throughout the onboarding process and beyond. If you have any questions or need assistance, please don't hesitate to contact us at <span className='text-amber-700'>eshoponlineMarketplace@gmail.com</span>
                    </p> */}
                    <div className="flex items-end gap-x-5 mt-3">
                        <button className='text-[11px] flex items-center gap-x-2 bg-slate-500 text-white py-[3px] px-[10px] rounded-sm border-0 outline-none'>
                            <ImDownload className='text-[13px]' />
                            Vendor Agreement
                        </button>
                        <button
                            type='button'
                            onClick={() => setModalOpen(!modalOpen)}
                            className='text-[13px] font-medium underline text-cyan-700 border-0 outline-none'>
                            Vendor Policy
                        </button>
                    </div>
                </div>
            </div>
            <form action="" className='w-[71%] mx-auto mt-[1.5rem]'>
                {/* Store Information */}
                <div className="layer my-[1rem]">
                    <h2 className='text-[1rem] font-medium mb-[0.85rem]'>Store Information</h2>
                    {/* Store name | Store Address */}
                    <div className="w-[100%] flex items-center gap-x-[1rem]">
                        <div className="form-group w-[100%] flex flex-col my-3">
                            <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                                Store Name:
                            </label>
                            <input type="text" placeholder='Enter store name' className='text-[12px] py-[5px] px-[10px] rounded-md outline-none border-[1px]' />
                        </div>

                        <div className="form-group w-[100%] flex flex-col my-[1.1rem]">
                            <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                                Store Address:
                            </label>
                            <input type="text" placeholder='Enter store address' className='text-[12px] py-[5px] px-[10px] rounded-md outline-none border-[1px]' />
                        </div>
                    </div>

                    {/* Store short description */}
                    <div className="form-group flex flex-col my-[1.1rem]">
                        <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                            Store Description:
                        </label>
                        <p className='text-[11px] mb-3 text-zinc-600'>
                            Provide a short description that best describes your store to your audience.
                        </p>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Short description' className='text-[12px] p-[10px] rounded-md outline-none border-[1px]'></textarea>
                    </div>

                    {/* Store category */}
                    <div className="form-group flex flex-col my-[1.95rem]">
                        <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                            Store Category:
                        </label>
                        <p className='text-[11px] mb-3 text-zinc-600'>
                            To help buyers find your store. Select category that best represents your store
                        </p>
                        <div className="w-[100%] flex items-center gap-x-2">
                                {/* Select categories options */}
                                <div className="w-[100%] relative">
                                    {/* OpenSelect Btn */}
                                    <button
                                            type='button'
                                            onClick={() => setOpenCategories(!openCategories)}
                                            className='w-[100%] flex items-center justify-between cursor-pointer text-[11.5px] bg-white py-[6px] px-[10px] rounded-md font-medium border-[1px]'
                                        >
                                            Select category
                                            <IoMdArrowDropdown className='text-[14px]' />
                                    </button>
                                    {/* Categories options */}
                                    {openCategories && (
                                        <div className="categories w-[100%] h-[35vh] absolute left-0 top-[1.9rem] bg-white py-2 px-3 rounded-sm shadow-sm border-[1px] border-slate-100 overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[2px] z-20">
                                            {categories?.map((category, index) => (
                                                <div
                                                    key={category?.id}
                                                    type= 'button'
                                                    onClick={() => {
                                                        setSelectedCategory(category?.slug);
                                                        setOpenCategories(false);
                                                    }}
                                                    className={`cursor-pointer text-[11.3px] my-2 ${categories.length - 1 == index ? 'border-b-0' : 'border-b-[1px] pb-1'}`}
                                                >
                                                    <h2 className='text-[13px] font-medium mb-1'>
                                                        {category?.collection_name}
                                                    </h2>
                                                    <p className='text-[12px]'>
                                                        {category?.info_2}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {/* Output */}
                                {/* {category.length > 0 && (
                                    <p className='flex items-center gap-x-2 text-[9px] bg-zinc-100 py-[3px] px-[10px] border-[1px] border-dashed border-slate-200 font-medium rounded-md'>
                                        {category}
                                    </p>
                                )} */}
                                
                        </div>
                        {categories?.filter((category) => category.slug === selectedCategory).map((selected) => (
                            <div className="bg-white flex gap-x-3 p-4 rounded-md mt-1 border-[1px] border-cyan-700" key={selected.slug}>
                                {/* Radio box */}
                                <div className="min-w-[0.84rem] h-[0.8rem] border-[1.5px] border-cyan-700 rounded-full flex items-center justify-center">
                                    <div className="w-[0.47rem] h-[0.48rem] bg-cyan-700 rounded-full"></div>
                                </div>
                                {/* Content */}
                                <div className="content">
                                    <h2 className='text-[13px] font-medium mb-1'>
                                        {selected.collection_name}
                                    </h2>
                                    <p className='text-[12px]'>
                                       {selected.info_2}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Store delivery methods */}
                    <div className="form-group flex flex-col my-[1.95rem]">
                        <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                            Store Delivery Methods (You can select more than one):
                        </label>
                        <p className='text-[11px] mb-3 text-zinc-600'>
                            Specify the delivery methods you offer to ensure that customers are informed about how their orders will be delivered and how long it might take to receive them.
                        </p>
                        <div className="w-[100%] flex items-center gap-x-2">
                            {/* Select categories options */}
                            <div className="w-[100%] relative">
                                {/* OpenSelect Btn */}
                                <button
                                        type='button'
                                        onClick={() => setOpenDeliveryMethods(!openDeliveryMethods)}
                                        className='w-[100%] flex items-center justify-between cursor-pointer text-[11.5px] bg-white py-[6px] px-[10px] rounded-md font-medium border-[1px]'
                                    >
                                        Select delivery methods
                                        <IoMdArrowDropdown className='text-[14px]' />
                                </button>
                                {/* Categories options */}
                                {openDeliveryMethods && (
                                    <div className="categories w-[100%] h-[33vh] absolute left-0 top-[1.9rem] bg-white py-2 px-3 rounded-sm shadow-sm border-[1px] border-slate-100 overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[2px] z-20">
                                        {deliveryMethods?.map((method, index) => (
                                            <div
                                                key={method?.id}
                                                type= 'button'
                                                onClick={() => {
                                                    HandleSelectedMethod('delivery', method);
                                                    setOpenDeliveryMethods(false);
                                                }}
                                                className={`cursor-pointer text-[11.3px] my-2 ${deliveryMethods.length - 1 === index ? 'border-b-0' : 'border-b-[1px] pb-1'}`}
                                            >
                                                <h2 className='text-[13px] font-medium mb-1'>
                                                    {method?.name}
                                                </h2>
                                                <p className='text-[12px]'>
                                                    {method?.info}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="output">
                                    {selectedDeliveryMethods?.map((method, index) => (
                                        <div className="bg-white flex items-center justify-between p-4 rounded-md mt-1 border-[1px] border-cyan-700" key={method?.id}>
                                            <div className="flex gap-x-3">
                                                {/* Radio box */}
                                                <div className="min-w-[0.84rem] h-[0.8rem] border-[1.5px] border-cyan-700 rounded-full flex items-center justify-center">
                                                    <div className="w-[0.48rem] h-[0.48rem] bg-cyan-700 rounded-full"></div>
                                                </div>
                                                {/* Content */}
                                                <div className="content">
                                                    <h2 className='text-[13px] font-medium mb-1'>
                                                        {method.name}
                                                    </h2>
                                                    <p className='text-[12px]'>
                                                    {method.info}
                                                    </p>
                                                </div>
                                            </div>
                                            <HiTrash
                                                onClick={() => HandleRemoveSelectedMethod('delivery', index)}
                                                className='cursor-pointer'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                    </div>

                     {/* Store payment methods */}
                    <div className="form-group flex flex-col my-[1.95rem]">
                        <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                            Store Payment Methods (You can select more than one):
                        </label>
                        <p className='text-[11px] mb-3 text-zinc-600'>
                            Specify the payment methods you are willing to accept from customers for your products or services.
                        </p>
                        <div className="w-[100%] flex items-center gap-x-2">
                            {/* Select categories options */}
                            <div className="w-[100%] relative">
                                {/* OpenSelect Btn */}
                                <button
                                        type='button'
                                        onClick={() => setOpenPaymentMethods(!openPaymentMethods)}
                                        className='w-[100%] flex items-center justify-between cursor-pointer text-[11.5px] bg-white py-[6px] px-[10px] rounded-md font-medium border-[1px]'
                                    >
                                        Select payment methods
                                        <IoMdArrowDropdown className='text-[14px]' />
                                </button>
                                {/* Categories options */}
                                {openPaymentMethods && (
                                    <div className="categories w-[100%] h-[22vh] absolute left-0 top-[1.9rem] bg-white py-2 px-3 rounded-sm shadow-sm border-[1px] border-slate-100 overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[2px]">
                                        {paymentMethods?.map((method, index) => (
                                            <div
                                                key={method?.id}
                                                type= 'button'
                                                onClick={() => {
                                                    HandleSelectedMethod('payment', method);
                                                    setOpenPaymentMethods(false);
                                                }}
                                                className={`flex items-center justify-between cursor-pointer text-[11.3px] my-2 ${paymentMethods.length - 1 === index ? 'border-b-0' : 'border-b-[1px] pb-1'}`}
                                            >
                                                <h2 className='text-[13px] font-medium mb-1'>
                                                    {method?.name}
                                                </h2>
                                                <div className="flex items-center gap-x-3">
                                                    {method?.imgs.map((img, index) => (
                                                        <div className="max-w-[1.5rem]" key={index}>
                                                             <img src={img} alt="" className='w-[100%] object-contain' />
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* <p className='text-[12px]'>
                                                    {method?.info}
                                                </p> */}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="output">
                                    {selectedPaymentMethods?.map((method, index) => (
                                        <div className="bg-white flex items-center justify-between gap-x-6  p-4 rounded-md mt-1 border-[1px] border-cyan-700" key={method?.id}>
                                            <div className="w-[100%] flex items-center gap-x-3">
                                                {/* Radio box */}
                                                <div className="min-w-[0.84rem] h-[0.8rem] border-[1.5px] border-cyan-700 rounded-full flex items-center justify-center">
                                                    <div className="w-[0.48rem] h-[0.48rem] bg-cyan-700 rounded-full"></div>
                                                </div>
                                                {/* Content */}
                                                <div className="content w-[100%] flex items-center justify-between">
                                                    <h2 className='text-[13px] font-medium mb-1'>
                                                        {method.name}
                                                    </h2>
                                                    <div className="flex items-center gap-x-3">
                                                        {method?.imgs.map((img, index) => (
                                                            <div className="max-w-[1.5rem]" key={index}>
                                                                <img src={img} alt="" className='w-[100%] object-contain' />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <HiTrash
                                                onClick={() => HandleRemoveSelectedMethod('payment', index)}
                                                className='cursor-pointer'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* Store Logo && Store Cover Img */}
                    <div className="w-[100%] flex items-start gap-x-[0.1rem] my-[1.1rem]">
                        {/* Store Logo */}
                        <div className="form-group w-[60%] flex flex-col">
                            <label htmlFor="" className='text-[13.5px] font-medium mb-2 flex items-center gap-x-1.5'>
                                <ImUpload />
                                Upload Store Logo
                            </label>
                            <input
                                type="file"
                                name='logo'
                                id='logo'
                                className='hidden'
                                // onChange={handleCoverImgChange}
                            />
                            <div className="output bg-zinc-50 p-[1px] rounded-md w-[14rem] h-[10rem] flex items-center justify-center border-[1px]">
                                <img src='/assets/vendor.jpg' className='w-[100%] h-[100%] object-cover rounded-md' alt="coverImg" />
                            </div>
                        </div>

                        {/* Store Cover Image */}
                        <div className="form-group w-[100%] flex flex-col">
                            <label htmlFor="" className='text-[13.5px] font-medium mb-2 flex items-center gap-x-1.5'>
                                <ImUpload />
                                Upload Store Cover Photo (Optional)
                            </label>
                            <input
                                type="file"
                                name='logo'
                                id='logo'
                                className='hidden'
                                // onChange={handleCoverImgChange}
                            />
                            <div className="output bg-zinc-50 p-[1px] rounded-md w-[100%] h-[10rem] flex items-center justify-center border-[1px]">
                                <img src='/assets/background.jpg' className='w-[100%] h-[100%] object-cover rounded-md' alt="coverImg" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Primary Contact Information */}
                <div className="layer mt-[3rem]">
                    <h2 className='text-[1rem] font-medium mb-[0.85rem]'>Primary Contact Information</h2>
                    {/* Store name | Store Address */}
                    <div className="w-[100%] flex items-center gap-x-[1rem]">
                        <div className="form-group w-[100%] flex flex-col my-3">
                            <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                                FullName:
                            </label>
                            <input type="text" placeholder='Enter your fullname' className='text-[12px] py-[5px] px-[10px] rounded-md outline-none border-[1px]' />
                        </div>

                        <div className="form-group w-[100%] flex flex-col my-[1.1rem]">
                            <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                                Phone Number:
                            </label>
                            <input type="text" placeholder='Enter your phone number' className='text-[12px] py-[5px] px-[10px] rounded-md outline-none border-[1px]' />
                        </div>

                        <div className="form-group w-[100%] flex flex-col my-[1.1rem]">
                            <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                                Email:
                            </label>
                            <input type="text" placeholder='Enter your email' className='text-[12px] py-[5px] px-[10px] rounded-md outline-none border-[1px]' />
                        </div>
                    </div>

                    {/* Contacts | Socials Links */}
                    <div className="w-[100%] flex items-center gap-x-[1rem]">
                        <div className="form-group w-[100%] flex flex-col my-3">
                            <label htmlFor="" className='text-[13.5px] font-medium mb-2'>
                                Social Links (If any):
                            </label>

                            <div className="border-[0.5px] rounded-md flex">
                                <input
                                    type="text"
                                    id='socialContacts'
                                    name='socialContacts'
                                    placeholder='Paste link eg. https://www.instagram.com/mic__dev/'
                                    className='w-[91%] rounded-l-md text-[12px] py-[5px] px-[10px] outline-none'
                                    value={socialContact}
                                    onChange={(e) => setSocialContact(e.target.value)}
                                />
                                <button
                                    type='button'
                                    onClick={HandleContacts}
                                    className='w-[9%] text-[10px] bg-zinc-700 text-white rounded-r-md px-[11px] font-medium'
                                >
                                    Add Link
                                </button>
                            </div>
                            {/* Output */}
                            <div className="output my-1.5">
                                {socialContacts?.map((contact, index) => (
                                    <div className="bg-white py-[5px] px-[10px] border-b-[1px] flex items-center justify-between rounded-md mb-1" key={index}>
                                        <p className='text-[12px]'>
                                            {contact}
                                        </p>
                                        <HiTrash
                                            onClick={() => HandleRemoveContact(index)}
                                            className='cursor-pointer'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Upload vendor agreement document */}
                 <div className="form-group w-[100%] flex flex-col my-[1rem]">
                    <label htmlFor="vendorAgreement" className='text-[13.5px] font-medium mb-2 flex items-center gap-x-1.5 cursor-pointer'>
                        <ImUpload />
                        Upload Vendor Agreement Document
                    </label>
                    <input
                        type="file"
                        name='vendorAgreement'
                        id='vendorAgreement'
                        className='hidden'
                    />
                    
                </div>

                <div className="layer mt-[2.5rem]">
                    <p className='text-[13.5px] flex flex-col'>
                        <span className='text-[14px] font-medium mb-1'>Note:</span>
                        Upon submission, our team will review your application. If everything checks out, we'll get in touch with you via email to finalize the onboarding process and guide you on how to start listing your products/services.
                    </p>
                    <p className='text-[13.5px] my-[0.7rem]'>
                        Thank you for choosing to be a part of <span className='logo text-[14px] font-semibold'>e-shop</span>. We look forward to a successful partnership with you!
                    </p>
                </div>
                
                <button
                    className='text-[11px] bg-zinc-700 text-white py-[4px] px-[25px] rounded-sm'
                >
                    Submit
                </button>
            </form>
        </div>
    ) 
}

export default SellerOnbording