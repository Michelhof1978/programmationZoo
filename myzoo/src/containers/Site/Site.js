//Site.js va gérer le site
import React, { Component } from 'react';
import Navbar from '../../components/UI/NavBar/NavBar';

class  Site extends Component{//Composant STATEFUL qui va être gérer par App.js
    render() {
        return (
            <>
                Site des animaux
                <Navbar/>
            </>
        );//EN JSX
    }
}

export default Site;