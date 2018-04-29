import React, { Component } from 'react';
import axios from 'axios'
import * as firebase from 'firebase' 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fillIngredients: true,
            ingredients: '',
            number: 5,
            ranking: 1, 
            Data: [],
            foodID:[],
            includeNutrition:'',
            recipeData:[],
            
        };

       



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
    e.preventDefault();
    
    var config ={
    headers: {'X-Mashape-Key': ''},
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
      var numberOfItems = this.state.number;
      var arr = [];
      for(var i=0; i<numberOfItems;i++){
            arr.push(response.data[i].id);
      
      }
      this.setState({
          Data: response.data,
          foodID:arr,
      });
    
    
        console.log(this.state.foodID);
        console.log(this.state.Data);
      }).catch(function (error) {
        console.log(error);
      });


      var config1 ={
        headers: {'X-Mashape-Key': 'gzdtzbN4ozmshjZWkJVE1yakmaLFp1sHRQMjsnRNHdvGkC5BPW'},
        
        
    }
        
        axios.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + this.state.foodID + "/information", config1
        ).then((response) => {
          console.log(response.data);
          console.log(response.data.id);
          this.setState({
              recipeData: response.data,
          });
            console.log('RecipeData is' + this.state.recipeData);
            console.log(this.state.recipeData)
          }).catch(function (error) {
            console.log(error);
          });
     
  }



    
  render() {
       var styles = {
            maxWidth:345,
            margin:10
        };  
    return (
       
      <div >
        <TextField
            floatingLabelText="Ingredients" name="ingredients" floatingLabelText="Your Ingredients" floatingLabelFixed={true} hintText="Choose an ingredient"  onChange={this.handleChange}/>
                
            <FlatButton label="Search" primary={true} onClick={this.handleSubmit}/>
    
        
        <div>
            {this.state.Data.map((data,index)=> 
             <Card key = {index} style ={styles} >
             <CardHeader> {data.title}
               <CardMedia> 
                    <img src = {data.image}/>
                </CardMedia>
                <CardText >
                  <ul>
                    <li>{data.id}</li>
                    <li>{data.usedIngredientCount}</li>
                    <li>{data.missedIngredientCount}</li>
                  </ul>
                </CardText>
            </CardHeader>
        </Card>
       )}    
        
        </div>

        
        <div>
            {this.state.recipeData.map((data,index)=> 
                    <ul key ={index}>
                    <li>{data.creditText}</li>           
                  </ul>
       )}    
        </div>
        
        
      </div>
    );
  }
}

export default Food;
