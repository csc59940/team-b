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
import './Recipe.css';
import stock3 from '../images/stock3.webp';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data:'',
        };
        
        var config ={
            headers: {'X-Mashape-Key': 'INSERT KEY'},
        }
            axios.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + this.props.id + "/information", config
            ).then((response) => {
              console.log(response.data);
              console.log(response.data.id);
              this.setState({
                  Data: response.data,   
              });
              console.log(this.state.Data);
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
            <img src={stock3} className ='homeBackground' alt="Egg" data-aos="fade-up"/>

            <div>
             <Card data-aos="flip-left" style = {styles}>
                <CardMedia>
                    <CardTitle>{this.state.Data.title}</CardTitle>
                    <img src = {this.state.Data.image}/>
                </CardMedia>
                <CardText>
                {this.state.Data.spoonacularSourceUrl} 
                </CardText>
             </Card>
            </div>
        </div>
      );
    
    
      
    
  }
}


export default Recipe;
