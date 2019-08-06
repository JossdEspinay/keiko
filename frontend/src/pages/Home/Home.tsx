import * as React from 'react';

import Style from './Home.style';

class Home extends React.Component {

  renderPokemon(name: string, pokemonNumber: number, url: string): React.ReactNode {
    return (
      <div>
        <div>{name} - {pokemonNumber}</div>
        <img src={url} />
      </div>
    )
  }

  render(): React.ReactNode {
    const pokemon = 'Carapuce';

    return (
      <>{this.renderPokemon(pokemon, 7, "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png")}</>
    );
  }
}

export default Home;

