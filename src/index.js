import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCCUKHvCOT1b86q-XEvudyqIFfaAUJ2il4",
  authDomain: "los-sprinters.firebaseapp.com",
  projectId: "los-sprinters",
  storageBucket: "los-sprinters.appspot.com",
  messagingSenderId: "750115728977",
  appId: "1:750115728977:web:888fb2d1e812d123c39270",
  measurementId: "G-TJNN1T1BSM"
};

if(!firebase.apps[0]){
  firebase.initializeApp(firebaseConfig);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

