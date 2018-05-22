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

    return (    
        <div >
            <Card style = {styles}>
                <CardMedia>
                    <CardTitle>{this.state.Data.title}</CardTitle>
                    <img src = {this.state.Data.image}/>
                </CardMedia>
                <CardText>
                {this.state.Data.spoonacularSourceUrl}
                </CardText>
            </Card>
        </div>
      );
    
    
   }   
    



}


export default Recipe;
