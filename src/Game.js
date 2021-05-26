import React from 'react';
import ScoringTable from './ScoringTable';
import Board from './Board';
import {VALUE, getNewDeck} from './Card';
import TextBox from './TextBox';
import ActionButtons from './ActionButtons';
import ScoreBoard from './ScoreBoard';
import {evaluateHand, HAND} from './Poker';
import {HAND_SIZE, PHASE, PHASE_TEXT, SELECTION, MAX_DOUBLES, VIEW} from './constants';
import './css/game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phase: PHASE.BET,
            statusText: PHASE_TEXT[PHASE.BET],
            totalChips: 1000,
            bet: 100,
            numberOfDoubles: 0,
            hand: [],
            deck: []
        };
        
        this.initializeDeck = this.initializeDeck.bind(this);
        this.initializeHand = this.initializeHand.bind(this);
        
        this.pickCardsFromDeck = this.pickCardsFromDeck.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleSwap = this.handleSwap.bind(this);
        this.chooseLowHigh = this.chooseLowHigh.bind(this);
        
        this.betPhase = this.betPhase.bind(this);
        this.swapPhase = this.swapPhase.bind(this);
        this.evaluationPhase = this.evaluationPhase.bind(this);
        this.doublePhase = this.doublePhase.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    initializeDeck(callback = () => {}) {
        this.setState({deck: getNewDeck()}, callback);
    }

    initializeHand(callback = () => {}) {
        let [drawnCards, newDeck] = this.pickCardsFromDeck(Array.from(this.state.deck), 5);
        this.setState({
            deck: newDeck,
            hand: drawnCards
        }, callback);
    }
     
    pickCardsFromDeck(deck, number) {
        let drawnCards = [];
        for (let i = 0; i < number; i++) {
            let drawnNumber = Math.floor(Math.random() * deck.length);
            drawnCards.push(deck[drawnNumber]);
            deck.splice(drawnNumber, 1);
        }
        return [drawnCards, deck];
    }

    betPhase() {
        this.setState({
            phase: PHASE.BET,
            statusText: PHASE_TEXT[PHASE.BET],
            totalChips: this.state.totalChips+this.state.bet,
            hand: [],
            bet: 100
        });
    }

    swapPhase() {
        this.setState({
            phase: PHASE.SWAP,
            statusText: PHASE_TEXT[PHASE.SWAP],
            totalChips: this.state.totalChips - this.state.bet,
            numberOfDoubles: 0
        });
        this.initializeDeck(this.initializeHand);
    }

    evaluationPhase() {
        this.handleSwap();
    }

    handleSwap() {
        let deck = Array.from(this.state.deck);
        
        let hand = this.state.hand.map((card) => {
            if (!card.selected) {
                let [pickedCards, newDeck] = this.pickCardsFromDeck(deck, 1);
                deck = newDeck;
                if (pickedCards.length > 0) {
                    return pickedCards[0];
                }
                console.log("Tried to swap card from empty deck");
                return null;
            }
            return card;
        });
        this.setState({
            deck: deck,
            hand: hand
        }, () => this.evaluateHand());
    }

    evaluateHand() {
        let hand = this.state.hand;
        let newPhase = PHASE.EVALUATION_LOSE;
        let newStatusText = PHASE_TEXT[newPhase];
        let [result, matches] = evaluateHand(hand);

        if (result !== HAND.NONE) {
            newPhase = PHASE.EVALUATION_WIN
            newStatusText = `${result.displayText}! Would you like to double your bet?`;
        } else if (result === HAND.NONE && this.state.totalChips <= 0) {
            this.lostGamePhase();
            return;
        }

        matches.forEach(idx => hand[idx].matching = true);
        this.setState({
            phase: newPhase,
            statusText: newStatusText,
            hand: hand,
            bet: this.state.bet * result.multiplier
        });
    }

    lostGamePhase() {
        this.setState({
            phase: PHASE.LOST_GAME,
            statusText: PHASE_TEXT[PHASE.LOST_GAME]
        })
    }

    resetGame() {
        this.setState({
            phase: PHASE.BET,
            statusText: PHASE_TEXT[PHASE.BET],
            totalChips: 1000,
            bet: 100,
            numberOfDoubles: 0,
            hand: [],
            deck: []
        })
        this.props.changeView(VIEW.START);
    }

    doublePhase() {
        if (this.state.hand.length === HAND_SIZE) {
            // First time doubling
            let [pickedCards, newDeck] = this.pickCardsFromDeck(this.state.deck, 1);
            if (pickedCards.length > 0) {
                this.setState({
                    phase: PHASE.DOUBLE,
                    statusText: PHASE_TEXT[PHASE.DOUBLE],
                    deck: newDeck,
                    hand: pickedCards
                });
            }
        } else if (this.state.hand.length === 2) {
            this.setState({
                phase: PHASE.DOUBLE,
                statusText: PHASE_TEXT[PHASE.DOUBLE],
                hand: [this.state.hand[1]]
            });
        } else {
            console.log("Invalid number of cards in doubling phase")
        }
    }

    chooseLowHigh(decision) {
        let [pickedCards, newDeck] = this.pickCardsFromDeck(this.state.deck, 1);
        let newHand = this.state.hand;
        newHand.push(pickedCards[0]);
        if (pickedCards.length > 0) {
            this.setState({
                deck: newDeck,
                hand: newHand
            });
        }

        let cardValue1 = newHand[0].value === VALUE.ACE ? VALUE.ACE_ALTERNATIVE : newHand[0].value;
        let cardValue2 = newHand[1].value === VALUE.ACE ? VALUE.ACE_ALTERNATIVE : newHand[1].value;
        if ((decision === SELECTION.LOW && cardValue2 <= cardValue1)
            || (decision === SELECTION.HIGH && cardValue2 >= cardValue1))
        {
            if (this.state.numberOfDoubles+1 >= MAX_DOUBLES) {
                this.setState({
                    totalChips: this.state.totalChips + this.state.bet,
                    numberOfDoubles: 0,
                    statusText: "Congratulations, you won 10 times!"
                });
            } else {
                this.setState({
                    phase: PHASE.DOUBLE_WIN,
                    statusText: PHASE_TEXT[PHASE.DOUBLE_WIN],
                    bet: this.state.bet*2,
                    numberOfDoubles: this.state.numberOfDoubles + 1,
                });
            }
        } else {
            this.setState({
                phase: PHASE.DOUBLE_LOSE,
                statusText: PHASE_TEXT[PHASE.DOUBLE_LOSE],
                numberOfDoubles: 0,
                bet: 0,
            });
        }
    }

    handleCardClick(i) {
        let hand = this.state.hand;
        hand[i].selected = !hand[i].selected;
        this.setState({hand: hand});
    }

    render() {
        return (
            <div className="game"> 
                <div className="top">
                    <ScoringTable/>
                    <ScoreBoard
                        totalChips={this.state.totalChips}
                        bet={this.state.bet}
                    />
                </div>
                <Board 
                    hand={this.state.hand} 
                    phase={this.state.phase}
                    handleCardClick={this.handleCardClick}
                />
                <div className="bottom">
                    <TextBox statusText={this.state.statusText}/>
                    <ActionButtons 
                        phase={this.state.phase}
                        betPhase={this.betPhase}
                        swapPhase={this.swapPhase}
                        evaluationPhase={this.evaluationPhase}
                        doublePhase={this.doublePhase}
                        chooseLowHigh={this.chooseLowHigh}
                        resetGame={this.resetGame}
                    />     
                </div>
            </div>
        );
    }
}

export default Game