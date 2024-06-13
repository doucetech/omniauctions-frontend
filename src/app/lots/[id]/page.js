'use client'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Navbar from '@/app/Navbar'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import moment from 'moment'
import { useAuth } from '@/hooks/auth'

const LotPage = ({ params }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const productId = params.id
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [nextBids, setNextBids] = useState([])
    const [selectedBid, setSelectedBid] = useState(null)
    const [currentBid, setCurrentBid] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [timeLeft, setTimeLeft] = useState(null)
    let timerInterval

    const fetchNextBids = async () => {
        try {
            const response = await axios.get(
                `/api/v1/products/${productId}/next-bids`,
            )
            setNextBids(response.data)
        } catch (error) {
            console.error('Error fetching next bids:', error)
        }
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `/api/v1/products/${productId}`,
                )
                setProduct(response.data)
                setEndTime(response.data.end_time)
                if (response.data.bids.length > 0) {
                    setCurrentBid(response.data.bids[0].amount)
                }
            } catch (error) {
                console.error('Error fetching product:', error)
            } finally {
                setLoading(false)
            }
        }

        if (productId) {
            fetchProduct()
            fetchNextBids()
        }

        return () => clearInterval(timerInterval)
    }, [productId])

    useEffect(() => {
        if (endTime) {
            setTimeLeft(calculateTimeLeft())

            const timerInterval = setInterval(() => {
                setTimeLeft(calculateTimeLeft())
            }, 1000)

            return () => clearInterval(timerInterval)
        }
    }, [endTime])

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
            console.error('Error placing bid:', error)
        }
    }

    const calculateTimeLeft = () => {
        const now = moment()
        const end = moment(endTime)

        if (now >= end) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                expired: true,
            }
        }

        const duration = moment.duration(end.diff(now))
        return {
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
            expired: false,
        }
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (!product) {
        return <p>Product not found</p>
    }

    if (!user) {
        return <p>Login first</p>
    }

    return (
        <>
            <TopBar />
            <div className="buy-container">
                <Navbar />
                <div className="container justify-center mx-auto p-4">
                    <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${product.featured_image}`}
                        alt={product.name}
                        className="img-fluid"
                        width={300}
                        height={200}
                    />
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    {timeLeft && !timeLeft.expired ? (
                        <>
                            <p>
                                Auction Ends in: {timeLeft.days}d{' '}
                                {timeLeft.hours}h {timeLeft.minutes}m{' '}
                                {timeLeft.seconds}s
                            </p>
                            <p>Current Bid: ${currentBid || product.price}</p>
                            {product.user_id !== user.id ? (
                                <>
                                    <h2>Bid:</h2>
                                    <ul>
                                        {nextBids.map((bid, index) => (
                                            <li key={index}>
                                                <input
                                                    type="radio"
                                                    id={`bid-${index}`}
                                                    name="nextBid"
                                                    value={bid}
                                                    checked={
                                                        selectedBid === bid
                                                    }
                                                    onChange={() =>
                                                        setSelectedBid(bid)
                                                    }
                                                />
                                                <label htmlFor={`bid-${index}`}>
                                                    {' '}
                                                    ${bid}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                                        onClick={handleBidSubmit}
                                        disabled={!selectedBid}>
                                        Place Bid
                                    </button>
                                </>
                            ) : (
                                <p className="text-red-500 mt-2">
                                    You cannot bid on your own product.
                                </p>
                            )}
                        </>
                    ) : (
                        <p>Auction Ended</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LotPage
