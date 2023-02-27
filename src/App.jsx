import React from 'react'
import TopNav from './components/Header/TopNav';
import Home from './routes/Home'
import MainNav from './components/Header/MainNav';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
      <div className=''>
        <header className='w-[92%] mx-auto md:w-[85%]'>
          <TopNav />
          <MainNav />
        </header>
        <Home />
        <footer className='w-[92%] mx-auto md:w-[85%]'>
          <Footer />
        </footer>
      </div>
    )
}

export default App