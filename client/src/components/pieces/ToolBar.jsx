import React from "react";
import { Link } from "react-router-dom";
import AuthButton from '../auth/authButton';

function ToolBar(props){

    return(
        <div className="btn-group-vertical" role="group">
            <Link to="/goodbye" className="btn btn-outline-secondary">Goodbye</Link>
            <Link to="/hello" className="btn btn-outline-secondary">Hello</Link>
            <Link to="/blogs" className="btn btn-outline-secondary">View Blogs</Link>
            <Link to="/newBlog" className="btn btn-outline-info">Add a new Blog!</Link>
            <AuthButton />
        </div>
    );
}

export default ToolBar;