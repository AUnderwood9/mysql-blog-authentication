import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    // console.log("--auth btn", isLoggedIn());
    if (isLoggedIn()) {
        return <Link className="btn btn-outline-warning ml-2" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn btn-outline-primary ml-2" to="/login">Login</Link>;
    }
};

export default AuthButton;