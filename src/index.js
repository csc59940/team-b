import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyCnNq6ZJIy_czx-0d7viiPEZAiUA4K2XBk",
    authDomain: "food-for-thought-59940.firebaseapp.com",
    databaseURL: "https://food-for-thought-59940.firebaseio.com",
    projectId: "food-for-thought-59940",
    storageBucket: "food-for-thought-59940.appspot.com",
    messagingSenderId: "130909874537"
  };
  firebase.initializeApp(config);



ReactDOM.render((
	<BrowserRouter >
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
	</BrowserRouter>
	), document.getElementById('root'));
registerServiceWorker();
