//Site.js va gérer le site
import React, { Component } from 'react';
import Navbar from '../../components/UI/NavBar/NavBar';
import {Switch, Route} from "react-router-dom";

class  Site extends Component{//Composant STATEFUL qui va être gérer par App.js
    render() {
        return (
            <>
              <Navbar/>
                Site des animaux
              
            </>
        );//EN JSX
    }
}

export default Site;

