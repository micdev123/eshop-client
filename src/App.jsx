import React from 'react'
import TopNav from './components/Header/TopNav';
import Home from './routes/Home'
import MainNav from './components/Header/MainNav';

const App = () => {
    return (
      <div className=''>
        <header className='w-[85%] mx-auto '>
          <TopNav />
          <MainNav />
        </header>

        <Home />
      </div>
    )
}

export default App