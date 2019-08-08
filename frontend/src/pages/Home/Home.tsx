import * as React from 'react';
import { IPokemon, Pokemon } from './../../components/Pokemon';
import Style from './Home.style';
class Home extends React.Component {

  render(): React.ReactNode {
    const pokemons: IPokemon[] = [
      { name: 'Carapuce', id: 7, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
      { name: 'Carabaffe', id: 8, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
      { name: 'Tortank', id: 9, url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
    ];
    return (
      <Style.Intro>
        {pokemons.length > 0 && pokemons.map(p => (
          <Pokemon key={p.id} name={p.name} id={p.id} url={p.url} />
        ))}
      </Style.Intro>
    );
  }
}

export default Home;
