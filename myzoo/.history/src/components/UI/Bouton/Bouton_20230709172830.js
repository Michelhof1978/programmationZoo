//Bouton avec gestion des événements
import React from "react"; 

const Bouton = (props) => {
    let btnCss = `btn ${props.typeBtn} ${props.css}`//On va créer une variable qui va contenir les classes css de notre bouton
    return <button className={btnCss} onClick={props.click}>{props.children}</button> //onClick = gestion événements en faisant passer les informations à travers les props// Envois d'un text toujours via les props ds la partie children
};

export default Bouton;