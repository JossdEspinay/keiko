import * as React from 'react';
import errorSvg from './../../assets/svg/error.svg';
import loaderSvg from './../../assets/svg/loader.svg';

import { FormattedMessage } from 'react-intl';
import { IPokemon, Pokemon } from './../../components/Pokemon';
import { makeGetRequest } from './../../services/networking/request';
import Style from './Home.style';

interface IState {
  pokemons: IPokemon[],
  loading: boolean,
  error: boolean,
}
class Home extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
      pokemons: [],
      error: false,
    }
  }
  async componentDidMount() {

    let response;
    let pokemons
    try {
      response = await makeGetRequest('/pokemon');
      pokemons = response.body.map((p: IPokemon) => ({ ...p, height: p.height * 10, weight: p.weight / 10 }))
      this.setState({
        pokemons: [...pokemons],
        loading: false,
      })
    } catch (e) {
      this.setState((old => ({
        ...old,
        loading: false,
        error: true
      })))
    }
  }

  render(): React.ReactNode {
    const { pokemons, loading, error } = this.state;
    return (
      <>
        <Style.Title><FormattedMessage id="homePage.title" /></Style.Title>
        <Style.Wrapper>
          {pokemons.length > 0 && pokemons.map(p => (
            <Pokemon key={p.id} name={p.name} id={p.id} weight={p.weight} height={p.height} />
          ))}
          {loading && (<img style={{ height: 400 }} src={loaderSvg} />)}
          {error && (<><img style={{ height: 400 }} src={errorSvg} />
            <div><FormattedMessage id="errors.general" /></div></>)}
        </Style.Wrapper>
      </>
    );
  }
}

export default Home;
