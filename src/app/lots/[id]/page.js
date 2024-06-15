'use client'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Navbar from '@/app/Navbar'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import moment from 'moment'
import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    const [mainImage, setMainImage] = useState(null)
    const [images, setImages] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

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
                const productData = response.data
                setProduct(productData)
                setEndTime(productData.end_time)
                if (productData.bids.length > 0) {
                    setCurrentBid(productData.bids[0].amount)
                }

                setMainImage(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${productData.featured_image}`,
                )
                setImages([
                    {
                        src: `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${productData.featured_image}`,
                        alt: productData.name,
                    },
                    ...productData.images.map((image, index) => ({
                        src: `${process.env.NEXT_PUBLIC_BACKEND_URL}/${image.path}`,
                        alt: `Gallery Image ${index + 1}`,
                    })),
                ])
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
        return <Loading />
    }

    return (
        <>
            <TopBar />
            <div className="buy-container">
                <Navbar />
                <div className="container justify-center mx-auto p-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1 className="page-title">{product.name}</h1>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="product-slider">
                                <div className="big-slider-image">
                                    <img
                                        src={mainImage}
                                        alt={product.name}
                                        className="img-fluid"
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <div className="small-image-slider">
                                    <Slider {...settings}>
                                        {images.map((image, index) => (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    setMainImage(image.src)
                                                }
                                                className="thumbnail-image-wrapper">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={150}
                                                    height={100}
                                                    className="thumbnail-image"
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="bid-section">
                                {timeLeft && !timeLeft.expired ? (
                                    <>
                                        <div className="lot-and-button">
                                            <div className="the-bid-num">
                                                <h3>
                                                    Current Bid: $
                                                    {currentBid ||
                                                        product.price}
                                                </h3>
                                            </div>
                                            <div className="bid-now">
                                                {product.user_id !== user.id ? (
                                                    <>
                                                        <ul>
                                                            {nextBids.map(
                                                                (
                                                                    bid,
                                                                    index,
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }>
                                                                        <input
                                                                            type="radio"
                                                                            id={`bid-${index}`}
                                                                            name="nextBid"
                                                                            value={
                                                                                bid
                                                                            }
                                                                            checked={
                                                                                selectedBid ===
                                                                                bid
                                                                            }
                                                                            onChange={() =>
                                                                                setSelectedBid(
                                                                                    bid,
                                                                                )
                                                                            }
                                                                        />
                                                                        <label
                                                                            htmlFor={`bid-${index}`}>
                                                                            {' '}
                                                                            $
                                                                            {
                                                                                bid
                                                                            }
                                                                        </label>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                        <button
                                                            className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                                                            onClick={
                                                                handleBidSubmit
                                                            }
                                                            disabled={
                                                                !selectedBid
                                                            }>
                                                            Place Bid
                                                        </button>
                                                    </>
                                                ) : (
                                                    <p className="text-red-500 mt-2">
                                                        You cannot bid on your
                                                        own product.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="the-start-time">
                                            <p>
                                                Auction Ends in: {timeLeft.days}
                                                d {timeLeft.hours}h{' '}
                                                {timeLeft.minutes}m{' '}
                                                {timeLeft.seconds}s
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <p>Auction Ended</p>
                                )}
                            </div>

                            <div className="bid-description">
                                <h3>Description</h3>
                                <p>{product.description}</p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="product-table">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Location</th>
                                            <td>{product.location}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* <div className="col-sm-12">
                            <div className="the-disclamer">
                                <h6>DAMAGE AND DESCRIPTION DISCLAIMER</h6>
                                <p>

                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LotPage
