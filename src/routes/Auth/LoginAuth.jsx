import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const LoginAuth = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [email, setEmail] = useState('');
    const handleLogin = async() => {}
    return (
        <div className='w-[98%] mx-auto p-5 my-8 bg-lighterBlue rounded-sm sm:w-[55%] lg:w-[33%] md:p-8'>
            <h2 className='text-center text-[15px] font-medium mb-5 md:text-[16px]'>
               Login to your account
            </h2>
            <form action="" className='w-[100%] flex flex-col' onSubmit={handleLogin}>
                <input type="email" placeholder='Your email please' className='border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px]' id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
               
                <button className='bg-amber-700 my-3 py-2 rounded-md text-[12px] text-white outline-none hover:bg-amber-600'>
                    Login
                </button>
                {/* Info */}
                <p className='text-[11px] text-center font-medium my-2'>OR Login With</p>
                {/* Social Authentication Buttons */}
                <div className="social_btns w-[100%] my-3">
                    <button className='w-[100%] flex items-center justify-center bg-slate-200 py-2 rounded-md mb-3 outline-none hover:bg-slate-300'>
                        <FcGoogle />
                        <p className='text-[12px] font-medium ml-1'>Login with Google</p>
                    </button>
                    <button className='w-[100%] flex items-center justify-center bg-slate-700 text-white py-2 rounded-md outline-none hover:bg-slate-600'>
                        <BsFacebook />
                        <p className='text-[12px] font-medium ml-1'>Login with Facebook</p>
                    </button>
                </div>
                <p className='text-[11px] font-medium text-center'>Don't Have An Account?
                    <Link
                        to={`/registerAuth?.redirect=${redirect}`}
                        className='text-amber-700 font-semibold cursor-pointer hover:text-amber-600'>
                        Create One!
                    </Link>
                </p>
            </form>
        </div>
    )
}
