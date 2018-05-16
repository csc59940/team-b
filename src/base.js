
import Rebase from 're-base';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCnNq6ZJIy_czx-0d7viiPEZAiUA4K2XBk",
    authDomain: "food-for-thought-59940.firebaseapp.com",
    databaseURL: "https://food-for-thought-59940.firebaseio.com",
    projectId: "food-for-thought-59940",
    storageBucket: "food-for-thought-59940.appspot.com",
    messagingSenderId: "130909874537"
  };

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export default base;



