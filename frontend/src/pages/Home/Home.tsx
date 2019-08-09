import React, { useEffect, useState } from 'react';
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
const EMPTY: IPokemon[] = [];

const Home = () => {

  const [state, setState] = useState({
    loading: true,
    pokemons: EMPTY,
    error: false,
  });

  async function fetchPokemons() {
    let response;
    let fetchedPokemons: IPokemon[];
    try {
      response = await makeGetRequest('/pokemon');
      fetchedPokemons = response.body.map((p: IPokemon): IPokemon => ({ ...p, height: p.height * 10, weight: p.weight / 10 }))
      setState({
        ...state,
        pokemons: [...fetchedPokemons],
        loading: false,
      })
    } catch (e) {
      setState({
        ...state,
        loading: false,
      })
    }
  }

  useEffect(() => {
    if (state.pokemons.length > 0) {
      return;
    }
    fetchPokemons();
  });


  const { pokemons, loading, error } = state;
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


export default Home;
