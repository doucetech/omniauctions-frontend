/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */

'use client'

import { useState } from 'react'
import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link'
import { SearchInput, SearchTrigger } from '../Styles/SearchStyles'
import LoginLinks from './LoginLinks'

const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false)

    const handleSearchToggle = () => {
        setOpenSearch(!openSearch)
    }

    return (
        <>
            <nav>
                <Link href="/">
                    <ApplicationLogo className="block h-12 w-auto fill-current text-gray-600" />
                </Link>
                <div className="navbar-links-container">
                    <Link href="/buy">Buy</Link>
                    <Link href="/sell">Sell</Link>
                    <Link href="/about-omni">About Omni</Link>
                    <Link href="/more">More</Link>
                </div>

                <div className="reg-login">
                    <div className="my-search-container">
                        <div className="srch">
                            <li className="search_icon">
                                <SearchTrigger
                                    className={`search-trigger ${
                                        openSearch ? 'search-is-visible' : ''
                                    }`}
                                    onClick={handleSearchToggle}>
                                    <span></span>
                                </SearchTrigger>
                            </li>
                        </div>
                    </div>
                    <LoginLinks />
                </div>
            </nav>
            {openSearch && (
                <div className="search">
                    <form
                        autoComplete="off"
                        role="search"
                        method="get"
                        className="search-form"
                        action="/">
                        <SearchInput
                            type="search"
                            className="search-field"
                            placeholder="What Are You Looking For?"
                            name="s"
                        />
                    </form>
                </div>
            )}
        </>
    )
}

export default Navbar
