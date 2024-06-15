/* eslint-disable react/self-closing-comp */

import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="the-footer">
            <div className="footer-items-flex">
                <div className="get-started">
                    <h2>Getting Started</h2>
                    <a href="#">All Categories</a>
                    <a href="#">How to bid</a>
                    <a href="#">FAQs</a>
                </div>
                <div className="useful-links">
                    <h2>Useful Links</h2>
                    <a href="#">Contact Us</a>
                    <a href="#">Log in</a>
                    <a href="#">Register</a>
                </div>
                <div className="need-more">
                    <h2>Need More info?</h2>
                    <a href="#">About Us</a>
                    <a href="#">Sell with us</a>
                </div>
                <div className="follow">
                    <h2>Follow Us</h2>
                    <a href='#'>
                        <i className="icon-youtube"></i>
                    </a>
                    <a href='#'>
                        <i className="icon-linkedin"></i>
                    </a>
                    <a href='#'>
                        <i className="icon-instagram"></i>
                    </a>
                    <a href='#'>
                        <i className="icon-twitter"></i>
                    </a>
                    <a href='#'>
                        <i className="icon-facebook"></i>
                    </a>
                </div>
            </div>
            <div className="copyright">
                <div className="copy-center">
                    <p>© {currentYear} Omni Auctions</p>
                    <a href="">Terms & Conditions</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
