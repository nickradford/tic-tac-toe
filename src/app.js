import React from 'react'
import ReactDOM from 'react-dom';

import Game from './components/game';
import Store from './store';


const render = () => {
  ReactDOM.render(
    <Game
      game={Store.getState()}
    />
    , document.getElementById('root')
  )
}

Store.subscribe(render)
render()
