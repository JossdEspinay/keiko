import * as React from 'react';
import loaderSvg from './../../assets/svg/loader.svg';

import { FormattedMessage } from 'react-intl';
import { IPokemon, Pokemon } from './../../components/Pokemon';
import { makeGetRequest } from './../../services/networking/request';
import Style from './Home.style';

interface IState {
  pokemons: IPokemon[],
  loading: boolean,
}
class Home extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
      pokemons: []
    }
  }
  componentDidMount() {
    makeGetRequest('/pokemon').then(resp => this.setState(old => ({
      pokemons: [...resp.body],
      loading: false,
    })));
  }
  render(): React.ReactNode {
    const { pokemons, loading } = this.state;
    return (
      <>
        <Style.Title><FormattedMessage id="homePage.title" /></Style.Title>
        <Style.Wrapper>
          {pokemons.length > 0 && pokemons.map(p => (
            <Pokemon key={p.id} name={p.name} id={p.id} weight={p.weight} height={p.height} />
          ))}
          {loading && (<img src={loaderSvg} />)}
        </Style.Wrapper>
      </>
    );
  }
}

export default Home;
