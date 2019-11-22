import React, { Component } from 'react'
import avatar3 from '../../../assets/img/avatar/avatar-3.jpg'
import avatar2 from '../../../assets/img/avatar/avatar-2.jpg'
import avatar1 from '../../../assets/img/avatar/avatar-1.jpg'
import { NavLink } from 'react-router-dom'
class Dashboard extends Component {
    render() {
        return (<React.Fragment>
            <div className="dashboard-header clearfix">
                <div className="row">
                    <div className="col-sm-12 col-md-6"><h4>Hello , Tom</h4></div>
                    <div className="col-sm-12 col-md-6">
                        <div className="breadcrumb-nav">
                            <ul>
                                <li>
                                    <div className="nav-link">Index</div>
                                </li>
                                <li>
                                    <NavLink to="/dashboard" className="active">Dashboard</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="alert alert-success alert-2" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <strong>Your listing</strong> YOUR LISTING HAS BEEN APPROVED!
                            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="ui-item bg-success">
                        <div className="left">
                            <h4>242</h4>
                            <p>Active Listings</p>
                        </div>
                        <div className="right">
                            <i className="fa fa-map-marker"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="ui-item bg-warning">
                        <div className="left">
                            <h4>1242</h4>
                            <p>Listing Views</p>
                        </div>
                        <div className="right">
                            <i className="fa fa-eye"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="ui-item bg-active">
                        <div className="left">
                            <h4>786</h4>
                            <p>Reviews</p>
                        </div>
                        <div className="right">
                            <i className="fa fa-comments-o"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="ui-item bg-dark">
                        <div className="left">
                            <h4>42</h4>
                            <p>Bookmarked</p>
                        </div>
                        <div className="right">
                            <i className="fa fa-heart-o"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="dashboard-list">
                        <div className="dashboard-message bdr clearfix ">
                            <div className="tab-box-2">
                                <div className="clearfix mb-30 comments-tr">
                                    <span>Comments</span>
                                    <ul className="nav nav-pills float-right" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <div className="nav-link active show" id="pills-profile-tab" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">Pending</div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="nav-link" id="pills-contact-tab" data-toggle="pill" role="tab" aria-controls="pills-contact" aria-selected="true">Approved</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="comment">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar3} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>John Antony</h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <div ><img src={avatar1} alt="comments-user" /></div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        Maikel Alisa
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                        <div className="comment mb-0">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar2} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        Emma Connor
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade active show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="comment">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar2} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        Emma Connor
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar3} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        John Antony
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                        <div className="comment mb-0">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar1} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        Maikel Alisa
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="dashboard-list">
                        <div className="dashboard-message bdr clearfix ">
                            <div className="tab-box-2">
                                <div className="clearfix mb-30 comments-tr">
                                    <span>Comments</span>
                                    <ul className="nav nav-pills float-right" id="pills-tab2" role="tablist">
                                        <li className="nav-item">
                                            <div className="nav-link active show" id="pills-profile-tab2" data-toggle="pill" role="tab" aria-controls="pills-profile" aria-selected="false">Pending</div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="nav-link" id="pills-contact-tab2" data-toggle="pill" role="tab" aria-controls="pills-contact" aria-selected="true">Approved</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="pills-tabContent2">
                                    <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2">
                                        <div className="comment">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar2} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        Emma Connor
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar3} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>John Antony</h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                        <div className="comment mb-0">
                                            <div className="comment-author">
                                                <div ><img src={avatar1} alt="comments-user" /></div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        Maikel Alisa
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade active show" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2">
                                        <div className="comment">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar1} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        Maikel Alisa
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar2} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        Emma Connor
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                        <div className="comment mb-0">
                                            <div className="comment-author">
                                                <div >
                                                    <img src={avatar3} alt="comments-user" />
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="comment-meta">
                                                    <h5>
                                                        John Antony
                                                                    </h5>
                                                    <div className="comment-meta">
                                                        8:42 PM 11/28/2018<div >Reply</div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus tincidunt aliquam. Aliquam gravida massa at sem </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="sub-banner-2 text-center">© 2019 gimiz.</p>
        </React.Fragment>);
    }
}
export default Dashboard;