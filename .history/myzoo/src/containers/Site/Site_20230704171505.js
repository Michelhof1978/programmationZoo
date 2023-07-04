//Site.js va gérer le site
import React, { Component } from 'react';
import Navbar from '../../components/UI/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './Error/Error';

// //composants Router, Routes et Route à partir de la bibliothèque React Router.
// Router est le composant principal qui englobe toute l'application et fournit le contexte pour le routage.
// Routes est le composant qui englobe toutes les routes et permet de les définir.
// Route est utilisé pour définir une route spécifique.

import Accueil from './Accueil/Accueil';

class  Site extends Component{//Composant STATEFUL qui va être gérer par App.js
    render() {
        return (
            <>
              <Navbar/>
          <Routes> {/* Utilisez le composant Routes pour englober les routes */}
              <Route path="/" element={<Accueil />}  />
              <Route path="/contact" element={<h1>Page de Contact</h1>}  />
              <Route path="*" element={<Error type="404">La Page N'existe Pas</Error>} />
          </Routes>
              
              
            </>
        );//EN JSX
    }//Error
}

export default Site;

// ----------------------------------------------------------------------------------------------------------------------------------
// L'importation des éléments `Switch` et `Route` à partir de `"react-router-dom"` indique que vous utilisez la bibliothèque React
//  Router pour gérer les routes dans votre application React.

// Voici comment vous pouvez les utiliser dans votre composant :

// ```jsx
// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import Navbar from '../../components/UI/NavBar/NavBar';
// import HomePage from '../../components/HomePage';
// import AboutPage from '../../components/AboutPage';
// import NotFoundPage from '../../components/NotFoundPage';

// class Site extends Component {
//   render() {
//     return (
//       <>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/about" component={AboutPage} />
//           <Route component={NotFoundPage} />
//         </Switch>
//       </>
//     );
//   }
// }

// export default Site;
// ```

// Dans cet exemple, nous avons importé `Switch` et `Route` à partir de `"react-router-dom"`. `Switch` est utilisé pour envelopper
//  plusieurs routes et assure qu'une seule route est rendue à la fois. Les composants `Route` sont utilisés pour définir les
//   correspondances entre les URL et les composants à rendre.

// Dans l'exemple, nous avons trois routes définies : une route exacte pour la page d'accueil (`"/"`), une route pour la page "about" 
// (`"/about"`), et une route par défaut (`<Route component={NotFoundPage} />`) qui sera rendue si aucune des routes précédentes ne 
// correspond à l'URL courante.

// Assurez-vous d'avoir installé la bibliothèque React Router (`react-router-dom`) et configuré votre application avec un 
// `<BrowserRouter>` ou un `<HashRouter>` au niveau racine pour que les routes fonctionnent correctement.
// ----------------------------------------------------------------------------------------------------------------------------------