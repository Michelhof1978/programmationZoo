//Bouton avec gestion des événements

import React from "react"; 

const Bouton = (props) => {
   return <button className={"btn " + props.typeBtn + " " + props.css}>{props.children}</button>
};

export default Bouton;