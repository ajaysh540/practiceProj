import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class SideNav extends Component {
 
    render() {
        return (
            <div className="dashboard-inner">
                <h4>Main</h4>
                <ul>
                    <li><NavLink to="/dashboard"><i className="flaticon-dashboard"></i> Dashboard</NavLink></li>
                    <li><NavLink to="/messages"><i className="flaticon-dashboard"></i> Messages <span className="nav-tag">6</span></NavLink></li>
                    <li><NavLink to="/bookings"><i className="flaticon-calendar"></i> Bookings</NavLink></li>
                </ul>
                <h4>Listings</h4>
                <ul>
                    <li><NavLink to="/healthreport"><i className="flaticon-list-1"></i>Health Report</NavLink></li>
                    <li><NavLink to="/my-invoices"><i className="flaticon-bill"></i>My Invoices</NavLink></li>
                    <li><NavLink to="/favorite-listings"><i className="flaticon-heart"></i>Favorited Listing</NavLink></li>
                    <li><NavLink to="/add-listing"><i className="flaticon-plus"></i>Add Listins</NavLink></li>
                </ul>
                <h4>Account</h4>
                <ul>
                    <li><NavLink to="/my-profile"><i className="flaticon-male"></i>My Profile</NavLink></li>
                    <li><NavLink to="/logout"><i className="flaticon-logout"></i>Logout</NavLink></li>
                </ul>
            </div>
        );
    }
}
export default SideNav;
