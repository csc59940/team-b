import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import * as firebase from 'firebase' 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Table,TableBody,TableHeader,TableRow,TableRowColumn,TableHeaderColumn} from 'material-ui/Table';
import index from 'material-ui/FlatButton';
import * as AOS from 'aos';
import Recipe from './Recipe.js';
import avocado from '../images/avocado.jpg';
import '../css/Home.css';

class Search extends Component {

	constructor(props){
		super(props);
		this.state = {
			fillIngredients: true,
            ingredients: '',
            number: 5,
            ranking: 1, 
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleChange(e){
	    const target = e.target;
	    const name = target.name;
	    const value = target.value;
	    this.setState({
	      [name]: value
	    });
	}
	    


	handleSubmit(e){
	    this.props.addIngredients(this.state);
	  }


	render(){
	
        
		return (    
	      <div >
			  <img src={avocado} className ='secondBackground' alt="Avocado" data-aos="flip-up"/>
	        <TextField
				style={{marginLeft:'600px'}}
				data-aos="fade-up"
				floatingLabelText="Ingredients" 
				name="ingredients" 
				floatingLabelText="Your Ingredients" 
				floatingLabelFixed={true} 
				hintText="List Your Ingredients"  
				onChange={this.handleChange}/>
	                
	            <Link to='/result' className='text-primary'> <FlatButton label="Search" primary={true} onClick={this.handleSubmit}/> </Link>
	      
	      </div>
	      );
	}

}



export default Search