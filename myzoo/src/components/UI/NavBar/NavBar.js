import React from "react"; 
import logo from "../../../assets/images/logo.png";
import {NavLink} from "react-router-dom";//Composant Pour éviter que la page se recharge à chaque fois

const Navbar = (props) => (//COMPOSANT STATELESS
    <>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  
    <a className="navbar-brand" href="/">
        <img src={logo} alt="logo My Zoo" width='50px' className="rounded"/>
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">

        <li className="nav-item">
          <NavLink to="/" exact={true.toString()} className="nav-link">Accueil</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/animaux" exact={true.toString()}  className="nav-link">Les Animaux</NavLink>
        </li>


        <li className="nav-item">
         <NavLink to="/contact" exact={true.toString()}  className="nav-link">Contact</NavLink>
        </li>
        </ul>
    </div>

  
</nav>

    </>
);//grâce à NavLink pas de rechargement de page
//exact = L'onglet choisi de la navbar  restera en evidence lors du clic de la page

export default Navbar;