import React, { Component } from 'react';
import TitreH1 from '../../components/UI/NavBar/Titres/TitreH1';
import axios from "axios";

class  Parc extends Component{//Récupération des données et instalation du module AXIOS npm install axios --save

        state = {
            animaux : null
        }

        componentDidMount = () => {//Fonction qui se lancera automatiquement et qui collectera les données
            axios.get('http://localhost/SERVEURzoo/front/animaux')//Requête insymchrome, on récupère les données en format json que l'on a crée sur la partie front du serveurZoo que l on a crée
      
        }
            
    render() {
        return (
            <>
            <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
            <div className='container'>
                Page listant les animaux
            </div>
            </>
        );
    }
}

export default Parc;