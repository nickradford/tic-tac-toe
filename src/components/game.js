import React, { Component } from 'react';

import InfoComponent from './info';
import Board from './board';

class Game extends Component {
  render() {
    return (
      <div className='game'>
        <Board game={this.props.game} />
        <InfoComponent game={this.props.game} />
      </div>
    )
  }
}

export default Game;
