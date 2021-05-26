import React from 'react';
import images from './images';
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

function getNewDeck() {
    return ([
        {suit: SUIT.SPADE, value: VALUE.ACE, selected: true, matching: false, img: images.ace_of_spades},
        {suit: SUIT.SPADE, value: VALUE.TWO, selected: true, matching: false, img: images.two_of_spades},
        {suit: SUIT.SPADE, value: VALUE.THREE, selected: true, matching: false, img: images.three_of_spades},
        {suit: SUIT.SPADE, value: VALUE.FOUR, selected: true, matching: false, img: images.four_of_spades},
        {suit: SUIT.SPADE, value: VALUE.FIVE, selected: true, matching: false, img: images.five_of_spades},
        {suit: SUIT.SPADE, value: VALUE.SIX, selected: true, matching: false, img: images.six_of_spades},
        {suit: SUIT.SPADE, value: VALUE.SEVEN, selected: true, matching: false, img: images.seven_of_spades},
        {suit: SUIT.SPADE, value: VALUE.EIGHT, selected: true, matching: false, img: images.eight_of_spades},
        {suit: SUIT.SPADE, value: VALUE.NINE, selected: true, matching: false, img: images.nine_of_spades},
        {suit: SUIT.SPADE, value: VALUE.TEN, selected: true, matching: false, img: images.ten_of_spades},
        {suit: SUIT.SPADE, value: VALUE.JACK, selected: true, matching: false, img: images.jack_of_spades},
        {suit: SUIT.SPADE, value: VALUE.QUEEN, selected: true, matching: false, img: images.queen_of_spades},
        {suit: SUIT.SPADE, value: VALUE.KING, selected: true, matching: false, img: images.king_of_spades},
        {suit: SUIT.HEART, value: VALUE.ACE, selected: true, matching: false, img: images.ace_of_hearts},
        {suit: SUIT.HEART, value: VALUE.TWO, selected: true, matching: false, img: images.two_of_hearts},
        {suit: SUIT.HEART, value: VALUE.THREE, selected: true, matching: false, img: images.three_of_hearts},
        {suit: SUIT.HEART, value: VALUE.FOUR, selected: true, matching: false, img: images.four_of_hearts},
        {suit: SUIT.HEART, value: VALUE.FIVE, selected: true, matching: false, img: images.five_of_hearts},
        {suit: SUIT.HEART, value: VALUE.SIX, selected: true, matching: false, img: images.six_of_hearts},
        {suit: SUIT.HEART, value: VALUE.SEVEN, selected: true, matching: false, img: images.seven_of_hearts},
        {suit: SUIT.HEART, value: VALUE.EIGHT, selected: true, matching: false, img: images.eight_of_hearts},
        {suit: SUIT.HEART, value: VALUE.NINE, selected: true, matching: false, img: images.nine_of_hearts},
        {suit: SUIT.HEART, value: VALUE.TEN, selected: true, matching: false, img: images.ten_of_hearts},
        {suit: SUIT.HEART, value: VALUE.JACK, selected: true, matching: false, img: images.jack_of_hearts},
        {suit: SUIT.HEART, value: VALUE.QUEEN, selected: true, matching: false, img: images.queen_of_hearts},
        {suit: SUIT.HEART, value: VALUE.KING, selected: true, matching: false, img: images.king_of_hearts},
        {suit: SUIT.CLUB, value: VALUE.ACE, selected: true, matching: false, img: images.ace_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.TWO, selected: true, matching: false, img: images.two_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.THREE, selected: true, matching: false, img: images.three_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.FOUR, selected: true, matching: false, img: images.four_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.FIVE, selected: true, matching: false, img: images.five_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.SIX, selected: true, matching: false, img: images.six_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.SEVEN, selected: true, matching: false, img: images.seven_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.EIGHT, selected: true, matching: false, img: images.eight_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.NINE, selected: true, matching: false, img: images.nine_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.TEN, selected: true, matching: false, img: images.ten_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.JACK, selected: true, matching: false, img: images.jack_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.QUEEN, selected: true, matching: false, img: images.queen_of_clubs},
        {suit: SUIT.CLUB, value: VALUE.KING, selected: true, matching: false, img: images.king_of_clubs},
        {suit: SUIT.DIAMOND, value: VALUE.ACE, selected: true, matching: false, img: images.ace_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.TWO, selected: true, matching: false, img: images.two_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.THREE, selected: true, matching: false, img: images.three_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.FOUR, selected: true, matching: false, img: images.four_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.FIVE, selected: true, matching: false, img: images.five_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.SIX, selected: true, matching: false, img: images.six_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.SEVEN, selected: true, matching: false, img: images.seven_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.EIGHT, selected: true, matching: false, img: images.eight_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.NINE, selected: true, matching: false, img: images.nine_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.TEN, selected: true, matching: false, img: images.ten_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.JACK, selected: true, matching: false, img: images.jack_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.QUEEN, selected: true, matching: false, img: images.queen_of_diamonds},
        {suit: SUIT.DIAMOND, value: VALUE.KING, selected: true, matching: false, img: images.king_of_diamonds},
        {suit: SUIT.JOKER, value: VALUE.JOKER, selected: true, matching: false, img: images.black_joker},
        {suit: SUIT.JOKER, value: VALUE.JOKER, selected: true, matching: false, img: images.red_joker}
    ]);
}

function Card(props) {
    return (
        <div className="card">
            <div className="selector" onClick={props.onClick}>
                <h3> {props.selected? 'HOLD' : ''} </h3>
            </div>
            <div className="card-body">
                <img 
                    className="card-img" 
                    data-matching={props.matching? 'true': 'false'} 
                    src={props.img}
                    alt={props.img} 
                    onClick={props.onClick}
                />
            </div>
        </div>
    )
}

export {Card, SUIT, VALUE, getNewDeck};