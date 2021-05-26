import React from 'react';
import './css/score-board.css';
import './css/App.css';

function ScoreBoard(props) {
    return (
        <div className="score-board game-box">
            <table>
                <tr>
                    <td class="right-padding">Total Chips:</td> 
                    <td class="left-padding">{props.totalChips}</td>
                </tr>
                <tr>
                    <td class="right-padding">Bet:</td> 
                    <td class="left-padding">{props.bet}</td>
                </tr>
            </table>
        </div>
    )
}

export default ScoreBoard;
