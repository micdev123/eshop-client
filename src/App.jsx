import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopNav from './components/Header/TopNav';
import Home from './routes/Home'
import MainNav from './components/Header/MainNav';
import Footer from './components/Footer/Footer';
import SingleProduct from './routes/SingleProduct';
import { Products } from './routes/Products';
import Vendor from './routes/Vendor';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import PaymentMethod from './routes/PaymentMethod';
import { LoginAuth } from './routes/Auth/LoginAuth';
import { RegisterAuth } from './routes/Auth/RegisterAuth';
import { Toaster } from 'react-hot-toast';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { useGeoLocationStore } from './Store/GeoData/geoLocationStore';
import useAuthStore from './Store/Auth/authStore';
import axios from 'axios';
import AccountVerified from './components/AccountVerified';
import SellerOnbording from './routes/SellerOnbording';
import Category from './routes/Category';
// import { Confirmation } from './components/Mailer';

const App = () => {
  // Setting useGeoLocation store state
  const { setGeoData, geoData } = useGeoLocationStore();
  const { isAuthenticated, googleOAuth } = useAuthStore();

  // Check if the current route is the loginAuth or registerAuth page
  const isLoginOrRegisterPage =
    window.location.pathname === '/loginAuth' || window.location.pathname === '/registerAuth';
  

  // Initialize the useGoogleOneTapLogin hook conditionally
  const login = isLoginOrRegisterPage || isAuthenticated
    ? null // If it's a login or register page, set it to null to hide the component
    : useGoogleOneTapLogin({
        onSuccess: (credentialResponse) => {
          // console.log(credentialResponse);
          const { credential } = credentialResponse;
          if (credential) {
              // console.log(credential);
              googleOAuth(credential, geoData[0])
            }
        },
      onError: (error) => console.log(error),
    });
  // console.log(geoData);

  // When page mount get GeoLocation data [country_name, country] and save it in the useGeoLocation store state.
  useEffect(() => {
    const getGeoInfo = async () => {
      try {
        const { data } = await axios.get(import.meta.env.VITE_GEOLOCATION);
        setGeoData([data.country_name, data.city, data.country_calling_code, data.country]); // country name and country currency
        // console.log(data);
      } catch (error) {
          console.log(error);
      }
    };
    getGeoInfo();
  }, []);
  
  return (
    <div className='App relative dark:bg-zinc-900'> 
      <Router>
        {/* Header */}
        <header className='w-[92%] mx-auto xl:w-[85%]'>
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
              
              position='top-center' reverseOrder={false}
          ></Toaster>
          {/* Toaster */}

          <TopNav />
          <MainNav />
        </header>
        {/* Main */}
        <main className='main w-[92%] mx-auto xl:w-[85%] overflow-hidden z-30'>
          <Routes>
            <Route
              exact path='/'
              element={
                <Home />
              }
            />
            <Route
              path="/product/:id"
              element={<SingleProduct />}
            />
            <Route
              path="/category/:slug"
              element={<Category />}
            />
            <Route
              path="/loginAuth"
              element={<LoginAuth />}
            />
            <Route
              path="/registerAuth"
              element={<RegisterAuth />}
            />
            <Route
              path="/sell_on_e-shop"
              element={<SellerOnbording />}
            />
            <Route
              path="/allProducts"
              element={<Products />}
            />
            <Route
              path="/vendor/:id"
              element={<Vendor />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
            <Route
              path="/paymentMethod"
              element={<PaymentMethod />}
            />
            <Route
              path="/verifyAccount/:emailToken"
              element={<AccountVerified />}
            />
            {/* <Route
              path="/mailer"
              element={<Confirmation />}
            /> */}
          </Routes> 
        </main>
        {/* Footer */}
        <footer className='w-[92%] mx-auto xl:w-[85%] z-10'>
          <Footer />
        </footer>
      </Router>
    </div>
  )
}

export default App