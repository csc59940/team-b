import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as firebase from 'firebase';
import {GridList,  GridListTile, GridListTileBar } from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card,CardActions, CardHeader, CardMedia,CardTitle,CardText,CardContent} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prev:[]
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(e) {
		let ingredients = e.target.textContent;
		let data = {
						fillIngredients: true,
            			ingredients: ingredients,
            			number: 5,
            			ranking: 1,
					}
		this.props.apiSearchIngredients(data);
	}

	render() {
		const cardDescription = {
			  width: '320px',
			  height: '320px',
			  padding:'25px',
			  margin:'25px',
			  backgroundColor:'#b3ffd6'
	    };
		const textDescription={
			textAlign:'center',
			fontSize:'25px',
			marginTop:'75px',
			fontFamily:'Sans-serif',
		};


		return (
	
			<GridList cols={3} padding={150}>
                            {
                                this.props.prev.map((data,index) =>{
                                    return (
								<div>
									<Link to='/result' > <Card key ={index} style ={cardDescription} data-aos ="fade-up" onClick={this.handleSubmit}>
										<CardText style ={textDescription} >
										{data.ingredients}
										</CardText> 
									</Card> </Link>
								</div>
                                    );
                                })
                            }
            </GridList>

		)
	}
}


export default List;