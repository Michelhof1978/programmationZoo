//Composant qui va gérer tout type d erreurs
import React from "react"; 
import TitreH1 from "../../../components/UI/NavBar/Titres/TitreH1";

const Error = (props) => (
   <>
        <TitreH1 bgColor="bg-danger">Erreur {props.type}</TitreH1>
        <div>
            {props.children}
        </div>
   </>
);
//On rajoute une propriété type qui sera type 404 et ajouté à la suite du H1
//Le H1 de Error sera en background primary car on a defini tous les H1 en primary à part si on defini une autre couleur comme ici avec props.bgColor qu'on a defini
export default Error;