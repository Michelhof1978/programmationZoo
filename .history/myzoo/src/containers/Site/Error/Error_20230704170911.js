//Composant qui va gérer tout type d erreurs
import React from "react"; 
import TitreH1 from "../../../components/UI/NavBar/Titres/TitreH1";

const error = (props) => (
   <>
        <TitreH1>Erreur {props.type}</TitreH1>
        <div>
            {props}
        </div>
   </>
);

export default error;;