import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import LoggedInDemoPage from './LoggedInDemoPage.jsx';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class UserHomePage extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn = true;
        if(token == null){
            loggedIn=false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/" />
        }
        return (
            <LoggedInDemoPage />
        )
    }
}
