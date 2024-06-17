'use client'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

const Bids = () => {
    const [bidsData, setBidsData] = useState({
        data: [],
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
    })

    useEffect(() => {
        fetchBids()
    }, [])

    const fetchBids = async (page = 1) => {
        try {
            const response = await axios.get(`/api/v1/past-bids?page=${page}`)
            setBidsData(response.data.original)
        } catch (error) {
            console.error('Error fetching bids:', error)
        }
    }

    const handlePageChange = page => {
        fetchBids(page)
    }

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Past Bids</h1>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Past Bids
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Location</th>
                                    <th>Message</th>
                                    <th>Seller Name</th>
                                    <th>Seller Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bidsData.data.map((bid, index) => (
                                    <tr key={index}>
                                        <td>
                                            {bid.featured_image && (
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${bid.featured_image}`}
                                                    alt={bid.name}
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td>{bid.name}</td>
                                        <td>{bid.description}</td>
                                        <td>${bid.amount}</td>
                                        <td>{bid.location}</td>
                                        <td>{bid.message}</td>
                                        <td>{bid.owner.name}</td>
                                        <td>{bid.owner.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <nav className="mt-4">
                        <ul className="pagination justify-content-center">
                            {Array.from(
                                { length: bidsData.last_page },
                                (_, index) => index + 1,
                            ).map(page => (
                                <li
                                    key={page}
                                    className={`page-item ${
                                        page === bidsData.current_page
                                            ? 'active'
                                            : ''
                                    }`}>
                                    <button
                                        className="page-link"
                                        onClick={() => handlePageChange(page)}>
                                        {page}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Bids
