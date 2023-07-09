//AFFICHAGE DES ANIMAUX GRACE AUX DONNEES RECUPEREES DS PARC.JS

import React from "react"; 

const animal = (props) => (
    <>
        <h1>{props.id} - {props.nom}</h1>
        
    </>
);

export default animal;