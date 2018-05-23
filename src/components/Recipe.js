import React, { Component } from 'react';
import axios from 'axios';
import * as firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card,CardActions, CardHeader, CardMedia,CardTitle,CardText,CardContent} from 'material-ui/Card';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Table,TableBody,TableHeader,TableRow,TableRowColumn,TableHeaderColumn} from 'material-ui/Table';
import index from 'material-ui/FlatButton';
import * as AOS from 'aos';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';
import '../css/Recipe.css';
import Typography from 'material-ui/styles/typography';


class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data:'',
        };
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
        
        var picStyle = {
            height: 32,
          };

    return ( 
        
        <div>
           
            <div data-aos ="fade-up">
            <Card data-aos ="fade-up" className="center">
                <CardMedia>
                    <img src = {this.state.Data.image} className="img"/>
                    <CardTitle style={{textAlign:'center'}}><h1>{this.state.Data.title}</h1></CardTitle>
                </CardMedia>
              
                <CardText>
                    <p>{this.state.Data.instructions}</p>
                    <a target="_blank" href={this.state.Data.spoonacularSourceUrl}>
                     <RaisedButton secondary={true} label="Detailed Instructions" style={{marginLeft:'150px'}}/>
                   </a>
                </CardText>
            </Card>
            </div>
        
            <div>
            </div>
        </div>
        
      );
    
    
   }   
    



}


export default Recipe;
