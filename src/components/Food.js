import React, { Component } from 'react';
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
    headers: {'X-Mashape-Key': 'INSERT KEY'},
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
      console.log(response.data[0].id);
      console.log(response.id);
      this.setState({
          Data: response.data,
          page: 'ingredientSubmitted',
         
      });

        console.log(this.state.Data);
      }).catch(function (error) {
        console.log(error);
      });


     
  }
getIngredientID(index){
    this.state.foodID = this.state.Data[index[0]].id;
    console.log(this.state.Data[index[0]].id);
   }
getInstructions(e){
  e.preventDefault();
  this.setState({
    page:'done',
  })
}

    
  render() {
       var styles = {
            maxWidth:345,
            margin:10
        };  

        if(this.state.page ==='selectIngredient'){
    return (    
      <div >
        <TextField
            floatingLabelText="Ingredients" name="ingredients" floatingLabelText="Your Ingredients" floatingLabelFixed={true} hintText="Choose an ingredient"  onChange={this.handleChange}/>
                
            <FlatButton label="Search" primary={true} onClick={this.handleSubmit}/>
        
      </div>
      );
    }
    else if (this.state.page === 'ingredientSubmitted'){
      return(
          <div data-aos = "fade-up">
            <Table  onRowSelection = {this.getIngredientID}>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Recipe Title</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody deselectOnClickaway={false}>
                {this.state.Data.map((data,index)=>
                  <TableRow key = {index} value = {data.id}>
                  <TableRowColumn>{data.title} </TableRowColumn>
                  
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <FlatButton data-aos = "fade-up" primary ={true} onClick={this.getInstructions}
             label="View Instructions!"></FlatButton>
          </div>

      )
    }
    else if (this.state.page ==='done'){
      return(
        <Recipe id ={this.state.foodID} />
      )
    }
  }
}

export default Food;
