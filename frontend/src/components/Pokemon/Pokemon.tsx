import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import Style from './Pokemon.style';


export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
};

const Pokemon = (props: IPokemon) => (
  <Style.Wrapper>
    <div>{props.name}</div>
    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + props.id + ".png"} alt={props.name} />
    <div><FormattedMessage id="pokemon.id" />: {props.id}</div>
    <div><FormattedMessage id="pokemon.weight" />: {props.weight} <FormattedMessage id="pokemon.weightUnit" /></div>
    <div><FormattedMessage id="pokemon.height" />: {props.height} <FormattedMessage id="pokemon.heightUnit" /></div>
  </Style.Wrapper>
)


export { Pokemon };
