import React, { Component, Fragment } from "react";
import Blog from "./BlogView";
import EditBox from "./BlogEditBox";
import * as blogService from "../../services/blogs";

class BlogInfo extends Component{
    constructor(props){
        super(props);

        this.state = ({ blogInfo: {}, editing: false, currentEdit: "" });

        this.onEditSubmitBtnClick = this.onEditSubmitBtnClick.bind(this);
        this.onTextEdit = this.onTextEdit.bind(this);
    }

    onBlogBtnClick(event){
        // fetch(`/api/blogs/${this.props.match.params.id}`, {
        //     method: 'DELETE'
        // });
        blogService.deleteBlog(this.props.match.params.id)
        .then((result) => {
            this.props.history.push(`/blogs`);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
        this.props.history.push(`/blogs`);
    }

    componentDidMount(){
        blogService.getBlog(this.props.match.params.id)
        .then((blogInfo) => {
            this.setState({blogInfo});
        })
        .catch((err) => {
            console.log(err);
        })
    }

    onEditBtnClick(event){
        console.log(event.target);
        this.setState({editing: true});
    }

    onTextEdit(event){
        console.log(event);
        this.setState({currentEdit: event.target.value});
    }

    onEditSubmitBtnClick(event){
        let idToSend = this.props.match.params.id;
        let currentEdit = this.state.currentEdit;

        if(currentEdit.length > 1){
            blogService.updateBlog(idToSend, currentEdit)
            .then((data) => {
                // this.setState({editing: false});
                this.props.history.push(`/blogs`);
            })
            .catch((err) => {
                console.log(err);
            });

        }

        console.log("state, ", this.state.currentEdit);
    }

    render(){

        console.log("blog info", this.state);
        
        if(!this.state.editing){
            return(
                <Fragment>
                    <h5 className="info-id">{this.state.blogInfo.id}</h5>
                    <Blog blogContent={this.state.blogInfo.content} title={this.state.blogInfo.title} timeStamp={this.state.blogInfo._created} />
                    <button className="btn btn-sm btn-outline-secondary"
                        onClick={(event) => {this.onEditBtnClick(event)}}
                    >Edit me</button>
                    <button className="btn btn-sm btn-outline-secondary"
                        onClick={(event) => {this.onBlogBtnClick(event)}}
                    >Delete me!</button>
                </Fragment>
                
            );
        }else{
            return(
                <EditBox content={this.state.content} onBtnClick={this.onEditSubmitBtnClick} onTextChange={this.onTextEdit}/>
            );
        }
    }
}

export default BlogInfo;