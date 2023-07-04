import React, { Component } from "react";
import TitreH1 from "../../../components/UI/NavBar/Titres/TitreH1";
import banderole from "../../../assets/images/banderole.png";
import logo from "../../../assets/images/logo.png";

class  Accueil extends Component{//Composant STATEFUL qui va être récupérer par Site.js
    render() {
        return (
           <div>
           <img src={banderole} alt="banderole" className="img-fluid"/>
             <TitreH1> Accueil</TitreH1>

             <div className="container">
             <p></p>
            
             </div>
           </div>
        );
    }
}

export default Accueil;