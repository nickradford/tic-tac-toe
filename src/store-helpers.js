const makePlay = (state, action) => {
  let row = action.row,
      column = action.column,
      cell = state.board[row][column]

  if (state.winner || state.tie || cell) {
    return state
  }

  state.board[row][column] = state.playersTurn
  state.playersTurn = state.playersTurn == 'X' ? 'O' : 'X'

  return state
}

const checkWin = (state) => {
  let winner = undefined

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
      return state.board[x][y]
    }).join('')

    if (val === 'XXX' || val === 'OOO') {
      winner = val.split('')[0]
    }

    catStr += val
  })

  if (winner) {
    state.winner = winner
  }

  if (catStr.length == 24) {
    state.tie = true
  }

  return state
}

const genEmptyBoard = () => ([
    [null, null, null],
    [null, null, null],
    [null, null, null]
])

const genNewGame = () => ({
  playersTurn: 'X',
  board: genEmptyBoard(),
  winner: undefined,
  tie: false
})

export {
  makePlay,
  checkWin,
  genEmptyBoard,
  genNewGame
};
