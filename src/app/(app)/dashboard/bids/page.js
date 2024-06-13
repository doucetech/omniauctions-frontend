'use client'

import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

const Bids = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/v1/my-bids')
                setProducts(response.data.data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    }, [])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">My Bids</h1>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Bids</h6>
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
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td>
                                            {product.featured_image && (
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/${product.featured_image}`}
                                                    alt={product.name}
                                                    style={{
                                                        width: '50px',
                                                        height: '50px',
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>${product.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bids
