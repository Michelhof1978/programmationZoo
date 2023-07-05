import React from "react"; 
import facebook from "../../assets/images/footer/facebook.png";
import twitter from "../../assets/images/footer/twitter.png";
import youtube from "../../assets/images/footer/youtube.png";
import {NavLink} from "react-router-dom";

const Footer = (props) => (
    <>
        <footer className="bg-primary ">
            <div className="text-white text-center">
             MyZoo - Tout droits réservés
           </div> 

           <div className="row no-gutters align-items-center text-center pt-2">
                <div className="col-3">
                    <a href="/" className="d-block" target="_blank">
                        <img src={facebook} alt='facebook' className="imgFB" />
                    </a> 
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={youtube} alt='youtube' className="imgYoutube" />
                    </a> 
                </div>

                <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                        <img src={twitter} alt='twitter' className="imgTwitter" />
                    </a> 
               
                </div>

                <div className="col-3">

               
                </div>
           </div>
        </footer>
    </>
);

export default Footer;

//EXPLICATION CSS:
// d_block= est utilisée pour modifier le comportement d'un élément HTML en le rendant un bloc de niveau (`display: block`).
// Par défaut, les éléments HTML sont généralement rendus comme des éléments en ligne (`display: inline`), ce qui signifie qu'ils
//  sont affichés les uns à côté des autres, sans créer de saut de ligne. Cependant, lorsque vous appliquez la classe `d-block` à 
//  un élément, il est rendu comme un bloc de niveau, occupant toute la largeur disponible et créant un saut de ligne avant et après
//  lui.
// Voici un exemple d'utilisation de la classe `d-block` :
// ```html
// <div class="d-block">Ceci est un bloc de niveau</div>
// ```
// Dans cet exemple, la balise `div` est affectée par la classe `d-block`. Cela signifie que la balise `div` sera rendue comme un
//  bloc de niveau et occupera toute la largeur disponible sur une ligne, créant ainsi un saut de ligne avant et après elle.
// La classe `d-block` peut être utile dans plusieurs scénarios, notamment :
// - Pour afficher un élément en tant que bloc afin qu'il occupe toute la largeur disponible et crée un saut de ligne.
// - Pour appliquer des propriétés de mise en page spécifiques aux blocs, telles que la largeur, la hauteur, les marges, les
//  rembourrages, etc.
// - Pour positionner des éléments de manière plus précise en utilisant des techniques de positionnement CSS, telles que `position: 
// absolute` ou `position: relative`.
// Il est important de noter que la classe `d-block` est spécifique à Bootstrap, et elle peut varier légèrement selon la version de
//  Bootstrap que vous utilisez. Assurez-vous d'inclure la feuille de style Bootstrap appropriée dans votre projet pour que la classe
//   fonctionne correctement.
// -----------------------------------------------------------------------------------------------------------------------
// target="_blank = le lien cliqué s'ouvrira ds une autre fenêtre