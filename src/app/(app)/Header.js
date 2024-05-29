/* eslint-disable prettier/prettier */
/* eslint-disable-next-line react/self-closing-comp */
/* eslint-disable-next-line react/no-unknown-property */
'use client'

import Dropdown from '@/components/Dropdown'
import { DropdownButton } from '@/components/DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Header = ({ user }) => {
    const { logout } = useAuth()
    const [open, setOpen] = useState(false)
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="searchDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control bg-light border-0 small"
                                    placeholder="Search for..."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-primary"
                                        type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                    <Dropdown
                        align="right"
                        width="48"
                        trigger={
                            <button className="nav-link dropdown-toggle">
                                <i className="fas fa-bell fa-fw"></i>
                                <span className="badge badge-danger badge-counter">
                                    3+
                                </span>
                            </button>
                        }>
                        <DropdownButton>
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">
                                    December 12, 2019
                                </div>
                                <span className="font-weight-bold">
                                    A new monthly report is ready to download!
                                </span>
                            </div>
                        </DropdownButton>
                    </Dropdown>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                <Dropdown
                    align="right"
                    width="48"
                    className="nav-item dropdown no-arrow"
                    trigger={
                        <button className="nav-link dropdown-toggle">
                            <div>{user?.name}</div>
                        </button>
                    }>
                    <DropdownButton>Profile</DropdownButton>
                    <DropdownButton onClick={logout}>Logout</DropdownButton>
                </Dropdown>
            </ul>
        </nav>
    )
}

export default Header
