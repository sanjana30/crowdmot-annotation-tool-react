import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SignOut extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1>You are successfully logged out!</h1>
                <Link to="/">Go to Home Page!</Link>
            </div>
        )
    }
}
