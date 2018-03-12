import React, { Component } from 'react';
import { render } from 'react-dom';
// import * as classService from '../services/classes';
import { getAllBlogs } from "../services/blogs";

class GoodbyeWorld extends Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // classService.all()
        // .then(console.log);
        // console.log("--goodbye--", "Mounting");// getAllBlogs()
        // .then((result) => {
        //     console.log(result);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
        
    }

    render() {
        return <h1>Goodbye World!</h1>;
    }
}

export default GoodbyeWorld;