import { CardColor, CardHand, Card, getHighestHandScore, getSumOfHands } from "./main"

describe("The function should return the sum of the highest hands of every hand", () => {
  it("should return the highest score of the hand", () => {
    let highestCardHand: CardHand =
      [{ color: CardColor.Clubs, value: 2 }, { color: CardColor.Diamond, value: 7 }, { color: CardColor.Clubs, value: 4 }, { color: CardColor.Spades, value: 10 }, { color: CardColor.Clubs, value: 5 }]

    expect(getHighestHandScore(highestCardHand)).toBe(10);
  })

  it("should return the sum of the highest hands of every hand", () => {

  })
})
