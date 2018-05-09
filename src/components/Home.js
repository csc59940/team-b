import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';



class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			fillIngredients: true,
            ingredients: '',
            number: 5,
            ranking: 1, 
            Data: [],
            foodID:939682,
            includeNutrition:'',
            recipeData:[],
		}

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

	handleSubmit(e) {
		e.preventDefault();
		this.props.addIngredients(this.state);
	}

	render() {
		return (
			<div className= "mh-100 homepage d-flex flex-column">
				<img src="/img/brooke-lark-609905-unsplash.jpg" alt="" className="homeBackground" />
				<div className="row ">
				<div className="col-md-6 align-items-start justify-content-start">
			 		<h1 className="text-danger mt-3 ml-3 display-1"> Hey, </h1>
			 		<h3 className="text-danger ml-5 display-3"> What's in your fridge? </h3>
				</div>
				<div className="col-md-6 justify-content-end" id="userIngredient">
					<form className="align-items-end">
						<textarea className="form-control w-75 mt-5"  rows="10" type="text" name="ingredients" onChange={this.handleChange} placeholder="Enter ingredients..."></textarea>
						<Link to={"/list"} className="text-white"> <button type="submit" id="previousList" className="btn btn-dark btn-lg align-items-end mt-3 ml-5" role="button">  Previous List  </button> </Link>
						<Link to={"/food"} className="text-white"> <button type="submit" id="findRecipes" className="btn btn-success btn-lg align-items-end mt-3 ml-5" onClick={this.handleSubmit} role="button">  Find recipes  </button> </Link>
					</form>
				</div>
				</div>
			</div>
		)
	}
}


export default Home;