import React, { PureComponent } from 'react';

import './Pokemon.style.css';

export interface IPokemon {
  id: number;
  name: string;
  height?: number;
  weight?: number;
};

class Pokemon extends PureComponent<IPokemon> {

  render() {
    const { name, id } = this.props;
    return (
      <div>
        <div>{name} - {id}</div>
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} />
      </div>
    )
  }
}
export { Pokemon };
