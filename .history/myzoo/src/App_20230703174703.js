import React from 'react';
import './App.css';
import Site from './containers/Site/Site';
import {BrowserRouter} from 'react-router-dom';//Composant qui va englober tout le site avec le système de routage


function App() {
  return (
    <div>
    <BrowserRouter>

    </BrowserRouter>
    
    </div>
   
  );//On appelle le composant Site
}

export default App;
