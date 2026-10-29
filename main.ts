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

export function getHighestHandScore(cardHand: CardHand): number {
  let strongest: Card = cardHand[0];

  cardHand.forEach(card => {
    if (card.value > strongest.value) strongest = card;
  })

  return strongest.value;
}

export function getSumOfHands(cardHands: CardHand[]): number {
  const initialScore = 0;

  return cardHands.reduce(
    (score, currentHand) => score + getHighestHandScore(currentHand),
    initialScore
  );
}
