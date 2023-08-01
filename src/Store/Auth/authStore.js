import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { API_Request } from '../../requestController';
import { decodeJwt } from 'jose'

const useAuthStore = create((set) => {
    const storedUser = localStorage.getItem('user');
    const initialState = {
        authUser: storedUser ? JSON.parse(storedUser) : null,
        isAuthenticated: !!storedUser,
    };

    return {
        ...initialState,
        googleOAuth: async (credential, location) => {
            try {
                const payload = credential ? decodeJwt(credential) : undefined;
                const userData = {
                    ...payload,
                    location
                }
                // console.log(userData);
                const { data } = await API_Request.post('/auth/googleAuth',
                    userData,
                    {
                        headers: {
                            Authorization: `Bearer ${credential}`
                        }
                    }
                )
                // console.log(data);
                localStorage.setItem('user', JSON.stringify(data));
                // set({ isAuthenticated: true}); 
                toast.success('Authenticated');
                
            } catch (error) {
                console.log('Authentication Failed!:', error);
                toast.error(error.response.data.message);
            }
        },

        registerEmailAuth: async (userData) => {
            try {
                await API_Request.post('/auth/registerAuth', userData);
                toast.success('Check Your Email Inbox');
                
            } catch (error) {
                console.log('Authentication Failed!:', error);
                toast.error(error.response.data.message);
            }
        },

        loginEmailAuth: async (email) => {
            try {
                await API_Request.post('/auth/loginAuth', { email });
                toast.success('Check Your Email Inbox');
                
            } catch (error) {
                console.log('Authentication Failed!:', error);
                toast.error('Authentication Failed!');
            }
        },
       
        confirmAccount: async (emailToken) => {
            try {
                const token = emailToken.split(':@').join('.');
                // const payload = credential ? decodeJwt(credential) : undefined;
                const { data } = await API_Request.post(`/auth/verifyAccount/${token}`);
                // console.log(data);
                localStorage.setItem('user', JSON.stringify(data));
                toast.success('Authenticated');
                // window.location.href = '/'
            } catch (error) {
                console.log('Unable to register.:', error);
                toast.error('Unable to register.');
            }
        },
        /*
        OAuthLogin: async (provider, successRedirect) => {
            try {
                account.createOAuth2Session(provider, successRedirect);
                // console.log(accountCreated);
                const response = await account.get();
                localStorage.setItem('user', JSON.stringify(response));
                set({ isAuthenticated: true, authUser: response }); 
                toast.success('Authenticated');
            } catch (error) {
                console.log('Unable to log in.:', error);
                toast.error('Unable to log in.');
            }
        },

        logout: async () => { 
            try {
                // Call the logout API method
                await account.deleteSession('current');

                // Set isAuthenticated to false and clear the user data
                localStorage.removeItem('user')
                set(() => ({ isAuthenticated: false, authUser: null }));
                toast.success('You logged out!');
                window.location.href = '/loginAuth'
            } catch (error) {
                console.error('Logout failed:', error);
                toast.success('Logout failed');
            }
        }
        */
    }
})

export default useAuthStore;