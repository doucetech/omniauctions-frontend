'use client'

import React, { useState } from 'react'

const SliderTabs = () => {
    const [activeTab, setActiveTab] = useState('all')
    const [searchValue, setSearchValue] = useState('')

    const handleTabClick = tabName => {
        setActiveTab(tabName)
    }

    const handleSearch = () => {
        // Implement your search logic here
    }

    return (
        <div className="the-slider-tabs">
            <div className="slider-tabs-holder">
                <div className="tabs-buttons">
                    <button onClick={() => handleTabClick('all')}>All</button>
                    <button onClick={() => handleTabClick('vehicles')}>
                        Vehicles
                    </button>
                    <button onClick={() => handleTabClick('equipment')}>
                        Equipment
                    </button>
                    <button onClick={() => handleTabClick('industrial')}>
                        Industrial
                    </button>
                    <button onClick={() => handleTabClick('goods')}>
                        Goods
                    </button>
                </div>

                <div className="search-elements">
                    <div
                        className="search-width"
                        style={{
                            display: activeTab === 'all' ? 'block' : 'none',
                        }}>
                        <input
                            type="text"
                            placeholder="Search for All"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div
                        className="search-width"
                        style={{
                            display:
                                activeTab === 'vehicles' ? 'block' : 'none',
                        }}>
                        <input
                            type="text"
                            placeholder="Search for Vehicles"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div
                        className="search-width"
                        style={{
                            display:
                                activeTab === 'equipment' ? 'block' : 'none',
                        }}>
                        <input
                            type="text"
                            placeholder="Search for Equipment"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div
                        className="search-width"
                        style={{
                            display:
                                activeTab === 'industrial' ? 'block' : 'none',
                        }}>
                        <input
                            type="text"
                            placeholder="Search for Industrial"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    <div
                        className="search-width"
                        style={{
                            display: activeTab === 'goods' ? 'block' : 'none',
                        }}>
                        <input
                            type="text"
                            placeholder="Search for Goods"
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>

            <div className="view-upcoming">
                <a href="">View Upcoming Auctions</a>
            </div>
        </div>
    )
}

export default SliderTabs
