//AFFICHAGE DES DONNEES DES ANIMAUX
import React from 'react';

const Animal = (props) => {
    <>
        <h1>{props.id} - {props.nom}</h1>
    </>
};

export default Animal;