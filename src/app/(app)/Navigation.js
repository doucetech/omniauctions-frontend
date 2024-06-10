/* eslint-disable prettier/prettier */

import WhiteLogo from '@/components/WhiteLogo'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import { usePathname } from 'next/navigation'

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
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                {/* <li className="nav-item">
                    <NavLink
                        class="nav-link"
                        href="//"
                        active={usePathname() === '//'}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Website</span>
                    </NavLink>
                </li> */}

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
                        <i className="fas fa-fw fa-wrench"></i>
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
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Lots</span>
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navigation
