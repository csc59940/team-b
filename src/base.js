
import Rebase from 're-base';
import firebase from 'firebase';
import config from './config/firebaseInfo';

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export default base;



