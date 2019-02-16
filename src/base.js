
import Rebase from 're-base';
import firebase from 'firebase';
import firebaseInfo from '/config/firebaseInfo';

const config = firebaseInfo.config;
const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export default base;



