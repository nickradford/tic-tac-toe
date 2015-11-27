import React, { Component } from 'react';
import Store from '../store';

class InfoComponent extends Component {
  render() {
    let view,
        game = this.props.game

    if (game.winner) {
      view = <WinnerComponent game={game} />
    }

    else if (game.tie) {
      view = <TieComponent />
    }

    else {
      view = <NormalPlayComponent game={game} />
    }

    return (
      <div className='info'>
        {view}
      </div>
    )
  }
}

const restart = () => Store.dispatch({type: 'RESTART'})

class NormalPlayComponent extends Component {
  render() {
    return (
      <h1>Players turn:
        <span className={this.props.game.playersTurn}> {this.props.game.playersTurn}</span>
      </h1>
    )
  }
}

class WinnerComponent extends Component {
  render() {
    return (
      <div>
        <h1>Player <span className={this.props.game.winner}>{this.props.game.winner}</span> won!!!</h1>
        <RestartButton restart={restart} />
      </div>
    )
  }
}

class TieComponent extends Component {
  render() {
    return (
      <div>
        <h1>Scratch game :/</h1>
        <RestartButton restart={restart} />
      </div>
    )
  }
}

class RestartButton extends Component {
  render() {
    return (
      <button className='restart' onClick={restart}>Restart</button>
    )
  }
}


export default InfoComponent;
