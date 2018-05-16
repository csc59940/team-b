/*import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import * as firebase from 'firebase' 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Table,TableBody,TableHeader,TableRow,TableRowColumn,TableHeaderColumn} from 'material-ui/Table';
import index from 'material-ui/FlatButton';
import * as AOS from 'aos';
import Recipe from './Recipe';
import Search from './Search';
import Result from './Result';

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fillIngredients: true,
            ingredients: '',
            number: 5,
            ranking: 1, 
            Data: [],
            foodID:'',
            includeNutrition:'',
            recipeData:'',
            recipeURL:[],
            page:'selectIngredient',
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getIngredientID = this.getIngredientID.bind(this);
    this.getInstructions = this.getInstructions.bind(this);
  }

  componentWillReceiveProps(nextProps){
        if(nextProps.ingredients !== this.state.ingredients) {
          const ingredients = nextProps.ingredients;
          const Data = nextProps.Data;
          const page = 'ingredientSubmitted';
          this.setState({
            ingredients: ingredients,
            Data: Data,
            page: page,
          })
        }
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


getIngredientID(index){
    this.state.foodID = this.state.Data[index[0]].id;
    console.log(this.state.Data[index[0]].id);
   }

getInstructions(e){
  this.props.apiSearchRecipe(this.state.foodID);
}

    
  render() {


    return(
          <Switch>
               <Route exact path='/food' render={ ()=> <Search addIngredients= {this.addIngredients} />} />
               <Route exact path='/food/results' render={ ()=> <Result apiSearchRecipe= {this.props.apiSearchRecipe} addIngredients= {this.props.addIngredients} ingredients= {this.state.ingredients} Data= {this.state.currentResults} page= {this.state.searchStatus}/>} />
               <Route exact path='/food/recipe' render={ ()=> <Recipe Data= {this.state.currentRecipeResults} />} />
             </Switch>
          )

  }
}

export default Food;
*/