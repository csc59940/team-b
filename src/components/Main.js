import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Food from './Food';
import Home from './Home';
import List from './List';


class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' render={ ()=> <Home />} />
				<Route exact path='/food' render={ ()=> <Food />} />
				<Route exact path='/list' render={ ()=> <List />} />
			</Switch>
		)
	}
}



export default Main;