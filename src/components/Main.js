import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Food from './Food';
import Home from './Home';
import List from './List';
import axios from 'axios'
import * as firebase from 'firebase' 


class Main extends Component {

	constructor(props) {
        super(props);
        this.state = {
           listOfIngredients: [],
            
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addIngredients = this.addIngredients.bind(this);
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
	    e.preventDefault();
	    
	    var config ={
	    headers: {'X-Mashape-Key': 'sb7yRE1EkumshkKQaBfg6WrQFbsxp1U1JpCjsnuXQjzsuDMDaH'},
	    params: {
	        fillIngredients: this.state.fillIngredients,
	        ingredients: this.state.ingredients,
	        number: this.state.number,
	        ranking: this.state.ranking
	      }
	}
	    
	    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients", config
	    ).then((response) => {
	      console.log(response.data);
	      console.log(response.data.id);
	      this.setState({
	          Data: response.data,
	    
	      });
	        
	      }).catch(function (error) {
	        console.log(error);
	      });
	    
	        
	    
	    
	  }

	  addIngredients(ingredient) {
	  	const listOfIngredients = this.state.listOfIngredients.concat(ingredient);
	  	this.setState({listOfIngredients: listOfIngredients});
	  }

	render() {
		return (
			<Switch>
				<Route exact path='/' render={ ()=> <Home addIngredients= {this.addIngredients} />} />
				<Route exact path='/food' render={ ()=> <Food />} />
				<Route exact path='/list' render={ ()=> <List />} />
			</Switch>
		)
	}
}



export default Main;