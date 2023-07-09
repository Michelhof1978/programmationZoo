//Bouton avec gestion des événements
import React from "react"; 

const Bouton = (props) => (
    let= btnCss = "btn ${props.typeBtn} ${props.css}";
    return <button className={btnCss} onClick={props.clic}>{props.children}</button> //onClick = gestion événements EN FAISANT PASSER L INFORMATION // 
);

export default Bouton;