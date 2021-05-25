import React from 'react';
import './css/card.css';

const SUIT = {
    SPADE: "spade",
    HEART: "heart",
    CLUB: "club",
    DIAMOND: "diamond",
    JOKER: "joker"
};

const VALUE = {
    ACE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    ACE_ALTERNATIVE: 14,
    JOKER: 15
};

function Card(props) {
    return (
        <div className="card">
            <div className="selector" onClick={props.onClick}>
                <h3> {props.selected? 'HOLD' : ''} </h3>
            </div>
            <div className="card-body" data-matching={props.matching? 'true': 'false'} onClick={props.onClick}>
                <h4>{props.suit}</h4>
                <h4>{props.value}</h4>
                {/* <h4>{props.image}</h4> */}
            </div>
        </div>
    )
}

export {Card, SUIT, VALUE};