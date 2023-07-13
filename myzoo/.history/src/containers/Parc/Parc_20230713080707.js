//RECUPERATION DES DONNEES

import React, { Component } from 'react';
import TitreH1 from '../../components/UI/NavBar/Titres/TitreH1';
import axios from "axios";
import Animal from './Animal/Animal';

//Récupération des données et instalation du module AXIOS npm install axios --save
class  Parc extends Component{

        state = {
            animaux : null,
            filtreFamille : null,
            filtreContinent : null,
        }

        loadData = () => {
    //Si filtreFamille est vrai, on va récupérer la valeur de filtreFamille et si c'est null, on voudra récupérer la valeur -1
            const famille = this.state.filtreFamille ? this.state.filtreFamille : "-1";
            const continent = this.state.filtreContinent ? this.state.filtreContinent : "-1";
           
            //Requête asymchrome, on récupère les données en format json que l'on a crée sur la partie front du serveurZoo que l on a crée
        axios.get('http://localhost/serveurzoo/front/animaux/$(famille)/$(continent)')//Chargement des data avec axios
//Les données récupérées vont maintenant être traitées
        .then(reponse => { 
    // console.log(reponse);
    this.setState({animaux:Object.values(reponse.data)});//Fonction setState qui va permettre de mettre à jour le composant et de mettre à jours la propriété animaux de notre state, on va donc modifier la partie animauxpour y mettre  les données  que l on va récupérer ds reponse.data//sans Object.values , le rendu des données sera sous format object et grâce à Object.values, il retournera un tableau

})
        
    //catch va permettre d afficher les erreur en détail s'il y en a
        .catch(error => {
             console.log(error);
             })


}   

    //Fonction qui se lancera automatiquement aprés affichage du composant et qui collectera les données
        componentDidMount = () => {
            this.loadData();       
         }

//si les valeurs des filtres filtreFamille ou filtreContinent ont changé, et si c'est le cas, elle déclenche le chargement de nouvelles données en appelant la méthode loadData. Cela permet de mettre à jour les données affichées en fonction des filtres sélectionnés.
         componentDidUpdate = (oldProps, oldState) => {
            if (oldState.filtreFamille !== this.state.filtreFamille || oldState.filtreContinent !== this.state.filtreContinent)
            this.loadData();
         }

        // CLIQUE SUR BOUTON FILTRE URL
        //GRACE A CES DISTINCTIONS CI DESSOUS ENTRE FAMILLE ET CONTINENT , On est capable d avoir la distinction vers lequel on a cliqué sur le bouton et en même temps à quoi il correspond si c'est l'id famille ou l id continent  
//Fonction qui devra SE LANCER SUR LE COMPOSANT ANIMAL lors du clic (spread operator ...Animal) et qui devra récupérer l'id du continent ET AINSI L AFFICHER DS LA CONSOLE
      //Lors du clic sur l un des boutons famille ou continnent, on modifiera la propriété filtreFamille ou filtreContinent de notre state qui a été initialisé à nul ci-dessus.
        handleSelectionFamille = (idFamille) => {
            console.log(`Demande de ${idFamille}`);
            this.setState({filtreFamille:idFamille});//On va modifier la propriété filtreFamille de notre state et on va lui attribuer l'id de la famille sur laquelle on a cliqué
            
        }

        handleSelectionContinent = (idContinent) => {
            console.log (`Demande de ${idContinent}`);
            this.setState({filtreContinent:idContinent});//On va modifier la propriété filtreContinent de notre state et on va lui attribuer l'id du continent sur lequel on a cliqué
            
            //FIN CLIQUE SUR BOUTON FILTRE URL
        }
             render() 
        
           
              {
                
        return (
            <>
            <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>

            {
                this.setState.
            }
            <div className='container-fluid'>
              
            <div className="row no-gutters">
                        {
                            this.state.animaux && //Si this.state.animaux est vrai et donc null alors on fait le code ci-dessous
                            this.state.animaux.map(animal => (//Si c'est vrai, on va parcourir le tableau grâce à map et on va récuperre chacune des lignes du tableau animal
                 //Ds chacunes des colonnes indiquées ci-dessous, on va afficher le un certains nombre d animaux suivant la taille de l'écran //key={animal.id} doit être déclaré au plus haut de notre map car sinon, ça va générer des erreurs
                              
                    //On va afficher tous les infos de l animal par Id avec le spread operator(on enverra toutes les propriétés de l object animal à travers les props), si ce n était qu'une seule info à afficher, on aurait fait: animal.id, animal.nom...
                                    <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                                    
                            {/* //ON ENVOIE TOUTES LES PROPRIETES DE L OBJET ANIMAL A TRAVERS LES PROPS GRACE AU SPREAD OPERATOR */}
                                        <Animal {...animal} 

                                //CLIQUE SUR BOUTON FILTRE URL ID
                                         //On va créer une propriété filtreFamille et va transférer la référence de l objet en lui même avec THIS
                                        filtreFamille={this.handleSelectionFamille}
                                        filtreContinent={this.handleSelectionContinent}
                                        //On va pouvoir utiliser ds ANIMAL la référence de ce filtre 
                                //FIN CLIQUE SUR BOUTON FILTRE URL ID
                                        

                                        />  

                                        
                                    </div>
                                ))
                            }
                        
                    </div>

            </div>
            </>
        );
    }
}

export default Parc;