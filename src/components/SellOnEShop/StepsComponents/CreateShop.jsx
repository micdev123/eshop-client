import React, { useContext } from 'react';
import { StepsContext } from '../../../contexts/StepsContext';

const CreateShop = () => {
    const { stepData, setStepData } = useContext(StepsContext);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStepData({ ...stepData, [name]: value });
    }
    return (
        <>
            <div className="creating_store w-[100%] flex flex-col justify-center items-center">
                <div className="form_group w-[100%] flex flex-col mb-4 sm:w-[88%] md:w-[60%] lg:w-[50%]">
                    <h2 className='text-[14px] mb-[1rem] font-medium text-center sm:hidden'>Create your store</h2>
                    <label htmlFor="name" className='text-[12px] font-medium md:text-[14px]'>Store Name:</label>
                    <input
                        onChange={handleChange}
                        value={stepData["storeName"] || ""}
                        type="text" name='storeName'
                        placeholder='your store name'
                        className='py-2 px-3 border border-slate-500 rounded-md text-[12px] bg-transparent mt-2' />
                </div>
                <div className="form_group w-[100%] flex flex-col mb-4 sm:w-[88%] md:w-[60%] lg:w-[50%]">
                    <label htmlFor="address" className='text-[12px] font-medium md:text-[14px]'>Address:</label>
                    <input
                        onChange={handleChange}
                        value={stepData["address"] || ""}
                        type="text" name='address'
                        placeholder='your store address'
                        className='py-2 px-3 border border-slate-500 rounded-md text-[12px] bg-transparent mt-2' />
                </div>
                <div className="form_group w-[100%] flex flex-col mb-3 sm:w-[88%] md:w-[60%] lg:w-[50%]">
                    <label htmlFor="description" className='text-[12px] font-medium md:text-[14px]'>Description:</label>
                    <textarea
                        onChange={handleChange}
                        value={stepData["description"] || ""}
                        name='description'
                        placeholder='short store description'
                        className='py-2 px-3 border border-slate-500 rounded-md text-[12px] bg-transparent mt-2' />
                </div>
                <div className="form_group w-[100%] mt-3 mb-12 flex flex-col gap-3 sm:w-[88%] md:w-[60%] lg:w-[50%] sm:flex-row sm:mt-5">
                    <div className="store_logo w-[100%] h-[8rem] sm:w-[30%]">
                        <p className='text-[12px] font-medium mb-2 md:text-[14px]'>Store Logo:</p>
                        <div className='w-[100%] h-[100%] border border-slate-500 rounded-md'></div>
                    </div>
                    <div className="store_banner w-[100%] h-[8rem] mt-8 sm:w-[70%] sm:mt-0">
                        <p className='text-[12px] font-medium mb-2 md:text-[14px]'>Store Banner:</p>
                        <div className='w-[100%] h-[100%] border border-slate-500 rounded-md'></div>
                    </div>
                </div>
                <div className="form_group flex items-center gap-2">
                    <input type="checkbox" />
                    <p className='text-[12px] font-medium'>I accept to the <span className='text-amber-700'>Terms & Conditions</span> and I have read the <span className='text-amber-700'>Privacy Policy</span>.</p>
                </div>
            </div>
        </>
    )
}

export default CreateShop