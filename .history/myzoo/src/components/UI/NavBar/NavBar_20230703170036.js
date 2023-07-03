import React from "react"; 

const navbar = (props) => (//COMPOSANT STATELESS
    <>
        <nav classNa="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">

    <a class="navbar-brand" href="#">Navbar</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Accueil </a>
        </li>
        </ul>
    </div>

  </div>
</nav>

    </>
);

export default navbar;