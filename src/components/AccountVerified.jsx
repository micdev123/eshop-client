import React from 'react'
import {useParams } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import { TbArrowNarrowRight } from 'react-icons/tb'
import useAuthStore from '../Store/Auth/authStore';
import { Helmet } from 'react-helmet-async';

const AccountVerified = () => {
    const params = useParams();
    const { emailToken } = params;
    
    const { confirmAccount } = useAuthStore();

    const HandleConfirmation = async () => {
        if (emailToken) {
            await confirmAccount(emailToken); 
        }
        
    }
    return (
        <div className='w-[100%]'>
            <Helmet>
                <title>e-shop. | Account Verified</title>     
            </Helmet>
            <div className="w-[100%] h-[80vh] flex flex-col justify-center items-center">
                <HashLoader color="#36d7b7" size={30} className='mb-4'/>
                <span className="mb-8 text-sm text-slate-500 dark:text-white">Awaiting user confirmation.</span>
                <button
                    onClick={HandleConfirmation}
                    className='bg-zinc-700 text-white text-[12px] flex items-center py-[7px] px-[15px] rounded-md'
                >
                    Confirm to log in
                    <TbArrowNarrowRight className="ml-2" />
                </button>
            </div>
        </div>
    )
}

export default AccountVerified