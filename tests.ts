import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CardColor, CardHand, Card, getHighestHandScore, getSumOfHands } from "./main.ts"

describe("The function should return the sum of the highest hands of every hand", () => {
  let highestCardHand: CardHand =
    [{ color: CardColor.Clubs, value: 2 }, { color: CardColor.Diamond, value: 7 }, { color: CardColor.Clubs, value: 4 }, { color: CardColor.Spades, value: 10 }, { color: CardColor.Clubs, value: 5 }]

  it("should return the highest score of the hand", () => {
    assert.strictEqual(10, getHighestHandScore(highestCardHand));
  })

  let cardHands: CardHand[] = [
    highestCardHand
  ]

  it("should return the sum of the highest hands of every hand", () => {
    assert.strictEqual(10, getSumOfHands(cardHands));
  })
})
