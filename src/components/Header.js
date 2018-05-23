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
				<ul className= "navbar-nav">
					<li className= "nav-item">
						<NavLink to= {"/"} className= "nav-link text-danger" href= "#">Home</NavLink>
					</li>
					<li className= "nav-item">
						<NavLink to= {"/search"} className= "nav-link text-danger" href= "#">New Search</NavLink>
					</li>
					<li className= "nav-item">
						<NavLink to= {"/list"} className= "nav-link text-danger" href= "#">Previous Searches</NavLink>
					</li>
				</ul>
			</nav>
		)
	}
}


export default Header;