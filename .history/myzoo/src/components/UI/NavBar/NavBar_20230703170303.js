import React from "react"; 

const navbar = (props) => (//COMPOSANT STATELESS
    <>
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  
    <a className="navbar-brand" href="#">Navbar</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Accueil </a>
        </li>
        </ul>
    </div>

  
</nav>

    </>
);

export default navbar;