import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Blog from "../pieces/BlogView";
import BlogInputs from "../pieces/BlogInputs";
import { getAllBlogs, postBlog } from "../../services/blogs";
import { Route } from "react-router-dom";
// import globalStyle from "../index.scss";
import homeStyle from "./Home.scss";

class BlogListing extends Component{
    constructor(props){
        super(props)

        this.state = { blogList: [],
            title: "",
            content: "",
            tag: "" };

        this.onBlogInputChange = this.onBlogInputChange.bind(this);
        this.handleInputOnBtnClick = this.handleInputOnBtnClick.bind(this);
    }

    onBlogInputChange(event){
        // console.log(event.target.id);
        switch(event.target.id){
            case "title-input":
                // console.log("title", event.target.value);
                this.setState({title: event.target.value});
            break;
            case "content-input":
                // console.log("content", event.target.value);
                this.setState({content: event.target.value});
            break;
            case "tag-input":
                // console.log("tag", event.target.value);
                this.setState({tag: event.target.value});
            break;
        }
    }

    handleInputOnBtnClick(event){
        // event.preventDefault();
        if(this.state.title.length < 1 || this.state.content.length < 1 || this.state.tag < 1){
            console.log("Invalid input, put something in the input fields!");
        }
        else{
            console.log("Title: ", this.state.title, "Content: ", this.state.content, "Tags: ", this.state.tag);

            let blogToPost = {title: this.state.title, content: this.state.content, tag: this.state.tag};
            postBlog(blogToPost);
            console.log("Done");
            // this.props.history.push(`/blogs`);
        }

        
    }


    componentDidMount(){
        console.log("mounting");
        getAllBlogs()
        .then((data) => {
            this.setState({blogList: data });
        })
        .catch((err) => {
            console.log(err);
        });

    }

    render(){
        const inputStyle = {
            position: "fixed"
        };

        let blogText;

        return(
            <div className={`row ${homeStyle.homeComponent}`}>
                <section id="blog-list" className="col-6">
                        {
                            this.state.blogList.map((item,index) => {
                                // console.log(item.title, item.content, item._created);
                                if(item.content.length > 240 && typeof item.content === 'string'){
                                    // truncate text if it is too long
                                    blogText= item.content.slice(0,240).trim() + " ...";
                                }
                                else{
                                    blogText = item.content;
                                }
                                
                                return (
                                    <div key={`blog-listing-${index}`} className="card mt-4">
                                        <Blog blogContent={blogText} title={item.title} timeStamp={item._created}/>
                                        <Link className="btn btn-sm btn-outline-secondary" to={`/${item.id}`}>Get my Info</Link>
                                    </div>
                                );
                            })
                        }
                </section>

                <Route
                path="/newBlog"
                render={(routeProps) => (
                    <BlogInputs {...routeProps} onBlogInputChange={this.onBlogInputChange} btnHandler={this.handleInputOnBtnClick} />
                )}
                />

                {/* <section id="inputs" className="col-6"> 
                        <Route
                        path="/newBlog"
                        render={(routeProps) => (
                            <BlogInputs {...routeProps} onBlogInputChange={this.onBlogInputChange} btnHandler={this.handleInputOnBtnClick} />
                        )}
                        />
                        <BlogInputs onBlogInputChange={this.onBlogInputChange} btnHandler={this.handleInputOnBtnClick}/>
                </section> */}
            </div>
        );
    }

}

export default BlogListing;