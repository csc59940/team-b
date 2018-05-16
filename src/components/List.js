import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as firebase from 'firebase';



class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prev:[]
		}

	}
	
   

	render() {
		return (
			<ul>
				{this.props.prev.map((item,index)=>{
					return (
						<li key={index}>{item.ingredients}</li>

					)
				})}
			</ul>
		)
	}
}


export default List;