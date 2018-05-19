import React, { Component } from 'react';
import axios from 'axios';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Table,TableBody,TableHeader,TableRow,TableRowColumn,TableHeaderColumn} from 'material-ui/Table';
import index from 'material-ui/FlatButton';
import * as AOS from 'aos';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';


class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data:'',
        };
        console.log(this.state.Data.spoonacularSourceUrl);
    }


    componentWillReceiveProps(nextProps){
      if(nextProps.Data !== this.state.Data){
        const Data = nextProps.Data;
        this.setState({
          Data: Data
        });
      }
    }
    

  
  render() {
       var styles = {
            maxWidth:345,
            margin:10
        };  

    return ( 
        
        <div data-aos ="fade-up">
            <Card data-aos ="fade-up">
                <CardMedia>
                    <CardTitle>{this.state.Data.title}</CardTitle>
                    <img src = {this.state.Data.image}/>
                </CardMedia>
                <CardText>
                    <h1>Ready in {this.state.Data.readyInMinutes} Minutes</h1>
                    <p>{this.state.Data.instructions}</p>


                   <a target="_blank" href={this.state.Data.spoonacularSourceUrl}>
                     <FlatButton label="Link" />
                   </a>
               
                </CardText>
            </Card>
        </div>
      );
    
    
   }   
    



}


export default Recipe;
