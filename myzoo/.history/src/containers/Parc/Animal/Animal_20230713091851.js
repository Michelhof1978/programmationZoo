//AFFICHAGE SOUS FORME DE CARDS DES ANIMAUX GRACE AUX DONNEES RECUPEREES DS PARC.JS
import React from "react";
import Bouton from "../../../components/UI/Bouton/Bouton";

const animal = (props) => (
    <>
        <div className="card mb-3">

        {/* Affichage de l'Id et du nom de l'animal en h3 */}
            <h3 className="card-header">{props.id} - {props.nom}</h3>

         {/* Description de l'animal */}
            <div className="card-body">
                <div className="card-text">{props.description}</div>
            </div>

            <div className="text-center" style={{"height": "100px"}} >
                <img src={props.image} alt={props.nom} className="img-fluid h-100"/>
            </div>

             {/* Récupération des propriétés de chaque animal */}
             <div className="card-body">

                {/* Composant Bouton qui pourra gérer les événements */}
                <h3>Famille : 
                
            {/* CLIQUE SUR BOUTON FILTRE URL props.filtreFamille(props.famille.idFamille)} uniquement*/}
                {props.famille &&( 
                <Bouton typeBtn="btn-dark" 
                        onClick={() =>props.filtreFamille(props.famille.idFamille)}>                {/* Activation de La fonction va se lancer lors du clic et qui permettra l affichage qu on a prévu ds parc.js */}
                        {/* Activation de La fonction va se lancer lors du clic et qui permettra l affichage qu on a prévu ds parc.js */}

                        {props.famille.libelleFamille.toUpperCase()}
                </Bouton>
                )}
            {/* CLIQUE SUR BOUTON FILTRE URL props.filtreFamille(props.famille.idFamille)} uniquement*/}

                </h3>
               
                <div>{props.famille.descriptionFamille}</div>
            </div> 
             <div className="card-body"> 
                <h3>Continents : </h3>
                {
                   
                        const getContinentColor = (idContinent) => {//On initialise à vide la variable colorBtn
                        switch(idContinent){//Suivant l'id du continent que l'on va parcourir, on va lui attribuer une couleur
                            case "1" : 
                            colorBtn="btn-primary";//Pour les 5 continents, on va lui attribuer une couleur
                            break;

                            case "2" : 
                            colorBtn="btn-danger";
                            break;

                            case "3" :
                             colorBtn="btn-warning";
                            break;

                            case "4" :
                             colorBtn="btn-success";
                            break;

                            case "5" : 
                            
                            colorBtn="btn-info";
                            break;

                            default : colorBtn = "btn-secondary";//Si on n'a pas de continent, on lui attribue la couleur secondaire
                        }
                        return "bt"(
                            <Bouton 
                                typeBtn={colorBtn} 
                                css="m-1" 

                                //CLIQUE SUR BOUTON FILTRE URL ID
                                //On lance la fonction lors DU clic et va parcourir les continents concernés, c'est celui qu on est en train de parcour avec map ci-dessus
                                onClick={() => props.filtreContinent(continent.idContinent)}
                                //FIN CLIQUE SUR BOUTON FILTRE URL ID

                                key={continent.idContinent}
                            >
                                {continent.libelleContinent}
                            </Bouton>
                        );
                    })//Quand on est dans une fonction map, on doit obligatoirement ajouter la clé (key)
                }
            </div> 
        </div>
    </>
);

export default animal;
