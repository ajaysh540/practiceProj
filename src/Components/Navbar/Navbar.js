import React from 'react'
import logo from '../../assets/img/logos/logo.png'
import avatar from '../../assets/img/avatar/avatar-1.jpg'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (<header className="main-header d-block nav p-0 fixed-top fixed-header">
        <div className="container-fluid">
            <nav className="navbar p-0 navbar-expand-lg navbar-light">
                <NavLink to="/">
                    <img className="navbar-brand " src={logo} alt="logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto d-lg-none d-xl-none">
                        <li className="nav-item dropdown">
                            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/messages" className="nav-link">Messages</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/bookings" className="nav-link">Bookings</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/my-listings" className="nav-link">My Listings</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/my-invoices" className="nav-link">My Invoices</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/favorited-listings" className="nav-link">Favorited Listings</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/add-listing" className="nav-link">Add Listins</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/my-profile" className="nav-link">My Profile</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/logout" className="nav-link">Logout</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-buttons ml-auto d-none d-xl-block d-lg-block">
                        <ul>
                            <li>
                                <div className="dropdown btns">
                                    <div className="dropdown-toggle" data-toggle="dropdown">
                                        <img src={avatar} alt="avatar" />
                                        My Account
                                </div>
                                    <div className="dropdown-menu">
                                        <NavLink className="dropdown-item" to="/dashboard">Dashboard</NavLink>
                                        <NavLink className="dropdown-item" to="/messages">Messages</NavLink>
                                        <NavLink className="dropdown-item" to="/bookings">Bookings</NavLink>
                                        <NavLink className="dropdown-item" to="/my-profile">My profile</NavLink>
                                        <NavLink className="dropdown-item" to="/logout">Logout</NavLink>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <NavLink className="btn btn-theme btn-md" to="/add-listing">Add Listing</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    );
}

export default Navbar;