//Site.js va gérer le site
import React, { Component } from 'react';
import Navbar from '../../components/UI/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Error/Error';
import Footer from '../../components/Footer/footer';
import Accueil from './Accueil/Accueil';
import Parc from '../Parc/Parc';

// //composants Router, Routes et Route à partir de la bibliothèque React Router.
// Router est le composant principal qui englobe toute l'application et fournit le contexte pour le routage.
// Routes est le composant qui englobe toutes les routes et permet de les définir.
// Route est utilisé pour définir une route spécifique.



class  Site extends Component{//Composant STATEFUL qui va être gérer par App.js
    render() {
        return (
            <>
            <div className='site'>
            <Navbar/>
          <Routes>
            <Route path="/" element={<Accueil/>}  />
              <Route path="/animaux" element={<Parc/>}  />
              <Route path="/contact" element={<h1>Page de Contact</h1>}  />
              <Route path="/mentionLegales" element={<h1>Mentions légales</h1>}  />
              <Route path="*" element={<Error type="404">La Page N'existe Pas</Error>} />
          </Routes>
                <div className='minSite'></div>{/*minSite sera ds une div vide ds site.js, cela permettra au footer de rester bien en bas et pas grignotter le contenu au dessus du footer*/}
            </div>
            
              <Footer/>
              
            </>
        );//EN JSX
    }//Error = type = //On rajoute une propriété type qui sera type 404 et ajouté à la suite du H1
}

export default Site;

