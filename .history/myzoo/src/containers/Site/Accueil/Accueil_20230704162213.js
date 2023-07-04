import React, { Component } from "react";
import titreH1 from "../../../components/UI/NavBar/Titre/TitreH1";


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