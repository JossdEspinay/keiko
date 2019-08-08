import * as React from 'react';
import { IPokemon, Pokemon } from './../../components/Pokemon';
import { makeGetRequest } from './../../services/networking/request'

import Style from './Home.style';

interface IState {
  pokemons: IPokemon[],
}
class Home extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      pokemons: [{ name: 'Carapuce', id: 7 },
      { name: 'Carabaffe', id: 8 },
      { name: 'Tortank', id: 9 },]
    }
  }
  componentDidMount() {
    makeGetRequest('/pokemon').then(resp => this.setState(old => ({
      pokemons: [...old.pokemons, resp.body[0]],
    })));
  }
  render(): React.ReactNode {
    const pokemons: IPokemon[] = this.state.pokemons;
    return (
      <Style.Intro>
        {pokemons.length > 0 && pokemons.map(p => (
          <Pokemon key={p.id} name={p.name} id={p.id} />
        ))}
      </Style.Intro>
    );
  }
}

export default Home;
