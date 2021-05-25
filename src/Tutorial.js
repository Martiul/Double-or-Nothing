import React from 'react';
import scoring from './scoring.png';
import { VIEW } from './constants';
import './css/tutorial.css';

function Tutorial(props) {
    return (
        <div className="tutorial">
            <h1>How to Play Poker</h1>
            <ul id="tutorial-list">
                <li>Make specific combinations by exchanging and arranging a
                hand of 5 cards. Winnings will be given in chips.
                </li>
                <li>A deck of 54 cards will be used. (52 cards + 2 jokers)</li>
                <li>Select card(s) to be exchanged from your hand.</li>
                <li>You can double up once you have a poker hand</li>
                <li>Doubling up is when you guess whether the next card will be
                higher or lower than the last card dealt. Get it right, and you'll double your winnings!
                </li>
                <li>You can double up 10 times in a row. If two cards of the same value are dealt, it is treated as a win.</li>
                <li>The value of the cards when doubling up is the same as in poker.</li>
            </ul>
            <img id="scoring-img" src={scoring} alt="scoring" />
            <button onClick={() => props.changeView(VIEW.START)}>Back</button>
        </div>
    );
}

export default Tutorial;