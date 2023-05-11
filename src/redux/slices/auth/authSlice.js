import { createSlice } from "@reduxjs/toolkit"; // Getting access to createSlice
import { API_Request } from "../../../requestController";
import toast from 'react-hot-toast';


// authSlice :: Handle authentication logic for password-less,  Google, and Facebook authentication methods. It manages the authentication state.
// The authSlice takes in the following parameters: name, initialState, and reducer
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isSuccess: false,
    isError: null,
    message: ''
  },
  reducers: {
    authSucceed: (state, action) => {
      state.isSuccess = true;
      state.user = action.payload;
    },
    authFailed: (state, action) => {
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    logout: (state) => {
      state.user = null;
      state.isError = null;
    }
  }
});

// Export a destructure form of the reducer methods as actions
export const { authSucceed, authFailed, logout } = authSlice.actions;

// registerAuth
export const registerAuth = (userData) => async (dispatch) => {
  try {
    const { data } = await API_Request.post('/auth/sign-up', userData);
    dispatch(authSucceed(data));
    toast.success("An email has been sent to you!");
    localStorage.setItem('user', JSON.stringify(data));
  }
  catch (error) {
    dispatch(authFailed(error.message));
    toast.error("Could not register!");
  }
};

export const updateAuth = (userData) => async (dispatch) => {
  try {
    dispatch(authSucceed(userData));
    localStorage.setItem('user', JSON.stringify(userData));
  }
  catch (error) {
    dispatch(authFailed(error.message));
  }
}


// Export default authSlice as a reducer to be used at the reducer object in the store
export default authSlice.reducer;




// export const loginWithGoogle = () => async (dispatch) => {
//     dispatch(loginStart());

//     try {
//         const provider = new auth.GoogleAuthProvider();
//         const result = await auth.signInWithPopup(provider);
//         dispatch(loginSuccess(result.user));
//     } catch (error) {
//         dispatch(loginFailure(error.message));
//     }
// };

// export const loginWithFacebook = () => async (dispatch) => {
//     dispatch(loginStart());

//     try {
//         const provider = new auth.FacebookAuthProvider();
//         const result = await auth.signInWithPopup(provider);
//         dispatch(loginSuccess(result.user));
//     } catch (error) {
//         dispatch(loginFailure(error.message));
//     }
// };

// Handle_Passwordless_Redirect
// export const handlePasswordlessRedirect = () => async (dispatch) => {
//     const email = window.localStorage.getItem('emailForSignIn');

//     if (auth.isSignInWithEmailLink(window.location.href)) {
//         try {
//             const result = await auth.signInWithEmailLink(email, window.location.href);
//             window.localStorage.removeItem('emailForSignIn');
//             dispatch(loginSuccess({ email }));
//         } catch (error) {
//             dispatch(loginFailure(error.message));
//         }
//     }
// };

// LogoutUser
// export const logoutUser = () => async (dispatch) => {
//     try {
//         await auth.signOut();
//         dispatch(logout());
//     } catch (error) {
//         console.log(error);
//     }
// };