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
import noodles from '../images/noodles.webp';
import '../css/Home.css';

class Result extends Component {

	constructor(props) {
		super(props);
		this.state = {
			Data: [],
			foodId: '',
		}

		this.getIngredientID = this.getIngredientID.bind(this);
    	this.getInstructions = this.getInstructions.bind(this);
	}

	getIngredientID(index){
    this.state.foodID = this.state.Data[index[0]].id;
   }

	getInstructions(e){
	  this.props.apiSearchRecipe(this.state.foodID);
	}

	componentWillReceiveProps(nextProps){
        if(nextProps.Data !== this.state.Data) {
          const Data = nextProps.Data;
          this.setState({
            Data: Data
          })
        }
  	}
	render() {
		var styles = {
            maxWidth:345,
            margin:10
        };  
	    return (
	          <div data-aos = "fade-up">

	            <Table  onRowSelection = {this.getIngredientID}>
	              <TableHeader>
								<TableRow>
	                  <TableHeaderColumn>Recipe Title</TableHeaderColumn>
										<TableHeaderColumn>Image</TableHeaderColumn>
										<TableHeaderColumn>Likes</TableHeaderColumn>
										<TableHeaderColumn>Number of Ingredients You Have</TableHeaderColumn>

	                </TableRow>
	              </TableHeader>

	              <TableBody deselectOnClickaway={false}>
	                {this.state.Data.map((data,index)=>
	                  <TableRow key = {index} value = {data.id}>
	                  <TableRowColumn>{data.title} </TableRowColumn>
										<TableRowColumn><img src ={data.image}/> </TableRowColumn>
	                  <TableRowColumn>{data.likes} </TableRowColumn>
	                  <TableRowColumn>{data.missedIngredientCount} </TableRowColumn>

	                  
	                  </TableRow>
	                )}
	              </TableBody>
	            </Table>
	            <Link to="/recipe" className= "text-primary"> <FlatButton data-aos = "fade-up" primary ={true} onClick={this.getInstructions}
	             label="View Instructions!"></FlatButton> </Link>
	          </div>

 		);
	}


}


export default Result;