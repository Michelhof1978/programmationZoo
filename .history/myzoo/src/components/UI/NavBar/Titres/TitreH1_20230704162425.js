//Composant de type stateless

import React from "react"; 

const titreH1 = (props) => { 
    let backgroundColor = props.bgColor ? props.bgColor : "bg-primary"; //permet de définir la classe CSS qui contrôle la couleur de fond d'un élément. Si une prop "bgColor" est passée à ce composant, la couleur de fond sera définie sur cette valeur. Sinon, la couleur de fond sera définie sur une valeur par défaut, "bg-primary". Cela vous permet de personnaliser la couleur de fond de l'élément en utilisant la prop "bgColor" lors de l'appel du composant ou d'utiliser une valeur par défaut si aucune prop n'est fournie.
    let monCSS = `border border-dark my-1 p-2 text-white text-center rounded ${backgroundColor}`;

    return <h1 className={monCss}>{props.children}</h1>


};

export default titreH1;