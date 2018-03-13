import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import WelcomePage from "./pages/Home";
import BlogListing from "./pages/BlogListing";
import BlogInfo from "./pieces/BlogInfo";

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <div className="btn-toolbar" role="group">
                        <Link to="/goodbye" className="btn btn-outline-secondary ml-2">Goodbye</Link>
                        <Link to="/hello" className="btn btn-outline-secondary ml-2">Hello</Link>
                        <Link to="/blogs" className="btn btn-outline-secondary">View Blogs</Link>
                        <AuthButton />
                    </div>
                    <Switch>
                        <Route exact path="/" component={WelcomePage} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/blogs" component={BlogListing} />
                        <PrivateRoute path="/:id" component={BlogInfo} />
                        <PrivateRoute path="/hello" component={HelloWorld} />
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;