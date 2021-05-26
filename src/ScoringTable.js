import React from 'react';
import './css/scoring-table.css';
import './css/App.css';
import {HAND} from './Poker';

function ScoringTable() {
    let tableRows = [];
    for (const [k, v] of Object.entries(HAND)) {
        tableRows.push(
            <tr key={k}>
                <td className="right-padding">{v.displayText}</td>
                <td className="left-padding">x{v.multiplier}</td>
            </tr>
        );
    }
    return (
        <div className="scoring-table game-box">
            <table>
                {tableRows}
            </table>
        </div>
    )
}

export default ScoringTable