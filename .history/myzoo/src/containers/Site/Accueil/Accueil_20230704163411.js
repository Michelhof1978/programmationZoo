import React, { Component } from "react";
import itreH1 from "../../../components/UI/NavBar/Titres/TitreH1";


class  Accueil extends Component{//Composant STATEFUL qui va être récupérer par Site.js
    render() {
        return (
           <div>
             <titreH1> Accueil</titreH1>
           </div>
        );
    }
}

export default Accueil;