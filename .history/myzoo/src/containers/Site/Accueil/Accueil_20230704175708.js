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
             <p>
             Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
             Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
              ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre
               cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié
             </p>

             <p>
             Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
             Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
              ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre
               cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié
             </p>
            <div className="row no-gutters align-items-center">
                <div className="col-12 col-md">

                </div>

            </div>
             </div>
           </div>
        );
    }
}

export default Accueil;