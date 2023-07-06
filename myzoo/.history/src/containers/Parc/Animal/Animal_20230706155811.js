//AFFICHAGE DES DONNEES DES ANIMAUX
import React from 'react';

const nimal = (props) => {//On enverra toutes les informations au travers des props
    <>
        <h1>{props.id} - {props.nom}</h1>
    </>
};

export default Animal;