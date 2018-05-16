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
	
componentDidMount(){
	const itemsRef = firebase.database().ref('Ingredients');
	itemsRef.on('child_added',(snapshot)=>{
		console.log(snapshot.val());
		let items = snapshot.val();
		let newState = [];
		for(let item in items){
			newState.push({
				ingredients:item.ingredients	
			})
		}
		this.setState({
			prev:newState
			
		});
		console.log(this.state.prev);
	
	});
}

	render() {
		return (
			<ul>
				{this.state.prev.map((item,index)=>{
					return (
						<li key={index}>{item.ingredients}</li>

					)
				})}
			</ul>
		)
	}
}


export default List;