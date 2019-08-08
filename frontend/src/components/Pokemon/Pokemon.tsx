import React, { PureComponent } from 'react';

import './Pokemon.style.css';

export interface IPokemon {
    name: string;
    id: number;
    url: string;
};

class Pokemon extends PureComponent<IPokemon> {

  render() {
    const {name, id, url} = this.props;
    return (
      <div>
        <div>{name} - {id}</div>
        <img src={url} />
      </div>
    )
  }
}
export {Pokemon};
