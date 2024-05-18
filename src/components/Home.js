import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Trusted from './Trusted'
import AuctionTabs from './AuctionTabs'

const home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <Slider />
            <Trusted />
            <AuctionTabs />
        </div>
    )
}

export default home
