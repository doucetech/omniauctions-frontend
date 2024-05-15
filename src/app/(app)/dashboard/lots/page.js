'use client'

import { useState } from 'react'
import axios from '@/lib/axios'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

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
            setSuccessMessage('Product added successfully!')
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
    }

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Add Product
                </h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="p-6.5">
                    {successMessage && (
                        <div className="mb-4 text-green-500">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="mb-4 text-red-500">{errorMessage}</div>
                    )}
                    <div className="mb-4.5">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            type="text"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="description">
                            Description:
                        </label>
                        <textarea
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            id="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-4.5">
                        <label
                            className="mb-3 block text-sm font-medium text-black dark:text-white"
                            htmlFor="price">
                            Price:
                        </label>
                        <input
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            type="number"
                            id="price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                    <button
                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                        type="submit"
                        disabled={loading}>
                        {loading ? 'Loading...' : 'Add Product'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
