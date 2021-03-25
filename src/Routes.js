import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './HomePage.js';
import VideoCall from './VideoCall.js'
import LinkPage from './LinkPage';
import WebChat from './WebChat.js'
import Games from './Games.js';
import CallDad from './CallDad.js';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/videocall' component={VideoCall} />
				<Route path='/calldad' component={CallDad} />
				<Route path='/webchat' component={WebChat} />
				<Route path='/games' component={Games} />
				<Route path='/linkpage' component={LinkPage} />

			</Switch>
		</BrowserRouter>
	);
};

export default Routes;