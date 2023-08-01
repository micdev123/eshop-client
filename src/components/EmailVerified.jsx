import React, { useEffect, useState } from 'react'
import { MdCelebration } from 'react-icons/md'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { API_Request } from '../requestController';
import HashLoader  from "react-spinners/HashLoader ";

export const EmailVerified = () => {
    // console.log(user);
    const [searchParams] = useSearchParams();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const params = useParams();
    const { emailToken } = params;
    // console.log(emailToken);
    

    
    useEffect(() => {
        const verifyEmail = async () => {
            if (user.isVerified) {
                setTimeout(() => {
                    navigate("/")
                }, 3000)
            }
            else if (emailToken) {
                const { data } = await API_Request.post(`/auth/verify-email/${emailToken}`);
                if (data.error) {
                    setError(data)
                    console.log(error);
                } else {
                    dispatch(updateAuth(data));
                }
            }
        }
        verifyEmail();
    }, [user, emailToken, dispatch])

    return (
        <div className='flex h-[30vh] justify-center items-center flex-col'>
            {/* {user?.isVerified ? (
                <>
                    <MdCelebration className='text-[3rem] text-green-600' />
                    <div className='flex items-center'>
                        <h1 className='text-[14px] font-medium mt-2 mr-3'>
                            Account verified successfully, Redirecting
                        </h1>
                        <HashLoader color="#2688a7" size="20" />
                    </div>
                </>
            ) : (
                    <div>
                    {error.error && <div>{error.message}</div>}
                </div>
            )} */}
        </div>
    )
    
}
