import React from 'react';
import './App.css';
import Site from './containers/Site/Site';
import {BrowserRouter} from 'react-router-dom';//Composant du système de routage


function App() {
  return (
    <div>
    <Site/>
    </div>
   
  );//On appelle le composant Site
}

export default App;
