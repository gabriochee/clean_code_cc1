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

export function getSumOfHands(cards: Card[]): number {
  return 0;
}
