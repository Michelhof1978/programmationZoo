//RECUPERATION DES DONNEES

import React, { Component } from 'react';
import TitreH1 from '../../components/UI/NavBar/Titres/TitreH1';
import axios from "axios";
import nimal from './Animal/Animal';
class  Parc extends Component{//Récupération des données et instalation du module AXIOS npm install axios --save

        state = {
            animaux : null
        }

        componentDidMount = () => {//Fonction qui se lancera automatiquement aprés affichage du composant et qui collectera les données
            axios.get('http://localhost/SERVEURzoo/front/animaux')//Requête asymchrome, on récupère les données en format json que l'on a crée sur la partie front du serveurZoo que l on a crée
               
            .then(reponse => { //Les données récupérées vont maintenant être traitées
                    // console.log(reponse);
                    this.setState({animaux:Object.values(reponse.data)})//Fonction setState qui va permettre de mettre à jour le composant et de mettre à jours la propriété animaux de notre state, on va donc modifier la partie animauxpour y mettre  les données  que l on va récupérer ds reponse.data//sans Object.values , le rendu des données sera sous format object et grâce à Object.values, il retournera un tableau
                })
        }
            
    render() {
        return (
            <>
            <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
            <div className='container'>
                {
                    this.state.animaux &&//Si this.state.animaux est vrai et donc null alors on fait le code ci-dessous
                    this.state.animaux.map(animal =>{//Si c'est vrai, on va parcourir le tableau grâce à map et on va récuperre chacune des lignes du tableau animal
                        return <h1>{animal.id} - {animal.nom}</h1> //on va utiliser les spraid operator pour récupérer toutes les infos de l animal via les props
                    })
                }
            </div>
            </>
        );
    }
}

export default Parc;