'use client'

import React, { useState } from 'react'
import { formatDateServer } from '../utils/dateUtils'

const AuctionTabs = () => {
    const [activeTab, setActiveTab] = useState('upcoming')

    const handleTabClick = tabName => {
        setActiveTab(tabName)
    }

    return (
        <div className="product-tabs">
            <div className="tabs-buttons mst-center">
                <div className="button-border-b">
                    <button
                        className={activeTab === 'upcoming' ? 'active' : ''}
                        onClick={() => handleTabClick('upcoming')}>
                        Upcoming Auctions
                    </button>
                    <button
                        className={activeTab === 'past' ? 'active' : ''}
                        onClick={() => handleTabClick('past')}>
                        Past Auctions
                    </button>
                </div>
            </div>
            <div className="tab-content auc">
                {activeTab === 'upcoming' && (
                    <div>
                        <div className="auctions-wraper">
                            <div className="auction-holder">
                                <div className="auc-img-holder">
                                    <img
                                        src="images/furniture.png"
                                        alt="Furniture"
                                    />
                                </div>
                                <div className="auc-text-holder">
                                    <div className="title-and-date">
                                        <h2>Furniture</h2>
                                        <div className="auc-date">
                                            <p>
                                                {/* {formatDateServer('2024-04-15')} */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lot-number">
                                        <p>#105</p>
                                    </div>
                                    <div className="auc-link">
                                        <a href="">View Lot</a>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-holder">
                                <div className="auc-img-holder">
                                    <img
                                        src="images/vehicles.png"
                                        alt="Vehicles"
                                    />
                                </div>
                                <div className="auc-text-holder">
                                    <div className="title-and-date">
                                        <h2>Vehicles</h2>
                                        <div className="auc-date">
                                            <p>
                                                {/* {formatDateServer('2024-04-15')} */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lot-number">
                                        <p>#131</p>
                                    </div>
                                    <div className="auc-link">
                                        <a href="">View Lot</a>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-holder">
                                <div className="auc-img-holder">
                                    <img src="images/goods.png" alt="Goods" />
                                </div>
                                <div className="auc-text-holder">
                                    <div className="title-and-date">
                                        <h2>Goods</h2>
                                        <div className="auc-date">
                                            <p>
                                                {/* {formatDateServer('2024-04-15')} */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lot-number">
                                        <p>#108</p>
                                    </div>
                                    <div className="auc-link">
                                        <a href="">View Lot</a>
                                    </div>
                                </div>
                            </div>
                            <div className="auction-holder">
                                <div className="auc-img-holder">
                                    <img
                                        src="images/industrial.png"
                                        alt="Industrial"
                                    />
                                </div>
                                <div className="auc-text-holder">
                                    <div className="title-and-date">
                                        <h2>Industrial</h2>
                                        <div className="auc-date">
                                            <p>
                                                {/* {formatDateServer('2024-04-15')} */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lot-number">
                                        <p>#110</p>
                                    </div>
                                    <div className="auc-link">
                                        <a href="">View Lot</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'past' && (
                    <div>
                        {
                            <div className="auctions-wraper">
                                <div className="auction-holder">
                                    <div className="auc-img-holder">
                                        <img
                                            src="images/furniture.png"
                                            alt="Furniture"
                                        />
                                    </div>
                                    <div className="auc-text-holder">
                                        <div className="title-and-date">
                                            <h2>Vehicles</h2>
                                            <div className="auc-date">
                                                <p>
                                                    {formatDateServer(
                                                        '2024-04-15',
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="lot-number">
                                            <p>#105</p>
                                        </div>
                                        <div className="auc-link">
                                            <a href="">View Lot</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="auction-holder">
                                    <div className="auc-img-holder">
                                        <img
                                            src="images/vehicles.png"
                                            alt="Vehicles"
                                        />
                                    </div>
                                    <div className="auc-text-holder">
                                        <div className="title-and-date">
                                            <h2>Furniture</h2>
                                            <div className="auc-date">
                                                <p>
                                                    {formatDateServer(
                                                        '2024-04-15',
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="lot-number">
                                            <p>#131</p>
                                        </div>
                                        <div className="auc-link">
                                            <a href="">View Lot</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="auction-holder">
                                    <div className="auc-img-holder">
                                        <img
                                            src="images/furniture.png"
                                            alt="Goods"
                                        />
                                    </div>
                                    <div className="auc-text-holder">
                                        <div className="title-and-date">
                                            <h2>Industrial</h2>
                                            <div className="auc-date">
                                                <p>
                                                    {formatDateServer(
                                                        '2024-04-15',
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="lot-number">
                                            <p>#108</p>
                                        </div>
                                        <div className="auc-link">
                                            <a href="">View Lot</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="auction-holder">
                                    <div className="auc-img-holder">
                                        <img
                                            src="images/goods.png"
                                            alt="Industrial"
                                        />
                                    </div>
                                    <div className="auc-text-holder">
                                        <div className="title-and-date">
                                            <h2>Goods</h2>
                                            <div className="auc-date">
                                                <p>
                                                    {formatDateServer(
                                                        '2024-04-15',
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="lot-number">
                                            <p>#110</p>
                                        </div>
                                        <div className="auc-link">
                                            <a href="">View Lot</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    )
}

export default AuctionTabs
