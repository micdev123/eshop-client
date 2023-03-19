import React from 'react'
import TopNav from './components/Header/TopNav';
import Home from './routes/Home'
import MainNav from './components/Header/MainNav';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='App relative dark:bg-slate-900'>
      <header className='w-[92%] mx-auto md:w-[85%]'>
        <TopNav />
        <MainNav />
      </header>
      <main className='main'>
        <Home />
      </main>
      <footer className='w-[92%] mx-auto md:w-[85%]'>
        <Footer />
      </footer>
    </div>
  )
}

export default App