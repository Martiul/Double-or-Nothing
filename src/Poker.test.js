import * as Poker from './Poker';
import Card, { SUIT, VALUE } from './Card';

test('five-of-a-kind', () => {
    const [handType, indices] = Poker.evaluateHand([
        {value: VALUE.KING, suit: SUIT.SPADE},
        {value: VALUE.KING, suit: SUIT.SPADE},
        {value: VALUE.KING, suit: SUIT.SPADE},
        {value: VALUE.JOKER, suit: SUIT.SPADE},
        {value: VALUE.JOKER, suit: SUIT.SPADE}
    ]);
    expect(handType).toBe(Poker.HAND.FIVE_OF_A_KIND);
    expect(indices).toStrictEqual([0,1,2,3,4]);
});

test('full house', () => {
    const [handType, indices] = Poker.evaluateHand([
        {value: VALUE.KING, suit: SUIT.SPADE},
        {value: VALUE.KING, suit: SUIT.HEART},
        {value: VALUE.ACE, suit: SUIT.SPADE},
        {value: VALUE.ACE, suit: SUIT.HEART},
        {value: VALUE.JOKER, suit: SUIT.JOKER}
    ]);
    expect(handType).toBe(Poker.HAND.FULL_HOUSE);
    expect(indices).toStrictEqual([0,1,4,2,3]);
});

test('flush', () => {
    const [handType, indices] = Poker.evaluateHand([
        {value: VALUE.KING, suit: SUIT.SPADE},
        {value: VALUE.TWO, suit: SUIT.SPADE},
        {value: VALUE.JOKER, suit: SUIT.JOKER},
        {value: VALUE.SEVEN, suit: SUIT.SPADE},
        {value: VALUE.JOKER, suit: SUIT.JOKER}
    ]);
    expect(handType).toBe(Poker.HAND.FLUSH);
    expect(indices).toStrictEqual([0,1,2,3,4]);
});

test('two pair', () => {
    const [handType, indices] = Poker.evaluateHand([
        {value: VALUE.KING, suit: SUIT.SPADE},
        {value: VALUE.TWO, suit: SUIT.SPADE},
        {value: VALUE.TWO, suit: SUIT.HEART},
        {value: VALUE.ACE, suit: SUIT.HEART},
        {value: VALUE.KING, suit: SUIT.HEART}
    ]);
    expect(handType).toBe(Poker.HAND.TWO_PAIR);
    expect(indices).toStrictEqual([0,4,1,2]);
});


test('low ace straight', () => {
    const [handType, indices] = Poker.evaluateHand([
        {value: VALUE.ACE, suit: SUIT.SPADE},
        {value: VALUE.TWO, suit: SUIT.SPADE},
        {value: VALUE.THREE, suit: SUIT.HEART},
        {value: VALUE.FOUR, suit: SUIT.HEART},
        {value: VALUE.FIVE, suit: SUIT.HEART}
    ]);
    expect(handType).toBe(Poker.HAND.STRAIGHT);
    expect(indices).toStrictEqual([0,1,2,3,4]);
});

test('high ace straight', () => {
    const [handType, indices] = Poker.evaluateHand([
        {value: VALUE.ACE, suit: SUIT.SPADE},
        {value: VALUE.KING, suit: SUIT.SPADE},
        {value: VALUE.QUEEN, suit: SUIT.HEART},
        {value: VALUE.JACK, suit: SUIT.HEART},
        {value: VALUE.TEN, suit: SUIT.HEART}
    ]);
    expect(handType).toBe(Poker.HAND.STRAIGHT);
    expect(indices).toStrictEqual([0,1,2,3,4]);
});