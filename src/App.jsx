import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TopNav from './components/Header/TopNav';
import Home from './routes/Home'
import MainNav from './components/Header/MainNav';
import Footer from './components/Footer/Footer';
import SingleProduct from './routes/SingleProduct';
import SellOnEshop from './routes/SellOnEshop';
import { Products } from './routes/Products';
import Vendor from './routes/Vendor';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import PaymentMethod from './routes/PaymentMethod';
import { LoginAuth } from './routes/Auth/LoginAuth';
import { RegisterAuth } from './routes/Auth/RegisterAuth';
import { EmailVerified } from './components/EmailVerified';

const App = () => {
  return (
    <div className='App relative dark:bg-slate-900'> 
      <Router>
        {/* Header */}
        <header className='w-[92%] mx-auto md:w-[85%]'>
          <TopNav />
          <MainNav />
        </header>
        {/* Main */}
        <main className='main w-[92%] mx-auto md:w-[85%] overflow-hidden'>
          <Routes>
            <Route
              exact path='/'
              element={<Home />}
            />
            <Route
              path="/product/:id"
              element={<SingleProduct />}
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
              element={<SellOnEshop />}
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
              path="/verify-email/:emailToken"
              element={<EmailVerified />}
            />
          </Routes> 
        </main>
        {/* Footer */}
        <footer className='w-[92%] mx-auto md:w-[85%]'>
          <Footer />
        </footer>
      </Router>
    </div>
  )
}

export default App