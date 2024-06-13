'use client'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import moment from 'moment'

const Lot = ({ params }) => {
    const productId = params.id
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [endTime, setEndTime] = useState(null)
    const [timeLeft, setTimeLeft] = useState(null)
    const [currentBid, setCurrentBid] = useState(null)
    let timerInterval

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
                // console.error('Error fetching product:', error)
            } finally {
                setLoading(false)
            }
        }

        if (productId) {
            fetchProduct()
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

    if (loading) {
        return <p>Loading...</p>
    }

    if (!product) {
        return <p>Product not found</p>
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

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{product.name}</h1>
            </div>
            <div className="container justify-center mx-auto p-4">
                <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${product.featured_image}`}
                    alt={product.name}
                    className="img-fluid"
                    width={300}
                    height={200}
                />
                <p>{product.description}</p>
                {timeLeft && !timeLeft.expired ? (
                    <>
                        <p>
                            Auction Ends in: {timeLeft.days}d {timeLeft.hours}h{' '}
                            {timeLeft.minutes}m {timeLeft.seconds}s
                        </p>

                        <p>Current Bid: ${currentBid || product.price}</p>
                    </>
                ) : (
                    <p>Auction Ended</p>
                )}
            </div>
        </>
    )
}

export default Lot
