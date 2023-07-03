import React from 'react';
import './App.css';
import Site from './containers/Site/Site';
import {BrowserRouter} from 'react-router-dom';//Composan(t)


function App() {
  return (
    <div>
    <Site/>
    </div>
   
  );//On appelle le composant Site
}

export default App;
