/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Navbar from '@/app/Navbar'
import Link from 'next/link'

const LotsPage = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [loading, setLoading] = useState(false)

    const fetchProducts = async (page = 1) => {
        setLoading(true)
        try {
            const response = await axios.get(`/api/v1/products?page=${page}`)
            setProducts(response.data.data)
            setCurrentPage(response.data.current_page)
            setTotalPages(response.data.last_page)
        } catch (error) {
            console.error('Error fetching products:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts(currentPage)
    }, [currentPage])

    const handlePageChange = newPage => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    return (
        <>
            <TopBar />
            <div className="buy-container">
                <Navbar />
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Lots</h1>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            <ul>
                                {products.map(product => (
                                    <li key={product.id} className="mb-2">
                                        <h2 className="text-xl">
                                            <Link href={`/lots/${product.id}`}>
                                                {product.name}
                                            </Link>
                                        </h2>
                                        <p>{product.description}</p>
                                        <p>Price: ${product.price}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() =>
                                        handlePageChange(currentPage - 1)
                                    }
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                                    &laquo; Previous
                                </button>
                                <span>
                                    Page {currentPage} of {totalPages}
                                </span>
                                <button
                                    onClick={() =>
                                        handlePageChange(currentPage + 1)
                                    }
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                                    Next &raquo;
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LotsPage
