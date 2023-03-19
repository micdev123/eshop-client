import React from 'react'
import HeaderBody from '../components/Header/HeaderBody'
import HeaderFooter from '../components/Header/HeaderFooter'
import Categories from '../components/Home/Categories'
import FeaturedCollection from '../components/Home/FeaturedCollection'
import LastMinuteDeals from '../components/Home/LastMinuteDeals'
import Offers from '../components/Home/Offers'
import TopSellers from '../components/Home/TopSellers'
import YourSearchHistory from '../components/Home/YourSearchHistory'
const Home = () => {
    return (
        <div className='home w-[92%] mx-auto md:w-[85%] overflow-hidden'>
            <HeaderBody />
            {/* <HeaderFooter /> */}
            <div className="main">
                <Categories />
                <Offers />
                <FeaturedCollection />
                <TopSellers />
                <LastMinuteDeals />
                <YourSearchHistory />
            </div>
        </div>
    )
}

export default Home