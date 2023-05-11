import React, { useEffect, useState } from 'react'
import { MdCelebration } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { API_Request } from '../requestController';
import { updateAuth } from '../redux/slices/auth/authSlice';
import HashLoader  from "react-spinners/HashLoader ";

export const EmailVerified = () => {
    const user = useSelector((state) => state.auth.user);
    console.log(user);
    const [searchParams] = useSearchParams();
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const params = useParams();
    const { emailToken } = params;
    console.log(emailToken);
    
    const dispatch = useDispatch();

    useEffect(() => {
        const verifyEmail = async () => {
            if (user.isVerified) {
                setTimeout(() => {
                    navigate("/")
                }, 5000)
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
            {/* {user?.isVerified ? ( */}
                <>
                    <MdCelebration className='text-[3rem] text-green-600' />
                    <div className='flex items-center'>
                        <h1 className='text-[14px] font-medium mt-2 mr-3'>
                            Account verified successfully, Redirecting
                        </h1>
                        <HashLoader color="#2688a7" size="20" />
                    </div>
                </>
            {/* ) : ( */}
                    <div>
                        hey
                    {/* {error.error && <div>{error.message} hey</div>} */}
                </div>
            {/* )} */}
        </div>
    )
    
}
