/* eslint-disable prettier/prettier */

import WhiteLogo from '@/components/WhiteLogo'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import { usePathname } from 'next/navigation'
import {
    FaTachometerAlt,
    FaWrench,
    FaBox,
    FaMoneyBill,
    FaHistory,
} from 'react-icons/fa'

const Navigation = () => {
    return (
        <>
            <ul
                className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                id="accordionSidebar">
                <Link href="/dashboard">
                    <div className="sidebar-brand-text mx-3">
                        <WhiteLogo />
                    </div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        href="/dashboard"
                        active={usePathname() === '/dashboard'}>
                        <FaTachometerAlt className="fas fa-fw" />
                        <span> Dashboard</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <a
                        className="nav-link"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaTachometerAlt className="fas fa-fw" />
                        <span>Website</span>
                    </a>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">Interface</div>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapseUtilities"
                        aria-expanded="true"
                        aria-controls="collapseUtilities">
                        <FaWrench className="fas fa-fw" />
                        <span>Utilities</span>
                    </a>
                    <div
                        id="collapseUtilities"
                        className="collapse"
                        aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">
                                Custom Utilities:
                            </h6>
                            <a
                                className="collapse-item"
                                href="utilities-color.html">
                                Colors
                            </a>
                            <a
                                className="collapse-item"
                                href="utilities-border.html">
                                Borders
                            </a>
                            <a
                                className="collapse-item"
                                href="utilities-animation.html">
                                Animations
                            </a>
                            <a
                                className="collapse-item"
                                href="utilities-other.html">
                                Other
                            </a>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        href="/dashboard/lots"
                        active={usePathname() === '/dashboard/lots'}>
                        <FaBox className="fas fa-fw" />
                        <span> Lots</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        href="/dashboard/bids"
                        active={usePathname() === '/dashboard/bids'}>
                        <FaMoneyBill className="fas fa-fw" />
                        <span> Bids</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        href="/dashboard/past-bids"
                        active={usePathname() === '/dashboard/past-bids'}>
                        <FaHistory className="fas fa-fw" />
                        <span> Past Bids</span>
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navigation
