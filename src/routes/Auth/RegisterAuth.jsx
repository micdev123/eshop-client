import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import ClipLoader from 'react-spinners/ClipLoader ';


import useAuthStore from '../../Store/Auth/authStore';
import { useGeoLocationStore } from '../../Store/GeoData/geoLocationStore';
import { HiOutlineLogout } from 'react-icons/hi';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { Helmet } from 'react-helmet-async';
import { AiOutlineClose } from 'react-icons/ai';
import Legal from '../../components/Legal/Legal';



export const RegisterAuth = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirect = new URLSearchParams(search).get('redirect') || '/';

    // Legal states
    const [modalOpen, setModalOpen] = useState(false); // Modal state
    const [legalState, setLegalState] = useState('');

    // Form inputs state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // Loading state
    const [isLoading, setIsLoading] = useState(false);
    
    const { authUser, isAuthenticated, googleOAuth, registerEmailAuth } = useAuthStore();
    const { geoData } = useGeoLocationStore();

    // Password-less | Email Authentication
    const HandleEmailAuth = (e) => {
        e.preventDefault();
        // // Validate input
        if (!name || !email) {
            toast.error("All fields are required!");
        } else if (!email.includes('@') || !email.includes('.')) {
            toast.error("Invalid email address!");
        } else {
            const formData = {
                name,
                email,
                location: geoData[0]
            }
            registerEmailAuth(formData);
        }
    }

    const HandleLogout = () => {
        setIsLoading(true);
        // logout()
    }

    // Go Back Home
    const HandleBackHome = () => {
        setIsLoading(true);
        // window.location.href = "/";
        navigate('/')
    }
    
    // Do Some Loading
    useEffect(() => {
        // Simulate an asynchronous authentication verification process
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, []);


    return isLoading ? (
        <div className='w-[100%] h-screen flex flex-col justify-center items-center'>
            <ClipLoader color="#36d7b7" size={50} className='mb-4'/>
        </div>
    ) : isAuthenticated ? (
        <div className="w-[100%] h-screen flex flex-col justify-center items-center">
            <div className="text-center">
                <div className="head">
                    <h2 className='text-[1.1rem] font-medium dark:text-white'>
                        You are logged in!
                    </h2>
                    <p className='text-[12px] text-zinc-500 font-medium dark:text-white'>
                        {authUser.email}
                    </p>
                </div>
                <div className="buttons flex items-center gap-x-4 my-5">
                    <button
                        type='button'
                        onClick={HandleLogout}
                        className='text-[12px] bg-zinc-700 text-white flex items-center gap-x-1 py-[7px] px-[20px] outline-0 rounded-md font-medium hover:bg-zinc-800'
                        >
                        <HiOutlineLogout />
                        Logout
                    </button>
                    <button
                        onClick={HandleBackHome}
                        className='text-[12px] bg-slate-500 text-white flex items-center gap-x-1 py-[7px] px-[20px] rounded-md outline-0 font-medium hover:bg-slate-700'
                    >
                        Go to Home
                        <TbArrowNarrowRight />
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <div className="">
            <div className={modalOpen ? `overlay w-[100vw] h-[100%] bg-zinc-600 fixed top-0 left-0 z-20 opacity-[0.4]` : 'hidden'}></div>
            {modalOpen && (
                <div className="w-[90%] h-[93.5vh] fixed top-[2rem] left-0 right-0 mx-auto z-30 overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-700 scrollbar-w-[2px]">
                    <Legal selectedLegal={legalState} />
                    <button
                        type='button'
                        onClick={() => setModalOpen(false)}
                        className='bg-zinc-700 text-white rounded-md p-1 absolute top-3 right-3 cursor-pointer'>
                        <AiOutlineClose className='text-[12px]' />
                    </button>
                </div>
            )}
                
            <div className='w-[98%] h-screen mx-auto flex justify-center items-center  sm:w-[55%] lg:w-[33%]'>
                <Helmet>
                    <title>e-shop. | Register Auth</title>     
                </Helmet>
                <div className="p-5 my-8 bg-lighterBlue rounded-sm md:p-8 dark:bg-zinc-800 dark:text-white">
                    <Link to='/'>
                        <h1 className='logo font-bold text-[1.2rem] text-center'>
                            e-shop.
                        </h1>
                    </Link>             
                    <h2 className='text-[15px] text-center font-medium mt-2 mb-5'>
                        Create an account
                    </h2>
                    {/* Form */}
                    <form className='w-[100%] flex flex-col' onSubmit={HandleEmailAuth}>
                        <input type="text" placeholder='Fullname please' className=' border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px] mb-3' id="name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                        
                        <input type="email" placeholder='Your email please' className='border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px]' id='email' name='email' value={email}  onChange={(e) => setEmail(e.target.value)} />
                        
                        <button
                            className='bg-amber-700 mt-3 py-[0.55rem] rounded-md text-[12px] text-white outline-none hover:bg-amber-600'>
                            Create an account
                        </button>
                        {/* Info */}
                        <p className='text-[11px] text-center font-medium my-2'>OR</p>
                    </form>
                    {/* Social Authentication Buttons */}
                    <div className="social_btns w-[100%] mb-3">
                        {/* <button
                            onClick={HandleGoogleAuth}
                            className='w-[100%] flex items-center justify-center bg-slate-200 py-2 rounded-md mb-3 outline-none hover:bg-slate-300'>
                            <FcGoogle />
                            <p className='text-[11px] font-medium ml-1 dark:text-slate-800'>Continue with Google</p>
                        </button> */}
                        
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                // console.log(credentialResponse);
                                const { credential } = credentialResponse;
                                if (credential) {
                                    googleOAuth(credential, geoData[0])
                                }
                            }}
                            shape="square"
                            text="continue_with"
                            width='350px'
                            // logo_alignment="center"
                            // size='medium'
                            theme="filled_black"
                            onError={(error) => console.log(error)}
                        />
                    </div>
                    {/* Legal Caution */}
                    <p className='text-[10px] text-center mb-3'>
                        By continuing, you have agreed to our
                        <button
                            type='button'
                            onClick={() => {
                                setLegalState('user agreement');
                                setModalOpen(!modalOpen)
                            }}
                            className='font-medium text-amber-700 mx-1'>
                            User Agreement
                        </button>
                        and
                        <button
                            type='button'
                            onClick={() => {
                                setLegalState('privacy policy');
                                setModalOpen(!modalOpen)
                            }}
                            className='font-medium text-amber-700'>
                            Privacy Policy.
                        </button>
                    </p>
                    <p className='text-[11px] font-medium flex items-center justify-center gap-x-1'>
                        Already Have An Account?
                        <Link to={`/loginAuth?redirect${redirect}`}
                            className='text-amber-700 font-semibold cursor-pointer hover:text-amber-600'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
