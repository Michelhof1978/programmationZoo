import React, { Component } from "react";
import TitreH1 from "../../../components/UI/NavBar/Titres/TitreH1";
import banderole from "../../../assets/images/banderole";
import logo from "../../../assets/images/logo";

class  Accueil extends Component{//Composant STATEFUL qui va être récupérer par Site.js
    render() {
        return (
           <div>
             <TitreH1> Accueil</TitreH1>
           </div>
        );
    }
}

export default Accueil;