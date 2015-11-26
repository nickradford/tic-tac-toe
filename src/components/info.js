import React from 'react';
import Store from '../store';

const InfoComponent = ({game}) => {
  let view

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

const restart = () => Store.dispatch({type: 'RESTART'})

const NormalPlayComponent = ({game}) => {
  return (
    <h1>Players turn:
      <span className={game.playersTurn}> {game.playersTurn}</span>
    </h1>
  )
}

const WinnerComponent = ({game}) => {
  return (
    <div>
      <h1>Player <span className={game.winner}>{game.winner}</span> won!!!</h1>
      <RestartButton restart={restart} />
    </div>
  )
}

const TieComponent = () => {
  return (
    <div>
      <h1>Scratch game :/</h1>
      <RestartButton restart={restart} />
    </div>
  )
}

const RestartButton = ({restart}) => {
  return (
    <button className='restart' onClick={restart}>Restart</button>
  )
}



export default InfoComponent;