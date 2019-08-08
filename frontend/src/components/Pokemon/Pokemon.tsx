import React, { PureComponent } from 'react';

import './Pokemon.style.css';

interface IProps {
    name: string;
    id: number;
    url: string;
};

class Pokemon extends PureComponent<IProps> {

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

export default Pokemon;
