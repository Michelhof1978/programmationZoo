//RECUPERATION DES DONNEES

import React, { Component } from 'react';
import TitreH1 from '../../components/UI/NavBar/Titres/TitreH1';
import axios from "axios";
import Animal from './Animal/Animal';
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
              
            <div className="row no-gutters">
                        {
                            this.state.animaux && 
                            this.state.animaux.map(animal => {
                                return (//Ds chacunes des colonnes indiquées ci-dessous, on va afficher le un certains nombre d animaux suivant la taille de l'écran //key={animal.id} doit être déclaré au plus haut de notre map
                                    <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                                        <Animal {...animal}/>
                                    </div>
                                )
                            })
                        }
                    </div>

                {/* <div className='row no-gutters'>
                {
                    this.state.animaux &&//Si this.state.animaux est vrai et donc null alors on fait le code ci-dessous
                    this.state.animaux.map(animal =>{//Si c'est vrai, on va parcourir le tableau grâce à map et on va récuperre chacune des lignes du tableau animal
                        return <Animal {...animal} key={animal.id}/>//On va afficher tous les infos de l animal par Id avec le spread operator(on enverra toutes les propriétés de l object animal à travers les props), si ce n était qu'une seule info à afficher, on aurait fait: animal.id, animal.nom...
                        
                    })
                }
                </div> */}
               
            </div>
            </>
        );
    }
}

export default Parc;