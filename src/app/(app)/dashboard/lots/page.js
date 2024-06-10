'use client'

import { useState, useEffect } from 'react'
import axios from '@/lib/axios'

const AddProduct = () => {
    const [products, setProducts] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/v1/products')
                setProducts(response.data.data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        setSuccessMessage('')
        setErrorMessage('')

        try {
            const response = await axios.post('/api/v1/products', {
                name,
                description,
                price,
            })
            setSuccessMessage('Lot added successfully!')
            setProducts([...products, response.data])
            setName('')
            setDescription('')
            setPrice('')
        } catch (error) {
            setErrorMessage(
                error.response?.data?.message || 'Error creating product',
            )
        } finally {
            setLoading(false)
        }

        setShowModal(false)
    }

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">My Lots</h1>
                <button
                    onClick={() => setShowModal(true)}
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-plus fa-sm text-white-50"></i> Add Lot
                </button>
            </div>
            {successMessage && (
                <div className="mb-4 text-success">{successMessage}</div>
            )}
            {errorMessage && (
                <div className="mb-4 text-danger">{errorMessage}</div>
            )}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Products
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
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
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
            {showModal && (
                <div
                    className="modal fade show"
                    tabIndex="-1"
                    role="dialog"
                    style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Product</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={() => setShowModal(false)}
                                    aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={name}
                                            onChange={e =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">
                                            Description:
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            value={description}
                                            onChange={e =>
                                                setDescription(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="price"
                                            value={price}
                                            onChange={e =>
                                                setPrice(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={loading}>
                                        {loading ? 'Loading...' : 'Add Product'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {showModal && <div className="modal-backdrop fade show"></div>}
        </>
    )
}

export default AddProduct
