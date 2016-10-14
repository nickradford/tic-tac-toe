import React, {Component} from 'react';

import InfoComponent from './info';
import Board from './board';

const Game = ({game}) => {
    return (
        <div className='game'>
            <Board game={game}/>
            <InfoComponent game={game}/>
        </div>
    )
}

export default Game;
