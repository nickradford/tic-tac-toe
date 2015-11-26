import deepFreeze from 'deep-freeze';

const makePlay = (state, action) => {
  deepFreeze(state)

  let obj = deepCopyState(state)

  let row = action.row,
      column = action.column,
      cell = obj.board[row][column]

  if (obj.winner || obj.tie || cell) {
    return obj
  }

  obj.board[row][column] = obj.playersTurn
  obj.playersTurn = obj.playersTurn == 'X' ? 'O' : 'X'

  return obj
}

const checkWin = (state) => {
  deepFreeze(state)
  let winner = undefined

  let obj = deepCopyState(state)

  let wins = [
    // Horizontal
    [[0,0], [0,1], [0,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],

    // Vertical
    [[0,0], [1,0], [2,0]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]],

    // Diagonal
    [[0,0], [1,1], [2,2]],
    [[2,0], [1,1], [0,2]]

  ]

  let catStr = ''

  wins.forEach( win => {
    let val = win.map( coord => {
      let x = coord[0],
          y = coord[1]
      return obj.board[x][y]
    }).join('')

    if (val === 'XXX' || val === 'OOO') {
      winner = {
        player: val.split('')[0],
        winningSet: JSON.stringify(win)
      }
    }

    catStr += val
  })

  if (winner) {
    obj.winner = winner.player
    obj.winningSet = winner.winningSet
  }

  if (catStr.length == 24) {
    obj.tie = true
  }

  return obj
}

const genEmptyBoard = () => ([
    [null, null, null],
    [null, null, null],
    [null, null, null]
])

const genNewGame = () => {
  let state = {
    board: genEmptyBoard(),
    playersTurn: 'X',
    tie: false,
    winner: undefined,
    winningSet: undefined
  }

  deepFreeze(state)
  return state
}

const deepCopyState = (state) => {
  let board = []

  state.board.some( r => {
    board.push(r.slice())
  })

  let obj = {
    ...state,
    board: board
  }

  return obj
}

export {
  makePlay,
  checkWin,
  genEmptyBoard,
  genNewGame
};
