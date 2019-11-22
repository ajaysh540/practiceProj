import React, { Component } from 'react'
import Container from './Container'
import SideNav from './SideNav'
class UserBoard extends Component {
 
    render() {
        return <React.Fragment>
          
            <div className="dashboard container-fluid row">
                <div className="navbar-left border border-danger d-block text-left col-lg-3 col-md-12 col-sm-12 col-pad">
                    <div className="dashboard-nav d-none d-xl-block d-lg-block">
                         <SideNav/>
                        
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-pad right-menu">
                    <div className="content-area5">
                        <div className="dashboard-content">
                         <Container/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}
export default UserBoard;