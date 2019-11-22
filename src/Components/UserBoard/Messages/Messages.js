import React, { Component } from 'react'
import logo from '../../../assets/img/logos/logo.png'
class Messages extends Component {
    render() {
        return (
            <div className="coming-soon coming-soon-bg overview-bgi">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="coming-soon-inner">
                                <img src={logo} alt="logo" />
                                <h1>Coming Soon</h1>
                                <div className="countdown styled coming-soon-counter"></div>
                                <div className="clearfix"></div>
                                <h6>Notify Me When It's Ready</h6>
                                <div className="coming-form clearfix">
                                    <form className="form-inline" action="#" method="GET">
                                        <input type="text" className="form-control" id="inlineFormInputName2" placeholder="Email Address" />
                                        <button type="submit" className="btn btn-color">Subscribe</button>
                                    </form>
                                </div>
                                <ul className="social-list clearfix">
                                    <li><div className="facebook"><i className="fa fa-facebook"></i></div></li>
                                    <li><div className="twitter"><i className="fa fa-twitter"></i></div></li>
                                    <li><div className="google"><i className="fa fa-google-plus"></i></div></li>
                                    <li><div className="rss"><i className="fa fa-rss"></i></div></li>
                                    <li><div className="linkedin"><i className="fa fa-linkedin"></i></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Messages;