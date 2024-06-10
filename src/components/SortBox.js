/* eslint-disable prettier/prettier */

import React from 'react'

const SortBox = ({ onSortChange }) => {
    const handleSortChange = event => {
        onSortChange(event.target.value)
    }

    return (
        <div className="sort-box">
            <select id="sort" onChange={handleSortChange}>
                <option value="" disabled selected>
                    Sort by:
                </option>
                <option value="default">Default</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
            </select>
        </div>
    )
}

export default SortBox
