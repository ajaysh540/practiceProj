import React, { Component } from 'react'
import avatar from '../../../assets/img/avatar/avatar-6.jpg'
class MyProfile extends Component {
    render() {
        return (
            <React.Fragment>
                        <div className="dashboard-header clearfix">
                            <div className="row">
                                <div className="col-sm-12 col-md-6"><h4>My Profile</h4></div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="breadcrumb-nav">
                                        <ul>
                                            <li>
                                                <a href="index.html">Index</a>
                                            </li>
                                            <li>
                                                <a href="dashboard.html">Dashboard</a>
                                            </li>
                                            <li className="active">My Profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-list">
                            <h4>Profile Details</h4>
                            <div className="dashboard-message contact-2 bdr clearfix">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3">

                                        <div className="edit-profile-photo">
                                            <img src={avatar} alt="profile" className="img-fluid" />
                                            <div className="change-photo-btn">
                                                <div className="photoUpload">
                                                    <span><i className="fa fa-upload"></i></span>
                                                    <input type="file" className="upload" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <form action="#" method="GET" encType="multipart/form-data">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group name">
                                                        <label>Your Name</label>
                                                        <input type="text" name="name" className="form-control" placeholder="John Deo" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group email">
                                                        <label>Your Title</label>
                                                        <input type="text" name="title" className="form-control" placeholder="Your Title" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group subject">
                                                        <label>Phone</label>
                                                        <input type="text" name="phone" className="form-control" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group number">
                                                        <label>Email</label>
                                                        <input type="email" name="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group mb-0 message">
                                                        <label>Personal info</label>
                                                        <textarea className="form-control" name="message" placeholder="Personal info"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="dashboard-list">
                                    <h3 className="heading">Change Password</h3>
                                    <div className="dashboard-message contact-2">
                                        <form action="#" method="GET" encType="multipart/form-data">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group name">
                                                        <label>Current Password</label>
                                                        <input type="password" name="current-password" className="form-control" placeholder="Current Password" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group email">
                                                        <label>New Password</label>
                                                        <input type="password" name="new-password" className="form-control" placeholder="New Password" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group subject">
                                                        <label>Confirm New Password</label>
                                                        <input type="password" name="confirm-new-password" className="form-control" placeholder="Confirm New Password" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="send-btn">
                                                        <button type="submit" className="btn btn-md button-theme">Change Password</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="dashboard-list">
                                    <h3 className="heading">Socials</h3>
                                    <div className="dashboard-message contact-2">
                                        <form action="#" method="GET" encType="multipart/form-data">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group name">
                                                        <label>Facebook</label>
                                                        <input type="text" name="facebook" className="form-control" placeholder="https://www.facebook.com" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group email">
                                                        <label>Twitter</label>
                                                        <input type="text" name="twitter" className="form-control" placeholder="https://twitter.com" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group subject">
                                                        <label>Vkontakte</label>
                                                        <input type="text" name="vkontakte" className="form-control" placeholder="vk.com" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group number">
                                                        <label>Whatsapp</label>
                                                        <input type="email" name="whatsapp" className="form-control" placeholder="https://www.whatsapp.com" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="send-btn">
                                                        <button type="submit" className="btn btn-md button-theme">Send Changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    <p className="sub-banner-2 text-center">© 2019 gimiz.</p>
                    </React.Fragment>);
    }
}
export default MyProfile;