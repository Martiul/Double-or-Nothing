import React from 'react';
import './css/ScoreBoard.css';
import './css/common.css';

function ScoreBoard(props) {
    return (
        <div className="ScoreBoard gameBox">
            <table>
                <tr>Total Chips: {props.totalChips}</tr>
                <tr>Bet: {props.bet}</tr>
            </table>
        </div>
    )
}

export default ScoreBoard;
