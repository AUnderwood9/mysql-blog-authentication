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
                <div className="jumbotron row">
                    <div className="jumbotron">
                        <div className={`col-2 ${Global.fixed}`}>
                            <ToolBar/>
                        </div>
                    </div>
                
                    <div className="col-10">
                        <Switch>
                            <Route exact path="/" component={WelcomePage} />
                            <Route path="/login" component={Login} />
                            <Route path="/logout" component={Logout} />
                            <PrivateRoute path="/blogs" component={BlogListing} />
                            <PrivateRoute path="/:id" component={BlogInfo} />
                            <PrivateRoute path="/hello" component={HelloWorld} />
                            <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                        </Switch>
                    </div >
                </div>
            </Router>
        )
    }
}

export default Navigation;