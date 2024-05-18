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
import SortBox from '@/components/SortBox' // Import the SortBox component

const LotsPage = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalResults, setTotalResults] = useState(0) // Add totalResults state
    const [loading, setLoading] = useState(false)
    const [sortOrder, setSortOrder] = useState('default') // State to manage sort order
    const resultsPerPage = 9 // Number of results per page
    
    const fetchProducts = async (page = 1, sort = 'default') => {
        setLoading(true)
        try {
            const response = await axios.get(`/api/v1/products?page=${page}&sort=${sort}`)
            setProducts(response.data.data)
            setCurrentPage(response.data.current_page)
            setTotalPages(response.data.last_page)
            setTotalResults(response.data.total) // Set total results
        } catch (error) {
            console.error('Error fetching products:', error)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        fetchProducts(currentPage, sortOrder)
    }, [currentPage, sortOrder])
    
    const handlePageChange = newPage => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }
    
    const handleSortChange = (sort) => {
        setSortOrder(sort)
    }
    
    // Calculate the range of results currently displayed
    const startResult = (currentPage - 1) * resultsPerPage + 1
    const endResult = Math.min(currentPage * resultsPerPage, totalResults)
    
    return (
    <>
    <TopBar />
    <div className="buy-container">
        <Navbar />
        <div className="container">
            <h1 className="">Lots</h1>
            {loading ? (
                <p>Loading...</p>
                ) : (
                <div className='clear-nxt-prev-sort'>
                    <div className='first-flex'><button className='the-clear'>Clear</button>
                        <div className='display-nxt-prv-btns'>
                            <button
                            className='the-nxt'
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            >
                            
                        </button>
                        <button
                        className='the-prv'
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        >
                        
                    </button>
                    
                                    </div>
                                    <p>Displaying {startResult} to {endResult} of {totalResults} results</p>
            </div>
            <div className='flex-outter'>
                
                
            </div>
            <SortBox onSortChange={handleSortChange} /> {/* Add the SortBox component */}
        </div>
        )}
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
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                &laquo; Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
            Next &raquo;
        </button>
    </div>
</div>
</div>
<Footer />
</>
)
}

export default LotsPage
