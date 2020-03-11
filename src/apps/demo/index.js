import React from 'react';
import ReactDOM from 'react-dom';
import DemoPageNew from './components/DemoPage/DemoPageNew';
import DemoPage from './components/DemoPage/DemoPage';
import LoggedInDemoPage from './components/DemoPage/LoggedInDemoPage';
import Login from './components/DemoPage/login.js';
import Profile from './components/DemoPage/Profile.js';
import SignOut from './components/DemoPage/SignOut.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserHomePage from './components/DemoPage/UserHomePage.js';
import testDemo from './components/DemoPage/testDemo.js';

ReactDOM.render(
	
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component = {testDemo} />
				<Route exact path="/login" component = {Login} />
				<Route exact path="/user" component = {UserHomePage} />
				<Route exact path="/profile" component = {Profile} />
				<Route exact path="/logout" component = {SignOut} />
				<Route exact path="/test" component = {testDemo} />
			</Switch>
		</BrowserRouter>
	
,
	document.getElementById('root'),
);
