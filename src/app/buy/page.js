"use client";

import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import Navbar from '@/app/Navbar';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductAlphaRomeo from '../../../public/images/product/alpha.png';
import SmallSlider1 from '../../../public/images/product/smallslider.png';
import SmallSlider2 from '../../../public/images/product/small-slider-2.png';

const Buy = () => {
    const [mainImage, setMainImage] = useState(ProductAlphaRomeo);
    const images = [
    { src: ProductAlphaRomeo, alt: 'Alpha Romeo Giulia' },
    { src: SmallSlider1, alt: 'Alpha Romeo Giulia Side' },
    { src: SmallSlider2, alt: 'Alpha Romeo Giulia Rear' },
    // Add more images as needed
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display 4 images at a time
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1, // Display 1 image at a time on smaller screens
            }
        }
        ]
    };
    
    return (
    <>
    <TopBar />
    <div className="buy-container">
        <Navbar />
    </div>
    <div className=''>
        <div className='row'>
            <div className='col-sm-12'>
                <div className='lt-nmbr'>
                    <p>Lot 1</p>
                </div>
            </div>
            
            <div className='col-sm-12'>
                <h1 className="page-title">2019 Alfa Romeo Giulia</h1>
            </div> 
            <div className='col-sm-12'>
                <div className='enquire'>
                    <a href='#'>Enquire</a>
                </div>
            </div>
            <div className='col-sm-12 col-md-4'>
                <div className='product-slider'>
                    <div className='big-slider-image'>
                        <Image
                        src={mainImage}
                        alt="2019 Alfa Romeo Giulia"
                        width={500}
                        height={300}
                        className=""
                        />
                    </div>
                    <div className='small-image-slider'>
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index} onClick={() => setMainImage(image.src)} className="thumbnail-image-wrapper">
                                    <Image
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
                <div className='col-sm-12 col-md-8'>
                    <div className='bid-section'>
                        <div className='lot-and-button'>
                            <div className='the-bid-num'>
                                <h3>Lot 1</h3>
                            </div>
                            <div className='bid-now'>
                                <a href='#'>Bid Now</a>
                            </div>
                        </div>
                        <div className='the-start-time'>
                            <p>Starts 30/06/2024, 04:30AM</p>
                        </div>
                    </div>
                    
                    <div className='bid-description'>
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.</p>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div className='product-table'>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <th>Location</th>
                                        <td>New York</td>
                                    </tr>
                                    <tr>
                                        <th>Condition</th>
                                        <td>Excellent</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className='col-sm-12'>
                        <div className='the-disclamer'>
                            <h6>DAMAGE AND DESCRIPTION DISCLAIMER</h6>
                            <p>Please Note: This description indicates the motor vehicle has a body appraisal based purely on an external walk around. Without limiting the generality of this
                                disclaimer, there may be other damage including rust that is unsighted, mechanical and/or electrical issues, or missing parts, that will not be contained in the
                                description and it remains the buyer's responsibility to make enquiries and be satisfied with the condition and state of repair. The motor vehicle may have been 
                                stored and/or transported outdoors at any or all times and subjected to the elements of weather including, but not limited to, rain and/or hail. Images and 
                                recordings displayed on the website form part of the description of the motor vehicle however should not be relied upon solely, and may not represent ‘all 
                                damage’ to the motor vehicle. Any and all references to ‘odometer’ is only what is showing on the odometer and may not be the true odometer reading. Whilst 
                                every effort is made in the preparation of this description, it is a 'guide' only and no guarantee or warranty whatsoever is made as to the accuracy of the 
                                information contained within.</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                <Footer />
                </>
                );
            }
            
            export default Buy;
