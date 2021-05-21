import {SUIT, VALUE} from './Card';
import * as Constants from './constants';

const HAND = {
    FIVE_OF_A_KIND: {
        multiplier: 100,
        displayText: "Five of a Kind"
    },
    ROYAL_STRAIGHT_FLUSH: {
        multiplier: 50,
        displayText: "Royal Straight Flush"
    },
    STRAIGHT_FLUSH: {
        multiplier: 20,
        displayText: "Straight Flush"
    },
    FOUR_OF_A_KIND: {
        multiplier: 10,
        displayText: "Four of a Kind"
    },
    FULL_HOUSE: {
        multiplier: 7,
        displayText: "Full House"
    },
    FLUSH: {
        multiplier: 7,
        displayText: "Flush"
    },
    STRAIGHT: {
        multiplier: 5,
        displayText: "Straight"
    },
    THREE_OF_A_KIND: {
        multiplier: 3,
        displayText: "Three of a Kind"
    },
    TWO_PAIR: {
        multiplier: 2,
        displayText: "Two Pair"
    },
    ONE_PAIR: {
        multiplier: 1,
        displayText: "One Pair"
    },
    NONE: {
        multiplier: 0,
        displayText: "Nothing"
    }
};

// Returns [HAND, Array of hand indices]
function evaluateHand(hand) {
    if (hand.length !== Constants.HAND_SIZE) return [HAND.NONE, []];

    let matches = findOfAKind(hand, 5);
    if (matches.length > 0) return [HAND.FIVE_OF_A_KIND, matches];
    matches = royalStraightFlush(hand);
    if (matches.length > 0) return [HAND.ROYAL_STRAIGHT_FLUSH, matches];
    matches = straightFlush(hand);
    if (matches.length > 0) return [HAND.STRAIGHT_FLUSH, matches];
    matches = findOfAKind(hand,4);
    if (matches.length > 0) return [HAND.FOUR_OF_A_KIND, matches];
    matches = doubleFindOfAKind(hand, 3, 2);
    if (matches.length > 0) return [HAND.FULL_HOUSE, matches];
    matches = flush(hand);
    if (matches.length > 0) return [HAND.FLUSH, matches];
    matches = straight(hand);
    if (matches.length > 0) return [HAND.STRAIGHT, matches];
    matches = findOfAKind(hand, 3);
    if (matches.length > 0) return [HAND.THREE_OF_A_KIND, matches];
    matches = doubleFindOfAKind(hand, 2, 2);
    if (matches.length > 0) return [HAND.TWO_PAIR, matches];
    matches = findOfAKind(hand, 2);
    if (matches.length > 0) return [HAND.ONE_PAIR, matches];
    return [HAND.NONE, []];
}

function getCounts(hand) {
    let count = new Array(Object.keys(VALUE).length+1).fill(0);
    hand.forEach(c => count[c.value] += 1);
    return count;
}

// Returns array of indices of hand with the matching cards
function findOfAKind(hand, number) {
    const counts = getCounts(hand);
    let matches = [];
    for (let value = VALUE.KING; value >= 0; value--) {
        if (counts[value] + counts[VALUE.JOKER] >= number) {
            hand.forEach((c, idx) => {
                if (matches.length < number && (c.value === value || c.value === VALUE.JOKER)) {
                    matches.push(idx);
                }
            });
            break;
        }
    }
    return matches;
}

// Handles full house and two-pair
function doubleFindOfAKind(hand, number1, number2) {
    const firstMatches = findOfAKind(hand, number1).sort();
    if (firstMatches.length > 0) {
        let newToOldIndex = {};
        let remaining = []
        for (let i = 0; i < hand.length; i++) {
            if (!firstMatches.includes(i)) {
                newToOldIndex[remaining.length] = i;
                remaining.push(hand[i]);
            }
        }
        
        let secondMatches = findOfAKind(remaining, number2);
        if (secondMatches.length > 0) {
            return firstMatches.concat(secondMatches.map(i => newToOldIndex[i]));
        }
    }
    return [];
}

function royalStraightFlush(hand) {
    const counts = getCounts(hand);
    return (straightFlush(hand).length > 0 && (
        counts[VALUE.TEN] + 
        counts[VALUE.JACK] + 
        counts[VALUE.QUEEN] + 
        counts[VALUE.KING] + 
        counts[VALUE.ACE] +
        counts[VALUE.JOKER]) === hand.length)
    ? Array.from(Array(hand.length).keys())
    : [];
}

function straightFlush(hand) {
    return (flush(hand).length > 0 && straight(hand).length > 0)
    ? Array.from(Array(hand.length).keys())
    : [];
}

function flush(hand) {
    return (hand.filter(c => c.suit === SUIT.SPADE || c.suit === SUIT.JOKER).length === hand.length ||
        hand.filter(c => c.suit === SUIT.HEART || c.suit === SUIT.JOKER).length === hand.length ||
        hand.filter(c => c.suit === SUIT.CLUB || c.suit === SUIT.JOKER).length === hand.length ||
        hand.filter(c => c.suit === SUIT.DIAMOND || c.suit === SUIT.JOKER).length === hand.length)
    ? Array.from(Array(hand.length).keys())
    : [];
}

function straight(hand) {
    const counts = getCounts(hand);
    for (let value = VALUE.ACE; value <= VALUE.TEN; value++) {
        if (Math.min(counts[value], 1) 
            + Math.min(counts[value+1], 1) 
            + Math.min(counts[value+2], 1)
            + Math.min(counts[value+3], 1)
            + (value === VALUE.TEN ? Math.min(counts[VALUE.ACE], 1) : Math.min(counts[value+4], 1))
            + counts[VALUE.JOKER] === hand.length) 
        {
            return Array.from(Array(hand.length).keys());
        }
    }
    return [];
}

export {HAND, evaluateHand};