import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function BlogView(props){
    
    const pattern = /<[a-z][\s\S]*>/i;
    let expression = new RegExp(pattern);

    let contentElement = expression.test(props.blogContent) ? <div dangerouslySetInnerHTML={{__html: props.blogContent}} /> : <p className="blog-content">{props.blogContent}</p>;
    console.log("initial", props.blogContent)
    console.log("content", contentElement);
    console.log("Expression", expression.test(props.blogContent));
    
    return(
        <div className="border-bottom border-secondary">
                <h3 className="title">{props.title}</h3>
                {/* <p className="blog-content">{props.blogContent}</p> */}
                {contentElement}
                <h6 className="time-stmap">{props.timeStamp}</h6>
        </ div>
    );
}

export default BlogView;