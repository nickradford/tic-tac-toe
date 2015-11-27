import React, { Component } from 'react';
import Store from '../store';

class Board extends Component {

  render() {
    let rows = []
    let winnerClass = ''
    let game = this.props.game

    game.board.forEach( (row, rowIndex) => {
        let columns = []
        let rowKey = () => `row-${rowIndex}`

        row.forEach( (column, colIndex) => {
          let cellKey = () => `cell-${rowIndex}-${colIndex}`
          let coords = [rowIndex, colIndex]
          let className = `${column} `
          let re = new RegExp(`\\[${rowIndex}\\,${colIndex}\\]`)

          if (game.winningSet && re.test(game.winningSet)) {
            className += 'winner'
          }

          columns.push(
            <td
                className={className}
                onClick={ () => {
                  Store.dispatch({
                    type: 'PLAY',
                    row: rowIndex,
                    column: colIndex
                  })
                }}
            >{column}</td>
          )
        })

        rows.push(
          <tr>{columns}</tr>
        )
    })

    return (
      <table className={game.winner}>
        <tbody className={game.playersTurn}>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Board;
