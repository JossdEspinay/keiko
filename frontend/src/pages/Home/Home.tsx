import * as React from 'react';
import Pokemon from './../../components/Pokemon';
import Style from './Home.style';

class Home extends React.Component {

  render(): React.ReactNode {
    const pokemon = 'Carapuce';
    return (
      <Style.Intro>
        <Pokemon name={pokemon} id={7} url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"/>
      </Style.Intro>
      );
    }
  }


export default Home;
