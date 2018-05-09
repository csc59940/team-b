

import Rebase from 're-base';
import firebase from 'firebase';


 var config = {
    apiKey: "AIzaSyDyZNYlbHCVRWQvjhhphSUNtDdpviHhwD4",
    authDomain: "food-for-thought-project.firebaseapp.com",
    databaseURL: "https://food-for-thought-project.firebaseio.com",
    projectId: "food-for-thought-project",
    storageBucket: "food-for-thought-project.appspot.com",
    messagingSenderId: "1048244421297"
  };
  firebase.initializeApp(config);


const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export default base;

