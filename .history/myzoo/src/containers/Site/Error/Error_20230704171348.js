//Composant qui va gérer tout type d erreurs
import React from "react"; 
import TitreH1 from "../../../components/UI/NavBar/Titres/TitreH1";

const Error = (props) => (
   <>
        <TitreH1>Erreur {props.type}</TitreH1>
        <div>
            {props.children}
        </div>
   </>
);
//On rajoute une propriété type qui sera type 404
export default Error;;