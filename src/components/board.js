import React, {Component} from 'react';
import Store from '../store';

const Board = ({game}) => {
    let rows = [],
        winnerClass = ''

    game.board.forEach((row, rowIndex) => {
        let columns = [],
            rowKey = `row-${rowIndex}`

        row.forEach((column, colIndex) => {
            let cellKey = `cell-${rowIndex}-${colIndex}`,
                coords = [rowIndex, colIndex],
                className = `cell ${column || ''} `,
                re = new RegExp(`\\[${rowIndex}\\,${colIndex}\\]`)

            if (game.winningSet && re.test(game.winningSet)) {
                className += 'winner'
            }

            columns.push(
                <td className={className} key={cellKey} onClick={() => {
                    Store.dispatch({type: 'PLAY', row: rowIndex, column: colIndex})
                }}>{column}</td>
            )
        })

        rows.push(
            <tr key={rowKey}>{columns}</tr>
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
