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
                <div className="form_group w-[50%] flex flex-col mb-4">
                    <label htmlFor="name" className='text-[14px] font-medium'>Store Name:</label>
                    <input
                        onChange={handleChange}
                        value={stepData["storeName"] || ""}
                        type="text" name='storeName'
                        placeholder='your store name'
                        className='py-2 px-3 border border-slate-500 rounded-md text-[12px] bg-transparent mt-2' />
                </div>
                <div className="form_group w-[50%] flex flex-col mb-4">
                    <label htmlFor="address" className='text-[14px] font-medium'>Address:</label>
                    <input
                        onChange={handleChange}
                        value={stepData["address"] || ""}
                        type="text" name='address'
                        placeholder='your store address'
                        className='py-2 px-3 border border-slate-500 rounded-md text-[12px] bg-transparent mt-2' />
                </div>
                <div className="form_group w-[50%] flex flex-col mb-3">
                    <label htmlFor="description" className='text-[14px] font-medium'>Description:</label>
                    <textarea
                        onChange={handleChange}
                        value={stepData["description"] || ""}
                        name='description'
                        placeholder='short store description'
                        className='py-2 px-3 border border-slate-500 rounded-md text-[12px] bg-transparent mt-2' />
                </div>
                <div className="form_group w-[50%] mt-5 mb-12 flex gap-3">
                    <div className="store_logo w-[30%] h-[8rem]">
                        <p className='text-[14px] font-medium mb-2'>Store Logo:</p>
                        <div className='w-[100%] h-[100%] border border-slate-500 rounded-md'></div>
                    </div>
                    <div className="store_banner w-[70%] h-[8rem]">
                        <p className='text-[14px] font-medium mb-2'>Store Banner:</p>
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