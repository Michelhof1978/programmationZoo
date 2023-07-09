//AFFICHAGE DES ANIMAUX GRACE AUX DONNEES RECUPEREES DS PARC.JS
import React from "react";
import Bouton from "../../../../components/UI/Bouton/Bouton";

const Animal = (props) => (
    <>
        <div className="card mb-3">

        {/* Affichage de l'Id et du nom de l animal en h3 */}
            <h3 className="card-header">{props.id} - {props.nom}</h3>

         {/* Description de l animal */}
            <div className="card-body">
                <div className="card-text">{props.description}</div>
            </div>

            <div className="text-center" style={{"height": "100px"}} >
                <img src={props.image} alt={props.nom} className="img-fluid h-100"/>
            </div>

            {/* La méthode toUpperCase() est une fonction JavaScript qui permet de convertir une
             chaîne de caractères en majuscules. 
             Récupération des propriétés de chaque animal */}
            <div className="card-body">
            {/* Composant Bouton qui pourra gérer les événements */}
                <h3>Famille : <Bouton typeBtn="btn-primary">{props.famille.libelleFamille.toUpperCase()}</Bouton></h3>
                <div>{props.famille.descriptionFamille}</div>
            </div>
            <div className="card-body">
                <h3>Continents : </h3>
                {
                    props.continents.map(continent => {//map = parcourir un tableau et récupérer tous les continents et les retourner un à un
                        let colorBtn = "";
                        switch(continent.idContinent){//Suivant l'id du continent que l on va parcourir, on va lui attribuer une couleur
                            case "1" : colorBtn="btn-primary";//Pour les 5 continents, on va lui attribuer une couleur
                            break;
                            case "2" : colorBtn="btn-danger";
                            break;
                            case "3" : colorBtn="btn-warning";
                            break;
                            case "4" : colorBtn="btn-success";
                            break;
                            case "5" : colorBtn="btn-info";
                            break;
                            default : colorBtn = "btn-secondary";//Pour un continent qui n'a pas de couleur attribué, on lui attribue la couleur par défaut
                        }
                        //On récupére ci-dessus tous les continents et on les return sous forme de bouton, ainsi tous les continents qui ont été crée sur le serveur seront affichés sous forme de bouton avec des couleurs différentes grâce au switch
                        return <Bouton typeBtn={colorBtn} css="m-1" key={continent.idContinent}>{continent.libelleContinent}</Bouton>
                    })//Pour la propriété Css, ça ne sera pas className car c'est une propriété spécifique à React, on va donc mettre css car nous avons défini la propriété cssn ds le composant Bouton
                }
            </div> 
        </div>
    </>
);

export default Animal;