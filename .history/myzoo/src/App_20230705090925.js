import React from 'react';
import './App.css';
import Site from './containers/Site/Site';
import {BrowserRouter} from 'react-router-dom';//Composant qui va englober tout le site avec le système de routage


function App() {
  return (
    <div>
    <BrowserRouter>
          <Site/>
    </BrowserRouter>
    
    </div>
   
  );//On appelle le composant Site
}

export default App;

Dans une application React, `App.js` est généralement le point d'entrée principal où vous définissez et configurez votre 
application. C'est un composant racine qui agit comme le conteneur principal de tous les autres composants de votre application.

Voici quelques rôles clés d'un fichier `App.js` en React :

1. Configuration du routage : Si votre application utilise le routage pour la navigation entre les différentes pages ou vues,
 `App.js` est l'endroit où vous définissez et configurez les routes. Vous importez généralement le composant `<Router>` approprié 
 (comme `<BrowserRouter>` ou `<HashRouter>`) dans `App.js` et définissez les routes à l'intérieur.

2. Gestion de l'état global : `App.js` peut être utilisé pour gérer l'état global de votre application en utilisant un gestionnaire
 d'état tel que Redux ou le contexte React (`React Context`). Vous pouvez initialiser et fournir le contexte ou le store global dans `App.js`, ce qui permet aux autres composants de l'
 application d'accéder à cet état partagé.

3. Rendu des composants principaux : `App.js` est responsable du rendu des principaux composants ou mises en page de votre 
application. Il peut inclure des barres de navigation, des en-têtes, des pieds de page ou d'autres éléments persistants qui 
sont présents sur toutes les pages de l'application.

4. Gestion des ressources et dépendances globales : `App.js` peut également être utilisé pour configurer et initialiser des ressources ou des dépendances globales nécessaires à l'ensemble de l'application. Cela peut inclure des connexions aux API, des configurations de bibliothèques externes, des services ou d'autres éléments nécessaires pour faire fonctionner votre application dans son ensemble.

En résumé, `App.js` est un composant central dans une application React qui agit comme le point de départ et le conteneur principal pour la configuration, le rendu des composants principaux et la gestion de l'état global. Il joue un rôle clé dans la structure et l'organisation de votre application React.