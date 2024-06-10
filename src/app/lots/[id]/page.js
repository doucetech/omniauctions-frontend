'use client'

import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Navbar from '@/app/Navbar'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'

const LotPage = ({ params }) => {
    const productId = params.id
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [nextBids, setNextBids] = useState([])
    const [selectedBid, setSelectedBid] = useState(null)
    const [currentBid, setCurrentBid] = useState(null)

    const fetchNextBids = async () => {
        try {
            const response = await axios.get(
                `/api/v1/products/${productId}/next-bids`,
            )
            setNextBids(response.data)
        } catch (error) {
            // console.error('Error fetching next bids:', error)
        }
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `/api/v1/products/${productId}`,
                )
                setProduct(response.data)
                if (response.data.bids.length > 0) {
                    setCurrentBid(response.data.bids[0].amount)
                }
            } catch (error) {
                // console.error('Error fetching product:', error)
            } finally {
                setLoading(false)
            }
        }

        if (productId) {
            fetchProduct()
            fetchNextBids()
        }
    }, [productId])

    const handleBidSubmit = async () => {
        try {
            await axios.post(`/api/v1/products/${productId}/bids`, {
                user_id: 1,
                amount: selectedBid,
            })
            setCurrentBid(selectedBid)
            setSelectedBid(null)
            fetchNextBids()
        } catch (error) {
            // console.error('Error placing bid:', error)
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (!product) {
        return <p>Product not found</p>
    }

    return (
        <>
            <TopBar />
            <div className="buy-container">
                <Navbar />
                <div className="container justify-center mx-auto p-4">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Current Bid: ${currentBid || product.price}</p>
                    <h2>Bid:</h2>
                    <ul>
                        {nextBids.map((bid, index) => (
                            <li key={index}>
                                <input
                                    type="radio"
                                    id={`bid-${index}`}
                                    name="nextBid"
                                    value={bid}
                                    checked={selectedBid === bid}
                                    onChange={() => setSelectedBid(bid)}
                                />
                                <label htmlFor={`bid-${index}`}> ${bid}</label>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                        onClick={handleBidSubmit}
                        disabled={!selectedBid}>
                        Place Bid
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LotPage
