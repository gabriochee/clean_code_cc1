import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CardColor, CardHand, Card, getHighestHandScore, getSumOfHands } from "./main.ts"

describe("The function should return the sum of the highest hands of every hand", () => {
  let highestCardHand1: CardHand =
    [{ color: CardColor.Clubs, value: 2 }, { color: CardColor.Diamond, value: 7 }, { color: CardColor.Clubs, value: 4 }, { color: CardColor.Spades, value: 10 }, { color: CardColor.Clubs, value: 5 }]

  let highestCardHand2: CardHand =
    [{ color: CardColor.Clubs, value: 12 }, { color: CardColor.Diamond, value: 7 }, { color: CardColor.Clubs, value: 4 }, { color: CardColor.Spades, value: 10 }, { color: CardColor.Clubs, value: 5 }]

  it("should return the highest score of the hand", () => {
    assert.strictEqual(10, getHighestHandScore(highestCardHand1));
    assert.strictEqual(12, getHighestHandScore(highestCardHand2));
  })

  let cardHands1: CardHand[] = [
    highestCardHand1,
  ];

  let cardHands2: CardHand[] = [
    highestCardHand1,
    highestCardHand2
  ];

  it("should return the sum of the highest hands of every hand", () => {
    assert.strictEqual(10, getSumOfHands(cardHands1));
    assert.strictEqual(22, getSumOfHands(cardHands2));
  })
})
