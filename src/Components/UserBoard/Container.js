import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard'
import Messages from './Messages/Messages'
import MyProfile from './My-Profile/My-Profile'
import { Switch, Route, Redirect } from 'react-router-dom'
import HealthReport from './HealthReport/HealthReport';
class Container extends Component {

    render() {
        return (<React.Fragment>
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/dashboard" />
                )} />
                <Route path="/dashboard"><Dashboard /></Route>
                <Route path="/healthreport"><HealthReport /></Route>
                <Route path="/messages"><Messages /></Route>
                <Route path="/bookings"><Messages /></Route>
                <Route path="/my-invoices"><Messages /></Route>
                <Route path="/favorite-listings1"><Messages /></Route>
                <Route path="/add-listing"><Messages /></Route>
                <Route path="/my-profile"><MyProfile /></Route>
            </Switch>
        </React.Fragment>
        );
    }
}
export default Container;