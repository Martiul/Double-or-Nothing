import React from 'react';
import * as Constants from './constants';

function ActionButtons(props) {
    let displayedButtons;
    switch (props.phase) {
        case Constants.PHASE.START:
            displayedButtons = <button onClick={props.betPhase}> Start Game </button>
            break;
        case Constants.PHASE.BET:
            displayedButtons = <button onClick={props.swapPhase}> Bet </button>
            break;
        case Constants.PHASE.SWAP:
            displayedButtons = <button onClick={props.evaluationPhase}> Swap </button>
            break;
        case Constants.PHASE.EVALUATION_WIN:
            displayedButtons = [
                <button onClick={props.doublePhase}> Double </button>,
                <button onClick={props.betPhase}> Not Double </button>
            ];
            break;
        case Constants.PHASE.EVALUATION_LOSE:
            displayedButtons = [
                <button onClick={props.betPhase}> Yes </button>,
                <button onClick={props.resetGame}> No </button>
            ];
            break;
        case Constants.PHASE.DOUBLE:
            displayedButtons = [
                <button onClick={() => props.chooseLowHigh(Constants.SELECTION.LOW)}> Low </button>,
                <button onClick={() => props.chooseLowHigh(Constants.SELECTION.HIGH)}> High </button>
            ];
            break;
        case Constants.PHASE.DOUBLE_WIN:
            displayedButtons = [
                <button onClick={props.doublePhase}> Yes </button>,
                <button onClick={props.betPhase}> No </button>
            ];
            break;
        case Constants.PHASE.DOUBLE_LOSE:
            displayedButtons = [
                <button onClick={props.betPhase}> Play Again </button>,
                <button onClick={props.resetGame}> Reset </button>
            ];
            break;
        default:
            console.log("Invalid phase");
    }

    return (
        <div>
            {displayedButtons}
        </div>
    )
}

export default ActionButtons;