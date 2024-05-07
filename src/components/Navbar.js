import React, { useState } from "react";
import Logo from "../Assets/Omni-logo.png";
import { SearchInput, SearchTrigger } from "../Styles/SearchStyles";

const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false);
    
    const handleSearchToggle = () => {
        setOpenSearch(!openSearch);
    };
    
    return (
    <>
    <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="Omni Auctions Logo"></img>
        </div>
        <div className="navbar-links-container">
            <a href="">Buy</a>
            <a href="">Sell</a>
            <a href="">About Omni</a>
            <a href="">More</a>
        </div>
        
        <div className="reg-login">
            <div className="my-search-container">
                <div className="srch">
                    <li className="search_icon">
                        <SearchTrigger className={`search-trigger ${openSearch ? 'search-is-visible' : ''}`} onClick={handleSearchToggle}>
                            <span></span>
                        </SearchTrigger>
                    </li>
                </div>
            </div>
            <div className="reg">
                <a href="">Register</a>
            </div>
            <div className="login">
                <a href="">Log In</a>
            </div>
        </div>
    </nav>
    {openSearch && (
        <div className="search">
            <form autoComplete="off" role="search" method="get" className="search-form" action="/">
                <SearchInput type="search" className="search-field" placeholder="What Are You Looking For?" name="s" />
            </form>
        </div>
        )}
        </>
        );
    };
    
    export default Navbar;
