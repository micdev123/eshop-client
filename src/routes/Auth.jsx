import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc'

const Auth = () => {
    const [isSignUp, setIsSignup] = useState(false);
    return (
        <div className='w-[33%] mx-auto p-8 my-8 bg-lighterBlue rounded-sm'>
            <h2 className='text-center text-[16px] font-medium mb-5'>
                {isSignUp ? 'Create an account' : 'Login to your account'}
            </h2>
            <form action="" className='w-[100%] flex flex-col'>
                {isSignUp && (
                    <input type="text" placeholder='Fullname please' className=' border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px] mb-3' />
                )}
                <input type="email" placeholder='Your email please' className='border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px]' />
                {isSignUp && (
                    <input type="text" placeholder='Phone number please' className=' border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px] mt-3' />
                )}
                <button className='bg-amber-700 my-3 py-2 rounded-md text-[12px] text-white outline-none hover:bg-amber-600'>
                    {isSignUp ? 'Create an account' : 'Login'}
                </button>
                <p className='text-[11px] text-center font-medium my-2'>OR {isSignUp ? 'Register' : 'Login'} With</p>
                <div className="social_btns w-[100%] my-3">
                    <button className='w-[100%] flex items-center justify-center bg-slate-200 py-2 rounded-md mb-3 outline-none hover:bg-slate-300'>
                        <FcGoogle />
                        <p className='text-[12px] font-medium ml-1'>{isSignUp ? 'Sign-Up' : 'Login'} with Google</p>
                    </button>
                    <button className='w-[100%] flex items-center justify-center bg-slate-700 text-white py-2 rounded-md outline-none hover:bg-slate-600'>
                        <BsFacebook />
                        <p className='text-[12px] font-medium ml-1'>{isSignUp ? 'Sign-Up' : 'Login'} with Facebook</p>
                    </button>
                </div>
                <p className='text-[11px] font-medium text-center'>{isSignUp ? 'Already Have An Account?' : "Don't Have An Account?"} <span
                    onClick={() => setIsSignup(!isSignUp)}
                    className='text-amber-700 font-semibold cursor-pointer hover:text-amber-600'>{isSignUp ? 'Login' : 'Create One!'}</span></p>
            </form>
        </div>
    )
}

export default Auth