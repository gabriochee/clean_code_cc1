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

export function getSumOfHands(cards: CardHand[]): number {
  return 0;
}
