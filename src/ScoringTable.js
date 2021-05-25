import React from 'react';
import './css/scoring-table.css';
import {HAND} from './Poker';

function ScoringTable() {
    let tableRows = [];
    for (const [k, v] of Object.entries(HAND)) {
        tableRows.push(
            <tr key={k}>
                <td>{v.displayText}</td>
                <td>x{v.multiplier}</td>
            </tr>
        );
    }
    return (
        <div className="scoring-table game-box">
            <p> ScoringTable </p>
            <table>
                {tableRows}
            </table>
        </div>
    )
}

export default ScoringTable