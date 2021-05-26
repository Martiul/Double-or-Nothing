import React from 'react';
import {Card} from './Card'
import './css/board.css';
import * as Constants from './constants';


function Board(props) {
    // TODO: not show during bet phase?
    let handItems = [];
    for (let i = 0; i < props.hand.length; i++) {
        const card = props.hand[i];
        handItems.push(<Card 
            key={i}
            suit={card.suit} 
            value={card.value}
            matching={card.matching}
            img={card.img}
            selected={props.phase === Constants.PHASE.SWAP? card.selected: false}
            onClick={props.phase === Constants.PHASE.SWAP? () => props.handleCardClick(i): () => null} 
            image='none'/>
        )
    }
    return (
        <div className="board">
            {handItems}
        </div>
    )
}

export default Board