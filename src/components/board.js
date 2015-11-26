import React from 'react';
import Store from '../store';

const Board = ({game}) => {
  let rows = []

  game.board.forEach( (row, rowIndex) => {
      let columns = []
      let rowKey = () => `row-${rowIndex}`

      row.forEach( (column, colIndex) => {
        let cellKey = () => `cell-${rowIndex}-${colIndex}`
        console.log('cellKey: ', cellKey())
        columns.push(
          <td
              className={column}
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

      console.log('rowKey: ', rowKey())

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

export default Board;
