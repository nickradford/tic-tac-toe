import { createStore } from 'redux';
import deepFreeze from 'deep-freeze';
import { makePlay, checkWin, genEmptyBoard, genNewGame} from './store-helpers';

const gameReducer = (state = genNewGame(), action) => {
  deepFreeze(state)

  switch (action.type) {
    case 'PLAY':
      let newState = makePlay(state, action)
      newState = checkWin(newState)
      return newState
    case 'RESTART':
      return genNewGame()
    default:
      return state
  }
}

const gameStore = createStore(gameReducer)

export default gameStore;
