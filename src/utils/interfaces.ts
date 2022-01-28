interface CardProps {
  id: number,
  title: string,
  url: string,
  hasLike: boolean,
}

interface Card extends CardProps {
  image_id: number,
}

interface CardsState {
  cards: Array<Card>,
  filterIsOn: boolean,
}

export type { Card, CardsState, CardProps };
