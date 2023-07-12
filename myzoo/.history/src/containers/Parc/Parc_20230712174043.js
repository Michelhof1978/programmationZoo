//RECUPERATION DES DONNEES

import React, { Component } from 'react';
import TitreH1 from '../../components/UI/NavBar/Titres/TitreH1';
import axios from "axios";
import Animal from './Animal/Animal';

Il semble y avoir une erreur de syntaxe dans le code que vous avez fourni. Voici le code corrigé :

```jsx
import React, { Component } from 'react';
import TitreH1 from '../../components/UI/NavBar/Titres/TitreH1';
import axios from "axios";
import Animal from './Animal/Animal';

class Parc extends Component {
    state = {
        animaux: null,
        filtreFamille: null,
        filtreContinent: null,
    };

    loadData = () => {
        axios.get('http://localhost/serveurzoo/front/animaux')
            .then(reponse => {
                this.setState({ animaux: Object.values(reponse.data) });
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount = () => {
        this.loadData();
    };

    handleSelectionFamille = (idFamille) => {
        console.log(`Demande de ${idFamille}`);
        this.setState({ filtreFamille: idFamille });
    };

    handleSelectionContinent = (idContinent) => {
        console.log(`Demande de ${idContinent}`);
        this.setState({ filtreContinent: idContinent });
    };

    render() {
        return (
            <>
                <TitreH1 bgColor="bg-success">Les animaux du parc</TitreH1>
                <div className='container-fluid'>
                    <div className="row no-gutters">
                        {this.state.animaux &&
                            this.state.animaux.map(animal => (
                                <div className="col-12 col-md-6 col-xl-4" key={animal.id}>
                                    <Animal
                                        {...animal}
                                        filtreFamille={this.handleSelectionFamille}
                                        filtreContinent={this.handleSelectionContinent}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Parc;
```

J'ai corrigé la structure du composant `Parc` en ajoutant les points-virgules manquants et en réorganisant les méthodes. De plus, j'ai modifié la structure du rendu pour résoudre les erreurs de syntaxe.