/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

'use client'

import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import Navbar from '@/app/Navbar';
import Link from 'next/link';
import SortBox from '@/components/SortBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

// Sample product images
import ProductImage1 from '../../../public/images/product/product-01.png';
import ProductImage2 from '../../../public/images/product/product-02.png';
import ProductImage3 from '../../../public/images/product/product-03.png';

const LotsPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]); // State to manage categories
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [sortOrder, setSortOrder] = useState('default');
    const [keyword, setKeyword] = useState('');
    const [priceFrom, setPriceFrom] = useState(''); // State to manage price from
    const [priceTo, setPriceTo] = useState(''); // State to manage price to
    const resultsPerPage = 9;
    
    const fetchProducts = async (page = 1, sort = 'default', keyword = '', category = '', priceFrom = '', priceTo = '') => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/v1/products?page=${page}&sort=${sort}&keyword=${keyword}&category=${category}&price_from=${priceFrom}&price_to=${priceTo}`);
            setProducts(response.data.data);
            setCurrentPage(response.data.current_page);
            setTotalPages(response.data.last_page);
            setTotalResults(response.data.total);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };
    
    const fetchCategories = async () => {
        try {
            const response = await axios.get(`/api/v1/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    
    useEffect(() => {
        fetchProducts(currentPage, sortOrder, keyword, '', priceFrom, priceTo);
        fetchCategories();
    }, [currentPage, sortOrder, keyword, priceFrom, priceTo]);
    
    const handlePageChange = newPage => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };
    
    const handleSortChange = sort => {
        setSortOrder(sort);
    };
    
    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };
    
    const handleKeywordUpdate = () => {
        fetchProducts(1, sortOrder, keyword);
        setCurrentPage(1);
    };
    
    const handleCategoryClick = (category) => {
        fetchProducts(1, sortOrder, keyword, category);
        setCurrentPage(1);
    };
    
    const handlePriceFromChange = (event) => {
        setPriceFrom(event.target.value);
    };
    
    const handlePriceToChange = (event) => {
        setPriceTo(event.target.value);
    };
    
    const handlePriceUpdate = () => {
        fetchProducts(1, sortOrder, keyword, '', priceFrom, priceTo);
        setCurrentPage(1);
    };
    
    const startResult = (currentPage - 1) * resultsPerPage + 1;
    const endResult = Math.min(currentPage * resultsPerPage, totalResults);
    
    return (
    <>
    <TopBar />
    <div className="buy-container">
        <Navbar />
        <div className="">
            <h1 className="">Lots</h1>
            {loading ? (
                <p>Loading...</p>
                ) : (
                <div className='clear-nxt-prev-sort'>
                    <div className='first-flex'>
                        <button className='the-clear'>Clear</button>
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
            <div className='flex-outter'></div>
            <SortBox onSortChange={handleSortChange} />
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
                    <div className='actual-img'>
                        <Image src={ProductImage1} alt='Product Image' className='img-fluid' />
                    </div>
                </li>
                ))}
            </ul>
            <div className='row'>
                <div className='col-sm-12 col-md-3'>
                    <div className='sidebar-items'>
                        <div className='side-holder'>
                            <div className='side-title'>
                                <h6>Keyword</h6>
                            </div>
                            <div className='the-spacing'>
                                <input
                                type="text"
                                value={keyword}
                                onChange={handleKeywordChange}
                                className="form-control"
                                placeholder="Enter keyword"
                                />
                                <button
                                onClick={handleKeywordUpdate}
                                className="site-button"
                                >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
                <div className='sidebar-items two'>
                    <div className='side-holder'>
                        <div className='side-title'>
                            <h6>Product Type</h6>
                        </div>
                        <div className='the-spacing'>
                            <ul>
                                {categories.map(category => (
                                    <li key={category.id}>
                                        <a href="#" onClick={() => handleCategoryClick(category.name)}>
                                            {category.name} ({category.product_count})
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-items three'>
                        <div className='side-holder'>
                            <div className='side-title'>
                                <h6>Fixed Price</h6>
                            </div>
                            <div className='the-spacing'>
                                <label htmlFor="price-from">From:</label>
                                <input
                                type="number"
                                id="price-from"
                                value={priceFrom}
                                onChange={handlePriceFromChange}
                                className="form-control"
                                placeholder="From price"
                                />
                                <label htmlFor="price-to">To:</label>
                                <input
                                type="number"
                                id="price-to"
                                value={priceTo}
                                onChange={handlePriceToChange}
                                className="form-control"
                                placeholder="To price"
                                />
                                <button
                                onClick={handlePriceUpdate}
                                className="site-button mt-2"
                                >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-sm-12 col-md-9'>
                <div className='the-ac-flex'>
                    <div className='the-actual-p'>
                        <div className='actual-img'>
                            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                                <div>
                                    <Image src={ProductImage1} alt='Product Image 1' className='img-fluid' />
                                </div>
                                <div>
                                    <Image src={ProductImage2} alt='Product Image 2' className='img-fluid' />
                                </div>
                                <div>
                                    <Image src={ProductImage3} alt='Product Image 3' className='img-fluid' />
                                </div>
                            </Carousel>
                        </div>
                        <div className='act-tex-title'>
                            <h5>2019 Alfa Romeo Giulia</h5>
                            <p>Super Sedan 4dr Sport Auto 2.2 DT</p>
                        </div>
                        <div className='key-features'>
                            <p>Key Features</p>
                        </div>
                        <div className='price-and-view'>
                            <div className='stock-price'>
                                <div className='stck'><p>Stock 623498  Lot 101</p></div>
                                <div className='the-price'><h4>$25,000</h4>
                                    <p>Minimum Bid</p></div>
                                </div>
                                <div className='prod-bttns'>
                                    <div className='btn-one'>
                                        <button>View</button>
                                    </div>
                                    <div className='btn-two'>
                                        <button>Bid Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='share-location'>
                                <i className='icon-share'></i>
                                <p className='loca'><i className='icon-location'></i>Harare, Zimbabwe</p>
                            </div>
                        </div>
                        <div className='the-actual-p'>
                            <div className='actual-img'>
                                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                                    <div>
                                        <Image src={ProductImage1} alt='Product Image 1' className='img-fluid' />
                                    </div>
                                    <div>
                                        <Image src={ProductImage2} alt='Product Image 2' className='img-fluid' />
                                    </div>
                                    <div>
                                        <Image src={ProductImage3} alt='Product Image 3' className='img-fluid' />
                                    </div>
                                </Carousel>
                            </div>
                            <div className='act-tex-title'>
                                <h5>2019 Alfa Romeo Giulia</h5>
                                <p>Super Sedan 4dr Sport Auto 2.2 DT</p>
                            </div>
                            <div className='key-features'>
                                <p>Key Features</p>
                            </div>
                            <div className='price-and-view'>
                                <div className='stock-price'>
                                    <div className='stck'><p>Stock 623498  Lot 101</p></div>
                                    <div className='the-price'><h4>$25,000</h4>
                                        <p>Minimum Bid</p></div>
                                    </div>
                                    <div className='prod-bttns'>
                                        <div className='btn-one'>
                                            <button>View</button>
                                        </div>
                                        <div className='btn-two'>
                                            <button>Bid Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='share-location'>
                                    <i className='icon-share'></i>
                                    <p className='loca'><i className='icon-location'></i>Harare, Zimbabwe</p>
                                </div>
                            </div>
                            <div className='the-actual-p'>
                                <div className='actual-img'>
                                    <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                                        <div>
                                            <Image src={ProductImage1} alt='Product Image 1' className='img-fluid' />
                                        </div>
                                        <div>
                                            <Image src={ProductImage2} alt='Product Image 2' className='img-fluid' />
                                        </div>
                                        <div>
                                            <Image src={ProductImage3} alt='Product Image 3' className='img-fluid' />
                                        </div>
                                    </Carousel>
                                </div>
                                <div className='act-tex-title'>
                                    <h5>2019 Alfa Romeo Giulia</h5>
                                    <p>Super Sedan 4dr Sport Auto 2.2 DT</p>
                                </div>
                                <div className='key-features'>
                                    <p>Key Features</p>
                                </div>
                                <div className='price-and-view'>
                                    <div className='stock-price'>
                                        <div className='stck'><p>Stock 623498  Lot 101</p></div>
                                        <div className='the-price'><h4>$25,000</h4>
                                            <p>Minimum Bid</p></div>
                                        </div>
                                        <div className='prod-bttns'>
                                            <div className='btn-one'>
                                                <button>View</button>
                                            </div>
                                            <div className='btn-two'>
                                                <button>Bid Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='share-location'>
                                        <i className='icon-share'></i>
                                        <p className='loca'><i className='icon-location'></i>Harare, Zimbabwe</p>
                                    </div>
                                </div>
                                
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    
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
    );
}

export default LotsPage;

