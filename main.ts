export enum CardColor {
  Hearts,
  Diamond,
  Clubs,
  Spades
}

export type Card = {
  value: number,
  color: CardColor
};

export type CardHand = [Card, Card, Card, Card, Card];

function getHighestHandScore(cardHand: CardHand): number {
  return 0;
}

export function getSumOfHands(cardHands: CardHand[]): number {
  return 0;
}
