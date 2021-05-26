import React from 'react';
import * as Constants from './constants';
import './css/action-buttons.css';

function ActionButtons(props) {
    let displayedButtons;
    switch (props.phase) {
        case Constants.PHASE.START:
            displayedButtons = <button class="button" onClick={props.betPhase}> Start Game </button>
            break;
        case Constants.PHASE.BET:
            displayedButtons = <button class="button" onClick={props.swapPhase}> Bet </button>
            break;
        case Constants.PHASE.SWAP:
            displayedButtons = <button class="button" onClick={props.evaluationPhase}> Swap </button>
            break;
        case Constants.PHASE.EVALUATION_WIN:
            displayedButtons = [
                <button class="button" onClick={props.doublePhase}> Double </button>,
                <button class="button" onClick={props.betPhase}> No </button>
            ];
            break;
        case Constants.PHASE.EVALUATION_LOSE:
            displayedButtons = [
                <button class="button" onClick={props.betPhase}> Keep Playing </button>,
                <button class="button" onClick={props.resetGame}> Quit Game </button>
            ];
            break;
        case Constants.PHASE.DOUBLE:
            displayedButtons = [
                <button class="button" onClick={() => props.chooseLowHigh(Constants.SELECTION.LOW)}> Low </button>,
                <button class="button" onClick={() => props.chooseLowHigh(Constants.SELECTION.HIGH)}> High </button>
            ];
            break;
        case Constants.PHASE.DOUBLE_WIN:
            displayedButtons = [
                <button class="button" onClick={props.doublePhase}> Yes </button>,
                <button class="button" onClick={props.betPhase}> No </button>
            ];
            break;
        case Constants.PHASE.DOUBLE_LOSE:
            displayedButtons = [
                <button class="button" onClick={props.betPhase}> Keep Playing </button>,
                <button class="button" onClick={props.resetGame}> Quit Game </button>
            ];
            break;
        default:
            console.log("Invalid phase");
    }

    return (
        <div class="vertical action-buttons">
            {displayedButtons}
        </div>
    )
}

export default ActionButtons;