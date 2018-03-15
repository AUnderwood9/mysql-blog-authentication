import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';

import WelcomePage from "./pages/Home";
import BlogListing from "./pages/BlogListing";
import BlogInfo from "./pieces/BlogInfo";
import ToolBar from './pieces/ToolBar';

import Global from "./index.scss";

class Navigation extends Component {

    render() {
        return (
            <Router>
                <div className="container-fluid h-100">
                    <div className="row">
                            <div className={`col-2 py-2 d-flex align-items-center justify-content-center mt-5 fixed-top`}>
                                <ToolBar/>
                            </div>
                        {/* <div className="col-sm-6 invisible col-2">hidden spacer</div> */}
                        <div className="col-10 offset-2 py-2">
                            <Switch>
                                <Route exact path="/" component={BlogListing} />
                                <Route path="/login" component={Login} />
                                <Route path="/logout" component={Logout} />
                                <Route path="/blogs" component={BlogListing} />
                                <PrivateRoute path="/hello" component={HelloWorld} />
                                <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                                <PrivateRoute exact path="/:id" component={BlogInfo} />
                            </Switch>
                        </div >
                    </div>
                </div>
            </Router>
        )
    }
}

export default Navigation;