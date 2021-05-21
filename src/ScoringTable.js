import React from 'react';
import './css/ScoringTable.css';
import './css/common.css';
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
        <div className="ScoringTable gameBox">
            <p> ScoringTable </p>
            <table>
                {tableRows}
            </table>
        </div>
    )
}

export default ScoringTable