//Site.js va gérer le site
import React, { Component } from 'react';
import Navbar from '../../components/UI/NavBar/NavBar';
import {Switch, Route} from "react-router-dom";//Import composant Switch qui va permettre d indiquer que l on va pouvoir accéder à une route en pârticulier et du composant route qui va définir quel sera le canal, la route disponible pour une Url données. 
class  Site extends Component{//Composant STATEFUL qui va être gérer par App.js
    render() {
        return (
            <>
              <Navbar/>
              <Route path='/' render={()} => <Accueil />>
                Site des animaux
              
            </>
        );//EN JSX
    }
}

export default Site

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