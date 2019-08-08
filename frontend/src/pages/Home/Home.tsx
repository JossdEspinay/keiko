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
      pokemons: []
    }
  }
  componentDidMount() {
    makeGetRequest('/pokemon').then(resp => this.setState(old => ({
      pokemons: [...resp.body],
    })));
  }
  render(): React.ReactNode {
    const pokemons: IPokemon[] = this.state.pokemons;
    return (
      <Style.Intro>
        {pokemons.length > 0 && pokemons.map(p => (
          <Pokemon key={p.id} name={p.name} id={p.id} />
        ))}
        {pokemons.length === 0 && (<div>Loading...</div>)}
      </Style.Intro>
    );
  }
}

export default Home;
