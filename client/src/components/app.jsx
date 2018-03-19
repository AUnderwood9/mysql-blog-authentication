import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import Contact from "./pieces/contact";

// import logo from "../../resources/img/gusta.svg";

import WelcomePage from "./pages/Home";
import BlogListing from "./pages/BlogListing";
import BlogInfo from "./pieces/BlogInfo";
import ToolBar from './pieces/ToolBar';
import InputPage from "./pages/InputContainer";
import Donate from "./pieces/Donate";

import Global from "./index.scss";
import FormStyle from "./checkoutStyle.scss";

function importAll (r) {
    // r.keys().forEach(r);
    return r.keys().map((element) => {
        return element.replace('./', '../../resources/img/');
    });
    // console.log(r.keys());
  }

const images = importAll(require.context('../../resources/img/', false, /\.(png|jpe?g|svg|gif)$/));

const logo = images[0];

console.log(images);

class Navigation extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <div className={`container-fluid`}>
                
                    <div className="row">
                            <div className={`jumbotron col-2 py-2 align-items-center justify-content-center fixed-top ${Global.fixedCol}`}>
                                <div className={`${Global.logo} mt-5 mb-5`}>
                                    {/* <span className="imgPlaceholder col-2"></span> */}
                                    <img src={logo} className={`ml-4 ${Global.logoPlaceholder}`}/>
                                    <h1>The Dankening</h1>
                                    <h3>Say What you mean!</h3>
                                </div>
    
                                <ToolBar/>
                            </div>
                        {/* <div className="col-sm-6 invisible col-2">hidden spacer</div> */}
                        <div className={`col-10 offset-2 py-2  ${Global.backGroundTheme}`}>
                            <Switch>
                                <Route exact path="/" component={BlogListing} />    
                                <Route path="/login" component={Login} />
                                <Route path="/logout" component={Logout} />
                                <Route path="/blogs" component={BlogListing} />
                                {/* <Route path="/contact" component={Contact} /> */}
                                <Route path="/donate" component={Donate} />
                                <Route path="/contact" component={Contact} />
                                <PrivateRoute path="/newBlog" component={InputPage} />
                                <PrivateRoute path="/hello" component={HelloWorld} />
                                <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                                <PrivateRoute path="/:id" component={BlogInfo}/>
                            </Switch>
                        </div >
                    </div>
                </div>
            </Router>
        )
    }
}

export default Navigation;