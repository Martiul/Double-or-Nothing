import React from 'react';
import './css/score-board.css';

function ScoreBoard(props) {
    return (
        <div className="score-board game-box">
            <table>
                <tr>Total Chips: {props.totalChips}</tr>
                <tr>Bet: {props.bet}</tr>
            </table>
        </div>
    )
}

export default ScoreBoard;
