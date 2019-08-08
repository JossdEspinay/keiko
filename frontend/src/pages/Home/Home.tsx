import * as React from 'react';
import { FormattedMessage } from 'react-intl';
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
      <>
        <Style.Title><FormattedMessage id="homePage.title" /></Style.Title>
        <Style.Wrapper>
          {pokemons.length > 0 && pokemons.map(p => (
            <Pokemon key={p.id} name={p.name} id={p.id} weight={p.weight} height={p.height} />
          ))}
          {pokemons.length === 0 && (<div><FormattedMessage id="homePage.loading" /></div>)}
        </Style.Wrapper>
      </>
    );
  }
}

export default Home;
