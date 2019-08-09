import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import Style from './Pokemon.style';


export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
};

class Pokemon extends PureComponent<IPokemon> {

  render() {
    const { name, id, weight, height } = this.props;
    return (
      <Style.Wrapper>
        <div>{name}</div>
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} alt={name} />
        <div><FormattedMessage id="pokemon.id" />: {id}</div>
        <div><FormattedMessage id="pokemon.weight" />: {weight} <FormattedMessage id="pokemon.weightUnit" /></div>
        <div><FormattedMessage id="pokemon.height" />: {height} <FormattedMessage id="pokemon.heightUnit" /></div>
      </Style.Wrapper>
    )
  }
}
export { Pokemon };
