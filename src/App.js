import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Food from './components/Food';

class App extends Component {
    
    
  render() {
    return (
      <div >
       
         <MuiThemeProvider>
         <Food/>
   
        
         </MuiThemeProvider>
      </div>
        
        
       
    );
  }
}

export default App;
