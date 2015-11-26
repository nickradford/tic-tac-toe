import { createStore } from 'redux';
import { makePlay, checkWin, genEmptyBoard, genNewGame} from './store-helpers';



const gameReducer = (state = genNewGame(), action) => {

  switch (action.type) {
    case 'PLAY':
      state = makePlay(state, action)
      state = checkWin(state)
      return state
    case 'RESTART':
      return genNewGame()
    default:
      return state
  }
}

const gameStore = createStore(gameReducer)

window.gameStore = gameStore

export default gameStore;
