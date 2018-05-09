import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';


class Header extends Component {
	render() {
		return (
			<nav className= "navbar navbar-expand-lg navbar-light" id="navHeader">
						
				<NavLink to= {"/"} className= "nav-link navbar-brand " id="brand" href= "#">
					<span className="text-danger display-4"> Food For Thought </span>
				</NavLink>
			</nav>
		)
	}
}


export default Header;