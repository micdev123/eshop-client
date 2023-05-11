import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation } from 'react-router-dom';
import { registerAuth } from '../../redux/slices/auth/authSlice';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

export const RegisterAuth = () => {
    const { search } = useLocation();
    const redirect = new URLSearchParams(search).get('redirect') || '/';

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const dispatch = useDispatch();
    
    const handleRegister = (e) => {
        e.preventDefault();
        // Validate input
        if (!fullName || !email || !mobile) {
            toast.error("All fields are required!");
        } else if (!email.includes('@') || !email.includes('.')) {
            toast.error("Invalid email address!");
        } else {
            dispatch(registerAuth({ fullName, email, mobile }));
        }
    }

    return (
        <div className='w-[98%] mx-auto p-5 my-8 bg-lighterBlue rounded-sm sm:w-[55%] lg:w-[33%] md:p-8'>
            {/* Toaster */}
            <Toaster
                toastOptions={{
                    success: {
                        style: {
                            background: 'green',
                        },
                    },
                    error: {
                        style: {
                            background: 'rgb(153 27 27)',
                        },
                    },
                     style: {
                        color: 'white',
                        fontSize: '11px'
                    }
                }}
               
                position='top-center' reverseOrder={false}></Toaster>
            {/* Toaster */}

            <h2 className='text-center text-[15px] font-medium mb-5 md:text-[16px]'>
                Create an account
            </h2>
            <form className='w-[100%] flex flex-col' onSubmit={handleRegister}>
                <input type="text" placeholder='Fullname please' className=' border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px] mb-3' id="fullName" name='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                
                <input type="email" placeholder='Your email please' className='border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px]' id='email' name='email' value={email}  onChange={(e) => setEmail(e.target.value)} />
                
                <input type="text" placeholder='Phone number please' className=' border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px] mt-3' id='mobile' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                
                <button className='bg-amber-700 my-3 py-2 rounded-md text-[12px] text-white outline-none hover:bg-amber-600'>
                    Create an account
                </button>
                {/* Info */}
                <p className='text-[11px] text-center font-medium my-2'>OR Register With</p>
                {/* Social Authentication Buttons */}
                <div className="social_btns w-[100%] my-3">
                    <button className='w-[100%] flex items-center justify-center bg-slate-200 py-2 rounded-md mb-3 outline-none hover:bg-slate-300'>
                        <FcGoogle />
                        <p className='text-[12px] font-medium ml-1'>Sign-Up with Google</p>
                    </button>
                    <button className='w-[100%] flex items-center justify-center bg-slate-700 text-white py-2 rounded-md outline-none hover:bg-slate-600'>
                        <BsFacebook />
                        <p className='text-[12px] font-medium ml-1'>Sign-Up with Facebook</p>
                    </button>
                </div>
                <p className='text-[11px] font-medium text-center'>Already Have An Account?
                    <Link to={`/loginAuth?redirect${redirect}`}
                    className='text-amber-700 font-semibold cursor-pointer hover:text-amber-600'>Login</Link></p>
            </form>
        </div>
    )
}
