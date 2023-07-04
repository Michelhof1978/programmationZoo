//Composant de type stateless

import React from "react"; 

const titreH1 = (props) => { 
  
    return <h1 className="monCss">{props.children}</h1>


};

export default titreH1;