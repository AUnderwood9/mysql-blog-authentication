import React from "react";
import { Link } from "react-router-dom";
import AuthButton from '../auth/authButton';

function ToolBar(props){
    console.log("Tool-bar Props", props);

    return(
        <div className={`btn-group-vertical ${props.styling}`} role="group">
            <AuthButton />
            <Link to="/goodbye" className="btn btn-outline-secondary">Goodbye</Link>
            <Link to="/hello" className="btn btn-outline-secondary">Hello</Link>
            <Link to="/blogs" className="btn btn-outline-secondary">View Blogs</Link>
            <Link to="/newBlog" className="btn btn-outline-info">Add a new Blog!</Link>
            <Link to="/donate" className="btn btn-outline-secondary">Donate to the cause!</Link>
            <Link to="/contact" className="btn btn-outline-secondary">Tell us what you think!</Link>
            
        </div>
    );
}

export default ToolBar;