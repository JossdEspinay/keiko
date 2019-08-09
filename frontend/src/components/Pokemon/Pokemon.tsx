import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import turnIcon from './../../assets/svg/turn-ico.svg';
import Style from './Pokemon.style';



export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
};

const Pokemon = (props: IPokemon) => {
  const [count, setCount] = useState(0);

  return (
    <Style.Wrapper>
      {/*tslint:disable-next-line:jsx-no-lambda*/}
      <Style.switchIcon onClick={() => setCount(count + 1)}><img src={turnIcon} /></Style.switchIcon>
      <div>{props.name}</div>
      <img
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (count % 2 === 0 ? "" : "back/") + props.id + ".png"}
        alt={props.name}
      />
      <div><FormattedMessage id="pokemon.id" />: {props.id}</div>
      <div><FormattedMessage id="pokemon.weight" />: {props.weight} <FormattedMessage id="pokemon.weightUnit" /></div>
      <div><FormattedMessage id="pokemon.height" />: {props.height} <FormattedMessage id="pokemon.heightUnit" /></div>
    </Style.Wrapper>
  )
}


export { Pokemon };
