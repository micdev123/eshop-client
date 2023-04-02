import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TopNav from './components/Header/TopNav';
import Home from './routes/Home'
import MainNav from './components/Header/MainNav';
import Footer from './components/Footer/Footer';
import SingleProduct from './routes/SingleProduct';
import Auth from './routes/Auth';
import SellOnEshop from './routes/SellOnEshop';
import { Products } from './routes/Products';
import Vendor from './routes/Vendor';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import PaymentMethod from './routes/PaymentMethod';

const App = () => {
  return (
    <div className='App relative dark:bg-slate-900'>
      <Router>
        <header className='w-[92%] mx-auto md:w-[85%]'>
          <TopNav />
          <MainNav />
        </header>
        <main className='main w-[92%] mx-auto md:w-[85%] overflow-hidden'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/sell_on_e-shop" element={<SellOnEshop />} />
            <Route path="/allProducts" element={<Products />} />
            <Route path="/vendor/:id" element={<Vendor />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymentMethod" element={<PaymentMethod />} />
          </Routes> 
        </main>
        <footer className='w-[92%] mx-auto md:w-[85%]'>
          <Footer />
        </footer>
      </Router>
    </div>
  )
}

export default App