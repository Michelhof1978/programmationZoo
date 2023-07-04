//Composant de type stateless

import React from "react"; 

const titreH1 = (props) => { 
    let monCSS = 'border border-dark my-'
    return <h1 className="monCss">{props.children}</h1>


};

export default titreH1;