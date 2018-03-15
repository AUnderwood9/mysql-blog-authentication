import React, { Component } from "react";
import BlogInputs from "../pieces/BlogInputs";
import * as blogService from "../../services/blogs";

class InputContainer extends Component{
    constructor(props){
        super(props);

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
                console.log("title", event.target.value);
                this.setState({title: event.target.value});
            break;
            case "content-input":
                console.log("content", event.target.value);
                this.setState({content: event.target.value});
            break;
            case "tag-input":
                console.log("tag", event.target.value);
                this.setState({tag: event.target.value});
            break;
        }
    }

    handleInputOnBtnClick(event){
        event.preventDefault();
        if(this.state.title.length < 1 || this.state.content.length < 1 || this.state.tag < 1){
            console.log("Invalid input, put something in the input fields!");
        }
        else{
            console.log("Title: ", this.state.title, "Content: ", this.state.content, "Tags: ", this.state.tag);
            let blogObj = {title: this.state.title, content: this.state.content, tag: this.state.tag}
            // fetch(`/api/blogs/`, {
            //     method: 'POST',
            //     body: JSON.stringify(), 
            //     headers: new Headers({
            //       'Content-Type': 'application/json'
            //     })
            // })
            blogService.postBlog(blogObj)
            .catch((err) => {
                res.sendStatus(400);
            });

            this.props.history.push("/");
        }
    }

    render(){
        return <BlogInputs onBlogInputChange={this.onBlogInputChange} btnHandler={this.handleInputOnBtnClick}/>;
    }

}

export default InputContainer